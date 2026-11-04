import json

with open('FE-NWC/data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
with open('FE-NWC/translations.json', 'r', encoding='utf-8') as f:
    trans = json.load(f)

for qid in ['m5-6_q49', 'm7-9_q23', 'm7-9_q30', 'm7-9_q33', 'm7-9_q52', 'm7-9_q54']:
    q = next(x for x in data if x['id'] == qid)
    t = trans.get(qid, {})
    print(f"=== {qid} ===")
    print("EN Question:", q['question'])
    print("VI Question:", t.get('question'))
    print("EN Options:", [o.get('text') for o in q['options']])
    print("VI Options:", t.get('options'))
    print()
