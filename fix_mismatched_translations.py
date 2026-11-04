# -*- coding: utf-8 -*-
import json

with open('FE-NWC/translations.json', 'r', encoding='utf-8') as f:
    trans = json.load(f)

# 1. m14-16_q10 (User reported)
trans['m14-16_q10'] = {
    "question": "Giá trị nào trong bảng định tuyến đại diện cho độ tin cậy và được router sử dụng để xác định tuyến đường nào sẽ được đưa vào bảng định tuyến khi có nhiều tuyến đường khác nhau đến cùng một đích?",
    "options": [
        "Administrative distance (Khoảng cách quản trị)",
        "Metric (Độ đo chi phí tuyến đường)",
        "Giao diện đầu ra (Outgoing interface)",
        "Giao thức định tuyến (Routing protocol)"
    ],
    "explanation": "Administrative distance (AD) đại diện cho mức độ tin cậy của một tuyến đường cụ thể. Giá trị AD càng nhỏ thì tuyến đường học được càng có độ tin cậy cao. Khi router nhận được nhiều tuyến đường từ các nguồn khác nhau để đến cùng một mạng đích, router sẽ so sánh giá trị administrative distance để quyết định chọn tuyến đường có AD thấp nhất đưa vào bảng định tuyến. Metric là giá trị được một giao thức định tuyến sử dụng để so sánh chi phí giữa các tuyến đường do chính giao thức đó phát hiện. Giao diện đầu ra (outgoing interface) là cổng mạng mà router dùng để chuyển tiếp gói tin về hướng mạng đích. Giao thức định tuyến được sử dụng để trao đổi các bản cập nhật định tuyến giữa các router lân cận."
}

# 2. final_q2
trans['final_q2'] = {
    "question": "Tham khảo sơ đồ kết nối. Cấu hình hiển thị các lệnh do quản trị viên mạng nhập để định tuyến giữa các VLAN (inter-VLAN routing). Tuy nhiên, host H1 không thể giao tiếp được với host H2. Thành phần nào trong cấu hình gây ra lỗi kết nối này?",
    "options": [
        "Cấu hình đường trung kế (Trunking)",
        "Chế độ cổng trên hai cổng FastEthernet của switch",
        "Cấu hình VLAN",
        "Cấu hình cổng trên router"
    ],
    "explanation": "Mặc định tất cả các cổng trên switch Cisco đều thuộc VLAN 1. Để triển khai inter-VLAN routing, các cổng Fa0/1 và Fa0/2 trên switch SW1 phải được gán vào đúng VLAN tương ứng (VLAN 10 và VLAN 20) ở chế độ access (switchport mode access). Do chưa gán cổng vào VLAN tương ứng nên lưu lượng từ H1 và H2 không thể đi tới các subinterface trên router."
}

# 3. final_q26
trans['final_q26'] = {
    "question": "Một kỹ thuật viên đang cấu hình switch Cisco 2960 mới. Lệnh BranchSw(config)#interface VLAN88 có tác dụng gì?",
    "options": [
        "Cập nhật bảng địa chỉ MAC cho cổng liên kết.",
        "Gán một địa chỉ IPv4 cho giao diện ảo.",
        "Cho phép cấu hình địa chỉ IPv6 trên một giao diện vật lý của switch.",
        "Gán một địa chỉ IPv6 cho giao diện ảo.",
        "Chuyển vào chế độ cấu hình giao diện ảo của switch (SVI - Switch Virtual Interface)."
    ],
    "explanation": "Lệnh interface vlan <số_hiệu> đưa switch vào chế độ cấu hình giao diện ảo của switch (Switch Virtual Interface - SVI). Lệnh này được sử dụng để tạo SVI phục vụ quản trị switch từ xa hoặc định tuyến Lớp 3, chưa trực tiếp gán địa chỉ IP cho đến khi thực hiện lệnh ip address."
}

