// Cisco CyberOps Associate (200-201 CBROPS) - Modern Interactive Mechanism Visualizations
// Ngôn ngữ kỹ thuật chuẩn xác, basic-meaning, không ẩn dụ, không nói quá.

(function() {
  'use strict';

  window.MECHANISM_VISUALIZATIONS = {
    'span_mirror': {
      title: 'Mô phỏng cơ chế giám sát cổng Cisco SPAN (Switched Port Analyzer)',
      badge: 'Network Monitoring & Analysis / Port Mirroring',
      summary: 'Switch hoạt động ở Layer 2 dựa vào bảng MAC để chuyển tiếp khung tin riêng biệt giữa cổng nguồn và cổng đích. Thiết bị phân tích mạng (IDS / Wireshark) cắm ở cổng khác sẽ không nhận được lưu lượng này. Tính năng SPAN giải quyết bằng cách nhân bản (copy) gói tin từ cổng nguồn gửi tới cổng giám sát.',
      steps: [
        {
          num: 1,
          name: 'Host A truyền dữ liệu tới Server',
          desc: 'Host A (cắm tại cổng Fa0/1) gửi luồng dữ liệu bình thường tới Server (cắm tại cổng Fa0/2).',
          activeNode: 'node-src',
          packetLabel: 'Original Frame'
        },
        {
          num: 2,
          name: 'Switch chuyển tiếp luồng chính',
          desc: 'Switch chuyển tiếp khung dữ liệu nguyên bản ra cổng Fa0/2 tới Server mà không gây trễ hay ảnh hưởng phiên làm việc.',
          activeNode: 'node-dst',
          packetLabel: 'Normal Switching'
        },
        {
          num: 3,
          name: 'Cơ chế SPAN sao chép bản sao',
          desc: 'Tiến trình SPAN trên switch tạo một bản sao độc lập của khung tin từ cổng nguồn (Source Port: Fa0/1).',
          activeNode: 'node-sw',
          packetLabel: 'Replication'
        },
        {
          num: 4,
          name: 'Chuyển bản sao tới Cổng giám sát (Destination Port)',
          desc: 'Switch gửi bản sao ra cổng Fa0/24 (cổng Destination SPAN nối với máy phân tích Wireshark hoặc thiết bị NIDS). Cổng này chỉ nhận dữ liệu để giám sát.',
          activeNode: 'node-mon',
          packetLabel: 'Mirrored Copy -> IDS'
        }
      ],
      nodes: [
        { id: 'node-src', icon: '💻', name: 'Host A (Source)', sub: 'Port Fa0/1' },
        { id: 'node-sw', icon: '🔀', name: 'Cisco Switch (SPAN)', sub: 'Monitor Session 1' },
        { id: 'node-dst', icon: '🖥️', name: 'Server (Destination)', sub: 'Port Fa0/2' },
        { id: 'node-mon', icon: '🛡️', name: 'Wireshark / NIDS', sub: 'SPAN Port Fa0/24' }
      ],
      specTable: {
        headers: ['Khái niệm trong Cisco SPAN', 'Đặc điểm kỹ thuật', 'Lưu ý thực tế'],
        rows: [
          ['Source Port (Monitored Port)', 'Cổng switch có lưu lượng cần giám sát (Inbound, Outbound hoặc cả hai).', 'Có thể cấu hình nhiều cổng nguồn trong một phiên SPAN.'],
          ['Destination Port (Monitoring Port)', 'Cổng nối trực tiếp tới máy phân tích Wireshark hoặc cảm biến NIDS.', 'Không tham gia chuyển mạch thông thường, không gửi dữ liệu người dùng.'],
          ['RSPAN (Remote SPAN)', 'Mở rộng tính năng SPAN qua mạng VLAN riêng biệt giữa nhiều switch.', 'Yêu cầu cấu hình RSPAN VLAN chuyên dụng.'],
          ['ERSPAN (Encapsulated RSPAN)', 'Đóng gói lưu lượng giám sát vào tiêu đề GRE (IP Protocol 47).', 'Cho phép truyền lưu lượng phân tích qua mạng Layer 3 Routed Network.']
        ]
      },
      note: 'Quy tắc kỹ thuật: Cổng đích của SPAN (Destination Port) sẽ bị vô hiệu hóa các giao thức Layer 2 thông thường (như STP, CDP, DTP) để tránh gửi gói tin ngược vào mạng gây sai lệch kết quả giám sát.'
    },

    'netflow_meta': {
      title: 'Kiến trúc thu thập và phân tích lưu lượng NetFlow / IPFIX',
      badge: 'Telemetry & Anomaly Detection / NetFlow v5/v9/IPFIX',
      summary: 'NetFlow không lưu lại toàn bộ nội dung gói tin (payload) mà trích xuất siêu dữ liệu (metadata) của các luồng thông tin (flow) dựa trên 7 thuộc tính nhận dạng, giúp giám sát lưu lượng mạng trên quy mô lớn với chi phí tài nguyên thấp.',
      steps: [
        {
          num: 1,
          name: 'Gói tin đi vào giao diện mạng của Router',
          desc: 'Router nhận gói tin IP tại cổng mạng Ingress và trích xuất các trường thông tin tiêu đề.',
          activeNode: 'node-ingress',
          packetLabel: 'Incoming Packet'
        },
        {
          num: 2,
          name: 'Kiểm tra và cập nhật NetFlow Cache',
          desc: 'Router đối chiếu 7 thuộc tính nhận dạng luồng. Nếu là luồng đã có, bộ đếm số gói và số byte được tăng lên; nếu là luồng mới, một bản ghi flow mới được tạo trong bộ nhớ đệm (Cache).',
          activeNode: 'node-cache',
          packetLabel: 'Cache Check'
        },
        {
          num: 3,
          name: 'Kết thúc luồng (Flow Inactivity / Active Timeout)',
          desc: 'Luồng kết thúc khi gặp cờ FIN/RST của TCP, hoặc hết thời gian chờ không có gói mới (Inactivity Timeout mặc định 15 giây), hoặc vượt quá thời gian duy trì tối đa (Active Timeout mặc định 30 phút).',
          activeNode: 'node-timer',
          packetLabel: 'Timeout Expiry'
        },
        {
          num: 4,
          name: 'Xuất bản ghi tới NetFlow Collector (Export)',
          desc: 'Router đóng gói các bản ghi flow thành bản tin NetFlow Export (UDP port 2055 hoặc 9995) và gửi về máy chủ phân tích NetFlow Collector / SIEM.',
          activeNode: 'node-col',
          packetLabel: 'Export to Collector'
        }
      ],
      nodes: [
        { id: 'node-src', icon: '💻', name: 'Sender Host', sub: 'IP: 10.0.1.50 | Port: 54321' },
        { id: 'node-r', icon: '🧭', name: 'NetFlow Router', sub: 'NetFlow Cache Table' },
        { id: 'node-col', icon: '📊', name: 'NetFlow Collector', sub: 'IP: 10.0.100.10 | UDP 2055' }
      ],
      specTable: {
        headers: ['Thuộc tính tạo nên 1 Flow (7-tuple)', 'Ví dụ thực tế', 'Ý nghĩa'],
        rows: [
          ['1. Source IP Address', '192.168.1.100', 'Địa chỉ nguồn của bên phát sinh kết nối.'],
          ['2. Destination IP Address', '203.0.113.25', 'Địa chỉ đích của bên nhận.'],
          ['3. Source Port', 'TCP 52140', 'Cổng dịch vụ bên nguồn.'],
          ['4. Destination Port', 'TCP 443 (HTTPS)', 'Cổng dịch vụ bên đích.'],
          ['5. Layer 3 Protocol Type', 'Protocol 6 (TCP)', 'Giao thức tầng vận chuyển (TCP, UDP, ICMP).'],
          ['6. Ingress Interface', 'GigabitEthernet0/0/1', 'Giao diện cổng mạng vật lý nơi gói tin đi vào.'],
          ['7. IP ToS / DSCP', '0x00 (Best Effort)', 'Trường phân loại ưu tiên chất lượng dịch vụ QoS.']
        ]
      },
      note: 'Điểm khác biệt cốt lõi: NetFlow cung cấp thông tin "Ai đã giao tiếp với Ai, vào lúc nào, dùng giao thức gì, dung lượng bao nhiêu" (Metadata) chứ không cung cấp nội dung bức thư (Payload).'
    },

    'dns_tunneling': {
      title: 'Cơ chế tấn công trích xuất dữ liệu qua DNS Tunneling',
      badge: 'Threats & Attacks / Covert Channel Data Exfiltration',
      summary: 'DNS Tunneling lợi dụng cổng UDP 53 của giao thức DNS (thường được các tường lửa cho phép đi qua tự do) để truyền lén dữ liệu đã mã hóa ra ngoài mạng hoặc thiết lập kênh điều khiển từ xa C2.',
      steps: [
        {
          num: 1,
          name: 'Mã hóa dữ liệu đánh cắp tại máy nạn nhân',
          desc: 'Mã độc trên máy nạn nhân chia nhỏ dữ liệu nhạy cảm (mật khẩu, tài liệu) và mã hóa dưới dạng chuỗi Base32 hoặc Hex (ví dụ: "70617373776f7264").',
          activeNode: 'node-victim',
          packetLabel: 'Encoded Payload'
        },
        {
          num: 2,
          name: 'Gắn dữ liệu vào truy vấn DNS (Query Subdomain)',
          desc: 'Mã độc tạo truy vấn tên miền: "70617373776f7264.attacker-controlled-domain.com" và gửi tới DNS Server nội bộ của doanh nghiệp.',
          activeNode: 'node-localdns',
          packetLabel: 'DNS Query (TXT/A)'
        },
        {
          num: 3,
          name: 'DNS nội bộ đệ trình lên Internet',
          desc: 'Vì máy chủ DNS nội bộ không có bản ghi cho tên miền này, nó gửi truy vấn ra ngoài Internet đến máy chủ Authoritative Name Server của kẻ tấn công.',
          activeNode: 'node-attacker',
          packetLabel: 'Recursive Resolution'
        },
        {
          num: 4,
          name: 'Kẻ tấn công thu nhận và giải mã dữ liệu',
          desc: 'Máy chủ DNS của kẻ tấn công nhận được truy vấn, trích xuất phần tiền tố subdomain và giải mã thu về dữ liệu gốc. Kẻ tấn công phản hồi lại bản tin TXT chứa lệnh tiếp theo.',
          activeNode: 'node-attacker',
          packetLabel: 'Decoded Secret'
        }
      ],
      nodes: [
        { id: 'node-victim', icon: '💻', name: 'Infected Host', sub: 'Payload: 7061737377...' },
        { id: 'node-localdns', icon: '🏢', name: 'Internal DNS Server', sub: 'Forwarding UDP 53' },
        { id: 'node-attacker', icon: '☠️', name: 'Attacker DNS (C2)', sub: 'NS: attacker-domain.com' }
      ],
      specTable: {
        headers: ['Đặc điểm nhận diện DNS Tunneling', 'Chỉ số bình thường', 'Dấu hiệu bất thường (Tunneling)'],
        rows: [
          ['Độ dài nhãn Subdomain', 'Ngắn (dưới 15 ký tự)', 'Rất dài (trên 50-60 ký tự, nhiều chuỗi mã hóa ngẫu nhiên).'],
          ['Tần suất truy vấn tới 1 domain', 'Thấp (1 vài lần)', 'Rất cao và liên tục theo chu kỳ.'],
          ['Loại bản ghi DNS truy vấn', 'Chủ yếu bản ghi A / AAAA', 'Xuất hiện tỷ lệ bất thường bản ghi TXT và NULL.'],
          ['Độ đo entropy (tính ngẫu nhiên)', 'Thấp (từ ngữ tiếng Anh)', 'Cao (chuỗi ký tự ngẫu nhiên sau khi mã hóa Base64/Base32).']
        ]
      },
      note: 'Biện pháp phòng thủ: Cấu hình DNS Sinkholing, giới hạn độ dài chuỗi truy vấn DNS và sử dụng bộ lọc DNS Security (như Cisco Umbrella) để ngăn chặn truy vấn tới các tên miền độc hại.'
    },

    'stateful_firewall': {
      title: 'Tường lửa theo dõi trạng thái phiên (Stateful Inspection Firewall)',
      badge: 'Network Defense / Stateful vs Stateless Filtering',
      summary: 'Khác với bộ lọc tĩnh (Stateless ACL) chỉ kiểm tra từng gói tin đơn lẻ, tường lửa Stateful theo dõi toàn bộ trạng thái vòng đời của kết nối (TCP Handshake) trong bảng State Table để tự động cho phép gói tin phản hồi hợp lệ quay trở lại.',
      steps: [
        {
          num: 1,
          name: 'Khởi tạo kết nối: Gói TCP SYN đi ra ngoài (Outbound)',
          desc: 'Client nội bộ (192.168.1.50:50000) gửi gói TCP SYN tới Web Server (203.0.113.10:443).',
          activeNode: 'node-client',
          packetLabel: 'TCP SYN'
        },
        {
          num: 2,
          name: 'Tường lửa kiểm tra Rule và tạo bản ghi State Table',
          desc: 'Tường lửa kiểm tra chính sách Outbound cho phép. Nó ghi lại thông tin phiên (Src IP, Dst IP, Src Port, Dst Port, Sequence Number, State = SYN_SENT) vào bảng trạng thái (State Table).',
          activeNode: 'node-fw',
          packetLabel: 'Record in State Table'
        },
        {
          num: 3,
          name: 'Web Server phản hồi gói tin TCP SYN-ACK (Inbound)',
          desc: 'Web Server gửi gói TCP SYN-ACK phản hồi về cho Client.',
          activeNode: 'node-server',
          packetLabel: 'TCP SYN-ACK'
        },
        {
          num: 4,
          name: 'Tường lửa đối chiếu State Table và cho phép đi qua',
          desc: 'Tường lửa nhận gói SYN-ACK tại cổng Inbound. Nó đối chiếu với bảng State Table thấy khớp phiên hợp lệ đã khởi tạo từ trước nên tự động cho qua mà không cần mở rule tĩnh nguy hiểm ở cổng vào.',
          activeNode: 'node-client',
          packetLabel: 'State Matched: Permitted'
        }
      ],
      nodes: [
        { id: 'node-client', icon: '💻', name: 'Internal Client', sub: '192.168.1.50:50000 (Inside)' },
        { id: 'node-fw', icon: '🧱', name: 'Stateful Firewall', sub: 'State Table Active' },
        { id: 'node-server', icon: '🌐', name: 'External Web Server', sub: '203.0.113.10:443 (Outside)' }
      ],
      specTable: {
        headers: ['Tiêu chí so sánh', 'Stateless Packet Filtering (ACL)', 'Stateful Inspection Firewall'],
        rows: [
          ['Cách kiểm tra gói tin', 'Kiểm tra độc lập từng gói dựa trên tiêu đề L3/L4.', 'Kiểm tra gói tin trong ngữ cảnh của toàn bộ phiên kết nối.'],
          ['Xử lý luồng phản hồi', 'Phải mở sẵn cổng chiều vào (Inbound), tạo kẽ hở an ninh.', 'Tự động cho phép luồng phản hồi hợp lệ dựa trên State Table.'],
          ['Khả năng chống tấn công', 'Dễ bị vượt qua bởi các gói tin giả mạo cờ ACK/SYN.', 'Phát hiện và ngăn chặn gói tin không theo đúng trình tự bắt tay.'],
          ['Tải tài nguyên', 'Tải CPU và RAM rất thấp.', 'Tiêu tốn bộ nhớ RAM để duy trì bảng State Table.']
        ]
      },
      note: 'Quy tắc an ninh: Stateful Firewall chỉ cho phép lưu lượng từ bên ngoài đi vào nếu lưu lượng đó là phản hồi cho một phiên làm việc hợp lệ đã được khởi xướng từ mạng nội bộ bên trong.'
    },

    'crypto_asym_sym': {
      title: 'Mã hóa đối xứng (Symmetric) kết hợp bất đối xứng (Asymmetric) trong SSL/TLS',
      badge: 'Cryptography & Endpoint Protection / Hybrid Encryption',
      summary: 'Mã hóa bất đối xứng (Public/Private Key) có tốc độ chậm nhưng giải quyết được bài toán trao đổi khóa an toàn. Mã hóa đối xứng (AES) có tốc độ rất nhanh. Hệ thống hiện đại kết hợp cả hai để tối ưu hiệu năng và bảo mật.',
      steps: [
        {
          num: 1,
          name: 'Bắt tay TLS & Trao đổi chứng chỉ số',
          desc: 'Client kết nối tới Server. Server gửi chứng chỉ số X.509 chứa Public Key của Server (được Certificate Authority ký duyệt).',
          activeNode: 'node-cert',
          packetLabel: 'Server Public Key'
        },
        {
          num: 2,
          name: 'Client tạo khóa phiên đối xứng (Pre-Master Secret)',
          desc: 'Client tự sinh ngẫu nhiên một khóa phiên bí mật (Session Key dùng cho thuật toán đối xứng AES-256).',
          activeNode: 'node-client',
          packetLabel: 'Generate AES Session Key'
        },
        {
          num: 3,
          name: 'Mã hóa khóa phiên bằng Public Key của Server',
          desc: 'Client dùng Public Key của Server để mã hóa khóa phiên này và gửi qua Internet. Chỉ có Private Key của Server mới giải mã được.',
          activeNode: 'node-asym',
          packetLabel: 'Asymmetric Encrypted Key'
        },
        {
          num: 4,
          name: 'Truyền dữ liệu tốc độ cao bằng mã hóa đối xứng',
          desc: 'Server dùng Private Key giải mã thu về Session Key. Kể từ thời điểm này, toàn bộ dữ liệu trao đổi giữa Client và Server được mã hóa bằng thuật toán đối xứng AES với tốc độ cao.',
          activeNode: 'node-sym',
          packetLabel: 'High-speed Symmetric Traffic'
        }
      ],
      nodes: [
        { id: 'node-client', icon: '💻', name: 'Web Client', sub: 'Tạo AES Session Key' },
        { id: 'node-tls', icon: '🔒', name: 'TLS Handshake', sub: 'Trao đổi khóa bất đối xứng' },
        { id: 'node-server', icon: '🖥️', name: 'Web Server', sub: 'Giữ Private Key bí mật' }
      ],
      specTable: {
        headers: ['Thuật toán mã hóa', 'Loại hình', 'Độ dài khóa phổ biến', 'Ứng dụng chính'],
        rows: [
          ['AES (Advanced Encryption Standard)', 'Đối xứng (Symmetric)', '128, 192, 256 bits', 'Mã hóa dữ liệu dung lượng lớn (Bulk Data Encryption).'],
          ['DES / 3DES (Legacy)', 'Đối xứng (Symmetric)', '56 bits / 168 bits', 'Đã lỗi thời, không còn an toàn trước tấn công vét cạn.'],
          ['RSA', 'Bất đối xứng (Asymmetric)', '2048, 4096 bits', 'Trao đổi khóa bí mật, chữ ký số (Digital Signature).'],
          ['ECC (Elliptic Curve Cryptography)', 'Bất đối xứng (Asymmetric)', '256, 384 bits', 'Cung cấp mức độ bảo mật tương đương RSA nhưng khóa ngắn hơn nhiều.']
        ]
      },
      note: 'Khái niệm chữ ký số (Digital Signature): Chữ ký số được tạo bằng cách băm dữ liệu (Hash) rồi mã hóa giá trị băm đó bằng PRIVATE KEY của người gửi. Người nhận dùng PUBLIC KEY của người gửi để xác minh tính toàn vẹn và chống chối bỏ.'
    }
  };

  // Dynamic keyword mapping for all questions in IAO
  window.QUESTION_VISUAL_MAP = {
    'm13-17_q21': 'span_mirror',
    'm13-17_q39': 'span_mirror',
    'm13-17_q22': 'netflow_meta',
    'm13-17_q38': 'netflow_meta',
    'm24-25_q19': 'netflow_meta',
    'm13-17_q7': 'dns_tunneling',
    'm18-20_q5': 'stateful_firewall',
    'm18-20_q12': 'stateful_firewall',
    'm21-23_q4': 'crypto_asym_sym',
    'm21-23_q15': 'crypto_asym_sym'
  };

  if (window.EXAM_DATA && Array.isArray(window.EXAM_DATA)) {
    window.EXAM_DATA.forEach(q => {
      if (window.QUESTION_VISUAL_MAP[q.id]) return;
      const text = ((q.question || '') + ' ' + (q.explanation || '')).toLowerCase();
      if (text.includes('span') || text.includes('port mirror') || text.includes('monitor session')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'span_mirror';
      } else if (text.includes('netflow') || text.includes('ipfix') || text.includes('flow record')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'netflow_meta';
      } else if (text.includes('dns tunnel') || text.includes('exfiltration') || text.includes('txt record')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'dns_tunneling';
      } else if (text.includes('stateful') || text.includes('state table') || text.includes('stateless')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'stateful_firewall';
      } else if (text.includes('symmetric') || text.includes('asymmetric') || text.includes('public key') || text.includes('private key') || text.includes('rsa') || text.includes('aes')) {
        window.QUESTION_VISUAL_MAP[q.id] = 'crypto_asym_sym';
      }
    });
  }

})();
