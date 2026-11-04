import json

with open('FE-NWC/data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
with open('FE-NWC/translations.json', 'r', encoding='utf-8') as f:
    trans = json.load(f)

for qid in ['m14-16_q10', 'final_q2', 'final_q26', 'final_q36']:
    q = next(x for x in data if x['id'] == qid)
    t = trans.get(qid, {})
    print(f"=== {qid} ===")
    print("EN Question:", q['question'])
    print("VI Question:", t.get('question'))
    print("EN Options:", [o.get('text') for o in q['options']])
    print("VI Options:", t.get('options'))
    print("EN Exp:", q.get('explanation', '')[:120])
    print("VI Exp:", t.get('explanation', '')[:120])
    print()
