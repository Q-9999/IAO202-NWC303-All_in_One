// CCNA 2 v7 (SRWE) - Modern Interactive Mechanism Visualizations
// Ngôn ngữ kỹ thuật chuẩn xác, basic-meaning, không ẩn dụ, không nói quá.

(function() {
  'use strict';

  window.MECHANISM_VISUALIZATIONS = {
    'vlan_tagging': {
      title: 'Cơ chế gắn thẻ 802.1Q trên đường Trunk (802.1Q VLAN Tagging)',
      badge: 'Layer 2 Switching / 802.1Q Trunking',
      summary: 'Đường truyền Trunk cho phép truyền lưu lượng của nhiều VLAN qua cùng một kết nối vật lý. Switch chèn thẻ 802.1Q (4 byte) vào tiêu đề khung Ethernet khi gửi qua cổng Trunk để switch đối diện phân biệt được VLAN ID.',
      steps: [
        {
          num: 1,
          name: 'Khởi tạo khung tại cổng Access',
          desc: 'Host A (thuộc VLAN 10) gửi khung Ethernet tiêu chuẩn (không có thẻ VLAN - Untagged) vào cổng Fa0/1 của Switch 1. Cổng này được cấu hình chế độ Access thuộc VLAN 10.',
          activeNode: 'node-pc1',
          packetLabel: 'Untagged Frame'
        },
        {
          num: 2,
          name: 'Chèn thẻ 802.1Q tại cổng Trunk',
          desc: 'Switch 1 nhận thấy đích đến cần đi qua đường Trunk (cổng Fa0/24). Switch chèn tiêu đề 802.1Q 4 byte vào ngay sau trường Source MAC của khung dữ liệu.',
          activeNode: 'node-sw1',
          packetLabel: '802.1Q Tagged (VID=10)'
        },
        {
          num: 3,
          name: 'Truyền tải qua đường Trunk',
          desc: 'Khung đã được gắn thẻ di chuyển qua cáp mạng kết nối giữa hai switch. Nếu lưu lượng thuộc Native VLAN (mặc định là VLAN 1), switch sẽ không gắn thẻ để tương thích thiết bị cũ.',
          activeNode: 'node-trunk',
          packetLabel: 'Trunk Link (VID=10)'
        },
        {
          num: 4,
          name: 'Bóc thẻ và chuyển tiếp tới đích',
          desc: 'Switch 2 nhận khung tại cổng Trunk Fa0/24, đọc trường VLAN ID (VID = 10). Switch gỡ bỏ thẻ 802.1Q và chuyển tiếp khung nguyên bản ra cổng Access Fa0/2 tới Host B.',
          activeNode: 'node-sw2',
          packetLabel: 'Untagged Frame'
        }
      ],
      nodes: [
        { id: 'node-pc1', icon: '💻', name: 'Host A', sub: 'IP: 192.168.10.10 | VLAN 10' },
        { id: 'node-sw1', icon: '🔀', name: 'Switch 1', sub: 'In: Fa0/1 | Out: Fa0/24 (Trunk)' },
        { id: 'node-sw2', icon: '🔀', name: 'Switch 2', sub: 'In: Fa0/24 (Trunk) | Out: Fa0/2' },
        { id: 'node-pc2', icon: '💻', name: 'Host B', sub: 'IP: 192.168.10.20 | VLAN 10' }
      ],
      specTable: {
        headers: ['Trường thông tin trong thẻ 802.1Q', 'Độ dài', 'Chức năng kỹ thuật'],
        rows: [
          ['TPID (Tag Protocol Identifier)', '16 bits (2 bytes)', 'Mang giá trị cố định 0x8100 để báo hiệu đây là khung có gắn thẻ 802.1Q.'],
          ['PCP / Priority (Priority Code Point)', '3 bits', 'Chỉ định mức độ ưu tiên chất lượng dịch vụ CoS (Class of Service) từ 0 đến 7.'],
          ['DEI / CFI (Drop Eligible Indicator)', '1 bit', 'Chỉ định khả năng chấp nhận hủy gói khi hàng đợi xảy ra tắc nghẽn mạng.'],
          ['VID (VLAN Identifier)', '12 bits', 'Định danh số VLAN mà khung thuộc về. Hỗ trợ từ 1 đến 4094 VLAN khả dụng.']
        ]
      },
      note: 'Quy tắc cốt lõi: Cổng Access không bao giờ gửi hoặc nhận khung có thẻ 802.1Q. Thẻ 802.1Q chỉ tồn tại khi khung di chuyển trên đường Trunk giữa các thiết bị chuyển mạch/định tuyến.'
    },

    'inter_vlan_roas': {
      title: 'Định tuyến giữa các VLAN (Router-on-a-Stick & Layer 3 Switch SVI)',
      badge: 'Network Layer / Inter-VLAN Routing',
      summary: 'Các host thuộc các VLAN khác nhau không thể trao đổi trực tiếp ở Layer 2 mà bắt buộc phải qua thiết bị Layer 3 (Router với sub-interfaces hoặc Layer 3 Switch với SVI) để định tuyến gói tin IP.',
      steps: [
        {
          num: 1,
          name: 'Host VLAN 10 gửi gói tin tới Default Gateway',
          desc: 'Host A (192.168.10.10) muốn gửi dữ liệu tới Host B (192.168.20.20). Nhận thấy khác lớp mạng, Host A gửi khung đến địa chỉ MAC của Default Gateway (192.168.10.1).',
          activeNode: 'node-pc1',
          packetLabel: 'IP: 10.10 -> 20.20'
        },
        {
          num: 2,
          name: 'Switch chuyển tiếp qua đường Trunk tới Router',
          desc: 'Switch chuyển tiếp khung đã gắn thẻ VLAN 10 qua cổng Trunk lên cổng vật lý G0/0/1 của Router.',
          activeNode: 'node-sw1',
          packetLabel: 'Trunk (VID=10)'
        },
        {
          num: 3,
          name: 'Router xử lý tại Sub-interface và định tuyến',
          desc: 'Router nhận khung tại sub-interface G0/0/1.10 (cấu hình encapsulation dot1Q 10), bóc tiêu đề L2, tra bảng định tuyến, và đóng gói lại vào VLAN 20 qua sub-interface G0/0/1.20.',
          activeNode: 'node-r1',
          packetLabel: 'Route L3: Sub-if .20'
        },
        {
          num: 4,
          name: 'Chuyển tiếp tới Host đích thuộc VLAN 20',
          desc: 'Khung gắn thẻ VLAN 20 được gửi ngược lại Switch, switch gỡ thẻ và đưa ra cổng Access VLAN 20 tới Host B (192.168.20.20).',
          activeNode: 'node-pc2',
          packetLabel: 'Delivered to Host B'
        }
      ],
      nodes: [
        { id: 'node-pc1', icon: '💻', name: 'PC1 (VLAN 10)', sub: 'IP: 192.168.10.10 | GW: .1' },
        { id: 'node-sw1', icon: '🔀', name: 'Switch L2', sub: 'Trunk G0/1 <-> Router' },
        { id: 'node-r1', icon: '🧭', name: 'Router (ROAS)', sub: 'Sub-if .10 (GW 10.1) & .20 (GW 20.1)' },
        { id: 'node-pc2', icon: '💻', name: 'PC2 (VLAN 20)', sub: 'IP: 192.168.20.20 | GW: .1' }
      ],
      specTable: {
        headers: ['Phương pháp', 'Thiết bị thực hiện', 'Ưu điểm & Nhược điểm'],
        rows: [
          ['Router-on-a-Stick', 'Router 1 cổng vật lý chia sub-interfaces', 'Tiết kiệm cổng vật lý, nhưng đường kết nối vật lý dễ trở thành nút thắt cổ chai (bottleneck).'],
          ['Layer 3 Switch SVI', 'Multilayer Switch (SVI: interface vlan X)', 'Định tuyến bằng phần cứng ASIC tốc độ cao (wire-speed), không phụ thuộc vào cáp nối ngoài.']
        ]
      },
      note: 'Quy tắc cấu hình: Lệnh encapsulation dot1Q <vlan-id> phải được thực hiện trên sub-interface của router trước khi gán địa chỉ IP.'
    },

    'stp_root_election': {
      title: 'Bầu chọn Root Bridge và các vai trò cổng trong Spanning Tree Protocol (STP)',
      badge: 'Layer 2 Redundancy / STP IEEE 802.1D',
      summary: 'STP ngăn chặn vòng lặp chuyển mạch (switching loop / broadcast storm) bằng cách xây dựng một topo mạng hình cây không vòng lặp thông qua việc bầu chọn Root Bridge và khóa các cổng dự phòng.',
      steps: [
        {
          num: 1,
          name: 'Trao đổi gói tin BPDU giữa các Switch',
          desc: 'Khi khởi động, tất cả các switch gửi gói tin BPDU (Bridge Protocol Data Unit) chứa Bridge ID (BID = Priority + MAC Address) và tự nhận mình là Root Bridge.',
          activeNode: 'node-sw1',
          packetLabel: 'BPDU Exchange'
        },
        {
          num: 2,
          name: 'Bầu chọn Root Bridge',
          desc: 'Switch có giá trị Bridge ID thấp nhất sẽ thắng và trở thành Root Bridge duy nhất trong mạng. Nếu Priority bằng nhau (mặc định 32768), switch có MAC nhỏ nhất sẽ thắng.',
          activeNode: 'node-root',
          packetLabel: 'Lowest BID = Root Bridge'
        },
        {
          num: 3,
          name: 'Xác định Root Port (RP) trên các Switch còn lại',
          desc: 'Mỗi Non-root Switch chọn ra duy nhất 1 cổng có tổng chi phí đường truyền tới Root Bridge thấp nhất (Lowest Root Path Cost) làm Root Port.',
          activeNode: 'node-sw2',
          packetLabel: 'Root Port Selected'
        },
        {
          num: 4,
          name: 'Xác định Designated Port và Alternate (Blocking) Port',
          desc: 'Mỗi đoạn mạng chọn 1 Designated Port (luôn Forwarding). Cổng còn lại trở thành Alternate Port và chuyển sang trạng thái Blocking để chặn vòng lặp.',
          activeNode: 'node-sw3',
          packetLabel: 'Blocking Loop'
        }
      ],
      nodes: [
        { id: 'node-root', icon: '👑', name: 'Switch 1 (Root)', sub: 'Priority: 24576 | MAC: 0001...' },
        { id: 'node-sw2', icon: '🔀', name: 'Switch 2 (Non-Root)', sub: 'RP: Fa0/1 | DP: Fa0/2' },
        { id: 'node-sw3', icon: '🔀', name: 'Switch 3 (Non-Root)', sub: 'RP: Fa0/1 | AP: Fa0/2 (Blocked)' }
      ],
      specTable: {
        headers: ['Trạng thái cổng STP', 'Chức năng', 'Thời gian duy trì'],
        rows: [
          ['Blocking', 'Chỉ nhận BPDU, không chuyển tiếp khung, không học địa chỉ MAC.', 'Vô thời hạn (cho đến khi mạng thay đổi).'],
          ['Listening', 'Xử lý BPDU để xác định vai trò cổng, không học MAC, không gửi dữ liệu.', '15 giây (Forward Delay).'],
          ['Learning', 'Học địa chỉ MAC vào bảng MAC table, chưa chuyển tiếp dữ liệu.', '15 giây (Forward Delay).'],
          ['Forwarding', 'Gửi và nhận dữ liệu bình thường, học địa chỉ MAC.', 'Trạng thái hoạt động bình thường.']
        ]
      },
      note: 'Quy tắc: Tất cả các cổng trên Root Bridge luôn ở trạng thái Designated Port (Forwarding), không bao giờ bị Blocking.'
    },

    'etherchannel_bundling': {
      title: 'Gộp cổng EtherChannel (LACP IEEE 802.3ad / PAgP)',
      badge: 'Link Aggregation / EtherChannel',
      summary: 'EtherChannel nhóm nhiều đường truyền Ethernet vật lý (tối đa 8 cổng hoạt động) thành một liên kết logic duy nhất (Port-Channel) giúp tăng băng thông và cung cấp khả năng chịu lỗi mà không bị STP chặn.',
      steps: [
        {
          num: 1,
          name: 'Kiểm tra tính tương thích tham số cấu hình',
          desc: 'Tất cả các cổng vật lý tham gia EtherChannel phải giống hệt nhau về: Tốc độ (Speed), Chế độ truyền dẫn (Duplex), Chế độ cổng (Access/Trunk), và Native VLAN.',
          activeNode: 'node-ports',
          packetLabel: 'Check Compatibility'
        },
        {
          num: 2,
          name: 'Đàm phán giao thức LACP / PAgP',
          desc: 'Hai đầu gửi gói tin đàm phán. Với chuẩn mở LACP: Chế độ Active chủ động gửi gói tin LACP, Passive chờ nhận. Cặp Active-Active hoặc Active-Passive sẽ tạo thành công liên kết.',
          activeNode: 'node-lacp',
          packetLabel: 'LACP Negotiation'
        },
        {
          num: 3,
          name: 'Tạo cổng logic Port-Channel',
          desc: 'Khi đàm phán thành công, giao diện ảo Port-Channel 1 được kích hoạt. Băng thông tổng hợp bằng tổng băng thông các cổng thành viên.',
          activeNode: 'node-po',
          packetLabel: 'Logical Port-Channel 1'
        },
        {
          num: 4,
          name: 'Cân bằng tải lưu lượng (Load Balancing)',
          desc: 'Switch phân bổ các luồng dữ liệu vào các đường vật lý khác nhau dựa trên thuật toán băm (Source IP, Destination IP, hoặc MAC), tránh dồn toàn bộ vào 1 cáp.',
          activeNode: 'node-lb',
          packetLabel: 'Hash Load-Balancing'
        }
      ],
      nodes: [
        { id: 'node-sw1', icon: '🔀', name: 'Switch A', sub: 'Ports: Gi0/1, Gi0/2 (LACP Active)' },
        { id: 'node-po', icon: '🔗', name: 'Port-Channel 1', sub: 'Băng thông logic: 2 Gbps' },
        { id: 'node-sw2', icon: '🔀', name: 'Switch B', sub: 'Ports: Gi0/1, Gi0/2 (LACP Active/Passive)' }
      ],
      specTable: {
        headers: ['Chế độ đầu A', 'Chế độ đầu B', 'Kết quả tạo EtherChannel'],
        rows: [
          ['Active (LACP)', 'Active (LACP)', 'Thành công (Cả hai bên đều chủ động đàm phán).'],
          ['Active (LACP)', 'Passive (LACP)', 'Thành công (Đầu Active bắt đầu gửi gói đàm phán).'],
          ['Passive (LACP)', 'Passive (LACP)', 'Thất bại (Cả hai bên đều ở chế độ thụ động chờ đợi).'],
          ['On (Manual)', 'On (Manual)', 'Thành công (Cưỡng bức gộp cổng, không dùng giao thức đàm phán).']
        ]
      },
      note: 'Lưu ý: Chế độ On không trao đổi gói tin đàm phán, nếu cấu hình sai tham số ở một đầu có thể dẫn đến vòng lặp Layer 2.'
    },

    'dhcpv4_dora': {
      title: 'Quy trình cấp phát địa chỉ IP qua DHCPv4 (Tiến trình DORA)',
      badge: 'IP Services / DHCPv4 & Relay Agent',
      summary: 'DHCPv4 tự động gán địa chỉ IP, Subnet Mask, Default Gateway và DNS cho thiết bị đầu cuối thông qua tiến trình 4 bước bắt tay DORA (Discover, Offer, Request, Acknowledge).',
      steps: [
        {
          num: 1,
          name: '1. DHCPDISCOVER (Client -> Mạng)',
          desc: 'Client chưa có IP gửi gói tin Broadcast (Src: 0.0.0.0, Dst: 255.255.255.255, UDP port 67) để tìm kiếm máy chủ DHCP khả dụng trong mạng.',
          activeNode: 'node-client',
          packetLabel: 'DISCOVER (Broadcast)'
        },
        {
          num: 2,
          name: '2. DHCPOFFER (Server -> Client)',
          desc: 'Máy chủ DHCP nhận được Discover và phản hồi gói tin Offer đề xuất một địa chỉ IP (ví dụ 192.168.1.100), kèm thời gian thuê (lease time) và cấu hình mạng.',
          activeNode: 'node-server',
          packetLabel: 'OFFER (IP: 192.168.1.100)'
        },
        {
          num: 3,
          name: '3. DHCPREQUEST (Client -> Server)',
          desc: 'Client chọn địa chỉ đề xuất và gửi Broadcast gói tin Request thông báo chính thức chấp nhận thuê địa chỉ IP từ Server cụ thể này.',
          activeNode: 'node-client',
          packetLabel: 'REQUEST (Accept Offer)'
        },
        {
          num: 4,
          name: '4. DHCPACK (Server -> Client)',
          desc: 'Server phản hồi gói tin Acknowledge xác nhận hoàn tất việc cấp phát. Client cấu hình IP và bắt đầu hoạt động trên mạng.',
          activeNode: 'node-server',
          packetLabel: 'ACK (Lease Confirmed)'
        }
      ],
      nodes: [
        { id: 'node-client', icon: '💻', name: 'DHCP Client', sub: 'Chưa có IP -> 192.168.1.100' },
        { id: 'node-sw', icon: '🔀', name: 'Switch (L2)', sub: 'Chuyển tiếp Broadcast' },
        { id: 'node-server', icon: '🖥️', name: 'DHCP Server', sub: 'IP: 192.168.1.1 | Pool 1.0/24' }
      ],
      specTable: {
        headers: ['Bước trong DORA', 'Bản tin', 'Cổng UDP', 'Kiểu truyền tin'],
        rows: [
          ['Bước 1', 'DHCPDISCOVER', 'Client 68 -> Server 67', 'Broadcast (255.255.255.255)'],
          ['Bước 2', 'DHCPOFFER', 'Server 67 -> Client 68', 'Unicast hoặc Broadcast'],
          ['Bước 3', 'DHCPREQUEST', 'Client 68 -> Server 67', 'Broadcast (thông báo toàn mạng)'],
          ['Bước 4', 'DHCPACK', 'Server 67 -> Client 68', 'Unicast hoặc Broadcast']
        ]
      },
      note: 'Lưu ý Router: Router chặn gói tin Broadcast. Nếu DHCP Server nằm ở mạng khác, cần cấu hình lệnh "ip helper-address <ip-server>" trên cổng router để chuyển Broadcast thành Unicast (DHCP Relay Agent).'
    },

    'fhrp_hsrp': {
      title: 'Dự phòng cổng ngõ mặc định HSRP (Hot Standby Router Protocol)',
      badge: 'First Hop Redundancy / HSRP Cisco',
      summary: 'HSRP gán một địa chỉ IP ảo và địa chỉ MAC ảo đại diện cho Default Gateway. Thiết bị Active Router sẽ xử lý lưu lượng thực tế, khi Active gặp sự cố, Standby Router sẽ tự động tiếp quản trong vài giây.',
      steps: [
        {
          num: 1,
          name: 'Cấu hình Virtual Gateway',
          desc: 'Cả hai Router R1 và R2 được gán cùng nhóm HSRP và chung địa chỉ IP ảo (Virtual IP: 192.168.1.1, Virtual MAC: 0000.0c07.ac01).',
          activeNode: 'node-vip',
          packetLabel: 'Virtual IP 192.168.1.1'
        },
        {
          num: 2,
          name: 'Bầu chọn Active và Standby qua Hello Packet',
          desc: 'R1 có độ ưu tiên (Priority 150) cao hơn R2 (Priority 100) nên thắng cử làm Active Router. R2 trở thành Standby Router.',
          activeNode: 'node-r1',
          packetLabel: 'Active (Priority 150)'
        },
        {
          num: 3,
          name: 'Định tuyến lưu lượng bình thường',
          desc: 'PC gửi gói tin ra Gateway 192.168.1.1. R1 phản hồi ARP bằng MAC ảo và chuyển tiếp dữ liệu ra Internet.',
          activeNode: 'node-r1',
          packetLabel: 'Traffic -> R1 -> WAN'
        },
        {
          num: 4,
          name: 'Tự động chuyển đổi khi Active gặp sự cố (Failover)',
          desc: 'Nếu R1 đứt kết nối và ngừng gửi gói tin Hello trong 10 giây (Holdtime), R2 sẽ lập tức chuyển từ Standby thành Active và tiếp quản chuyển tiếp dữ liệu mà người dùng không bị mất mạng.',
          activeNode: 'node-r2',
          packetLabel: 'R2 Becomes Active'
        }
      ],
      nodes: [
        { id: 'node-pc', icon: '💻', name: 'Client PC', sub: 'Default GW: 192.168.1.1' },
        { id: 'node-r1', icon: '🧭', name: 'Router R1 (Active)', sub: 'IP: 192.168.1.2 | Priority: 150' },
        { id: 'node-r2', icon: '🧭', name: 'Router R2 (Standby)', sub: 'IP: 192.168.1.3 | Priority: 100' },
        { id: 'node-vip', icon: '☁️', name: 'Virtual Router', sub: 'IP: 192.168.1.1 | MAC: 0000.0c07.ac01' }
      ],
      specTable: {
        headers: ['Thuộc tính HSRP', 'Giá trị mặc định', 'Mô tả kỹ thuật'],
        rows: [
          ['Priority mặc định', '100', 'Khoảng giá trị 1-255. Giá trị cao hơn sẽ được chọn làm Active Router.'],
          ['Hello Timer / Hold Timer', '3 giây / 10 giây', 'Nếu quá 10 giây không nhận được Hello từ Active, Standby sẽ tiếp quản.'],
          ['Virtual MAC HSRPv1', '0000.0c07.acXX', 'XX là số nhóm HSRP dưới dạng hệ thập lục phân (hex).'],
          ['Tính năng Preempt', 'Tắt (Disabled)', 'Cho phép router có priority cao hơn tự động lấy lại quyền Active khi khởi động lại.']
        ]
      },
      note: 'Lưu ý kỹ thuật: Lệnh "standby <group> preempt" là bắt buộc nếu muốn router chính khôi phục vai trò Active sau khi sửa xong sự cố.'
    },

    'l2_security_defense': {
      title: 'Bảo mật chuyển mạch Layer 2: Port Security, DHCP Snooping & DAI',
      badge: 'Layer 2 Security & Threat Mitigation',
      summary: 'Các biện pháp phòng thủ Layer 2 bảo vệ hạ tầng mạng khỏi các cuộc tấn công phổ biến: cạn kiệt bảng MAC (MAC Flooding), máy chủ DHCP giả mạo (Rogue DHCP) và đầu độc bảng ARP (ARP Spoofing).',
      steps: [
        {
          num: 1,
          name: 'Port Security: Giới hạn địa chỉ MAC',
          desc: 'Cổng switch chỉ cho phép số lượng địa chỉ MAC xác định (ví dụ tối đa 1 MAC hợp lệ). Tùy chọn Sticky MAC tự động lưu địa chỉ MAC vào file cấu hình đang chạy.',
          activeNode: 'node-psec',
          packetLabel: 'MAC Filtering'
        },
        {
          num: 2,
          name: 'Xử lý vi phạm Port Security (Violation Modes)',
          desc: 'Khi phát hiện MAC lạ cắm vào: Chế độ Shutdown tắt cổng ngay lập tức (err-disabled), Restrict chặn gói tin và gửi cảnh báo SNMP, Protect chỉ âm thầm loại bỏ gói.',
          activeNode: 'node-violation',
          packetLabel: 'Violation Trigger'
        },
        {
          num: 3,
          name: 'DHCP Snooping: Phân biệt cổng Trusted và Untrusted',
          desc: 'Cổng nối tới DHCP Server được đặt là Trusted. Các cổng cắm người dùng là Untrusted. Switch tự chặn các gói tin DHCPOFFER phát sinh từ cổng Untrusted để triệt tiêu Rogue DHCP Server.',
          activeNode: 'node-snooping',
          packetLabel: 'Block Rogue DHCP'
        },
        {
          num: 4,
          name: 'Dynamic ARP Inspection (DAI): Kiểm tra tính hợp lệ của ARP',
          desc: 'Switch chặn các gói tin ARP Reply giả mạo bằng cách đối chiếu thông tin IP-MAC với bảng cơ sở dữ liệu DHCP Snooping Binding Table. Gói ARP không khớp sẽ bị hủy bỏ.',
          activeNode: 'node-dai',
          packetLabel: 'Drop Fake ARP'
        }
      ],
      nodes: [
        { id: 'node-pc', icon: '💻', name: 'User Host', sub: 'Port Fa0/1: Untrusted' },
        { id: 'node-sw', icon: '🛡️', name: 'Switch L2 (Security Enabled)', sub: 'Port Security + Snooping + DAI' },
        { id: 'node-dhcp', icon: '🖥️', name: 'Legit DHCP Server', sub: 'Port Fa0/24: Trusted' }
      ],
      specTable: {
        headers: ['Cơ chế phòng thủ', 'Mục tiêu tấn công ngăn chặn', 'Biện pháp kỹ thuật'],
        rows: [
          ['Port Security', 'MAC Address Flooding (CAM Table Overflow)', 'Giới hạn số MAC trên cổng, chuyển cổng về err-disabled khi vi phạm.'],
          ['DHCP Snooping', 'DHCP Starvation & Rogue DHCP Server', 'Tạo bảng Binding Table, chỉ cho phép DHCP Server phản hồi trên cổng Trusted.'],
          ['Dynamic ARP Inspection', 'ARP Spoofing / ARP Poisoning / Man-in-the-Middle', 'Đối chiếu ARP với DHCP Snooping binding table, hủy gói ARP giả mạo.']
        ]
      },
      note: 'Quy tắc triển khai: Dynamic ARP Inspection (DAI) bắt buộc phải dựa trên bảng dữ liệu của DHCP Snooping để xác thực tính hợp lệ của gói tin ARP.'
    },

    'routing_lpm_static': {
      title: 'Nguyên lý chọn tuyến: Longest Prefix Match & Floating Static Route',
      badge: 'Routing Concepts & Administrative Distance',
      summary: 'Router luôn ưu tiên chuyển tiếp gói tin theo tuyến đường có tiền tố mạng khớp dài nhất (Longest Prefix Match). Khi có nhiều đường trùng tiền tố, Router so sánh Administrative Distance (AD) để chọn đường đưa vào Routing Table.',
      steps: [
        {
          num: 1,
          name: 'Nhận gói tin IP và xác định IP đích',
          desc: 'Router nhận gói tin có địa chỉ IP đích là 192.168.1.155.',
          activeNode: 'node-pkt',
          packetLabel: 'Dst IP: 192.168.1.155'
        },
        {
          num: 2,
          name: 'So sánh độ dài Prefix (Longest Prefix Match)',
          desc: 'Router so sánh với bảng định tuyến: Tuyến /28 (192.168.1.144/28) khớp 28 bit, tuyến /24 (192.168.1.0/24) khớp 24 bit, default route /0 khớp 0 bit. Tuyến /28 có prefix dài nhất nên được chọn.',
          activeNode: 'node-table',
          packetLabel: 'Pick /28 (Longest)'
        },
        {
          num: 3,
          name: 'Vai trò của Administrative Distance (AD)',
          desc: 'AD đo lường độ tin cậy của nguồn định tuyến. Giá trị AD càng nhỏ càng đáng tin cậy. Ví dụ: Tuyến tĩnh (AD = 1) được ưu tiên hơn OSPF (AD = 110) và RIP (AD = 120).',
          activeNode: 'node-ad',
          packetLabel: 'Lowest AD Wins'
        },
        {
          num: 4,
          name: 'Tuyến tĩnh dự phòng (Floating Static Route)',
          desc: 'Cấu hình tuyến tĩnh phụ với AD cao hơn tuyến chính (ví dụ "ip route 0.0.0.0 0.0.0.0 10.1.1.2 5"). Khi đường chính gặp sự cố, tuyến dự phòng lập tức xuất hiện trong bảng định tuyến.',
          activeNode: 'node-float',
          packetLabel: 'Backup Active on Failure'
        }
      ],
      nodes: [
        { id: 'node-in', icon: '💻', name: 'Ingress Packet', sub: 'Target: 192.168.1.155' },
        { id: 'node-r', icon: '🧭', name: 'Core Router', sub: 'Tra cứu Routing Table' },
        { id: 'node-out', icon: '🌐', name: 'Next Hop', sub: 'Next-hop của tuyến /28' }
      ],
      specTable: {
        headers: ['Nguồn định tuyến', 'Administrative Distance (AD) chuẩn', 'Đặc điểm'],
        rows: [
          ['Connected Interface', '0', 'Mạng kết nối trực tiếp vào cổng router.'],
          ['Static Route', '1', 'Tuyến tĩnh cấu hình thủ công.'],
          ['EIGRP Internal', '90', 'Giao thức định tuyến động nâng cao của Cisco.'],
          ['OSPF', '110', 'Giao thức định tuyến chuẩn mở dạng Link-State.'],
          ['RIP', '120', 'Giao thức định tuyến dạng Distance-Vector.'],
          ['Floating Static Route', 'Ví dụ 5 hoặc 115', 'Tuyến tĩnh dự phòng, chỉ kích hoạt khi tuyến chính đứt.']
        ]
      },
      note: 'Nguyên tắc vàng: Tiền tố dài nhất (Longest Prefix Match) luôn được ưu tiên trước tiên. Administrative Distance chỉ được xét đến khi có 2 giao thức khác nhau cung cấp tuyến đường tới cùng một mạng với cùng độ dài prefix.'
    }
  };

  // Dynamic keyword mapping for all questions in NWC
  window.QUESTION_VISUAL_MAP = {
    "final_q1": "inter_vlan_roas",
    "final_q2": "inter_vlan_roas",
    "final_q3": "inter_vlan_roas",
    "final_q8": "routing_lpm_static",
    "final_q18": "fhrp_hsrp",
    "final_q21": "dhcpv4_dora",
    "final_q22": "stp_root_election",
    "final_q29": "routing_lpm_static",
    "final_q30": "routing_lpm_static",
    "final_q34": "etherchannel_bundling",
    "final_q35": "etherchannel_bundling",
    "final_q37": "vlan_tagging",
    "final_q38": "vlan_tagging",
    "final_q41": "dhcpv4_dora",
    "final_q44": "l2_security_defense",
    "final_q45": "l2_security_defense",
    "final_q46": "l2_security_defense",
    "final_q47": "l2_security_defense"
  };

  if (window.EXAM_DATA && Array.isArray(window.EXAM_DATA)) {
    window.EXAM_DATA.forEach(q => {
      if (window.QUESTION_VISUAL_MAP[q.id]) return;
      const text = ((q.question || '') + ' ' + (q.explanation || '')).toLowerCase();
      if (text.includes('802.1q') || text.includes('vlan tag') || text.includes('trunk link') || text.includes('native vlan')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'vlan_tagging';
      } else if (text.includes('router-on-a-stick') || text.includes('subinterface') || text.includes('inter-vlan') || text.includes('svi')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'inter_vlan_roas';
      } else if (text.includes('root bridge') || text.includes('bridge id') || text.includes('path cost') || text.includes('spanning tree')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'stp_root_election';
      } else if (text.includes('etherchannel') || text.includes('lacp') || text.includes('pagp') || text.includes('port-channel')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'etherchannel_bundling';
      } else if (text.includes('dhcpdiscover') || text.includes('dhcpack') || text.includes('dora') || text.includes('ip helper-address')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'dhcpv4_dora';
      } else if (text.includes('hsrp') || text.includes('vrrp') || text.includes('glbp') || text.includes('virtual router')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'fhrp_hsrp';
      } else if (text.includes('port security') || text.includes('dhcp snooping') || text.includes('dynamic arp inspection') || text.includes('err-disabled')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'l2_security_defense';
      } else if (text.includes('floating static') || text.includes('administrative distance') || text.includes('longest match') || text.includes('default static')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'routing_lpm_static';
      }
    });
  }

})();
