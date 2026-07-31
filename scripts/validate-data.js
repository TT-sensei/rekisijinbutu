#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const context = {};
vm.createContext(context);
for (const file of ['people.js', 'questions.js', 'eras.js', 'eraQuestions.js']) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  vm.runInContext(`${source}\nthis.__loaded = {\n    PEOPLE: typeof PEOPLE === 'undefined' ? this.__loaded?.PEOPLE : PEOPLE,\n    QUESTIONS: typeof QUESTIONS === 'undefined' ? this.__loaded?.QUESTIONS : QUESTIONS,\n    HISTORY_ERAS: typeof HISTORY_ERAS === 'undefined' ? this.__loaded?.HISTORY_ERAS : HISTORY_ERAS,\n    ERA_QUESTIONS: typeof ERA_QUESTIONS === 'undefined' ? this.__loaded?.ERA_QUESTIONS : ERA_QUESTIONS\n  };`, context, { filename: file });
}
const { PEOPLE, QUESTIONS, HISTORY_ERAS, ERA_QUESTIONS } = context.__loaded;
const errors = [], warnings = [];
const duplicate = (items, label) => {
  const seen = new Set();
  for (const item of items) seen.has(item.id) ? errors.push(`${label}ID重複: ${item.id}`) : seen.add(item.id);
};
duplicate(PEOPLE, '人物'); duplicate(HISTORY_ERAS, '時代単元');
const personIds = new Set(PEOPLE.map(p => p.id));
const eraIds = new Set(HISTORY_ERAS.map(e => e.id));
const texts = new Map();
const answers = [0, 0, 0, 0];
const inspect = (questions, type) => questions.forEach((q, index) => {
  const ref = `${type}[${index}]`;
  if (type === '人物' && !personIds.has(q.personId)) errors.push(`${ref}: 存在しないpersonId ${q.personId}`);
  if (type === '時代' && !eraIds.has(q.eraId)) errors.push(`${ref}: 存在しないeraId ${q.eraId}`);
  if (!q.q || !q.q.trim()) errors.push(`${ref}: 空の問題文`);
  if (!Array.isArray(q.choices) || q.choices.length !== 4) errors.push(`${ref}: 選択肢が4つでない`);
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= (q.choices || []).length) errors.push(`${ref}: answerが範囲外`);
  else answers[q.answer]++;
  if (type === '時代' && (!q.explanation || !q.explanation.trim())) errors.push(`${ref}: 空の解説`);
  const text = (q.q || '').trim();
  if (text && texts.has(text)) warnings.push(`同一問題文: ${texts.get(text)} / ${ref}`);
  else if (text) texts.set(text, ref);
});
inspect(QUESTIONS, '人物'); inspect(ERA_QUESTIONS, '時代');
const peopleCounts = Object.fromEntries(PEOPLE.map(p => [p.id, QUESTIONS.filter(q => q.personId === p.id).length]));
const eraCounts = Object.fromEntries([...HISTORY_ERAS].sort((a,b) => a.order-b.order).map(e => [e.id, ERA_QUESTIONS.filter(q => q.eraId === e.id).length]));
for (const [id, count] of Object.entries(peopleCounts)) if (count < 5) errors.push(`人物 ${id}: ${count}問（5問未満）`);
for (const [id, count] of Object.entries(eraCounts)) if (count < 5) warnings.push(`時代単元 ${id}: ${count}問（5問未満でも実行可能）`);
const total = answers.reduce((sum, n) => sum + n, 0);
answers.forEach((count, answer) => { if (count / total > 0.4) warnings.push(`正解番号${answer}: ${count}/${total}（40%超）`); });
console.log(`人物: ${PEOPLE.length}人 / 人物問題: ${QUESTIONS.length}問`);
console.log('人物別問題数:', JSON.stringify(peopleCounts));
console.log(`時代単元: ${HISTORY_ERAS.length}単元 / 時代問題: ${ERA_QUESTIONS.length}問`);
console.log('時代単元別問題数:', JSON.stringify(eraCounts));
console.log('正解番号分布:', JSON.stringify(answers));
for (const warning of warnings) console.warn('WARN:', warning);
for (const error of errors) console.error('ERROR:', error);
if (errors.length) process.exitCode = 1;
else console.log(`OK: 致命的な不整合なし（警告 ${warnings.length}件）`);
