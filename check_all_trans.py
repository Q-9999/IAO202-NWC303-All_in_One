import json

with open('FE-NWC/data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
with open('FE-NWC/translations.json', 'r', encoding='utf-8') as f:
    trans = json.load(f)

print(f"Total questions in data.json: {len(data)}")

# Let's inspect where options don't match the same length or semantic
issues = []
for q in data:
    qid = q['id']
    t = trans.get(qid)
    if not t:
        issues.append((qid, "Thiếu bản dịch hoàn toàn"))
        continue
    
    q_opts = q.get('options', [])
    t_opts = t.get('options', [])
    
    # Check length
    if len(q_opts) != len(t_opts):
        issues.append((qid, f"Số lượng lựa chọn lệch: EN có {len(q_opts)} lựa chọn, VI có {len(t_opts)} lựa chọn"))

print(f"Found {len(issues)} option count issues:")
for qid, err in issues:
    print(f"  [{qid}] {err}")
