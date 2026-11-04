import json

with open('FE-NWC/data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
with open('FE-NWC/translations.json', 'r', encoding='utf-8') as f:
    trans = json.load(f)

print("final_q29 in data:")
q29 = next((x for x in data if x['id'] == 'final_q29'), None)
if q29:
    print("Q:", q29['question'][:100])
    print("Opts:", [o.get('text') for o in q29['options']])

print("\nfinal_q29 in trans:")
t29 = trans.get('final_q29', {})
print("Q:", t29.get('question', '')[:100])
print("Opts:", t29.get('options'))

# Now let's check ALL translations in FE-NWC to see if options count matches or if text has obvious mismatches!
mismatches = []
for q in data:
    qid = q['id']
    t = trans.get(qid)
    if not t:
        mismatches.append((qid, "No translation"))
        continue
    
    q_opts = q.get('options', [])
    t_opts = t.get('options', [])
    if len(q_opts) != len(t_opts):
        mismatches.append((qid, f"Options count mismatch: data={len(q_opts)} vs trans={len(t_opts)}"))
        
    # Check if English keywords in question relate to Vietnamese translation
    # For instance: if question asks about "administrative distance" or "trustworthiness", does translation mention "độ tin cậy" or "administrative distance"?
    # In m14-16_q10: Q mentions "trustworthiness", but translation mentions "Serial0/0/0" and "192.168.10.129"!
    
print(f"\nTotal questions: {len(data)}")
print(f"Option count mismatches: {len(mismatches)}")
for m in mismatches[:20]:
    print(m)
