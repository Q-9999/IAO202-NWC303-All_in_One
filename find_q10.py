import json

with open('FE-NWC/data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
with open('FE-NWC/translations.json', 'r', encoding='utf-8') as f:
    trans = json.load(f)

for idx, q in enumerate(data):
    if 'Which value in a routing table represents trustworthiness' in q.get('question', ''):
        qid = q['id']
        print(f"Found question! idx={idx}, id={qid}, mod={q.get('module')}, num={q.get('original_num')}")
        print("Q EN:", q.get('question'))
        print("Options EN:", [o.get('text') for o in q.get('options', [])])
        print("TRANS in translations.json:")
        t = trans.get(qid, {})
        print("TRANS Q:", t.get('question'))
        print("TRANS Options:", t.get('options'))
        print("TRANS Exp:", t.get('explanation'))
