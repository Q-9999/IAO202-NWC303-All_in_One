// CCNA 2 v7 (SRWE) - Modern Interactive Mechanism Visualizations
// Thiết kế chuyên biệt cho học sinh ôn tập các cơ chế, luồng xử lý gói tin và tính năng cốt lõi.

(function() {
  'use strict';

  window.MECHANISM_VISUALIZATIONS = {
    // 1. Quy trình khởi động Switch (Switch Boot Sequence)
    'switch_boot_sequence': {
      title: 'Quy trình 5 bước khởi động Switch Cisco (Switch Boot Sequence)',
      badge: 'Switching Fundamentals / Bootup Process',
      summary: 'Khi switch Cisco được cấp điện, hệ thống thực hiện một quy trình khởi động 5 bước nghiêm ngặt nhằm kiểm tra phần cứng, nạp bộ nạp khởi động (boot loader) và nạp hệ điều hành Cisco IOS vào RAM.',
      steps: [
        {
          num: 1,
          name: 'Kiểm tra phần cứng POST (Power-On Self-Test)',
          desc: 'Switch tải và thực thi chương trình POST từ ROM. POST kiểm tra toàn diện CPU, bộ nhớ DRAM và bộ nhớ Flash. Đèn LED hệ thống nhấp nháy xanh/cam trong quá trình tự kiểm tra.',
          activeNode: 'node-rom',
          packetLabel: 'Hardware POST'
        },
        {
          num: 2,
          name: 'Nạp phần mềm Boot Loader',
          desc: 'Sau khi POST thành công, mã boot loader được nạp từ ROM vào RAM. Boot loader là một chương trình nhỏ cung cấp môi trường khôi phục khi IOS bị hỏng hoặc mất mật khẩu.',
          activeNode: 'node-cpu',
          packetLabel: 'Load Boot Loader'
        },
        {
          num: 3,
          name: 'Khởi tạo CPU và hệ thống cấp thấp',
          desc: 'Boot loader khởi tạo các thanh ghi CPU, điều khiển ánh xạ vùng nhớ vật lý, tốc độ xung nhịp và chuẩn bị bộ điều khiển bộ nhớ flash.',
          activeNode: 'node-cpu',
          packetLabel: 'Low-Level Init'
        },
        {
          num: 4,
          name: 'Khởi tạo hệ thống tệp trên Flash',
          desc: 'Boot loader khởi tạo hệ thống tệp flash (flash:) để chuẩn bị tìm kiếm và định vị tệp ảnh phần mềm hệ điều hành Cisco IOS.',
          activeNode: 'node-flash',
          packetLabel: 'Mount flash:/'
        },
        {
          num: 5,
          name: 'Nạp và thực thi hệ điều hành Cisco IOS',
          desc: 'Switch đọc biến môi trường BOOT để tìm tệp ảnh IOS (ví dụ: c2960-lanbasek9-mz.bin), nạp vào DRAM và chuyển quyền điều khiển cho IOS. Cuối cùng, IOS nạp file startup-config từ NVRAM.',
          activeNode: 'node-ram',
          packetLabel: 'IOS Executed'
        }
      ],
      nodes: [
        { id: 'node-rom', icon: '💾', label: 'ROM', role: 'POST & Microcode', detail: 'Chứa POST và Boot Loader cấp thấp' },
        { id: 'node-cpu', icon: '🎛️', label: 'CPU Switch', role: 'Registers & Logic', detail: 'Xử lý các lệnh khởi tạo phần cứng' },
        { id: 'node-flash', icon: '📁', label: 'Bộ nhớ Flash', role: 'flash: file system', detail: 'Lưu trữ tệp hình ảnh Cisco IOS (.bin)' },
        { id: 'node-ram', icon: '⚡', label: 'DRAM / NVRAM', role: 'Running Environment', detail: 'Chạy IOS và file cấu hình startup-config' }
      ],
      specTable: {
        headers: ['Bước khởi động', 'Thành phần phần cứng', 'Ý nghĩa kỹ thuật'],
        rows: [
          ['Bước 1: POST', 'ROM + DRAM + Flash', 'Tự kiểm tra toàn vẹn phần cứng khi vừa bật nguồn.'],
          ['Bước 2: Boot Loader', 'ROM -> RAM', 'Thực thi ngay sau POST để làm cầu nối nạp IOS.'],
          ['Bước 3: CPU Low-Level', 'CPU Registers', 'Khởi tạo thanh ghi và bộ nhớ đệm nội bộ.'],
          ['Bước 4: Flash Init', 'Flash File System', 'Định vị tệp tin IOS chỉ định bởi biến BOOT.'],
          ['Bước 5: Load IOS', 'DRAM / NVRAM', 'Giải nén IOS vào RAM và nạp cấu hình khởi động.']
        ]
      },
      takeaway: 'Ghi nhớ trọng tâm thi: Boot loader được thực thi ngay sau khi chương trình POST kết thúc thành công.'
    },

    // 2. Phương pháp chuyển tiếp khung của Switch (Store-and-Forward vs Cut-Through)
    'switch_forwarding_methods': {
      title: 'Phương pháp chuyển tiếp khung Lớp 2 (Store-and-Forward vs Cut-Through)',
      badge: 'Frame Forwarding Decisions / CRC & Error Checking',
      summary: 'Switch đưa ra quyết định chuyển tiếp khung dựa trên bảng MAC (CAM Table) và sử dụng hai phương pháp chính: Store-and-Forward (kiểm tra toàn bộ lỗi) hoặc Cut-Through (tối ưu hóa độ trễ).',
      steps: [
        {
          num: 1,
          name: 'Nhận tín hiệu khung tại cổng Ingress',
          desc: 'Khung Ethernet đi vào cổng Ingress của switch. Switch đọc Preamble và Start Frame Delimiter (SFD) để đồng bộ xung nhịp tín hiệu.',
          activeNode: 'node-ingress',
          packetLabel: 'Preamble / SFD'
        },
        {
          num: 2,
          name: 'Học địa chỉ MAC nguồn (Source MAC)',
          desc: 'Switch đọc trường Source MAC (6 byte) và ghi vào bảng CAM (MAC Address Table) kèm số hiệu cổng Ingress và VLAN ID để ghi nhớ vị trí của máy trạm.',
          activeNode: 'node-cam',
          packetLabel: 'Learn Source MAC'
        },
        {
          num: 3,
          name: 'Tra cứu địa chỉ MAC đích (Destination MAC)',
          desc: 'Switch đọc Destination MAC (6 byte đầu) và tra bảng CAM. Nếu tìm thấy cổng Egress tương ứng -> Chuẩn bị chuyển tiếp unicast. Nếu không tìm thấy -> Flooding ra mọi cổng cùng VLAN.',
          activeNode: 'node-cam',
          packetLabel: 'Lookup Dest MAC'
        },
        {
          num: 4,
          name: 'Quyết định kiểm tra lỗi và đẩy khung ra Egress',
          desc: 'Store-and-Forward: Nhận trọn vẹn toàn bộ khung, tính mã kiểm tra FCS/CRC ở đuôi khung. Nếu đúng mới gửi ra Egress; nếu lỗi (runt, collision) thì hủy bỏ (drop). Cut-Through: Gửi đi ngay sau khi đọc Dest MAC (hoặc 64 byte đầu ở Fragment-Free) mà không kiểm tra FCS.',
          activeNode: 'node-egress',
          packetLabel: 'Forward / Drop'
        }
      ],
      nodes: [
        { id: 'node-ingress', icon: '🔌', label: 'Cổng Ingress', role: 'Nhận khung vật lý', detail: 'Đọc tín hiệu và bit stream đi vào' },
        { id: 'node-cam', icon: '📋', label: 'Bảng CAM (MAC Table)', role: 'Học & Tra cứu MAC', detail: 'Quản lý bảng ánh xạ MAC <-> Port' },
        { id: 'node-buffer', icon: '📦', label: 'Bộ đệm Buffer & ASIC', role: 'Tính toán CRC / FCS', detail: 'Lưu trữ khung và chạy thuật toán FCS' },
        { id: 'node-egress', icon: '🚀', label: 'Cổng Egress', role: 'Chuyển tiếp ra ngoài', detail: 'Đẩy khung đã kiểm định tới đích' }
      ],
      specTable: {
        headers: ['Đặc điểm so sánh', 'Store-and-Forward (Mặc định)', 'Cut-Through (Fast-Forward / Fragment-Free)'],
        rows: [
          ['Thời điểm chuyển tiếp', 'Sau khi đã nhận toàn bộ 100% khung', 'Ngay sau khi đọc 6 byte Dest MAC (hoặc 64 byte)'],
          ['Kiểm tra lỗi FCS/CRC', 'CÓ - Đảm bảo khung hoàn toàn không có lỗi', 'KHÔNG - Khung hỏng vẫn bị đẩy qua mạng'],
          ['Độ trễ xử lý (Latency)', 'Cao hơn (tùy thuộc vào kích thước khung)', 'Cực thấp (cố định vài micro-giây)'],
          ['Hỗ trợ cổng lệch tốc độ', 'Có hỗ trợ (nhờ bộ đệm lưu khung)', 'Không hỗ trợ chuyển tiếp nếu cổng lệch tốc độ']
        ]
      },
      takeaway: 'Ghi nhớ trọng tâm thi: Store-and-Forward là phương pháp duy nhất đảm bảo khung dữ liệu hoàn toàn không có lỗi (error-free) trước khi chuyển tiếp.'
    },

    // 3. Cơ chế gắn thẻ 802.1Q trên đường Trunk (802.1Q VLAN Tagging)
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
        { id: 'node-pc1', icon: '💻', label: 'Host A', role: 'VLAN 10 Client', detail: 'IP: 192.168.10.10 | Access Port' },
        { id: 'node-sw1', icon: '🔀', label: 'Switch 1', role: 'In: Fa0/1 | Out: Fa0/24', detail: 'Chèn thẻ 802.1Q 4-byte vào khung' },
        { id: 'node-trunk', icon: '🌐', label: 'Trunk Link', role: '802.1Q Tunnel', detail: 'Truyền đa VLAN qua 1 cáp vật lý' },
        { id: 'node-sw2', icon: '🔀', label: 'Switch 2', role: 'In: Fa0/24 | Out: Fa0/2', detail: 'Bóc thẻ 802.1Q và chuyển tiếp Untagged' },
        { id: 'node-pc2', icon: '💻', label: 'Host B', role: 'VLAN 10 Destination', detail: 'IP: 192.168.10.20 | Nhận khung chuẩn' }
      ],
      specTable: {
        headers: ['Trường thông tin trong thẻ 802.1Q', 'Độ dài', 'Chức năng kỹ thuật'],
        rows: [
          ['TPID (Tag Protocol Identifier)', '16 bits (2 bytes)', 'Mang giá trị cố định 0x8100 để báo hiệu đây là khung có gắn thẻ 802.1Q.'],
          ['PCP / Priority (Priority Code Point)', '3 bits', 'Chỉ định mức độ ưu tiên chất lượng dịch vụ CoS (Class of Service) từ 0 đến 7 (Voice VLAN dùng CoS=5).'],
          ['DEI / CFI (Drop Eligible Indicator)', '1 bit', 'Chỉ định khả năng chấp nhận hủy gói khi hàng đợi xảy ra tắc nghẽn mạng.'],
          ['VID (VLAN Identifier)', '12 bits', 'Định danh số VLAN mà khung thuộc về. Hỗ trợ từ 1 đến 4094 VLAN khả dụng.']
        ]
      },
      takeaway: 'Quy tắc cốt lõi: Cổng Access không bao giờ gửi hoặc nhận khung có thẻ 802.1Q. Thẻ 802.1Q chỉ tồn tại khi khung di chuyển trên đường Trunk giữa các thiết bị chuyển mạch/định tuyến.'
    },

    // 4. Định tuyến giữa các VLAN (Router-on-a-Stick & Layer 3 Switch SVI)
    'inter_vlan_roas': {
      title: 'Định tuyến giữa các VLAN (Router-on-a-Stick & Layer 3 Switch SVI)',
      badge: 'Network Layer / Inter-VLAN Routing',
      summary: 'Các host thuộc các VLAN khác nhau không thể trao đổi trực tiếp ở Layer 2 mà bắt buộc phải qua thiết bị Layer 3 (Router với sub-interfaces hoặc Layer 3 Switch với SVI) để định tuyến gói tin IP.',
      steps: [
        {
          num: 1,
          name: 'Host VLAN 10 gửi gói tin tới Default Gateway',
          desc: 'Host A (192.168.10.10) muốn gửi dữ liệu tới Host B (192.168.20.20). Nhận thấy khác lớp mạng, Host A gửi khung đến địa chỉ MAC của Default Gateway (Subinterface Router g0/0.10).',
          activeNode: 'node-pc1',
          packetLabel: 'IP: 10.10 -> 20.20'
        },
        {
          num: 2,
          name: 'Switch gắn thẻ 802.1Q và đẩy qua Trunk lên Router',
          desc: 'Switch nhận khung tại cổng Access VLAN 10, chuyển ra cổng Trunk nối với Router và gắn thẻ 802.1Q với VID = 10.',
          activeNode: 'node-sw',
          packetLabel: 'Tagged VID=10'
        },
        {
          num: 3,
          name: 'Router bóc thẻ, định tuyến và gắn thẻ mới',
          desc: 'Router nhận khung tại sub-interface g0/0.10, bóc thẻ 802.1Q. Router tra bảng định tuyến thấy mạng 192.168.20.0/24 nằm ở sub-interface g0/0.20. Router đóng gói lại khung với thẻ mới VID = 20.',
          activeNode: 'node-router',
          packetLabel: 'Tagged VID=20'
        },
        {
          num: 4,
          name: 'Switch bóc thẻ và chuyển tiếp tới Host B',
          desc: 'Khung quay trở lại Switch qua đường Trunk với VID = 20. Switch đọc VID = 20, gỡ bỏ thẻ và đẩy khung Untagged ra cổng Access nối với Host B.',
          activeNode: 'node-pc2',
          packetLabel: 'Untagged Frame'
        }
      ],
      nodes: [
        { id: 'node-pc1', icon: '💻', label: 'Host A (VLAN 10)', role: '192.168.10.10', detail: 'GW: 192.168.10.1' },
        { id: 'node-sw', icon: '🔀', label: 'Switch 2960', role: 'Trunking Device', detail: 'Fa0/1: Acc 10 | Fa0/2: Acc 20 | G0/1: Trunk' },
        { id: 'node-router', icon: '🛡️', label: 'Router 1941 (ROAS)', role: 'Default Gateway', detail: 'g0/0.10 (VLAN 10) | g0/0.20 (VLAN 20)' },
        { id: 'node-pc2', icon: '💻', label: 'Host B (VLAN 20)', role: '192.168.20.20', detail: 'GW: 192.168.20.1' }
      ],
      specTable: {
        headers: ['Phương pháp Inter-VLAN', 'Thiết bị yêu cầu', 'Ưu điểm & Nhược điểm kỹ thuật'],
        rows: [
          ['Router-on-a-Stick (ROAS)', 'Router + Switch Lớp 2', 'Tiết kiệm cổng router (chỉ dùng 1 cổng vật lý chia subinterface), nhưng dễ nghẽn cổ chai.'],
          ['Lớp 3 Switch SVI (Khuyên dùng)', 'Multilayer Switch (3560/3650)', 'Tốc độ chuyển mạch dây (wire-speed) phần cứng qua ASIC, độ trễ cực thấp, không nghẽn.'],
          ['Lệnh bắt buộc trên Subinterface', 'encapsulation dot1q <vlan_id>', 'Router cần lệnh này để ánh xạ subinterface với đúng thẻ VLAN 802.1Q.']
        ]
      },
      takeaway: 'Ghi nhớ trọng tâm thi: Mỗi Subinterface trên Router bắt buộc phải cấu hình lệnh encapsulation dot1Q <vlan-id> trước khi gán địa chỉ IP bằng lệnh ip address.'
    },

    // 5. Bầu chọn Root Bridge và vai trò cổng STP (STP Root Election & Port Roles)
    'stp_root_election': {
      title: 'Bầu chọn Root Bridge và Xác định vai trò cổng STP (IEEE 802.1D)',
      badge: 'Layer 2 Redundancy / STP Root Election',
      summary: 'Giao thức Spanning Tree Protocol (STP) ngăn chặn bão Broadcast bằng cách tạo ra một cấu trúc cây không có vòng lặp (loop-free topology). Quy trình bắt đầu bằng việc so sánh Bridge ID (BID) để bầu ra duy nhất một Root Bridge.',
      steps: [
        {
          num: 1,
          name: 'Trao đổi gói tin BPDU khi vừa khởi động',
          desc: 'Khi các switch khởi động, tất cả switch đều tự coi mình là Root Bridge và phát gói tin BPDU (Bridge Protocol Data Unit) chứa Bridge ID của mình ra tất cả các cổng sau mỗi 2 giây (Hello Timer).',
          activeNode: 'node-bpdu',
          packetLabel: 'BPDU: Hello (2s)'
        },
        {
          num: 2,
          name: 'So sánh Bridge ID để bầu Root Bridge',
          desc: 'Switch có Bridge ID (BID) nhỏ nhất sẽ chiến thắng thành Root Bridge. BID gồm: Bridge Priority (mặc định 32768) + Extended System ID (VLAN ID) + MAC Address. Nếu Priority bằng nhau, switch có địa chỉ MAC nhỏ nhất sẽ thắng.',
          activeNode: 'node-root',
          packetLabel: 'Lowest BID Wins'
        },
        {
          num: 3,
          name: 'Xác định Root Port (RP) trên Non-Root Switch',
          desc: 'Trên mỗi Non-Root Switch, duy nhất một cổng có tổng chi phí đường truyền về Root Bridge (Root Path Cost) thấp nhất sẽ được chọn làm Root Port (RP) để chuyển tiếp dữ liệu.',
          activeNode: 'node-rp',
          packetLabel: 'Lowest Path Cost'
        },
        {
          num: 4,
          name: 'Xác định Designated Port (DP) và Alternate Port (AP)',
          desc: 'Trên mỗi đoạn cáp (segment), cổng có chi phí tốt nhất là Designated Port (DP). Các cổng còn lại không phải RP cũng không phải DP sẽ bị chuyển sang trạng thái Alternate/Blocking (AP) để khóa vòng lặp.',
          activeNode: 'node-ap',
          packetLabel: 'Blocking Loop'
        }
      ],
      nodes: [
        { id: 'node-root', icon: '👑', label: 'Root Bridge (S1)', role: 'Mọi cổng đều là DP', detail: 'Priority: 24576 (Thấp nhất) | MAC: 0001.xxxx' },
        { id: 'node-s2', icon: '🔀', label: 'Switch S2 (Non-Root)', role: 'RP nối về S1 | DP nối S3', detail: 'Priority: 32768 | MAC: 0002.xxxx' },
        { id: 'node-s3', icon: '🔀', label: 'Switch S3 (Non-Root)', role: 'RP nối về S1 | AP khóa vòng lặp', detail: 'Priority: 32768 | MAC: 0003.xxxx' }
      ],
      specTable: {
        headers: ['Vai trò cổng (Port Role)', 'Trạng thái hoạt động', 'Chức năng kỹ thuật'],
        rows: [
          ['Root Port (RP)', 'Forwarding (Chuyển tiếp)', 'Cổng trên Non-Root Switch có đường đi ngắn nhất về Root Bridge (mỗi switch chỉ có duy nhất 1 RP).'],
          ['Designated Port (DP)', 'Forwarding (Chuyển tiếp)', 'Cổng chuyển tiếp dữ liệu cho một segment. MỌI cổng trên Root Bridge đều là DP.'],
          ['Alternate / Backup Port (AP)', 'Blocking / Discarding (Khóa)', 'Cổng dự phòng bị khóa để chặn vòng lặp broadcast. Vẫn tiếp tục nhận BPDU để sẵn sàng kích hoạt khi RP đứt.']
        ]
      },
      takeaway: 'Nguyên tắc vàng: Switch có Bridge ID thấp nhất luôn thắng cử làm Root Bridge. Tất cả các cổng đang hoạt động trên Root Bridge LUÔN LUÔN ở vai trò Designated Port (DP) và trạng thái Forwarding.'
    },

    // 6. Chu kỳ chuyển đổi trạng thái cổng STP (STP Port States)
    'stp_port_states': {
      title: 'Chu kỳ chuyển đổi 5 trạng thái cổng STP (STP Port States & Timers)',
      badge: 'STP IEEE 802.1D / Port Convergence',
      summary: 'Để ngăn ngừa vòng lặp tức thời khi cấu trúc mạng thay đổi, cổng switch chạy STP chuẩn 802.1D phải trải qua các trạng thái chuyển tiếp tuần tự kèm các bộ định thời gian nghiêm ngặt.',
      steps: [
        {
          num: 1,
          name: 'Trạng thái Blocking (Khóa - Max Age 20s)',
          desc: 'Cổng không tham gia chuyển tiếp khung dữ liệu và không học địa chỉ MAC. Cổng chỉ lắng nghe và tiếp nhận các gói BPDU để theo dõi trạng thái của mạng.',
          activeNode: 'node-blocking',
          packetLabel: 'Receive BPDU Only'
        },
        {
          num: 2,
          name: 'Trạng thái Listening (Lắng nghe - Forward Delay 15s)',
          desc: 'Sau khi hết thời gian Max Age (20s), cổng chuyển sang Listening. Cổng bắt đầu xử lý và gửi BPDU để tham gia bầu chọn cấu trúc cây STP; vẫn CHƯA học MAC và CHƯA chuyển tiếp dữ liệu.',
          activeNode: 'node-listening',
          packetLabel: 'Process & Send BPDU'
        },
        {
          num: 3,
          name: 'Trạng thái Learning (Học địa chỉ MAC - Forward Delay 15s)',
          desc: 'Sau 15 giây Listening, cổng chuyển sang Learning. Cổng tiếp tục nhận/gửi BPDU và bắt đầu học địa chỉ MAC nguồn vào bảng CAM; vẫn CHƯA chuyển tiếp khung dữ liệu người dùng.',
          activeNode: 'node-learning',
          packetLabel: 'Learn MAC Address'
        },
        {
          num: 4,
          name: 'Trạng thái Forwarding (Chuyển tiếp dữ liệu)',
          desc: 'Sau 15 giây Learning, cổng chính thức chuyển sang Forwarding. Cổng gửi/nhận BPDU, học MAC và chuyển tiếp mọi khung dữ liệu bình thường. Tổng thời gian hội tụ từ Blocking -> Forwarding là 50 giây.',
          activeNode: 'node-forwarding',
          packetLabel: 'Forward Data Frames'
        }
      ],
      nodes: [
        { id: 'node-blocking', icon: '🛑', label: '1. Blocking', role: 'Thời gian: 20s (Max Age)', detail: 'Chỉ nhận BPDU | Không học MAC | Không gửi data' },
        { id: 'node-listening', icon: '👂', label: '2. Listening', role: 'Thời gian: 15s (Fwd Delay)', detail: 'Gửi & Nhận BPDU | Không học MAC | Không gửi data' },
        { id: 'node-learning', icon: '📖', label: '3. Learning', role: 'Thời gian: 15s (Fwd Delay)', detail: 'Gửi/Nhận BPDU | ĐÃ HỌC MAC | Không gửi data' },
        { id: 'node-forwarding', icon: '✅', label: '4. Forwarding', role: 'Trạng thái ổn định', detail: 'Gửi/Nhận BPDU | Học MAC | CHUYỂN TIẾP DATA' }
      ],
      specTable: {
        headers: ['Trạng thái cổng', 'Nhận BPDU', 'Gửi BPDU', 'Học địa chỉ MAC', 'Chuyển tiếp dữ liệu'],
        rows: [
          ['Blocking', 'CÓ', 'KHÔNG', 'KHÔNG', 'KHÔNG'],
          ['Listening', 'CÓ', 'CÓ', 'KHÔNG', 'KHÔNG'],
          ['Learning', 'CÓ', 'CÓ', 'CÓ', 'KHÔNG'],
          ['Forwarding', 'CÓ', 'CÓ', 'CÓ', 'CÓ'],
          ['Disabled', 'KHÔNG', 'KHÔNG', 'KHÔNG', 'KHÔNG']
        ]
      },
      takeaway: 'Ghi nhớ trọng tâm thi: Hai trạng thái cổng duy nhất mà switch HỌC ĐỊA CHỈ MAC trong PVST+ là Learning và Forwarding.'
    },

    // 7. Gộp cổng EtherChannel (LACP & PAgP Negotiation)
    'etherchannel_bundling': {
      title: 'Cơ chế đàm phán gộp cổng EtherChannel (LACP 802.3ad & PAgP)',
      badge: 'Link Aggregation / EtherChannel',
      summary: 'EtherChannel gộp nhiều kết nối Ethernet vật lý thành một liên kết logic duy nhất (Port-Channel) để tăng băng thông và cung cấp khả năng dự phòng không bị STP khóa cổng.',
      steps: [
        {
          num: 1,
          name: 'Kiểm tra tính tương thích cấu hình cổng vật lý',
          desc: 'Tất cả các cổng vật lý tham gia EtherChannel bắt buộc phải có cùng Tốc độ (Speed), Duplex, VLAN (Access VLAN hoặc Trunk Native VLAN) và dải VLAN được phép qua Trunk. Nếu sai lệch, cổng sẽ bị đưa vào trạng thái err-disabled.',
          activeNode: 'node-ports',
          packetLabel: 'Param Verification'
        },
        {
          num: 2,
          name: 'Trao đổi gói tin đàm phán LACP hoặc PAgP',
          desc: 'Các cổng cấu hình chế độ chủ động (LACP active hoặc PAgP desirable) phát các gói tin đàm phán sang switch đối diện để thiết lập thỏa thuận kết nhóm.',
          activeNode: 'node-negotiate',
          packetLabel: 'LACP / PAgP Packets'
        },
        {
          num: 3,
          name: 'Thiết lập giao diện logic Port-Channel',
          desc: 'Khi hai đầu đàm phán thành công chế độ tương thích (ví dụ: active + passive, hoặc active + active), các cổng vật lý được gộp thành một interface logic duy nhất (ví dụ: Port-channel 1).',
          activeNode: 'node-po',
          packetLabel: 'Port-Channel 1 UP'
        },
        {
          num: 4,
          name: 'Cân bằng tải lưu lượng (Load Balancing)',
          desc: 'Lưu lượng truyền qua EtherChannel được băm (hash) theo Source MAC, Destination MAC, hoặc Source/Dest IP để phân phối đều trên các liên kết vật lý thành viên.',
          activeNode: 'node-lb',
          packetLabel: 'Hashed Load Balancing'
        }
      ],
      nodes: [
        { id: 'node-sw1', icon: '🔀', label: 'Switch SW1', role: 'Channel-group 1', detail: 'Gi0/1, Gi0/2 | Mode: Active' },
        { id: 'node-bundle', icon: '🔗', label: 'Bó Port-Channel 1', role: 'Logical Aggregation', detail: 'Băng thông x2 (2 Gbps) | 1 Virtual Link' },
        { id: 'node-sw2', icon: '🔀', label: 'Switch SW2', role: 'Channel-group 1', detail: 'Gi0/1, Gi0/2 | Mode: Passive hoặc Active' }
      ],
      specTable: {
        headers: ['Giao thức', 'Chế độ trên SW1', 'Chế độ trên SW2', 'Kết quả tạo EtherChannel'],
        rows: [
          ['LACP (IEEE Chuẩn mở)', 'active', 'active', 'THÀNH CÔNG (Cả 2 bên cùng chủ động đàm phán)'],
          ['LACP (IEEE Chuẩn mở)', 'active', 'passive', 'THÀNH CÔNG (SW1 chủ động mời, SW2 phản hồi)'],
          ['LACP (IEEE Chuẩn mở)', 'passive', 'passive', 'THẤT BẠI (Cả 2 cùng thụ động chờ, không gửi gói LACP)'],
          ['PAgP (Cisco độc quyền)', 'desirable', 'auto hoặc desirable', 'THÀNH CÔNG (Có ít nhất 1 bên chủ động phát lệnh)'],
          ['PAgP (Cisco độc quyền)', 'auto', 'auto', 'THẤT BẠI (Cả 2 cùng ở chế độ chờ)'],
          ['Tĩnh (Không giao thức)', 'on', 'on', 'THÀNH CÔNG (Ép buộc gộp cổng, không kiểm tra an toàn)']
        ]
      },
      takeaway: 'Ghi nhớ trọng tâm thi: Để thiết lập thành công EtherChannel, ít nhất một đầu switch phải được cấu hình ở chế độ chủ động (Active đối với LACP, hoặc Desirable đối với PAgP).'
    },

    // 8. Quy trình cấp phát địa chỉ IP qua DHCPv4 (DORA Process)
    'dhcpv4_dora': {
      title: 'Quy trình 4 bước bắt tay cấp phát IP DHCPv4 (Tiến trình DORA)',
      badge: 'IP Services / DHCPv4 Operation',
      summary: 'Giao thức DHCPv4 cho phép các máy trạm tự động nhận địa chỉ IPv4, Subnet Mask, Default Gateway và DNS server thông qua quy trình 4 thông điệp bắt tay DORA.',
      steps: [
        {
          num: 1,
          name: 'DHCPDISCOVER: Client phát quảng bá tìm Server',
          desc: 'Client chưa có IP gửi gói tin broadcast Lớp 2 (FF:FF:FF:FF:FF:FF) và Lớp 3 (255.255.255.255) từ cổng UDP 68 đến cổng UDP 67 để tìm kiếm máy chủ DHCP khả dụng trong mạng.',
          activeNode: 'node-client',
          packetLabel: 'DHCPDISCOVER (Broadcast)'
        },
        {
          num: 2,
          name: 'DHCPOFFER: Server đề xuất cấu hình IP',
          desc: 'DHCP Server nhận gói Discover, giữ tạm một địa chỉ IP chưa dùng trong pool và gửi gói DHCPOFFER chứa: IP đề xuất, Subnet Mask, Thời gian thuê (Lease time) và Server ID.',
          activeNode: 'node-server',
          packetLabel: 'DHCPOFFER (Unicast/Bcast)'
        },
        {
          num: 3,
          name: 'DHCPREQUEST: Client chấp thuận và yêu cầu thuê IP',
          desc: 'Client gửi gói broadcast DHCPREQUEST thông báo chấp nhận đề xuất từ Server này, đồng thời thông báo cho các DHCP server khác (nếu có) giải phóng địa chỉ IP mà họ đã đề xuất.',
          activeNode: 'node-client',
          packetLabel: 'DHCPREQUEST (Broadcast)'
        },
        {
          num: 4,
          name: 'DHCPACK: Server xác nhận cấp quyền sử dụng',
          desc: 'Server gửi gói DHCPACK xác nhận hợp đồng cho thuê hoàn tất. Client gán IP vào card mạng và bắt đầu gửi gói tin ARP kiểm tra (Gratuitous ARP) để đảm bảo không bị trùng IP.',
          activeNode: 'node-server',
          packetLabel: 'DHCPACK (Unicast/Bcast)'
        }
      ],
      nodes: [
        { id: 'node-client', icon: '💻', label: 'DHCP Client (PC)', role: '0.0.0.0:68', detail: 'Chưa có cấu hình IP ban đầu' },
        { id: 'node-sw', icon: '🔀', label: 'Layer 2 Switch', role: 'Broadcast Forwarder', detail: 'Chuyển tiếp gói tin Discover ra toàn VLAN' },
        { id: 'node-server', icon: '🗄️', label: 'DHCP Server', role: '192.168.1.1:67', detail: 'Quản lý IP Pool & Cấp phát hợp đồng thuê' }
      ],
      specTable: {
        headers: ['Thông điệp DHCP', 'Nguồn gửi', 'Loại truyền thông', 'Cổng UDP'],
        rows: [
          ['1. DHCPDISCOVER', 'Client -> Server', 'Broadcast (255.255.255.255)', 'Src: 68 | Dst: 67'],
          ['2. DHCPOFFER', 'Server -> Client', 'Unicast hoặc Broadcast', 'Src: 67 | Dst: 68'],
          ['3. DHCPREQUEST', 'Client -> Server', 'Broadcast (để thông báo toàn mạng)', 'Src: 68 | Dst: 67'],
          ['4. DHCPACK', 'Server -> Client', 'Unicast hoặc Broadcast', 'Src: 67 | Dst: 68']
        ]
      },
      takeaway: 'Ghi nhớ trọng tâm thi: Cả thông điệp số 1 (DHCPDISCOVER) và số 3 (DHCPREQUEST) đều LUÔN LUÔN được gửi dưới dạng BROADCAST từ máy Client.'
    },

    // 9. Cơ chế chuyển tiếp DHCP Relay Agent (ip helper-address)
    'dhcp_relay_agent': {
      title: 'Cơ chế chuyển tiếp DHCP Relay Agent qua Router (ip helper-address)',
      badge: 'IP Services / DHCP Relay Cross-Subnet',
      summary: 'Mặc định Router không chuyển tiếp gói tin Broadcast. Khi DHCP Client và DHCP Server nằm ở hai phân đoạn mạng khác nhau, Router phải đóng vai trò Relay Agent để chuyển đổi Broadcast thành Unicast.',
      steps: [
        {
          num: 1,
          name: 'Client phát Broadcast DHCPDISCOVER',
          desc: 'Máy trạm tại mạng 192.168.10.0/24 gửi gói tin Broadcast DHCPDISCOVER (255.255.255.255:67) tìm kiếm server.',
          activeNode: 'node-pc',
          packetLabel: 'Broadcast 255.255.255.255'
        },
        {
          num: 2,
          name: 'Router nhận gói và đóng gói lại thành Unicast',
          desc: 'Cổng G0/0 của Router nhận gói Broadcast. Nhờ lệnh ip helper-address 192.168.20.254, Router chuyển gói tin thành Unicast với Destination IP là 192.168.20.254 và gán IP của interface G0/0 (192.168.10.1) vào trường giaddr.',
          activeNode: 'node-r1',
          packetLabel: 'Unicast to Server (giaddr set)'
        },
        {
          num: 3,
          name: 'DHCP Server nhận Unicast và chọn Pool phù hợp',
          desc: 'Server nhận gói Unicast, đọc trường giaddr (192.168.10.1) và nhận biết cần lấy IP từ Pool 192.168.10.0/24 để cấp, sau đó gửi DHCPOFFER Unicast về cho Router.',
          activeNode: 'node-srv',
          packetLabel: 'DHCPOFFER Unicast to Router'
        },
        {
          num: 4,
          name: 'Router chuyển tiếp Offer về máy trạm',
          desc: 'Router nhận DHCPOFFER từ Server và chuyển tiếp gói tin xuống mạng LAN cho máy trạm để tiếp tục quá trình hoàn tất DORA.',
          activeNode: 'node-r1',
          packetLabel: 'Relayed DHCPOFFER'
        }
      ],
      nodes: [
        { id: 'node-pc', icon: '💻', label: 'Client (Subnet A)', role: '192.168.10.x', detail: 'Phát gói tin broadcast tìm server' },
        { id: 'node-r1', icon: '🛡️', label: 'Relay Router', role: 'ip helper-address', detail: 'Chuyển Broadcast thành Unicast & ghi giaddr' },
        { id: 'node-srv', icon: '🗄️', label: 'DHCP Server (Subnet B)', role: '192.168.20.254', detail: 'Nhận diện pool theo trường giaddr' }
      ],
      specTable: {
        headers: ['Thuộc tính', 'Chi tiết kỹ thuật'],
        rows: [
          ['Lệnh cấu hình trên Router', 'Router(config-if)# ip helper-address <DHCP_Server_IP>'],
          ['Vị trí cấu hình', 'Phải cấu hình trên cổng INGRESS (cổng tiếp nhận broadcast từ máy client)'],
          ['Trường thông tin cốt lõi', 'giaddr (Gateway IP Address): Được router điền địa chỉ IP của interface mình'],
          ['Các dịch vụ UDP được relay', 'DHCP/BOOTP (cổng 67/68), DNS (53), TFTP (69), Time (37), TACACS (49), NTP (123)']
        ]
      },
      takeaway: 'Ghi nhớ trọng tâm thi: Lệnh ip helper-address phải được gán trực tiếp trên interface của Router nối với phân đoạn mạng của máy Client (nơi phát sinh broadcast).'
    },

    // 10. Cơ chế Dự phòng Gateway HSRP & Preemption (FHRP/HSRP)
    'fhrp_hsrp': {
      title: 'Cơ chế dự phòng cổng ngõ mặc định HSRP (Hot Standby Router Protocol)',
      badge: 'First Hop Redundancy / HSRP Cisco',
      summary: 'HSRP cung cấp tính sẵn sàng cao cho mạng bằng cách cấu hình hai hoặc nhiều router tạo thành một Router ảo (Virtual Router). Các host trỏ Default Gateway vào Virtual IP; khi Active Router lỗi, Standby Router sẽ tự động thay thế ngay tức khắc.',
      steps: [
        {
          num: 1,
          name: 'Bầu chọn Active Router và Standby Router',
          desc: 'Các router trong HSRP Group trao đổi gói Hello (mỗi 3s). Router có Priority cao nhất (mặc định 100) sẽ trở thành Active Router; router có Priority kế tiếp làm Standby Router. Cả hai chia sẻ chung 1 Virtual IP và Virtual MAC (0000.0c07.acXX).',
          activeNode: 'node-r1',
          packetLabel: 'HSRP Hello (3s)'
        },
        {
          num: 2,
          name: 'Chuyển tiếp lưu lượng ở trạng thái bình thường',
          desc: 'Host gửi dữ liệu ra Internet tới Virtual IP/MAC. Active Router chịu trách nhiệm xử lý và chuyển tiếp toàn bộ lưu lượng này. Standby Router chỉ lắng nghe gói Hello và sẵn sàng dự phòng.',
          activeNode: 'node-active',
          packetLabel: 'Forward via Active'
        },
        {
          num: 3,
          name: 'Phát hiện sự cố đứt kết nối (Failover)',
          desc: 'Active Router gặp sự cố ngừng hoạt động. Standby Router không nhận được gói tin Hello trong suốt thời gian Hold Timer (mặc định 10s - gấp 3 lần Hello Timer).',
          activeNode: 'node-fail',
          packetLabel: 'Hold Timer Expired (10s)'
        },
        {
          num: 4,
          name: 'Standby Router tiếp quản và gửi Gratuitous ARP',
          desc: 'Standby Router ngay lập tức chuyển trạng thái thành Active Router mới và phát gói Gratuitous ARP để cập nhật bảng MAC của Switch. Dòng dữ liệu của Host tiếp tục được chuyển tiếp thông suốt mà người dùng không hề nhận ra sự cố.',
          activeNode: 'node-r2',
          packetLabel: 'Standby -> Active (GARP)'
        }
      ],
      nodes: [
        { id: 'node-pc', icon: '💻', label: 'Host Trạm', role: 'GW: 192.168.1.1 (VIP)', detail: 'Trỏ Default Gateway vào IP Router Ảo' },
        { id: 'node-r1', icon: '🛡️', label: 'Router R1 (Active)', role: 'Priority: 150 (Cao nhất)', detail: 'Xử lý dữ liệu | Gửi Hello mỗi 3s' },
        { id: 'node-vip', icon: '☁️', label: 'Virtual Router HSRP', role: 'VIP: 192.168.1.1', detail: 'Virtual MAC: 0000.0c07.ac01 (Group 1)' },
        { id: 'node-r2', icon: '🛡️', label: 'Router R2 (Standby)', role: 'Priority: 100', detail: 'Chờ đợi | Kích hoạt sau 10s Hold time' }
      ],
      specTable: {
        headers: ['Thuộc tính HSRP', 'Phiên bản HSRPv1', 'Phiên bản HSRPv2'],
        rows: [
          ['Định dạng Virtual MAC', '0000.0c07.acXX (XX là số Group hex)', '0000.0c9f.fXXX (XXX là số Group hex)'],
          ['Số lượng Group tối đa', '0 đến 255', '0 đến 4095'],
          ['Địa chỉ Multicast Hello', '224.0.0.2', '224.0.0.102 (Hỗ trợ cả IPv6 FF02::66)'],
          ['Tính năng Preempt', 'standby <group> preempt', 'Cho phép router ưu tiên cao giành lại quyền Active ngay khi nó sống lại']
        ]
      },
      takeaway: 'Ghi nhớ trọng tâm thi: Khi Active Router bị sự cố, Standby Router sẽ đợi hết Hold Time (10 giây) trước khi chính thức chuyển đổi thành Active Router mới.'
    },

    // 11. Bảo mật chuyển mạch Lớp 2 (Port Security & Chống Giả mạo ARP/DHCP)
    'l2_security_defense': {
      title: 'Bảo mật chuyển mạch Layer 2: Port Security, DHCP Snooping & DAI',
      badge: 'Layer 2 Security & Threat Mitigation',
      summary: 'Các switch Lớp 2 đối mặt với nhiều nguy cơ tấn công như MAC Address Flooding, DHCP Starvation và ARP Spoofing. Cisco cung cấp bộ 3 giải pháp bảo vệ toàn diện: Port Security, DHCP Snooping và Dynamic ARP Inspection (DAI).',
      steps: [
        {
          num: 1,
          name: 'Port Security: Kiểm soát địa chỉ MAC hợp lệ',
          desc: 'Switch giới hạn số lượng MAC tối đa trên cổng (ví dụ: maximum 1 sticky). Nếu thiết bị lạ cắm vào, chế độ vi phạm (Violation Mode) quyết định hành động: Protect (drop im lặng), Restrict (drop + log + tăng đếm), hoặc Shutdown (đưa cổng về err-disabled).',
          activeNode: 'node-psec',
          packetLabel: 'MAC Violation Check'
        },
        {
          num: 2,
          name: 'DHCP Snooping: Lọc máy chủ DHCP giả mạo',
          desc: 'Switch chia các cổng thành Trusted (nối Server/Uplink) và Untrusted (nối máy Client). Gói tin DHCPOFFER/ACK chỉ được phép đi qua cổng Trusted; nếu cổng Untrusted nhận được gói Offer từ Rogue Server, switch sẽ chặn đứng ngay lập tức.',
          activeNode: 'node-snoop',
          packetLabel: 'Filter Rogue DHCP'
        },
        {
          num: 3,
          name: 'Xây dựng bảng DHCP Snooping Binding Table',
          desc: 'Trong quá trình máy trạm xin IP hợp lệ qua cổng Untrusted, switch âm thầm theo dõi và ghi lại: Địa chỉ MAC, IP được cấp, VLAN, Cổng giao tiếp và Thời gian thuê vào cơ sở dữ liệu Binding Table.',
          activeNode: 'node-table',
          packetLabel: 'Build Binding DB'
        },
        {
          num: 4,
          name: 'Dynamic ARP Inspection (DAI): Ngăn chặn ARP Spoofing',
          desc: 'DAI kiểm tra mọi gói tin ARP Reply trên cổng Untrusted. Switch đối chiếu cặp Source IP / MAC trong gói ARP với bảng DHCP Snooping Binding Table. Nếu khớp -> Chuyển tiếp; nếu không khớp (dấu hiệu đầu độc ARP) -> Drop ngay lập tức.',
          activeNode: 'node-dai',
          packetLabel: 'Verify ARP vs DB'
        }
      ],
      nodes: [
        { id: 'node-pc', icon: '💻', label: 'Client Hợp Lệ', role: 'Cổng Untrusted', detail: 'Được cấp IP hợp lệ qua DHCP' },
        { id: 'node-sw', icon: '🛡️', label: 'Catalyst Switch', role: 'Security Guard', detail: 'Bật Port Security, Snooping & DAI' },
        { id: 'node-hacker', icon: '🦹', label: 'Kẻ Tấn Công', role: 'Gửi ARP Giả Mạo', detail: 'Bị switch drop gói tin và khóa cổng' },
        { id: 'node-srv', icon: '🗄️', label: 'DHCP Server Chuẩn', role: 'Cổng Trusted', detail: 'Chỉ định là nguồn cấp phát tin cậy' }
      ],
      specTable: {
        headers: ['Tính năng bảo mật', 'Chống loại tấn công', 'Hành vi kỹ thuật cốt lõi'],
        rows: [
          ['Port Security (Shutdown)', 'MAC Address Table Flooding', 'Đưa cổng vi phạm về trạng thái err-disabled, đèn LED cổng chuyển màu cam.'],
          ['DHCP Snooping', 'Rogue DHCP Server & Starvation', 'Chỉ cho phép gói DHCP Server (Offer/ACK) xuất hiện trên cổng Trusted.'],
          ['Dynamic ARP Inspection (DAI)', 'Man-in-the-Middle (ARP Poisoning)', 'Sử dụng bảng DHCP Snooping Binding để kiểm thực tính hợp lệ của mọi gói ARP.'],
          ['IP Source Guard (IPSG)', 'IP Spoofing (Giả mạo địa chỉ IP)', 'Lọc lưu lượng IP dựa trên bảng DHCP Snooping Binding.']
        ]
      },
      takeaway: 'Ghi nhớ trọng tâm thi: Dynamic ARP Inspection (DAI) bắt buộc phải dựa vào cơ sở dữ liệu của DHCP Snooping Binding Table để kiểm tra tính hợp lệ của gói tin ARP.'
    },

    // 12. Nguyên lý chọn tuyến: Longest Prefix Match & Floating Static Route
    'routing_lpm_static': {
      title: 'Nguyên lý chọn tuyến định tuyến: Longest Prefix Match (LPM) & Tuyến Tĩnh',
      badge: 'Routing Concepts & Longest Match',
      summary: 'Khi chuyển tiếp một gói tin IP, router duyệt bảng định tuyến để tìm tuyến khớp. Nguyên tắc vàng tối cao của định tuyến IP là Tiền tố dài nhất (Longest Prefix Match - nhiều bit 1 nhất trong subnet mask) luôn luôn chiến thắng.',
      steps: [
        {
          num: 1,
          name: 'Router nhận gói tin và đọc Destination IP',
          desc: 'Router nhận gói tin IP trên cổng Ingress, bóc tách tiêu đề Lớp 2 và đọc địa chỉ IP đích (ví dụ: Destination IP là 192.168.10.130).',
          activeNode: 'node-ingress',
          packetLabel: 'Dst IP: 192.168.10.130'
        },
        {
          num: 2,
          name: 'So khớp các mục trong Bảng định tuyến (LPM)',
          desc: 'Router so sánh Destination IP với các tuyến đường trong bảng: Tuyến A (192.168.10.0/24 - khớp 24 bit), Tuyến B (192.168.10.128/28 - khớp 28 bit), Tuyến mặc định (0.0.0.0/0 - khớp 0 bit).',
          activeNode: 'node-table',
          packetLabel: 'LPM: /28 vs /24 vs /0'
        },
        {
          num: 3,
          name: 'Chọn tuyến có Prefix dài nhất (/28 thắng)',
          desc: 'Tuyến 192.168.10.128/28 có độ dài tiền tố dài nhất (28 bit khớp) nên chiến thắng tuyệt đối. Router hoàn toàn bỏ qua Administrative Distance (AD) khi độ dài prefix khác nhau.',
          activeNode: 'node-lpm',
          packetLabel: '/28 Longest Match Wins'
        },
        {
          num: 4,
          name: 'Đóng gói lại Lớp 2 và chuyển tiếp ra Next-Hop',
          desc: 'Router xác định Next-Hop IP hoặc cổng Egress tương ứng của tuyến /28, tra bảng ARP để lấy Destination MAC, đóng gói lại khung Ethernet và gửi ra ngoài.',
          activeNode: 'node-egress',
          packetLabel: 'Egress Interface'
        }
      ],
      nodes: [
        { id: 'node-pkt', icon: '📨', label: 'Gói tin IP', role: 'Dst: 192.168.10.130', detail: 'Đi vào cổng Ingress của Router' },
        { id: 'node-router', icon: '🛡️', label: 'Router Định Tuyến', role: 'Bảng Routing Table', detail: 'Áp dụng thuật toán Longest Prefix Match' },
        { id: 'node-dest', icon: '🎯', label: 'Mạng Đích Egress', role: 'Tuyến /28 được chọn', detail: 'Chuyển tiếp chính xác theo tuyến dài nhất' }
      ],
      specTable: {
        headers: ['Nguồn tuyến (Route Source)', 'Administrative Distance (AD)', 'Mô tả kỹ thuật'],
        rows: [
          ['Connected (Mạng kết nối trực tiếp)', '0', 'Độ tin cậy cao nhất, tự động tạo khi interface có IP và no shutdown.'],
          ['Static Route (Tuyến tĩnh thông thường)', '1', 'Quản trị viên cấu hình thủ công, cực kỳ tin cậy.'],
          ['EIGRP (Nội bộ)', '90', 'Giao thức định tuyến nâng cao của Cisco.'],
          ['OSPF', '110', 'Giao thức định tuyến chuẩn mở dạng Link-State.'],
          ['RIP', '120', 'Giao thức định tuyến dạng Distance-Vector.'],
          ['Floating Static Route', 'Ví dụ: 5 hoặc 115', 'Tuyến tĩnh dự phòng có AD cao hơn tuyến chính, chỉ kích hoạt khi tuyến chính đứt.']
        ]
      },
      takeaway: 'Nguyên tắc vàng: Tiền tố dài nhất (Longest Prefix Match) luôn được ưu tiên hàng đầu. Administrative Distance chỉ được xét đến khi có 2 giao thức khác nhau cung cấp tuyến đường tới cùng một mạng với cùng độ dài prefix.'
    }
  };

  // Ánh xạ CHÍNH XÁC 1-1 và theo nhóm cơ chế lý thuyết cho các câu hỏi thực sự hỏi về cơ chế
  // TUYỆT ĐỐI KHÔNG DÙNG WILDCARD QUÉT BỪA BÃI ĐỂ TRÁNH SAI LỆCH CÂU HỎI.
  window.QUESTION_VISUAL_MAP = {
    // 1. Switch Boot Sequence
    "m1-4_q2": "switch_boot_sequence",
    "m1-4_q12": "switch_boot_sequence",

    // 2. Switch Frame Forwarding (Store-and-Forward vs Cut-Through)
    "m1-4_q16": "switch_forwarding_methods",
    "m1-4_q22": "switch_forwarding_methods",

    // 3. 802.1Q VLAN Tagging & Trunking
    "final_q37": "vlan_tagging",
    "final_q38": "vlan_tagging",

    // 4. Inter-VLAN Router-on-a-Stick
    "final_q1": "inter_vlan_roas",
    "final_q2": "inter_vlan_roas",
    "final_q3": "inter_vlan_roas",

    // 5. STP Root Election & Port Roles
    "m5-6_q2": "stp_root_election",
    "m5-6_q16": "stp_root_election",
    "m5-6_q33": "stp_root_election",
    "final_q22": "stp_root_election",

    // 6. STP Port States
    "m5-6_q7": "stp_port_states",
    "m5-6_q10": "stp_port_states",
    "m5-6_q11": "stp_port_states",
    "m5-6_q31": "stp_port_states",

    // 7. EtherChannel Bundling & Negotiation
    "m5-6_q24": "etherchannel_bundling",
    "m5-6_q25": "etherchannel_bundling",
    "m5-6_q34": "etherchannel_bundling",
    "m5-6_q35": "etherchannel_bundling",
    "m5-6_q36": "etherchannel_bundling",
    "m5-6_q49": "etherchannel_bundling",
    "final_q34": "etherchannel_bundling",
    "final_q35": "etherchannel_bundling",

    // 8. DHCPv4 DORA Process
    "m7-9_q18": "dhcpv4_dora",
    "m7-9_q42": "dhcpv4_dora",
    "final_q21": "dhcpv4_dora",
    "final_q41": "dhcpv4_dora",

    // 9. DHCP Relay Agent (ip helper-address)
    "m7-9_q15": "dhcp_relay_agent",
    "final_q54": "dhcp_relay_agent",

    // 10. FHRP / HSRP Failover & Redundancy
    "m7-9_q40": "fhrp_hsrp",
    "m7-9_q58": "fhrp_hsrp",
    "final_q18": "fhrp_hsrp",

    // 11. Layer 2 Security Defense (Port Security, Snooping, DAI)
    "m10-13_q8": "l2_security_defense",
    "final_q11": "l2_security_defense",
    "final_q44": "l2_security_defense",
    "final_q45": "l2_security_defense",
    "final_q46": "l2_security_defense",
    "final_q47": "l2_security_defense",

    // 12. Routing Longest Prefix Match (LPM) & Static Routes
    "m14-16_q8": "routing_lpm_static",
    "m14-16_q47": "routing_lpm_static",
    "m14-16_q55": "routing_lpm_static",
    "m14-16_q57": "routing_lpm_static",
    "m14-16_q59": "routing_lpm_static",
    "m14-16_q61": "routing_lpm_static",
    "m14-16_q63": "routing_lpm_static",
    "m14-16_q172": "routing_lpm_static",
    "final_q8": "routing_lpm_static",
    "final_q9": "routing_lpm_static",
    "final_q29": "routing_lpm_static",
    "final_q30": "routing_lpm_static"
  };

})();