# 4. final_q36
trans['final_q36'] = {
    "question": "Tham khảo sơ đồ kết nối. Switch DLS1 kết nối với switch DLS2 qua đường trung kế (trunk). Một host kết nối vào DLS1 không thể giao tiếp với host kết nối vào DLS2 mặc dù cả hai đều thuộc VLAN 99. Cần thêm lệnh nào vào cổng Fa0/1 trên DLS1 để khắc phục sự cố?",
    "options": [
        "switchport nonegotiate",
        "switchport mode dynamic auto",
        "switchport trunk native vlan 66",
        "switchport trunk allowed vlan add 99"
    ],
    "explanation": "Khi cấu hình đường trung kế 802.1Q, Native VLAN phải đồng nhất ở cả hai đầu liên kết. Nếu bị lệch Native VLAN (Native VLAN mismatch), lưu lượng sẽ bị chặn hoặc chuyển tiếp sai. Vì cổng trunk trên DLS2 được cấu hình Native VLAN 66, nên trên cổng Fa0/1 của DLS1 cũng phải cấu hình lệnh switchport trunk native vlan 66 để khắc phục sự cố."
}

# 5. m5-6_q49
trans['m5-6_q49'] = {
    "question": "Tùy chọn cấu hình chế độ nào cho phép thiết lập liên kết EtherChannel giữa hai switch SW1 và SW2 mà không gửi lưu lượng đàm phán?",
    "options": [
        "SW1: on và SW2: on",
        "SW1: desirable và SW2: desirable",
        "SW1: auto và SW2: auto (bật trunking trên cả hai switch)",
        "SW1: auto và SW2: auto (bật PortFast trên cả hai switch)",
        "SW1: passive và SW2: active"
    ],
    "explanation": "Chế độ on ép buộc gộp cổng vật lý vào liên kết EtherChannel mà không sử dụng bất kỳ giao thức đàm phán nào (không dùng LACP hay PAgP). Cả hai đầu switch đều phải được cấu hình ở chế độ on thì liên kết mới hoạt động."
}

# 6. m7-9_q23
trans['m7-9_q23'] = {
    "question": "Trong quy trình DHCPv6 phi trạng thái (Stateless DHCPv6), máy khách gửi thông điệp nào ở bước 3?",
    "options": [
        "DHCPv6 INFORMATION-REQUEST",
        "DHCPv6 SOLICIT",
        "DHCPv6 ADVERTISE",
        "DHCPv6 REPLY"
    ],
    "explanation": "Trong Stateless DHCPv6, máy khách tự tạo địa chỉ IPv6 thông qua cơ chế SLAAC (sử dụng gói RA từ Router). Sau đó ở bước 3, máy khách gửi thông điệp DHCPv6 INFORMATION-REQUEST đến máy chủ DHCPv6 để xin các thông số cấu hình bổ sung (như địa chỉ DNS Server và Domain Name) mà không cần xin cấp địa chỉ IPv6."
}

# 7. m7-9_q30
trans['m7-9_q30'] = {
    "question": "Giao thức độc quyền nào của Cisco được thiết kế để cho phép chuyển đổi dự phòng trong suốt cho thiết bị IPv4 chặng đầu tiên (first-hop device)?",
    "options": [
        "Hot Standby Router Protocol (HSRP)",
        "Virtual Router Redundancy Protocol (VRRP)",
        "Gateway Load Balancing Protocol (GLBP)",
        "First-Hop Redundancy Protocol (FHRP)"
    ],
    "explanation": "HSRP (Hot Standby Router Protocol) là giao thức độc quyền của Cisco, cung cấp khả năng dự phòng cổng ngõ mặc định (Default Gateway) cho các thiết bị IPv4. VRRP là giao thức chuẩn mở (IETF). GLBP cũng là giao thức của Cisco nhưng tập trung vào việc cân bằng tải cổng ngõ."
}

# 8. m7-9_q33
trans['m7-9_q33'] = {
    "question": "Máy khách IPv4 phát quảng bá (broadcast) thông điệp nào để tìm kiếm các máy chủ DHCPv4 khả dụng trên mạng?",
    "options": [
        "DHCPDISCOVER",
        "DHCPOFFER",
        "DHCPREQUEST",
        "DHCPACK"
    ],
    "explanation": "Khi vừa kết nối vào mạng và chưa có địa chỉ IP, máy khách IPv4 phát quảng bá thông điệp DHCPDISCOVER (địa chỉ đích 255.255.255.255, cổng UDP 67) để tìm máy chủ DHCPv4. Máy chủ phản hồi bằng DHCPOFFER, sau đó máy khách gửi DHCPREQUEST và máy chủ xác nhận bằng DHCPACK."
}

