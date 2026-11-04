import json
import re

with open('FE-NWC/data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
with open('FE-NWC/translations.json', 'r', encoding='utf-8') as f:
    trans = json.load(f)

flagged = []
for q in data:
    qid = q['id']
    q_en = q.get('question', '').strip().lower()
    t = trans.get(qid)
    if not t:
        continue
    q_vi = t.get('question', '').strip().lower()
    
    # Check for specific mismatches:
    # 1. Routing table text in a question that does not have routing table in EN
    if 'bộ định tuyến r2 sẽ làm gì' in q_vi and 'r2' not in q_en:
        flagged.append((qid, "Contains R2 question text but EN doesn't mention R2"))
    # 2. Check if question asks about specific protocol or concept but translation has totally different text
    if 'trustworthiness' in q_en and 'độ tin cậy' not in q_vi and 'tin cậy' not in q_vi:
        flagged.append((qid, "trustworthiness in EN but not in VI"))
    if 'dhcp' in q_en and 'dhcp' not in q_vi:
        flagged.append((qid, "dhcp in EN but not in VI"))
    if 'stp' in q_en and 'spanning tree' not in q_en and 'stp' not in q_vi and 'spanning' not in q_vi:
        flagged.append((qid, "stp in EN but not in VI"))
    if 'etherchannel' in q_en and 'etherchannel' not in q_vi and 'port-channel' not in q_vi:
        flagged.append((qid, "etherchannel in EN but not in VI"))
    if 'vlan' in q_en and 'vlan' not in q_vi:
        flagged.append((qid, "vlan in EN but not in VI"))
    if 'password' in q_en and 'mật khẩu' not in q_vi:
        flagged.append((qid, "password in EN but not in VI"))
    if 'boot' in q_en and 'khởi động' not in q_vi and 'boot' not in q_vi:
        flagged.append((qid, "boot in EN but not in VI"))

print(f"Total flagged questions: {len(flagged)}")
for qid, reason in flagged:
    q = next(x for x in data if x['id'] == qid)
    t = trans.get(qid, {})
    print(f"[{qid}] ({reason}):")
    print(f"  EN: {q['question'][:100]}")
    print(f"  VI: {t.get('question', '')[:100]}")
    print("-" * 50)
