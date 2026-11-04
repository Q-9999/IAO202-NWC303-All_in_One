// CCNA 2 v7 (SRWE) - Modern Interactive Mechanism Visualizations (Live Motion)
// Ngôn ngữ chuẩn kỹ thuật, nghĩa cơ bản trực diện (basic-meaning), không ẩn dụ, không nói quá.

(function() {
  'use strict';

  window.MECHANISM_VISUALIZATIONS = {
  "switch_boot_sequence": {
    "title": "Quy trình 5 bước khởi động Switch Cisco (Switch Boot Sequence)",
    "badge": "Switching Fundamentals / Bootup Process",
    "summary": "Khi switch Cisco được cấp điện, hệ thống thực hiện tuần tự 5 bước khởi động để kiểm tra phần cứng, thực thi trình nạp khởi động (Boot Loader) và nạp hệ điều hành Cisco IOS vào bộ nhớ RAM.",
    "topology": {
      "nodes": [
        {
          "id": "rom",
          "label": "ROM",
          "sub": "POST & Bootloader",
          "x": 80,
          "y": 80
        },
        {
          "id": "cpu",
          "label": "CPU",
          "sub": "Thanh ghi & Logic",
          "x": 230,
          "y": 80
        },
        {
          "id": "flash",
          "label": "Bộ nhớ Flash",
          "sub": "flash: IOS image",
          "x": 390,
          "y": 80
        },
        {
          "id": "ram",
          "label": "DRAM / NVRAM",
          "sub": "Running IOS & Config",
          "x": 540,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "rom",
          "to": "cpu",
          "label": "Thực thi Boot Loader"
        },
        {
          "from": "cpu",
          "to": "flash",
          "label": "Định vị tệp tin IOS"
        },
        {
          "from": "flash",
          "to": "ram",
          "label": "Nạp vào RAM"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Kiểm tra phần cứng POST (Power-On Self-Test)",
        "desc": "Switch thực thi chương trình POST lưu trữ trong ROM để kiểm tra phần cứng CPU, DRAM và Flash. Đèn LED hệ thống hiển thị trạng thái tự kiểm tra.",
        "fromNode": "rom",
        "toNode": "cpu",
        "packetLabel": "POST Check",
        "status": "forward",
        "actionText": "Kiểm tra phần cứng ROM, CPU, DRAM, Flash: Hợp lệ"
      },
      {
        "num": 2,
        "name": "Nạp trình nạp khởi động (Boot Loader)",
        "desc": "Sau khi POST hoàn tất thành công, mã Boot Loader được nạp từ ROM vào RAM. Boot Loader cung cấp quyền điều khiển cấp thấp cho thiết bị.",
        "fromNode": "rom",
        "toNode": "cpu",
        "packetLabel": "Boot Loader",
        "status": "forward",
        "actionText": "Thực thi trình nạp khởi động Boot Loader"
      },
      {
        "num": 3,
        "name": "Khởi tạo CPU và quản lý bộ nhớ cấp thấp",
        "desc": "Boot Loader khởi tạo các thanh ghi CPU, điều khiển ánh xạ vùng nhớ vật lý và chuẩn bị điều khiển hệ thống tệp tin flash.",
        "fromNode": "cpu",
        "toNode": "cpu",
        "packetLabel": "CPU Init",
        "status": "forward",
        "actionText": "Khởi tạo thanh ghi CPU và ánh xạ bộ nhớ"
      },
      {
        "num": 4,
        "name": "Khởi tạo hệ thống tệp trên Flash",
        "desc": "Boot Loader kích hoạt hệ thống tệp flash (flash:) để tìm kiếm và định vị tệp hình ảnh hệ điều hành Cisco IOS được chỉ định bởi biến BOOT.",
        "fromNode": "cpu",
        "toNode": "flash",
        "packetLabel": "Find IOS",
        "status": "forward",
        "actionText": "Định vị tệp tin c2960-lanbasek9-mz.bin trong flash:"
      },
      {
        "num": 5,
        "name": "Nạp và thực thi Cisco IOS vào DRAM",
        "desc": "Hệ thống nạp tệp hình ảnh Cisco IOS vào bộ nhớ DRAM và chuyển quyền điều hành sang IOS. IOS nạp cấu hình khởi động (startup-config) từ NVRAM vào RAM.",
        "fromNode": "flash",
        "toNode": "ram",
        "packetLabel": "Run IOS",
        "status": "forward",
        "actionText": "Nạp IOS vào DRAM và tải file cấu hình NVRAM"
      }
    ],
    "specTable": {
      "headers": [
        "Giai đoạn",
        "Vị trí thực thi",
        "Hành động kỹ thuật"
      ],
      "rows": [
        [
          "Bước 1: POST",
          "ROM",
          "Tự kiểm tra toàn diện phần cứng khi cấp nguồn"
        ],
        [
          "Bước 2: Boot Loader",
          "ROM -> RAM",
          "Thực thi ngay sau POST để chuẩn bị nạp hệ điều hành"
        ],
        [
          "Bước 3: CPU Low-level",
          "CPU Registers",
          "Khởi tạo bộ nhớ đệm và xung nhịp thanh ghi"
        ],
        [
          "Bước 4: Flash Init",
          "Flash File System",
          "Định vị tệp tin ảnh IOS (.bin)"
        ],
        [
          "Bước 5: Nạp IOS",
          "DRAM / NVRAM",
          "Giải nén IOS vào RAM và thực thi startup-config"
        ]
      ]
    },
    "takeaway": "Trình nạp khởi động Boot Loader được thực thi ngay sau khi chương trình kiểm tra phần cứng POST kết thúc thành công."
  },
  "switch_forwarding_methods": {
    "title": "Phương pháp chuyển tiếp khung của Switch (Store-and-Forward vs Cut-Through)",
    "badge": "Frame Forwarding / Error Checking",
    "summary": "Switch Lớp 2 đưa ra quyết định chuyển tiếp khung dựa trên bảng MAC (CAM Table) và sử dụng hai phương pháp chính: Store-and-Forward (kiểm tra toàn bộ lỗi khung) hoặc Cut-Through (giảm độ trễ chuyển tiếp).",
    "topology": {
      "nodes": [
        {
          "id": "host_a",
          "label": "Host A",
          "sub": "Nguồn truyền",
          "x": 70,
          "y": 80
        },
        {
          "id": "ingress",
          "label": "Cổng Ingress",
          "sub": "Đọc Preamble & MAC",
          "x": 230,
          "y": 80
        },
        {
          "id": "buffer",
          "label": "Bộ đệm Switch",
          "sub": "Bảng CAM & FCS",
          "x": 390,
          "y": 80
        },
        {
          "id": "host_b",
          "label": "Host B",
          "sub": "Đích đến Egress",
          "x": 550,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "host_a",
          "to": "ingress",
          "label": "Khung vào"
        },
        {
          "from": "ingress",
          "to": "buffer",
          "label": "Xử lý CAM / FCS"
        },
        {
          "from": "buffer",
          "to": "host_b",
          "label": "Chuyển tiếp ra Egress"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Khung Ethernet đi vào cổng Ingress",
        "desc": "Khung dữ liệu đi vào cổng switch. Switch đọc phần mở đầu Preamble và Start Frame Delimiter (SFD) để xác định điểm bắt đầu của khung.",
        "fromNode": "host_a",
        "toNode": "ingress",
        "packetLabel": "Preamble/SFD",
        "status": "forward",
        "actionText": "Nhận tín hiệu bit stream tại cổng Ingress"
      },
      {
        "num": 2,
        "name": "Đọc Source MAC và học vào bảng CAM",
        "desc": "Switch đọc địa chỉ MAC nguồn (Source MAC) và ghi nhận vào bảng địa chỉ MAC (CAM Table) kèm số hiệu cổng và VLAN tương ứng.",
        "fromNode": "ingress",
        "toNode": "buffer",
        "packetLabel": "Learn Src MAC",
        "status": "forward",
        "actionText": "Ghi nhận địa chỉ Source MAC vào bảng CAM"
      },
      {
        "num": 3,
        "name": "Đọc Destination MAC và tra cứu cổng chuyển tiếp",
        "desc": "Switch đọc 6 byte Destination MAC để tra cứu cổng chuyển tiếp trong bảng CAM. Nếu có mục tương ứng, switch chuẩn bị chuyển tiếp unicast.",
        "fromNode": "buffer",
        "toNode": "buffer",
        "packetLabel": "Lookup Dst MAC",
        "status": "forward",
        "actionText": "Tra cứu cổng ra Egress trong bảng CAM"
      },
      {
        "num": 4,
        "name": "Quyết định chuyển tiếp: Store-and-Forward vs Cut-Through",
        "desc": "Store-and-Forward: Switch nhận đủ toàn bộ khung, tính toán mã kiểm tra Frame Check Sequence (FCS/CRC). Nếu hợp lệ mới chuyển tiếp ra cổng Egress; nếu lỗi (runt, bad FCS) thì thả bỏ (drop). Cut-Through: Chuyển tiếp ngay sau khi đọc xong Destination MAC.",
        "fromNode": "buffer",
        "toNode": "host_b",
        "packetLabel": "Forward/Drop",
        "status": "forward",
        "actionText": "Store-and-Forward kiểm tra mã FCS trước khi chuyển tiếp"
      }
    ],
    "specTable": {
      "headers": [
        "Tiêu chí kỹ thuật",
        "Store-and-Forward",
        "Cut-Through (Fast-Forward)"
      ],
      "rows": [
        [
          "Thời điểm chuyển tiếp",
          "Sau khi đã tiếp nhận 100% dung lượng khung",
          "Ngay sau khi đọc xong 6 byte Destination MAC"
        ],
        [
          "Kiểm tra lỗi FCS/CRC",
          "Có kiểm tra, ngăn chặn chuyển tiếp khung lỗi",
          "Không kiểm tra lỗi khung trước khi đẩy đi"
        ],
        [
          "Độ trễ xử lý (Latency)",
          "Độ trễ phụ thuộc vào kích thước của khung",
          "Độ trễ cố định và ở mức thấp nhất"
        ],
        [
          "Hỗ trợ cổng lệch tốc độ",
          "Hỗ trợ thông qua bộ đệm lưu trữ",
          "Không hỗ trợ chuyển tiếp nếu cổng ra lệch tốc độ"
        ]
      ]
    },
    "takeaway": "Store-and-Forward là phương pháp duy nhất đảm bảo khung dữ liệu hoàn toàn không có lỗi (error-free) trước khi chuyển tiếp."
  },
  "vlan_tagging": {
    "title": "Cơ chế gắn thẻ 802.1Q trên đường Trunk (802.1Q VLAN Tagging)",
    "badge": "IEEE 802.1Q / Trunking",
    "summary": "Đường truyền Trunk cho phép truyền lưu lượng của nhiều VLAN qua cùng một liên kết vật lý. Switch chèn thẻ 802.1Q (4 byte) vào tiêu đề khung Ethernet khi chuyển tiếp qua cổng Trunk để switch đối diện phân biệt được VLAN ID.",
    "topology": {
      "nodes": [
        {
          "id": "host_a",
          "label": "Host A",
          "sub": "VLAN 10 Client",
          "x": 70,
          "y": 80
        },
        {
          "id": "sw1",
          "label": "Switch 1",
          "sub": "Fa0/24 Trunk",
          "x": 230,
          "y": 80
        },
        {
          "id": "sw2",
          "label": "Switch 2",
          "sub": "Fa0/24 Trunk",
          "x": 390,
          "y": 80
        },
        {
          "id": "host_b",
          "label": "Host B",
          "sub": "VLAN 10 Destination",
          "x": 550,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "host_a",
          "to": "sw1",
          "label": "Access Fa0/1"
        },
        {
          "from": "sw1",
          "to": "sw2",
          "label": "Trunk 802.1Q"
        },
        {
          "from": "sw2",
          "to": "host_b",
          "label": "Access Fa0/2"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Host A gửi khung không gắn thẻ vào cổng Access",
        "desc": "Host A thuộc VLAN 10 gửi khung Ethernet tiêu chuẩn (không có thẻ VLAN - Untagged) vào cổng Fa0/1 của Switch 1. Cổng này được cấu hình chế độ Access thuộc VLAN 10.",
        "fromNode": "host_a",
        "toNode": "sw1",
        "packetLabel": "Untagged Frame",
        "status": "forward",
        "actionText": "Tiếp nhận khung Untagged tại cổng Access Fa0/1"
      },
      {
        "num": 2,
        "name": "Switch 1 chèn thẻ 802.1Q trước khi đưa ra cổng Trunk",
        "desc": "Switch 1 nhận diện đích đến cần đi qua đường Trunk Fa0/24. Switch chèn tiêu đề 802.1Q kích thước 4 byte vào ngay sau trường Source MAC của khung dữ liệu.",
        "fromNode": "sw1",
        "toNode": "sw1",
        "packetLabel": "Tag VID=10",
        "status": "forward",
        "actionText": "Chèn thẻ 802.1Q 4 byte (VLAN ID = 10, TPID = 0x8100)"
      },
      {
        "num": 3,
        "name": "Truyền tải khung có thẻ qua đường Trunk",
        "desc": "Khung đã được gắn thẻ di chuyển qua cáp mạng kết nối giữa Switch 1 và Switch 2. Nếu lưu lượng thuộc Native VLAN (mặc định là VLAN 1), khung sẽ không được gắn thẻ.",
        "fromNode": "sw1",
        "toNode": "sw2",
        "packetLabel": "802.1Q Tagged",
        "status": "forward",
        "actionText": "Truyền khung qua liên kết Trunk Fa0/24"
      },
      {
        "num": 4,
        "name": "Switch 2 bóc thẻ và chuyển tiếp khung Untagged đến Host B",
        "desc": "Switch 2 tiếp nhận khung tại cổng Trunk, đọc trường VLAN ID (VID = 10), gỡ bỏ thẻ 802.1Q và chuyển tiếp khung nguyên bản ra cổng Access Fa0/2 tới Host B.",
        "fromNode": "sw2",
        "toNode": "host_b",
        "packetLabel": "Untagged Frame",
        "status": "forward",
        "actionText": "Gỡ bỏ thẻ 802.1Q và đẩy khung Untagged ra cổng Access"
      }
    ],
    "specTable": {
      "headers": [
        "Trường dữ liệu trong thẻ 802.1Q",
        "Độ dài",
        "Chức năng kỹ thuật"
      ],
      "rows": [
        [
          "TPID (Tag Protocol Identifier)",
          "16 bits (2 bytes)",
          "Giá trị cố định 0x8100 để xác định khung gắn thẻ 802.1Q"
        ],
        [
          "PCP / Priority (Priority Code Point)",
          "3 bits",
          "Chỉ định mức ưu tiên lưu lượng Class of Service (CoS) từ 0 đến 7"
        ],
        [
          "DEI / CFI (Drop Eligible Indicator)",
          "1 bit",
          "Chỉ định khả năng chấp nhận loại bỏ khung khi xảy ra tắc nghẽn"
        ],
        [
          "VID (VLAN Identifier)",
          "12 bits",
          "Định danh số hiệu VLAN (hỗ trợ từ 1 đến 4094 VLAN)"
        ]
      ]
    },
    "takeaway": "Cổng Access không bao giờ gửi hoặc nhận khung có gắn thẻ 802.1Q. Thẻ 802.1Q chỉ tồn tại khi khung truyền trên liên kết Trunk."
  },
  "inter_vlan_roas": {
    "title": "Định tuyến giữa các VLAN (Router-on-a-Stick)",
    "badge": "Network Layer / Inter-VLAN Routing",
    "summary": "Các thiết bị thuộc các VLAN khác nhau không thể giao tiếp trực tiếp ở Lớp 2. Router-on-a-Stick sử dụng một giao diện vật lý duy nhất của Router chia thành các giao diện con (Subinterfaces) để định tuyến giữa các VLAN.",
    "topology": {
      "nodes": [
        {
          "id": "host_a",
          "label": "Host A (VLAN 10)",
          "sub": "192.168.10.10",
          "x": 80,
          "y": 120
        },
        {
          "id": "sw",
          "label": "Switch 2960",
          "sub": "Trunk G0/1",
          "x": 310,
          "y": 120
        },
        {
          "id": "host_b",
          "label": "Host B (VLAN 20)",
          "sub": "192.168.20.20",
          "x": 540,
          "y": 120
        },
        {
          "id": "router",
          "label": "Router (ROAS)",
          "sub": "g0/0.10 & g0/0.20",
          "x": 310,
          "y": 30
        }
      ],
      "links": [
        {
          "from": "host_a",
          "to": "sw",
          "label": "Access Fa0/1"
        },
        {
          "from": "sw",
          "to": "router",
          "label": "Trunk Link"
        },
        {
          "from": "sw",
          "to": "host_b",
          "label": "Access Fa0/2"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Host A gửi gói tin đến Default Gateway",
        "desc": "Host A (192.168.10.10) gửi gói tin đến Host B (192.168.20.20). Do khác lớp mạng, Host A đóng gói khung đến địa chỉ MAC của Default Gateway (Router subinterface g0/0.10).",
        "fromNode": "host_a",
        "toNode": "sw",
        "packetLabel": "IP: 10.10 -> 20.20",
        "status": "forward",
        "actionText": "Gửi khung đến địa chỉ Default Gateway 192.168.10.1"
      },
      {
        "num": 2,
        "name": "Switch gắn thẻ 802.1Q và chuyển lên Router",
        "desc": "Switch tiếp nhận khung tại cổng Access VLAN 10, gắn thẻ 802.1Q với VID = 10 và chuyển tiếp qua đường Trunk lên giao diện vật lý của Router.",
        "fromNode": "sw",
        "toNode": "router",
        "packetLabel": "Tagged VID=10",
        "status": "forward",
        "actionText": "Gắn thẻ VID=10 và gửi qua Trunk lên Router"
      },
      {
        "num": 3,
        "name": "Router định tuyến Lớp 3 và gán thẻ VLAN mới",
        "desc": "Router tiếp nhận khung tại subinterface g0/0.10, bóc thẻ 802.1Q. Router tra cứu bảng định tuyến, xác định mạng đích 192.168.20.0/24 nằm ở subinterface g0/0.20, đóng gói lại với thẻ mới VID = 20.",
        "fromNode": "router",
        "toNode": "sw",
        "packetLabel": "Tagged VID=20",
        "status": "forward",
        "actionText": "Định tuyến L3 sang g0/0.20 và gán thẻ VID=20"
      },
      {
        "num": 4,
        "name": "Switch bóc thẻ và chuyển tiếp đến Host B",
        "desc": "Switch nhận khung tại cổng Trunk với VID = 20, gỡ bỏ thẻ 802.1Q và chuyển tiếp khung Untagged ra cổng Access VLAN 20 đến Host B.",
        "fromNode": "sw",
        "toNode": "host_b",
        "packetLabel": "Untagged Frame",
        "status": "forward",
        "actionText": "Gỡ bỏ thẻ và chuyển tiếp khung đến Host B"
      }
    ],
    "specTable": {
      "headers": [
        "Phương pháp Inter-VLAN",
        "Cấu hình Router",
        "Đặc tính kỹ thuật"
      ],
      "rows": [
        [
          "Router-on-a-Stick",
          "encapsulation dot1q <vlan_id>",
          "Chia 1 cổng vật lý thành nhiều giao diện con logic (Subinterface)"
        ],
        [
          "Layer 3 Switch SVI",
          "interface vlan <vlan_id>",
          "Chuyển mạch gói tin tốc độ phần cứng ASIC, không bị nghẽn đường truyền vật lý"
        ]
      ]
    },
    "takeaway": "Mỗi Subinterface trên Router bắt buộc phải được cấu hình lệnh encapsulation dot1Q <vlan-id> trước khi gán địa chỉ IP bằng lệnh ip address."
  },
  "stp_root_election": {
    "title": "Bầu chọn Root Bridge và Xác định vai trò cổng STP (IEEE 802.1D)",
    "badge": "Layer 2 Redundancy / STP Root Election",
    "summary": "Spanning Tree Protocol (STP) ngăn ngừa vòng lặp broadcast bằng cách tạo ra một cấu trúc cây không có vòng lặp. Quy trình bắt đầu bằng việc so sánh Bridge ID (BID) để bầu chọn duy nhất một Root Bridge.",
    "topology": {
      "nodes": [
        {
          "id": "s1",
          "label": "Switch S1 (Root)",
          "sub": "Priority: 24576 (Thấp nhất)",
          "x": 310,
          "y": 35
        },
        {
          "id": "s2",
          "label": "Switch S2 (Non-Root)",
          "sub": "Priority: 32768",
          "x": 140,
          "y": 125
        },
        {
          "id": "s3",
          "label": "Switch S3 (Non-Root)",
          "sub": "Priority: 32768",
          "x": 480,
          "y": 125
        }
      ],
      "links": [
        {
          "from": "s1",
          "to": "s2",
          "label": "Root Link"
        },
        {
          "from": "s1",
          "to": "s3",
          "label": "Root Link"
        },
        {
          "from": "s2",
          "to": "s3",
          "label": "Alternate Link (Khóa loop)"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Trao đổi gói tin BPDU Hello giữa các switch",
        "desc": "Khi khởi động, tất cả các switch gửi gói tin BPDU chứa Bridge ID (BID) của mình ra toàn bộ các cổng với chu kỳ 2 giây (Hello Timer).",
        "fromNode": "s2",
        "toNode": "s1",
        "packetLabel": "BPDU Hello",
        "status": "forward",
        "actionText": "Trao đổi Bridge ID qua các gói BPDU"
      },
      {
        "num": 2,
        "name": "So sánh Bridge ID để bầu Root Bridge",
        "desc": "Switch có giá trị Bridge ID nhỏ nhất sẽ được bầu làm Root Bridge. Bridge ID gồm: Bridge Priority (mặc định 32768) + Extended System ID (VLAN ID) + Địa chỉ MAC. S1 có Priority 24576 nhỏ nhất nên được bầu làm Root Bridge.",
        "fromNode": "s1",
        "toNode": "s1",
        "packetLabel": "S1 Wins Root",
        "status": "forward",
        "actionText": "S1 có Bridge ID nhỏ nhất (24576) trở thành Root Bridge"
      },
      {
        "num": 3,
        "name": "Xác định Root Port (RP) trên Non-Root Switch",
        "desc": "Trên mỗi switch không phải Root (S2 và S3), cổng có tổng chi phí đường truyền về Root Bridge (Root Path Cost) thấp nhất được xác định là Root Port (RP) để chuyển tiếp dữ liệu.",
        "fromNode": "s1",
        "toNode": "s2",
        "packetLabel": "Set RP Cost",
        "status": "forward",
        "actionText": "Xác định Root Port (RP) trên switch S2 và S3"
      },
      {
        "num": 4,
        "name": "Xác định Designated Port và Alternate Port (Khóa loop)",
        "desc": "Mọi cổng trên Root Bridge đều là Designated Port (DP). Trên liên kết giữa S2 và S3, cổng của S3 có chi phí cao hơn bị chuyển sang trạng thái Alternate/Blocking để khóa vòng lặp dữ liệu.",
        "fromNode": "s2",
        "toNode": "s3",
        "packetLabel": "Block Port",
        "status": "drop",
        "actionText": "Cổng trên S3 chuyển sang trạng thái Alternate (Blocking)"
      }
    ],
    "specTable": {
      "headers": [
        "Vai trò cổng",
        "Trạng thái hoạt động",
        "Chức năng kỹ thuật"
      ],
      "rows": [
        [
          "Root Port (RP)",
          "Forwarding",
          "Cổng có đường truyền ngắn nhất về Root Bridge (mỗi Non-Root Switch có đúng 1 RP)"
        ],
        [
          "Designated Port (DP)",
          "Forwarding",
          "Cổng chuyển tiếp dữ liệu cho một phân đoạn mạng. MỌI cổng trên Root Bridge đều là DP"
        ],
        [
          "Alternate Port (AP)",
          "Blocking / Discarding",
          "Cổng dự phòng bị khóa để loại trừ vòng lặp, sẵn sàng kích hoạt nếu RP đứt"
        ]
      ]
    },
    "takeaway": "Switch có giá trị Bridge ID nhỏ nhất được bầu làm Root Bridge. Tất cả các cổng đang hoạt động trên Root Bridge luôn ở vai trò Designated Port (DP) và trạng thái Forwarding."
  },
  "stp_port_states": {
    "title": "Chu kỳ chuyển đổi 5 trạng thái cổng STP (STP Port States)",
    "badge": "STP IEEE 802.1D / Port Convergence",
    "summary": "Để ngăn ngừa vòng lặp dữ liệu tạm thời khi cấu trúc mạng thay đổi, cổng switch chạy STP chuẩn 802.1D phải trải qua các trạng thái chuyển tiếp tuần tự kèm các bộ định thời gian.",
    "topology": {
      "nodes": [
        {
          "id": "blocking",
          "label": "Blocking",
          "sub": "Khóa (20s)",
          "x": 80,
          "y": 80
        },
        {
          "id": "listening",
          "label": "Listening",
          "sub": "Lắng nghe (15s)",
          "x": 230,
          "y": 80
        },
        {
          "id": "learning",
          "label": "Learning",
          "sub": "Học MAC (15s)",
          "x": 390,
          "y": 80
        },
        {
          "id": "forwarding",
          "label": "Forwarding",
          "sub": "Chuyển tiếp Data",
          "x": 540,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "blocking",
          "to": "listening",
          "label": "Max Age (20s)"
        },
        {
          "from": "listening",
          "to": "learning",
          "label": "Forward Delay (15s)"
        },
        {
          "from": "learning",
          "to": "forwarding",
          "label": "Forward Delay (15s)"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Trạng thái Blocking (Khóa - Max Age 20s)",
        "desc": "Cổng không chuyển tiếp khung dữ liệu và không học địa chỉ MAC. Cổng chỉ tiếp nhận gói tin BPDU để theo dõi trạng thái mạng.",
        "fromNode": "blocking",
        "toNode": "blocking",
        "packetLabel": "Recv BPDU",
        "status": "forward",
        "actionText": "Chỉ tiếp nhận BPDU | Không học MAC | Không gửi data"
      },
      {
        "num": 2,
        "name": "Trạng thái Listening (Lắng nghe - Forward Delay 15s)",
        "desc": "Sau khi hết thời gian Max Age (20s), cổng chuyển sang Listening. Cổng gửi và nhận BPDU để xác định vai trò Root/Designated/Alternate; chưa học MAC và chưa chuyển tiếp dữ liệu.",
        "fromNode": "blocking",
        "toNode": "listening",
        "packetLabel": "Send/Recv BPDU",
        "status": "forward",
        "actionText": "Xử lý BPDU xác định vai trò cổng | Chưa học MAC"
      },
      {
        "num": 3,
        "name": "Trạng thái Learning (Học địa chỉ MAC - Forward Delay 15s)",
        "desc": "Sau 15 giây Listening, cổng chuyển sang Learning. Cổng tiếp tục nhận/gửi BPDU và bắt đầu học địa chỉ MAC vào bảng CAM; chưa chuyển tiếp khung dữ liệu.",
        "fromNode": "listening",
        "toNode": "learning",
        "packetLabel": "Learn CAM Table",
        "status": "forward",
        "actionText": "Bắt đầu học địa chỉ MAC vào bảng CAM | Chưa chuyển tiếp dữ liệu"
      },
      {
        "num": 4,
        "name": "Trạng thái Forwarding (Chuyển tiếp dữ liệu)",
        "desc": "Sau 15 giây Learning, cổng chính thức chuyển sang trạng thái Forwarding. Cổng chuyển tiếp dữ liệu người dùng, tiếp tục học MAC và xử lý BPDU bình thường.",
        "fromNode": "learning",
        "toNode": "forwarding",
        "packetLabel": "Forward Data",
        "status": "forward",
        "actionText": "Chuyển tiếp dữ liệu người dùng bình thường"
      }
    ],
    "specTable": {
      "headers": [
        "Trạng thái cổng",
        "Nhận BPDU",
        "Gửi BPDU",
        "Học địa chỉ MAC",
        "Chuyển tiếp dữ liệu"
      ],
      "rows": [
        [
          "Blocking",
          "Có",
          "Không",
          "Không",
          "Không"
        ],
        [
          "Listening",
          "Có",
          "Có",
          "Không",
          "Không"
        ],
        [
          "Learning",
          "Có",
          "Có",
          "Có",
          "Không"
        ],
        [
          "Forwarding",
          "Có",
          "Có",
          "Có",
          "Có"
        ],
        [
          "Disabled",
          "Không",
          "Không",
          "Không",
          "Không"
        ]
      ]
    },
    "takeaway": "Hai trạng thái cổng duy nhất mà switch học địa chỉ MAC trong PVST+ là Learning và Forwarding."
  },
  "etherchannel_bundling": {
    "title": "Cơ chế đàm phán gộp cổng EtherChannel (LACP & PAgP)",
    "badge": "Link Aggregation / EtherChannel",
    "summary": "EtherChannel gộp nhiều liên kết Ethernet vật lý thành một liên kết logic duy nhất (Port-Channel) để tăng băng thông và cung cấp khả năng dự phòng không bị STP khóa cổng.",
    "topology": {
      "nodes": [
        {
          "id": "sw1",
          "label": "Switch SW1",
          "sub": "Gi0/1, Gi0/2 (Active)",
          "x": 120,
          "y": 80
        },
        {
          "id": "bundle",
          "label": "Port-Channel 1",
          "sub": "Liên kết logic (2 Gbps)",
          "x": 310,
          "y": 80
        },
        {
          "id": "sw2",
          "label": "Switch SW2",
          "sub": "Gi0/1, Gi0/2 (Passive/Active)",
          "x": 500,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "sw1",
          "to": "bundle",
          "label": "Vật lý Gi0/1 & Gi0/2"
        },
        {
          "from": "bundle",
          "to": "sw2",
          "label": "Vật lý Gi0/1 & Gi0/2"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Kiểm tra tính tương thích cổng vật lý",
        "desc": "Tất cả các cổng vật lý tham gia EtherChannel bắt buộc phải có cùng Tốc độ (Speed), Duplex, VLAN (Access VLAN hoặc Trunk Native VLAN) và dải VLAN được phép qua Trunk.",
        "fromNode": "sw1",
        "toNode": "sw1",
        "packetLabel": "Verify Config",
        "status": "forward",
        "actionText": "Kiểm tra đồng nhất Speed, Duplex, VLAN trên các cổng"
      },
      {
        "num": 2,
        "name": "Trao đổi gói tin đàm phán LACP hoặc PAgP",
        "desc": "Cổng cấu hình chế độ chủ động (LACP active hoặc PAgP desirable) phát các gói tin đàm phán sang switch đối diện để thiết lập thỏa thuận kết nhóm.",
        "fromNode": "sw1",
        "toNode": "sw2",
        "packetLabel": "LACP Request",
        "status": "forward",
        "actionText": "SW1 phát gói đàm phán LACP sang SW2"
      },
      {
        "num": 3,
        "name": "Thiết lập liên kết logic Port-Channel",
        "desc": "Khi hai đầu thỏa mãn điều kiện kết hợp (ví dụ: active + passive hoặc active + active), liên kết logic Port-Channel được thiết lập và chuyển sang trạng thái Up.",
        "fromNode": "sw2",
        "toNode": "bundle",
        "packetLabel": "Port-Channel Up",
        "status": "forward",
        "actionText": "Khởi tạo giao diện logic Port-Channel 1"
      },
      {
        "num": 4,
        "name": "Cân bằng tải lưu lượng (Load Balancing)",
        "desc": "Lưu lượng truyền qua EtherChannel được băm (hash) theo Source MAC, Destination MAC hoặc Source/Dest IP để phân phối đều trên các liên kết vật lý.",
        "fromNode": "sw1",
        "toNode": "sw2",
        "packetLabel": "Hashed Packet",
        "status": "forward",
        "actionText": "Cân bằng tải lưu lượng qua thuật toán băm (Hash)"
      }
    ],
    "specTable": {
      "headers": [
        "Giao thức",
        "Chế độ SW1",
        "Chế độ SW2",
        "Kết quả thiết lập EtherChannel"
      ],
      "rows": [
        [
          "LACP (IEEE 802.3ad)",
          "active",
          "active",
          "Thành công (Cả hai bên cùng chủ động đàm phán)"
        ],
        [
          "LACP (IEEE 802.3ad)",
          "active",
          "passive",
          "Thành công (SW1 chủ động, SW2 phản hồi)"
        ],
        [
          "LACP (IEEE 802.3ad)",
          "passive",
          "passive",
          "Không tạo thành (Cả hai bên cùng thụ động chờ)"
        ],
        [
          "PAgP (Cisco)",
          "desirable",
          "auto hoặc desirable",
          "Thành công (Có ít nhất một bên chủ động)"
        ],
        [
          "PAgP (Cisco)",
          "auto",
          "auto",
          "Không tạo thành (Cả hai bên cùng chờ)"
        ],
        [
          "Static",
          "on",
          "on",
          "Thành công (Gộp cứng cổng, không đàm phán)"
        ]
      ]
    },
    "takeaway": "Để thiết lập thành công EtherChannel, ít nhất một đầu switch phải được cấu hình ở chế độ chủ động (Active đối với LACP, hoặc Desirable đối với PAgP)."
  },
  "dhcpv4_dora": {
    "title": "Quy trình 4 bước cấp phát IP DHCPv4 (Tiến trình DORA)",
    "badge": "IP Services / DHCPv4 Operation",
    "summary": "Giao thức DHCPv4 cho phép máy trạm tự động nhận địa chỉ IPv4, Subnet Mask, Default Gateway và DNS Server thông qua quy trình 4 thông điệp bắt tay DORA.",
    "topology": {
      "nodes": [
        {
          "id": "client",
          "label": "DHCP Client",
          "sub": "0.0.0.0:68",
          "x": 100,
          "y": 80
        },
        {
          "id": "sw",
          "label": "Switch Lớp 2",
          "sub": "Broadcast Domain",
          "x": 310,
          "y": 80
        },
        {
          "id": "server",
          "label": "DHCP Server",
          "sub": "192.168.1.1:67",
          "x": 520,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "client",
          "to": "sw",
          "label": "LAN Access"
        },
        {
          "from": "sw",
          "to": "server",
          "label": "Server Link"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "DHCPDISCOVER: Client phát quảng bá tìm Server",
        "desc": "Client chưa có IP gửi gói tin Broadcast Lớp 2 (FF:FF:FF:FF:FF:FF) và Lớp 3 (255.255.255.255) từ cổng UDP 68 đến cổng UDP 67 để tìm kiếm máy chủ DHCP trong mạng.",
        "fromNode": "client",
        "toNode": "sw",
        "packetLabel": "DHCPDISCOVER",
        "status": "forward",
        "actionText": "Client phát Broadcast 255.255.255.255:67 tìm server"
      },
      {
        "num": 2,
        "name": "DHCPOFFER: Server đề xuất cấu hình IP",
        "desc": "DHCP Server tiếp nhận gói Discover, giữ tạm một địa chỉ IP chưa sử dụng trong pool và gửi gói DHCPOFFER chứa địa chỉ IP đề xuất, Subnet Mask, thời gian thuê và địa chỉ Server ID.",
        "fromNode": "server",
        "toNode": "client",
        "packetLabel": "DHCPOFFER",
        "status": "forward",
        "actionText": "Server đề xuất địa chỉ IP 192.168.1.50 cho Client"
      },
      {
        "num": 3,
        "name": "DHCPREQUEST: Client chấp thuận và yêu cầu thuê IP",
        "desc": "Client gửi gói Broadcast DHCPREQUEST thông báo chấp thuận địa chỉ IP đã đề xuất, đồng thời thông báo cho các máy chủ DHCP khác (nếu có) thu hồi đề xuất của họ.",
        "fromNode": "client",
        "toNode": "server",
        "packetLabel": "DHCPREQUEST",
        "status": "forward",
        "actionText": "Client phát Broadcast xác nhận thuê địa chỉ IP"
      },
      {
        "num": 4,
        "name": "DHCPACK: Server xác nhận hoàn tất cấp phép",
        "desc": "Server gửi gói DHCPACK xác nhận hoàn tất thủ tục thuê. Client gán địa chỉ IP vào giao diện mạng và bắt đầu sử dụng.",
        "fromNode": "server",
        "toNode": "client",
        "packetLabel": "DHCPACK",
        "status": "forward",
        "actionText": "Server xác nhận cấp quyền sử dụng địa chỉ IP"
      }
    ],
    "specTable": {
      "headers": [
        "Thông điệp DHCP",
        "Chiều truyền",
        "Phương thức truyền",
        "Cổng UDP"
      ],
      "rows": [
        [
          "1. DHCPDISCOVER",
          "Client -> Server",
          "Broadcast (255.255.255.255)",
          "Src: 68 | Dst: 67"
        ],
        [
          "2. DHCPOFFER",
          "Server -> Client",
          "Unicast hoặc Broadcast",
          "Src: 67 | Dst: 68"
        ],
        [
          "3. DHCPREQUEST",
          "Client -> Server",
          "Broadcast",
          "Src: 68 | Dst: 67"
        ],
        [
          "4. DHCPACK",
          "Server -> Client",
          "Unicast hoặc Broadcast",
          "Src: 67 | Dst: 68"
        ]
      ]
    },
    "takeaway": "Cả hai thông điệp DHCPDISCOVER và DHCPREQUEST đều luôn được gửi dưới dạng Broadcast từ phía Client."
  },
  "dhcp_relay_agent": {
    "title": "Cơ chế chuyển tiếp DHCP Relay Agent (ip helper-address)",
    "badge": "IP Services / DHCP Relay Cross-Subnet",
    "summary": "Router mặc định không chuyển tiếp gói tin Broadcast. Khi DHCP Client và DHCP Server nằm ở hai phân đoạn mạng khác nhau, Router đóng vai trò Relay Agent chuyển đổi gói Broadcast sang Unicast.",
    "topology": {
      "nodes": [
        {
          "id": "client",
          "label": "Client (LAN A)",
          "sub": "192.168.10.x",
          "x": 100,
          "y": 80
        },
        {
          "id": "router",
          "label": "Relay Router",
          "sub": "G0/0: 192.168.10.1",
          "x": 310,
          "y": 80
        },
        {
          "id": "server",
          "label": "DHCP Server (LAN B)",
          "sub": "192.168.20.254",
          "x": 520,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "client",
          "to": "router",
          "label": "Broadcast (LAN A)"
        },
        {
          "from": "router",
          "to": "server",
          "label": "Unicast (LAN B)"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Client phát Broadcast DHCPDISCOVER",
        "desc": "Máy trạm tại mạng LAN A gửi gói tin Broadcast DHCPDISCOVER (255.255.255.255:67) tìm kiếm máy chủ DHCP.",
        "fromNode": "client",
        "toNode": "router",
        "packetLabel": "Broadcast:67",
        "status": "forward",
        "actionText": "Phát Broadcast tìm server trên mạng 192.168.10.0/24"
      },
      {
        "num": 2,
        "name": "Router chuyển đổi thành Unicast và gán giaddr",
        "desc": "Cổng G0/0 của Router có cấu hình lệnh ip helper-address 192.168.20.254 tiếp nhận gói tin, đóng gói lại thành Unicast với địa chỉ đích là 192.168.20.254 và gán địa chỉ IP của cổng G0/0 (192.168.10.1) vào trường giaddr.",
        "fromNode": "router",
        "toNode": "server",
        "packetLabel": "Unicast to Server",
        "status": "forward",
        "actionText": "Chuyển Broadcast thành Unicast, ghi giaddr = 192.168.10.1"
      },
      {
        "num": 3,
        "name": "Server nhận Unicast và chọn Pool phù hợp",
        "desc": "DHCP Server đọc trường giaddr (192.168.10.1) để xác định đúng IP Pool của phân đoạn mạng 192.168.10.0/24 và gửi DHCPOFFER Unicast về cho Router.",
        "fromNode": "server",
        "toNode": "router",
        "packetLabel": "Unicast Offer",
        "status": "forward",
        "actionText": "Server cấp IP theo trường giaddr gửi Unicast về Router"
      },
      {
        "num": 4,
        "name": "Router chuyển tiếp DHCPOFFER xuống Client",
        "desc": "Router tiếp nhận DHCPOFFER từ Server và chuyển tiếp xuống phân đoạn mạng LAN A cho Client để tiếp tục quá trình DORA.",
        "fromNode": "router",
        "toNode": "client",
        "packetLabel": "Relayed Offer",
        "status": "forward",
        "actionText": "Router đẩy gói DHCPOFFER xuống mạng LAN cho Client"
      }
    ],
    "specTable": {
      "headers": [
        "Thông số kỹ thuật",
        "Chi tiết cấu hình"
      ],
      "rows": [
        [
          "Lệnh cấu hình trên Router",
          "Router(config-if)# ip helper-address <DHCP_Server_IP>"
        ],
        [
          "Vị trí cổng cấu hình",
          "Cấu hình trực tiếp trên cổng Ingress tiếp nhận broadcast từ máy Client"
        ],
        [
          "Trường dữ liệu giaddr",
          "Gateway IP Address: Router ghi địa chỉ IP của interface mình để Server chọn pool"
        ],
        [
          "Các dịch vụ UDP được relay",
          "DHCP/BOOTP (cổng 67/68), DNS (53), TFTP (69), Time (37), TACACS (49), NTP (123)"
        ]
      ]
    },
    "takeaway": "Lệnh ip helper-address phải được cấu hình trực tiếp trên interface của Router nối với phân đoạn mạng của máy Client phát sinh gói tin broadcast."
  },
  "fhrp_hsrp": {
    "title": "Cơ chế dự phòng cổng ngõ mặc định HSRP (Hot Standby Router Protocol)",
    "badge": "First Hop Redundancy / HSRP Cisco",
    "summary": "HSRP cung cấp tính sẵn sàng cao cho mạng bằng cách cấu hình hai hoặc nhiều router tạo thành một Router ảo (Virtual Router). Các host trỏ Default Gateway vào Virtual IP; khi Active Router lỗi, Standby Router sẽ tự động thay thế.",
    "topology": {
      "nodes": [
        {
          "id": "pc",
          "label": "Host Trạm",
          "sub": "GW: 192.168.1.1 (VIP)",
          "x": 80,
          "y": 80
        },
        {
          "id": "sw",
          "label": "Switch LAN",
          "sub": "Access Port",
          "x": 220,
          "y": 80
        },
        {
          "id": "r1",
          "label": "Router R1 (Active)",
          "sub": "Priority: 150",
          "x": 400,
          "y": 40
        },
        {
          "id": "r2",
          "label": "Router R2 (Standby)",
          "sub": "Priority: 100",
          "x": 400,
          "y": 120
        },
        {
          "id": "inet",
          "label": "Mạng ngoài",
          "sub": "Internet WAN",
          "x": 550,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "pc",
          "to": "sw",
          "label": "LAN"
        },
        {
          "from": "sw",
          "to": "r1",
          "label": "Active Path"
        },
        {
          "from": "sw",
          "to": "r2",
          "label": "Standby Path"
        },
        {
          "from": "r1",
          "to": "inet",
          "label": "Uplink"
        },
        {
          "from": "r2",
          "to": "inet",
          "label": "Backup Uplink"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Bầu chọn Active Router và Standby Router",
        "desc": "Các router trong nhóm HSRP trao đổi gói Hello (mỗi 3 giây). Router có Priority cao nhất (mặc định 100) trở thành Active Router; router có Priority kế tiếp làm Standby Router.",
        "fromNode": "r1",
        "toNode": "r2",
        "packetLabel": "Hello (3s)",
        "status": "forward",
        "actionText": "R1 (Priority 150) trở thành Active, R2 (100) làm Standby"
      },
      {
        "num": 2,
        "name": "Chuyển tiếp lưu lượng qua Active Router",
        "desc": "Host gửi lưu lượng đến Virtual IP (192.168.1.1) và Virtual MAC (0000.0c07.ac01). Active Router R1 chịu trách nhiệm chuyển tiếp toàn bộ lưu lượng này ra mạng ngoài.",
        "fromNode": "pc",
        "toNode": "r1",
        "packetLabel": "Data to VIP",
        "status": "forward",
        "actionText": "Active Router R1 chuyển tiếp lưu lượng người dùng ra WAN"
      },
      {
        "num": 3,
        "name": "Active Router gặp sự cố đứt kết nối",
        "desc": "Active Router R1 ngừng hoạt động. Standby Router R2 không nhận được gói tin Hello trong suốt thời gian Hold Timer (mặc định 10 giây).",
        "fromNode": "r1",
        "toNode": "r1",
        "packetLabel": "R1 Down",
        "status": "drop",
        "actionText": "Hold Timer hết hạn (10s không có Hello từ R1)"
      },
      {
        "num": 4,
        "name": "Standby Router tiếp quản và gửi Gratuitous ARP",
        "desc": "Standby Router R2 chuyển trạng thái thành Active Router mới và phát gói Gratuitous ARP để cập nhật bảng MAC của Switch. Lưu lượng của Host tự động chuyển qua R2.",
        "fromNode": "r2",
        "toNode": "sw",
        "packetLabel": "GARP (New Active)",
        "status": "forward",
        "actionText": "R2 trở thành Active Router mới, phát Gratuitous ARP"
      }
    ],
    "specTable": {
      "headers": [
        "Thông số HSRP",
        "HSRP Phiên bản 1",
        "HSRP Phiên bản 2"
      ],
      "rows": [
        [
          "Định dạng Virtual MAC",
          "0000.0c07.acXX (XX là số hiệu Group hex)",
          "0000.0c9f.fXXX (XXX là số hiệu Group hex)"
        ],
        [
          "Số lượng Group hỗ trợ",
          "0 đến 255",
          "0 đến 4095"
        ],
        [
          "Địa chỉ Multicast Hello",
          "224.0.0.2",
          "224.0.0.102 (IPv6: FF02::66)"
        ],
        [
          "Tính năng Preempt",
          "standby <group> preempt",
          "Cho phép router có priority cao hơn giành lại vai trò Active khi hoạt động lại"
        ]
      ]
    },
    "takeaway": "Khi Active Router gặp sự cố, Standby Router chờ hết thời gian Hold Timer (10 giây) trước khi chuyển sang vai trò Active Router mới."
  },
  "l2_security_defense": {
    "title": "Bảo mật chuyển mạch Layer 2: Port Security, DHCP Snooping & DAI",
    "badge": "Layer 2 Security / Mitigation",
    "summary": "Switch Lớp 2 đối mặt với các nguy cơ tấn công như MAC Address Flooding và ARP Spoofing. Cisco cung cấp các cơ chế phòng thủ gồm Port Security, DHCP Snooping và Dynamic ARP Inspection (DAI).",
    "topology": {
      "nodes": [
        {
          "id": "trusted_host",
          "label": "Host Hợp Lệ",
          "sub": "Trusted MAC",
          "x": 80,
          "y": 45
        },
        {
          "id": "rogue_host",
          "label": "Thiết Bị Lạ",
          "sub": "Unknown MAC",
          "x": 80,
          "y": 120
        },
        {
          "id": "sw",
          "label": "Switch Catalyst",
          "sub": "Port Sec / DAI",
          "x": 310,
          "y": 80
        },
        {
          "id": "srv",
          "label": "Mạng Nội Bộ",
          "sub": "Cổng Trusted",
          "x": 540,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "trusted_host",
          "to": "sw",
          "label": "Fa0/1 (Hợp lệ)"
        },
        {
          "from": "rogue_host",
          "to": "sw",
          "label": "Fa0/2 (Vi phạm)"
        },
        {
          "from": "sw",
          "to": "srv",
          "label": "Uplink Trusted"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Host hợp lệ truyền dữ liệu bình thường",
        "desc": "Host hợp lệ có địa chỉ MAC khớp với cấu hình Port Security hoặc bảng DHCP Snooping Binding được switch cho phép chuyển tiếp dữ liệu.",
        "fromNode": "trusted_host",
        "toNode": "sw",
        "packetLabel": "Valid Frame",
        "status": "forward",
        "actionText": "Địa chỉ MAC nguồn hợp lệ: Chuyển tiếp khung"
      },
      {
        "num": 2,
        "name": "Thiết bị lạ gửi khung vi phạm Port Security",
        "desc": "Thiết bị lạ cắm vào cổng Fa0/2 gửi khung có Source MAC chưa được cấp phép, vượt quá số lượng địa chỉ MAC tối đa (maximum MAC) trên cổng.",
        "fromNode": "rogue_host",
        "toNode": "sw",
        "packetLabel": "Rogue MAC",
        "status": "drop",
        "actionText": "Phát hiện địa chỉ MAC không xác thực trên cổng Fa0/2"
      },
      {
        "num": 3,
        "name": "Kích hoạt chế độ xử lý vi phạm (Violation Mode)",
        "desc": "Switch kích hoạt chế độ vi phạm: Protect (thả bỏ khung im lặng), Restrict (thả bỏ khung, gửi cảnh báo Syslog/SNMP và tăng bộ đếm), hoặc Shutdown (đưa cổng về err-disabled).",
        "fromNode": "sw",
        "toNode": "rogue_host",
        "packetLabel": "err-disabled",
        "status": "drop",
        "actionText": "Chế độ Shutdown đưa cổng Fa0/2 vào trạng thái err-disabled"
      },
      {
        "num": 4,
        "name": "Dynamic ARP Inspection (DAI) kiểm tra gói tin ARP",
        "desc": "DAI kiểm tra gói tin ARP Reply trên cổng Untrusted đối chiếu với bảng DHCP Snooping Binding Table. Nếu thông tin IP/MAC không khớp, switch thả bỏ (drop) gói ARP ngay lập tức.",
        "fromNode": "rogue_host",
        "toNode": "sw",
        "packetLabel": "Bad ARP Drop",
        "status": "drop",
        "actionText": "DAI thả bỏ gói ARP giả mạo không khớp bảng Binding"
      }
    ],
    "specTable": {
      "headers": [
        "Chế độ Vi phạm",
        "Chuyển tiếp dữ liệu",
        "Gửi Syslog / SNMP",
        "Tăng bộ đếm vi phạm",
        "Trạng thái cổng"
      ],
      "rows": [
        [
          "Protect",
          "Thả bỏ (Drop)",
          "Không",
          "Không",
          "Cổng vẫn mở (Up)"
        ],
        [
          "Restrict",
          "Thả bỏ (Drop)",
          "Có gửi cảnh báo",
          "Có tăng đếm",
          "Cổng vẫn mở (Up)"
        ],
        [
          "Shutdown (Mặc định)",
          "Thả bỏ (Drop)",
          "Có gửi cảnh báo",
          "Có tăng đếm",
          "Cổng bị tắt (err-disabled)"
        ]
      ]
    },
    "takeaway": "Dynamic ARP Inspection (DAI) bắt buộc phải sử dụng cơ sở dữ liệu của bảng DHCP Snooping Binding Table để xác thực tính hợp lệ của gói tin ARP."
  },
  "routing_lpm_static": {
    "title": "Nguyên lý chọn tuyến định tuyến: Longest Prefix Match (LPM)",
    "badge": "Routing Concepts / Longest Match",
    "summary": "Khi định tuyến một gói tin IP, Router duyệt bảng định tuyến để tìm tuyến khớp. Nguyên tắc ưu tiên hàng đầu là Tiền tố dài nhất (Longest Prefix Match - số bit 1 khớp trong subnet mask nhiều nhất).",
    "topology": {
      "nodes": [
        {
          "id": "ingress",
          "label": "Gói tin IP",
          "sub": "Dst: 192.168.10.130",
          "x": 80,
          "y": 80
        },
        {
          "id": "table",
          "label": "Bảng Routing",
          "sub": "Thuật toán LPM",
          "x": 310,
          "y": 80
        },
        {
          "id": "egress",
          "label": "Cổng Next-Hop",
          "sub": "Tuyến /28 thắng",
          "x": 540,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "ingress",
          "to": "table",
          "label": "Tra cứu IP đích"
        },
        {
          "from": "table",
          "to": "egress",
          "label": "Khớp tuyến dài nhất (/28)"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Router tiếp nhận gói tin và đọc IP đích",
        "desc": "Router tiếp nhận gói tin IP tại cổng Ingress, bóc tiêu đề Lớp 2 và đọc địa chỉ IP đích (Destination IP: 192.168.10.130).",
        "fromNode": "ingress",
        "toNode": "table",
        "packetLabel": "IP: 10.130",
        "status": "forward",
        "actionText": "Đọc địa chỉ IP đích: 192.168.10.130"
      },
      {
        "num": 2,
        "name": "So khớp các mục trong Bảng định tuyến",
        "desc": "Router so sánh IP đích với các tuyến: Tuyến A (192.168.10.0/24 - khớp 24 bit), Tuyến B (192.168.10.128/28 - khớp 28 bit), Tuyến mặc định (0.0.0.0/0 - khớp 0 bit).",
        "fromNode": "table",
        "toNode": "table",
        "packetLabel": "Compare /28 vs /24",
        "status": "forward",
        "actionText": "So khớp độ dài tiền tố: /28 (28 bit) vs /24 (24 bit)"
      },
      {
        "num": 3,
        "name": "Chọn tuyến có Subnet Mask dài nhất (/28)",
        "desc": "Tuyến 192.168.10.128/28 có số bit khớp nhiều nhất (28 bit) nên được lựa chọn. Giá trị Administrative Distance (AD) chỉ được xét đến khi có 2 tuyến có cùng độ dài prefix.",
        "fromNode": "table",
        "toNode": "egress",
        "packetLabel": "Select /28 Route",
        "status": "forward",
        "actionText": "Tuyến /28 có độ dài tiền tố dài nhất được chọn"
      },
      {
        "num": 4,
        "name": "Đóng gói Lớp 2 và chuyển tiếp ra Next-Hop",
        "desc": "Router xác định cổng Egress và Next-Hop IP tương ứng, tra bảng ARP lấy Destination MAC và chuyển tiếp khung ra ngoài.",
        "fromNode": "table",
        "toNode": "egress",
        "packetLabel": "Forward Egress",
        "status": "forward",
        "actionText": "Chuyển tiếp gói tin ra cổng Next-Hop của tuyến /28"
      }
    ],
    "specTable": {
      "headers": [
        "Nguồn tuyến (Route Source)",
        "Administrative Distance (AD)",
        "Độ tin cậy"
      ],
      "rows": [
        [
          "Connected (Trực tiếp)",
          "0",
          "Độ tin cậy cao nhất"
        ],
        [
          "Static Route (Tuyến tĩnh)",
          "1",
          "Rất tin cậy"
        ],
        [
          "EIGRP Internal",
          "90",
          "Giao thức định tuyến nội bộ Cisco"
        ],
        [
          "OSPF",
          "110",
          "Giao thức định tuyến Link-State"
        ],
        [
          "RIP",
          "120",
          "Giao thức định tuyến Distance Vector"
        ],
        [
          "Floating Static Route",
          "Ví dụ: 5 hoặc 115",
          "Tuyến tĩnh dự phòng, kích hoạt khi tuyến chính ngừng hoạt động"
        ]
      ]
    },
    "takeaway": "Tiền tố dài nhất (Longest Prefix Match) luôn được ưu tiên hàng đầu. Administrative Distance chỉ được xét đến khi các tuyến có cùng độ dài tiền tố."
  }
};

  // Ánh xạ chính xác cho các câu hỏi kiểm tra cơ chế kỹ thuật cụ thể
  window.QUESTION_VISUAL_MAP = {
  "m1-4_q2": "switch_boot_sequence",
  "m1-4_q12": "switch_boot_sequence",
  "m1-4_q16": "switch_forwarding_methods",
  "m1-4_q22": "switch_forwarding_methods",
  "final_q37": "vlan_tagging",
  "final_q38": "vlan_tagging",
  "final_q1": "inter_vlan_roas",
  "final_q2": "inter_vlan_roas",
  "final_q3": "inter_vlan_roas",
  "m5-6_q2": "stp_root_election",
  "m5-6_q16": "stp_root_election",
  "m5-6_q33": "stp_root_election",
  "final_q22": "stp_root_election",
  "m5-6_q7": "stp_port_states",
  "m5-6_q10": "stp_port_states",
  "m5-6_q11": "stp_port_states",
  "m5-6_q31": "stp_port_states",
  "m5-6_q24": "etherchannel_bundling",
  "m5-6_q25": "etherchannel_bundling",
  "m5-6_q34": "etherchannel_bundling",
  "m5-6_q35": "etherchannel_bundling",
  "m5-6_q36": "etherchannel_bundling",
  "m5-6_q49": "etherchannel_bundling",
  "final_q34": "etherchannel_bundling",
  "final_q35": "etherchannel_bundling",
  "m7-9_q18": "dhcpv4_dora",
  "m7-9_q42": "dhcpv4_dora",
  "final_q21": "dhcpv4_dora",
  "final_q41": "dhcpv4_dora",
  "m7-9_q15": "dhcp_relay_agent",
  "final_q54": "dhcp_relay_agent",
  "m7-9_q40": "fhrp_hsrp",
  "m7-9_q58": "fhrp_hsrp",
  "final_q18": "fhrp_hsrp",
  "m10-13_q8": "l2_security_defense",
  "final_q11": "l2_security_defense",
  "final_q44": "l2_security_defense",
  "final_q45": "l2_security_defense",
  "final_q46": "l2_security_defense",
  "final_q47": "l2_security_defense",
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