# 9. m7-9_q52
trans['m7-9_q52'] = {
    "question": "Bộ lệnh nào sẽ cấu hình router làm máy chủ DHCP để cấp địa chỉ IPv4 cho mạng LAN 192.168.100.0/23, đồng thời dự lưu 10 địa chỉ IP đầu tiên và địa chỉ IP khả dụng cuối cùng để gán tĩnh?",
    "options": [
        "ip dhcp excluded-address 192.168.100.1 192.168.100.10\nip dhcp excluded-address 192.168.101.254\nip dhcp pool LAN-POOL-100\nnetwork 192.168.100.0 255.255.254.0\ndefault-router 192.168.100.1",
        "ip dhcp excluded-address 192.168.100.1 192.168.100.9\nip dhcp excluded-address 192.168.101.254\nip dhcp pool LAN-POOL-100\nip network 192.168.100.0 255.255.254.0\nip default-gateway 192.168.100.1",
        "dhcp pool LAN-POOL-100\nip dhcp excluded-address 192.168.100.1 192.168.100.9\nip dhcp excluded-address 192.168.100.254\nnetwork 192.168.100.0 255.255.254.0\ndefault-router 192.168.101.1",
        "ip dhcp excluded-address 192.168.100.1 192.168.100.10\nip dhcp excluded-address 192.168.100.254\nip dhcp pool LAN-POOL-100\nnetwork 192.168.100.0 255.255.255.0\nip default-gateway 192.168.100.1"
    ],
    "explanation": "Mạng 192.168.100.0/23 có subnet mask là 255.255.254.0, dải IP khả dụng từ 192.168.100.1 đến 192.168.101.254. Để loại trừ 10 địa chỉ đầu tiên (192.168.100.1 đến 192.168.100.10) và địa chỉ cuối cùng (192.168.101.254), ta dùng lệnh: ip dhcp excluded-address 192.168.100.1 192.168.100.10 và ip dhcp excluded-address 192.168.101.254. Lệnh khai báo default gateway trong DHCP pool là default-router (không phải ip default-gateway)."
}

# 10. m7-9_q54
trans['m7-9_q54'] = {
    "question": "Một công ty sử dụng phương pháp SLAAC để cấu hình địa chỉ IPv6 cho các máy trạm của nhân viên. Quản trị viên mạng đã cấu hình địa chỉ IPv6 trên cổng LAN của router và cổng đang ở trạng thái UP. Tuy nhiên, các máy trạm trong phân đoạn mạng LAN không nhận được tiền tố mạng (prefix) và độ dài tiền tố. Cần cấu hình thêm lệnh nào trên router để các máy trạm nhận được thông tin cấu hình IPv6 qua SLAAC?",
    "options": [
        "R1(config)# ipv6 unicast-routing",
        "R1(config)# ipv6 dhcp pool",
        "R1(config-if)# ipv6 enable",
        "R1(config-if)# ipv6 nd other-config-flag"
    ],
    "explanation": "Mặc định router Cisco không tự động gửi các thông điệp ICMPv6 Router Advertisement (RA) cho đến khi tính năng định tuyến IPv6 được kích hoạt bằng lệnh ipv6 unicast-routing ở chế độ toàn cục (global configuration mode). Khi lệnh này được bật, router sẽ định kỳ gửi các gói tin RA để các máy trạm nhận diện prefix mạng và tự sinh địa chỉ IPv6 qua cơ chế SLAAC."
}

# Write updated translations.json
with open('FE-NWC/translations.json', 'w', encoding='utf-8') as f:
    json.dump(trans, f, indent=2, ensure_ascii=False)

# Write updated translations.js
with open('FE-NWC/translations.js', 'w', encoding='utf-8') as f:
    f.write("window.QUESTION_TRANSLATIONS = window.TRANSLATIONS_DATA = window.QUESTIONS_TRANSLATIONS = " + json.dumps(trans, indent=2, ensure_ascii=False) + ";\n")

print("Updated FE-NWC/translations.json and translations.js successfully.")
