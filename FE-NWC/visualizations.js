// CCNA 2 v7 (SRWE) - Modern Interactive Mechanism Visualizations (Live Motion)
// Ngôn ngữ kỹ thuật chuẩn xác, basic-meaning, không ẩn dụ, không nói quá.
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
          "type": "server",
          "label": "ROM",
          "sub": "POST & Bootloader",
          "x": 80,
          "y": 80
        },
        {
          "id": "cpu",
          "type": "router",
          "label": "CPU",
          "sub": "Thanh ghi & Logic",
          "x": 230,
          "y": 80
        },
        {
          "id": "flash",
          "type": "server",
          "label": "Bộ nhớ Flash",
          "sub": "flash: IOS .bin",
          "x": 390,
          "y": 80
        },
        {
          "id": "ram",
          "type": "server",
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
          "label": "Định vị tệp IOS"
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
        "actionText": "Kiểm tra phần cứng ROM, CPU, DRAM, Flash: Hợp lệ",
        "pdu": {
          "layer2": "Internal System Bus: Mã chẩn đoán phần cứng POST",
          "layer3": "Không áp dụng (Cấp độ vi mạch phần cứng)",
          "layer4": "Tín hiệu kiểm tra mạch điện tử & LED System: Xanh lục",
          "payload": "POST: CPU OK, DRAM OK, Flash OK. Khởi tạo thanh ghi hệ thống."
        },
        "deviceState": {
          "title": "Trạng thái thanh ghi phần cứng (Hardware Registers)",
          "headers": [
            "Thành phần",
            "Vị trí",
            "Kết quả kiểm tra",
            "Đèn LED"
          ],
          "rows": [
            [
              "CPU & Memory Bus",
              "Mainboard",
              "Hoạt động bình thường",
              "SYST: Nhấp nháy xanh"
            ],
            [
              "DRAM (Bộ nhớ động)",
              "RAM Modules",
              "Đọc/Ghi thành công",
              "Xanh lục ổn định"
            ],
            [
              "Flash Memory",
              "Internal Flash",
              "Hệ thống tệp tin khả dụng",
              "Xanh lục"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Nạp trình nạp khởi động (Boot Loader)",
        "desc": "Sau khi POST hoàn tất thành công, mã Boot Loader được nạp từ ROM vào RAM. Boot Loader cung cấp quyền điều khiển cấp thấp cho thiết bị.",
        "fromNode": "rom",
        "toNode": "cpu",
        "packetLabel": "Boot Loader",
        "status": "forward",
        "actionText": "Thực thi trình nạp khởi động Boot Loader",
        "pdu": {
          "layer2": "Thực thi mã nguồn ROM Monitor (ROMmon)",
          "layer3": "Khởi tạo hệ thống nhập/xuất cơ bản I/O",
          "layer4": "Kiểm tra biến môi trường BOOT",
          "payload": "Mã nạp khởi động Boot Loader kiểm soát CPU và chuẩn bị nạp hệ điều hành."
        },
        "deviceState": {
          "title": "Trạng thái quản lý bộ nhớ (Memory Management)",
          "headers": [
            "Chương trình",
            "Nguồn nạp",
            "Vùng đích",
            "Quyền điều khiển"
          ],
          "rows": [
            [
              "POST",
              "ROM",
              "Hoàn tất",
              "Chuyển giao Boot Loader"
            ],
            [
              "Boot Loader",
              "ROM (1MB)",
              "SRAM / Cache",
              "Đang điều khiển CPU"
            ],
            [
              "Cisco IOS",
              "Flash",
              "Chờ định vị",
              "Chưa thực thi"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Khởi tạo CPU và quản lý bộ nhớ cấp thấp",
        "desc": "Boot Loader khởi tạo các thanh ghi CPU, điều khiển ánh xạ vùng nhớ vật lý và chuẩn bị điều khiển hệ thống tệp tin flash.",
        "fromNode": "cpu",
        "toNode": "cpu",
        "packetLabel": "CPU Init",
        "status": "forward",
        "actionText": "Khởi tạo thanh ghi CPU và ánh xạ bộ nhớ",
        "pdu": {
          "layer2": "Khởi tạo bảng ngắt CPU Interrupt Vector Table",
          "layer3": "Kích hoạt bộ điều khiển bộ nhớ DRAM Controller",
          "layer4": "Cấu hình tốc độ cổng Console (mặc định 9600 baud)",
          "payload": "Thiết lập cấu trúc bộ nhớ phân trang sẵn sàng nạp hệ điều hành Cisco IOS."
        },
        "deviceState": {
          "title": "Bảng biến môi trường Switch (Environment Variables)",
          "headers": [
            "Tên biến",
            "Giá trị hiện tại",
            "Mô tả"
          ],
          "rows": [
            [
              "BOOT",
              "flash:c2960-lanbasek9-mz.150-2.SE4.bin",
              "Đường dẫn tệp tin IOS cần nạp"
            ],
            [
              "BAUD",
              "9600",
              "Tốc độ truyền cổng Console RS-232"
            ],
            [
              "SWITCH_PRIORITY",
              "1",
              "Định danh thành viên phần cứng"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Khởi tạo hệ thống tệp trên Flash",
        "desc": "Boot Loader kích hoạt hệ thống tệp flash (flash:) để tìm kiếm và định vị tệp hình ảnh hệ điều hành Cisco IOS được chỉ định bởi biến BOOT.",
        "fromNode": "cpu",
        "toNode": "flash",
        "packetLabel": "Find IOS",
        "status": "forward",
        "actionText": "Định vị tệp tin c2960-lanbasek9-mz.bin trong flash:",
        "pdu": {
          "layer2": "Truy vấn tệp tin hệ thống Flash File System (flash:)",
          "layer3": "Kiểm tra mã băm MD5 / SHA của tệp tin ảnh IOS",
          "layer4": "Xác thực tính toàn vẹn chữ ký số Cisco",
          "payload": "Tìm thấy tệp hình ảnh IOS: c2960-lanbasek9-mz.150-2.SE4.bin. Bắt đầu giải nén."
        },
        "deviceState": {
          "title": "Cấu trúc thư mục Flash (Directory of flash:)",
          "headers": [
            "Tên tệp tin",
            "Dung lượng (Bytes)",
            "Trạng thái",
            "Loại"
          ],
          "rows": [
            [
              "c2960-lanbasek9-mz.150-2.SE4.bin",
              "12,234,496",
              "Đã xác thực",
              "IOS Image"
            ],
            [
              "config.text",
              "4,096",
              "Khả dụng",
              "Startup Configuration"
            ],
            [
              "vlan.dat",
              "2,048",
              "Khả dụng",
              "VLAN Database"
            ]
          ]
        }
      },
      {
        "num": 5,
        "name": "Nạp và thực thi Cisco IOS vào DRAM",
        "desc": "Hệ thống nạp tệp hình ảnh Cisco IOS vào bộ nhớ DRAM và chuyển quyền điều hành sang IOS. IOS nạp cấu hình khởi động (startup-config) từ NVRAM vào RAM.",
        "fromNode": "flash",
        "toNode": "ram",
        "packetLabel": "Run IOS",
        "status": "forward",
        "actionText": "Nạp IOS vào DRAM và tải file cấu hình NVRAM",
        "pdu": {
          "layer2": "Giải nén hình ảnh IOS vào bộ nhớ thực thi DRAM",
          "layer3": "Khởi chạy các tiến trình hệ điều hành (IOS Kernel)",
          "layer4": "Nạp tệp cấu hình startup-config vào running-config",
          "payload": "Switch S1 sẵn sàng hoạt động. Cổng giao tiếp chuyển sang trạng thái Up."
        },
        "deviceState": {
          "title": "Bảng bộ nhớ hoạt động (DRAM Running State)",
          "headers": [
            "Vùng nhớ",
            "Tiến trình",
            "Kích thước",
            "Trạng thái"
          ],
          "rows": [
            [
              "DRAM (Code Region)",
              "Cisco IOS Kernel 15.0(2)SE4",
              "64 MB",
              "Đang thực thi"
            ],
            [
              "DRAM (Data Region)",
              "running-config (Cấu hình chạy)",
              "4 KB",
              "Đang áp dụng"
            ],
            [
              "NVRAM",
              "startup-config (Cấu hình lưu)",
              "4 KB",
              "Đã đồng bộ"
            ]
          ]
        }
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
          "type": "pc",
          "label": "Host A",
          "sub": "Src: 001A.2B3C.4D01",
          "x": 70,
          "y": 80
        },
        {
          "id": "ingress",
          "type": "switch",
          "label": "Cổng Ingress (Fa0/1)",
          "sub": "Đọc Preamble & MAC",
          "x": 230,
          "y": 80
        },
        {
          "id": "buffer",
          "type": "server",
          "label": "Bộ đệm Switch",
          "sub": "Bảng CAM & FCS",
          "x": 390,
          "y": 80
        },
        {
          "id": "host_b",
          "type": "pc",
          "label": "Host B",
          "sub": "Dst: 001A.2B3C.4D02",
          "x": 550,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "host_a",
          "to": "ingress",
          "label": "Khung vào Fa0/1"
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
        "desc": "Khung dữ liệu đi vào cổng switch. Switch đọc phần mở đầu Preamble (7 byte) và Start Frame Delimiter SFD (1 byte) để đồng bộ xung nhịp và xác định điểm bắt đầu của khung.",
        "fromNode": "host_a",
        "toNode": "ingress",
        "packetLabel": "Preamble/SFD",
        "status": "forward",
        "actionText": "Nhận tín hiệu bit stream tại cổng Ingress Fa0/1",
        "pdu": {
          "layer2": "Ethernet II: Preamble (7B) + SFD (1B: 10101011)",
          "layer3": "Chưa bóc tách (Đang nhận tín hiệu vật lý Lớp 1)",
          "layer4": "Đang đồng bộ xung nhịp bit clock",
          "payload": "Dòng bit nhị phân đi vào giao diện mạng Fa0/1."
        },
        "deviceState": {
          "title": "Bộ đệm cổng Ingress (Ingress Buffer)",
          "headers": [
            "Cổng tiếp nhận",
            "Dung lượng đệm",
            "Tốc độ cổng",
            "Trạng thái"
          ],
          "rows": [
            [
              "FastEthernet0/1",
              "64 KB FIFO Buffer",
              "100 Mbps / Full-Duplex",
              "Đang tiếp nhận khung"
            ],
            [
              "ASIC Controller",
              "Đang đọc tiêu đề L2",
              "Chu kỳ xung nhịp 10ns",
              "Phân tích 14 byte đầu"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Đọc Source MAC và học vào bảng CAM",
        "desc": "Switch đọc địa chỉ MAC nguồn (Source MAC: 001A.2B3C.4D01) và ghi nhận vào bảng địa chỉ MAC (CAM Table) kèm số hiệu cổng Fa0/1 và VLAN tương ứng.",
        "fromNode": "ingress",
        "toNode": "buffer",
        "packetLabel": "Learn Src MAC",
        "status": "forward",
        "actionText": "Ghi nhận địa chỉ Source MAC vào bảng CAM",
        "pdu": {
          "layer2": "Src MAC: 001A.2B3C.4D01 -> Ghi vào CAM Table | Dst MAC: 001A.2B3C.4D02",
          "layer3": "EtherType: 0x0800 (IPv4)",
          "layer4": "Giao thức cấp trên",
          "payload": "Tiến trình học địa chỉ MAC nguồn diễn ra tự động trên mọi khung tin hợp lệ."
        },
        "deviceState": {
          "title": "Bảng CAM / MAC Address Table",
          "headers": [
            "VLAN",
            "Địa chỉ MAC",
            "Loại",
            "Cổng (Port)"
          ],
          "rows": [
            [
              "1",
              "001a.2b3c.4d01",
              "DYNAMIC (Vừa học)",
              "Fa0/1"
            ],
            [
              "1",
              "001a.2b3c.4d02",
              "DYNAMIC (Đã có sẵn)",
              "Fa0/2"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Đọc Destination MAC và tra cứu cổng chuyển tiếp",
        "desc": "Switch đọc 6 byte Destination MAC (001A.2B3C.4D02) để tra cứu cổng chuyển tiếp trong bảng CAM. Bảng CAM chỉ ra cổng đích là Fa0/2.",
        "fromNode": "buffer",
        "toNode": "buffer",
        "packetLabel": "Lookup Dst MAC",
        "status": "forward",
        "actionText": "Tra cứu cổng ra Egress trong bảng CAM: Khớp cổng Fa0/2",
        "pdu": {
          "layer2": "Dst MAC: 001A.2B3C.4D02 -> Khớp cổng Egress Fa0/2 (Unicast)",
          "layer3": "IP Nguồn: 192.168.1.10 | IP Đích: 192.168.1.20",
          "layer4": "TCP Port 80 (HTTP)",
          "payload": "Quyết định chuyển tiếp Unicast thay vì Flood (Broadcast) vì MAC đích đã có trong bảng."
        },
        "deviceState": {
          "title": "Kết quả tra cứu phần cứng ASIC",
          "headers": [
            "Trường tra cứu",
            "Giá trị tìm kiếm",
            "Kết quả CAM",
            "Hành động"
          ],
          "rows": [
            [
              "Destination MAC",
              "001a.2b3c.4d02",
              "Khớp (Hit)",
              "Chuyển tiếp Unicast ra Fa0/2"
            ],
            [
              "Phương pháp chuyển",
              "Store-and-Forward",
              "Đang kiểm tra FCS",
              "Chờ đủ 1518 byte"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Kiểm tra mã lỗi FCS và chuyển tiếp khung",
        "desc": "Phương pháp Store-and-Forward nhận đủ 100% dữ liệu của khung, tính toán mã kiểm tra Frame Check Sequence (FCS/CRC). Nếu kết quả tính toán khớp với trường FCS ở đuôi khung, khung hoàn toàn không có lỗi và được đẩy ra cổng Egress Fa0/2. Nếu lỗi, khung bị hủy bỏ ngay.",
        "fromNode": "buffer",
        "toNode": "host_b",
        "packetLabel": "FCS Valid -> Fwd",
        "status": "forward",
        "actionText": "FCS hợp lệ: Chuyển tiếp khung không lỗi sang Host B",
        "pdu": {
          "layer2": "FCS CRC-32: 0x9A4F12BC (Khớp mã kiểm tra - Khung hợp lệ)",
          "layer3": "IPv4 Header Checksum: Hợp lệ",
          "layer4": "TCP Checksum: Hợp lệ",
          "payload": "Khung dữ liệu an toàn được chuyển tiếp tới Host B."
        },
        "deviceState": {
          "title": "Thống kê lỗi cổng mạng (Interface Counters)",
          "headers": [
            "Cổng mạng",
            "Số khung đã nhận",
            "Khung lỗi CRC/FCS",
            "Khung bị hủy (Drop)"
          ],
          "rows": [
            [
              "FastEthernet0/1",
              "1,420 pkts",
              "0 errors",
              "0 dropped"
            ],
            [
              "FastEthernet0/2",
              "1,419 pkts",
              "0 errors",
              "0 dropped (Đang phát đi)"
            ]
          ]
        }
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
          "type": "pc",
          "label": "Host A (VLAN 10)",
          "sub": "Port Fa0/1 Access",
          "x": 70,
          "y": 80
        },
        {
          "id": "sw1",
          "type": "switch",
          "label": "Switch SW1",
          "sub": "Trunk Fa0/24 (802.1Q)",
          "x": 230,
          "y": 80
        },
        {
          "id": "sw2",
          "type": "switch",
          "label": "Switch SW2",
          "sub": "Trunk Fa0/24 (802.1Q)",
          "x": 390,
          "y": 80
        },
        {
          "id": "host_b",
          "type": "pc",
          "label": "Host B (VLAN 10)",
          "sub": "Port Fa0/2 Access",
          "x": 550,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "host_a",
          "to": "sw1",
          "label": "Access Untagged"
        },
        {
          "from": "sw1",
          "to": "sw2",
          "label": "Trunk 802.1Q (Fa0/24)"
        },
        {
          "from": "sw2",
          "to": "host_b",
          "label": "Access Untagged"
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
        "actionText": "Tiếp nhận khung Untagged tại cổng Access Fa0/1",
        "pdu": {
          "layer2": "Standard Ethernet II: Dst MAC: 001A.2B3C.4D02 | Src MAC: 001A.2B3C.4D01 | Type: 0x0800",
          "layer3": "Src IP: 192.168.10.10 | Dst IP: 192.168.10.20",
          "layer4": "TCP Port 443",
          "payload": "Khung Ethernet tiêu chuẩn từ máy người dùng không chứa thẻ 802.1Q."
        },
        "deviceState": {
          "title": "Bảng cổng Switch SW1 (Interface VLAN Mapping)",
          "headers": [
            "Cổng mạng",
            "Chế độ (Mode)",
            "VLAN truy cập",
            "Trạng thái thẻ"
          ],
          "rows": [
            [
              "FastEthernet0/1",
              "Access",
              "VLAN 10 (Sales)",
              "Untagged (Không gắn thẻ)"
            ],
            [
              "FastEthernet0/24",
              "Trunk",
              "1-4094 (Native: 1)",
              "Tagged 802.1Q"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Switch 1 chèn thẻ 802.1Q trước khi đưa ra cổng Trunk",
        "desc": "Switch 1 nhận diện đích đến cần đi qua đường Trunk Fa0/24. Switch chèn tiêu đề 802.1Q kích thước 4 byte vào ngay sau trường Source MAC của khung dữ liệu.",
        "fromNode": "sw1",
        "toNode": "sw1",
        "packetLabel": "Insert Tag (VID=10)",
        "status": "forward",
        "actionText": "Chèn thẻ 802.1Q 4 byte (VLAN ID = 10, TPID = 0x8100)",
        "pdu": {
          "layer2": "802.1Q Tag: TPID=0x8100 | Priority(PCP)=0 | DEI=0 | VLAN ID (VID)=10",
          "layer3": "Src IP: 192.168.10.10 | Dst IP: 192.168.10.20",
          "layer4": "TCP Port 443",
          "payload": "Kích thước khung tăng thêm 4 byte (tối thiểu 68 byte, tối đa 1522 byte)."
        },
        "deviceState": {
          "title": "Cấu trúc trường thẻ 802.1Q (4 Bytes)",
          "headers": [
            "Trường con",
            "Kích thước",
            "Giá trị chèn vào",
            "Ý nghĩa kỹ thuật"
          ],
          "rows": [
            [
              "TPID",
              "16 bits (2B)",
              "0x8100",
              "Định danh khung 802.1Q"
            ],
            [
              "PCP / Priority",
              "3 bits",
              "0 (Best Effort)",
              "Mức ưu tiên QoS Class of Service"
            ],
            [
              "DEI",
              "1 bit",
              "0 (Không loại bỏ)",
              "Drop Eligible Indicator"
            ],
            [
              "VLAN ID (VID)",
              "12 bits",
              "10",
              "Số hiệu VLAN của khung tin"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Truyền tải khung có thẻ qua đường Trunk",
        "desc": "Khung đã được gắn thẻ di chuyển qua cáp mạng kết nối giữa Switch 1 và Switch 2. Nếu lưu lượng thuộc Native VLAN (mặc định là VLAN 1), khung sẽ không được gắn thẻ.",
        "fromNode": "sw1",
        "toNode": "sw2",
        "packetLabel": "802.1Q Tagged",
        "status": "forward",
        "actionText": "Truyền khung qua liên kết Trunk Fa0/24 giữa SW1 và SW2",
        "pdu": {
          "layer2": "Link Trunk 802.1Q: Tagged VID=10 | Port Fa0/24 -> Fa0/24",
          "layer3": "Gói tin IP truyền trong kênh logic của VLAN 10",
          "layer4": "TCP Stream an toàn không bị lẫn lộn giữa các VLAN khác",
          "payload": "Đường Trunk vận chuyển đồng thời lưu lượng nhiều VLAN qua 1 sợi cáp vật lý."
        },
        "deviceState": {
          "title": "Trạng thái đường Trunk (show interfaces trunk)",
          "headers": [
            "Cổng Trunk",
            "Chế độ",
            "Đóng gói",
            "Native VLAN",
            "VLAN cho phép"
          ],
          "rows": [
            [
              "SW1 Fa0/24",
              "on / desirable",
              "802.1q",
              "1",
              "1-4094 (Active: 10,20)"
            ],
            [
              "SW2 Fa0/24",
              "on / auto",
              "802.1q",
              "1",
              "1-4094 (Active: 10,20)"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Switch 2 bóc thẻ và chuyển tiếp khung Untagged đến Host B",
        "desc": "Switch 2 tiếp nhận khung tại cổng Trunk, đọc trường VLAN ID (VID = 10), gỡ bỏ thẻ 802.1Q và chuyển tiếp khung nguyên bản ra cổng Access Fa0/2 tới Host B.",
        "fromNode": "sw2",
        "toNode": "host_b",
        "packetLabel": "Strip Tag -> Host B",
        "status": "forward",
        "actionText": "Gỡ bỏ thẻ 802.1Q và đẩy khung Untagged ra cổng Access Fa0/2",
        "pdu": {
          "layer2": "Khung Ethernet Untagged nguyên bản: Dst MAC: 001A.2B3C.4D02 | Src MAC: 001A.2B3C.4D01",
          "layer3": "Src IP: 192.168.10.10 | Dst IP: 192.168.10.20",
          "layer4": "TCP Port 443",
          "payload": "Host B nhận khung Ethernet tiêu chuẩn và không nhận biết sự tồn tại của thẻ 802.1Q."
        },
        "deviceState": {
          "title": "Bảng chuyển mạch Switch SW2",
          "headers": [
            "Cổng đầu ra",
            "VLAN đích",
            "Xử lý thẻ",
            "Thiết bị nhận"
          ],
          "rows": [
            [
              "FastEthernet0/2",
              "VLAN 10",
              "Strip 802.1Q Tag (Bóc thẻ)",
              "Host B (192.168.10.20)"
            ]
          ]
        }
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
          "type": "pc",
          "label": "Host A (VLAN 10)",
          "sub": "192.168.10.10",
          "x": 80,
          "y": 120
        },
        {
          "id": "sw",
          "type": "switch",
          "label": "Switch 2960",
          "sub": "Trunk G0/1",
          "x": 310,
          "y": 120
        },
        {
          "id": "host_b",
          "type": "pc",
          "label": "Host B (VLAN 20)",
          "sub": "192.168.20.20",
          "x": 540,
          "y": 120
        },
        {
          "id": "router",
          "type": "router",
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
          "label": "Trunk G0/1 (802.1Q)"
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
        "packetLabel": "Data to Default Gateway",
        "status": "forward",
        "actionText": "Gửi khung đến địa chỉ Default Gateway 192.168.10.1",
        "pdu": {
          "layer2": "Dst MAC: Router g0/0.10 MAC | Src MAC: Host A MAC | Type: 0x0800",
          "layer3": "Src IP: 192.168.10.10 | Dst IP: 192.168.20.20 | TTL: 64",
          "layer4": "TCP Port 80",
          "payload": "Host A nhận biết IP đích khác subnet nên chuyển tiếp cho Default Gateway."
        },
        "deviceState": {
          "title": "Bảng ARP của Host A (arp -a)",
          "headers": [
            "Địa chỉ Internet",
            "Địa chỉ vật lý (MAC)",
            "Loại"
          ],
          "rows": [
            [
              "192.168.10.1 (Default Gateway)",
              "000c.cf82.9a01",
              "Dynamic"
            ],
            [
              "192.168.10.20 (Khác subnet)",
              "Không có (Chuyển tiếp qua Gateway)",
              "None"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Switch gắn thẻ 802.1Q và chuyển lên Router",
        "desc": "Switch tiếp nhận khung tại cổng Access VLAN 10, gắn thẻ 802.1Q với VID = 10 và chuyển tiếp qua đường Trunk lên giao diện vật lý của Router.",
        "fromNode": "sw",
        "toNode": "router",
        "packetLabel": "Tagged VID=10 -> Router",
        "status": "forward",
        "actionText": "Gắn thẻ VID=10 và gửi qua Trunk lên Router g0/0",
        "pdu": {
          "layer2": "802.1Q Tag: VID=10 | TPID=0x8100 | Port Trunk G0/1",
          "layer3": "Src IP: 192.168.10.10 | Dst IP: 192.168.20.20",
          "layer4": "TCP Stream",
          "payload": "Đường Trunk dẫn lưu lượng lên Router xử lý ở tầng Network (Layer 3)."
        },
        "deviceState": {
          "title": "Trạng thái Subinterfaces Router R1",
          "headers": [
            "Giao diện con",
            "IP Address",
            "VLAN Encapsulation",
            "Trạng thái"
          ],
          "rows": [
            [
              "GigabitEthernet0/0.10",
              "192.168.10.1/24",
              "802.1Q (VID 10)",
              "UP/UP"
            ],
            [
              "GigabitEthernet0/0.20",
              "192.168.20.1/24",
              "802.1Q (VID 20)",
              "UP/UP"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Router định tuyến Lớp 3 và gán thẻ VLAN mới",
        "desc": "Router tiếp nhận khung tại subinterface g0/0.10, bóc thẻ 802.1Q. Router tra cứu bảng định tuyến, xác định mạng đích 192.168.20.0/24 nằm ở subinterface g0/0.20, giảm TTL đi 1, đóng gói lại với thẻ mới VID = 20.",
        "fromNode": "router",
        "toNode": "sw",
        "packetLabel": "Routed -> Tagged VID=20",
        "status": "forward",
        "actionText": "Định tuyến L3 sang g0/0.20, giảm TTL, gán thẻ VID=20",
        "pdu": {
          "layer2": "New 802.1Q Tag: VID=20 | Src MAC: Router g0/0.20 MAC | Dst MAC: Host B MAC",
          "layer3": "Src IP: 192.168.10.10 | Dst IP: 192.168.20.20 | TTL: 63 (Giảm 1)",
          "layer4": "TCP Port 80",
          "payload": "Router thực hiện chuyển tiếp định tuyến giữa hai VLAN logic qua 1 cổng vật lý."
        },
        "deviceState": {
          "title": "Bảng định tuyến Router (show ip route)",
          "headers": [
            "Mã tuyến",
            "Mạng đích",
            "Cổng kết nối",
            "Next-Hop"
          ],
          "rows": [
            [
              "C",
              "192.168.10.0/24",
              "GigabitEthernet0/0.10",
              "Directly Connected"
            ],
            [
              "C",
              "192.168.20.0/24",
              "GigabitEthernet0/0.20",
              "Directly Connected"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Switch bóc thẻ và chuyển tiếp đến Host B",
        "desc": "Switch nhận khung tại cổng Trunk với VID = 20, gỡ bỏ thẻ 802.1Q và chuyển tiếp khung Untagged ra cổng Access Fa0/2 đến Host B.",
        "fromNode": "sw",
        "toNode": "host_b",
        "packetLabel": "Untagged -> Host B",
        "status": "forward",
        "actionText": "Gỡ bỏ thẻ và chuyển tiếp khung đến Host B trong VLAN 20",
        "pdu": {
          "layer2": "Untagged Ethernet: Dst MAC: Host B MAC | Src MAC: Router g0/0.20 MAC",
          "layer3": "Src IP: 192.168.10.10 | Dst IP: 192.168.20.20 | TTL: 63",
          "layer4": "TCP Data Handshake",
          "payload": "Host B tiếp nhận gói tin từ Host A thành công qua Inter-VLAN Routing."
        },
        "deviceState": {
          "title": "Bảng CAM Switch 2960",
          "headers": [
            "VLAN",
            "Địa chỉ MAC",
            "Cổng",
            "Trạng thái"
          ],
          "rows": [
            [
              "10",
              "Host A MAC",
              "FastEthernet0/1",
              "DYNAMIC"
            ],
            [
              "20",
              "Host B MAC",
              "FastEthernet0/2",
              "DYNAMIC"
            ]
          ]
        }
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
          "type": "switch",
          "label": "Switch S1 (Root)",
          "sub": "Priority: 24576 (Thấp nhất)",
          "x": 310,
          "y": 35
        },
        {
          "id": "s2",
          "type": "switch",
          "label": "Switch S2 (Non-Root)",
          "sub": "Priority: 32768",
          "x": 140,
          "y": 125
        },
        {
          "id": "s3",
          "type": "switch",
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
        "actionText": "Trao đổi Bridge ID qua các gói BPDU",
        "pdu": {
          "layer2": "Dst MAC: 01:80:C2:00:00:00 (STP Multicast) | Src MAC: S2 MAC | LLC: 0x424203",
          "layer3": "Không dùng Layer 3 (STP chạy trực tiếp trên Layer 2)",
          "layer4": "STP BPDU: Protocol ID=0 | Version=0 | Message Type=Configuration",
          "payload": "Root BID: 32769.S2_MAC | Cost=0 | Sender BID: 32769.S2_MAC"
        },
        "deviceState": {
          "title": "Bảng Bridge ID (BID) các Switch",
          "headers": [
            "Switch",
            "Bridge Priority",
            "VLAN ID",
            "Địa chỉ MAC",
            "Tổng BID"
          ],
          "rows": [
            [
              "S1",
              "24576",
              "1",
              "000a.0001.0001",
              "24577.000a.0001.0001 (Nhỏ nhất)"
            ],
            [
              "S2",
              "32768",
              "1",
              "000a.0002.0002",
              "32769.000a.0002.0002"
            ],
            [
              "S3",
              "32768",
              "1",
              "000a.0003.0003",
              "32769.000a.0003.0003"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "So sánh Bridge ID để bầu Root Bridge",
        "desc": "Switch có giá trị Bridge ID nhỏ nhất sẽ được bầu làm Root Bridge. Bridge ID gồm: Bridge Priority (mặc định 32768) + Extended System ID (VLAN ID) + Địa chỉ MAC. S1 có Priority 24576 nhỏ nhất nên được bầu làm Root Bridge.",
        "fromNode": "s1",
        "toNode": "s1",
        "packetLabel": "S1 Wins Root",
        "status": "forward",
        "actionText": "S1 có Bridge ID nhỏ nhất (24576) trở thành Root Bridge",
        "pdu": {
          "layer2": "S1 phát BPDU với cờ Root Bridge: 'This switch is the Root'",
          "layer3": "STP Topology Tree",
          "layer4": "Root Path Cost = 0",
          "payload": "Tất cả các cổng trên S1 chuyển thành Designated Port (DP) ở trạng thái Forwarding."
        },
        "deviceState": {
          "title": "Trạng thái Root Bridge (show spanning-tree)",
          "headers": [
            "Vai trò",
            "Switch ID",
            "Root Path Cost",
            "Hello Timer"
          ],
          "rows": [
            [
              "Root Bridge",
              "S1 (24577.000a.0001.0001)",
              "0",
              "2 seconds"
            ],
            [
              "Non-Root Switch",
              "S2 (32769.000a.0002.0002)",
              "4 (qua G0/1)",
              "Đồng bộ theo Root"
            ],
            [
              "Non-Root Switch",
              "S3 (32769.000a.0003.0003)",
              "4 (qua G0/1)",
              "Đồng bộ theo Root"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Xác định Root Port (RP) trên Non-Root Switch",
        "desc": "Trên mỗi switch không phải Root (S2 và S3), cổng có tổng chi phí đường truyền về Root Bridge (Root Path Cost) thấp nhất được xác định là Root Port (RP) để chuyển tiếp dữ liệu.",
        "fromNode": "s1",
        "toNode": "s2",
        "packetLabel": "Set RP Cost",
        "status": "forward",
        "actionText": "Xác định Root Port (RP) trên switch S2 và S3",
        "pdu": {
          "layer2": "Path Cost Gig: 4 (FastEthernet: 19)",
          "layer3": "S2 Port Gi0/1 (Cost 4) -> Được chọn làm Root Port",
          "layer4": "S3 Port Gi0/1 (Cost 4) -> Được chọn làm Root Port",
          "payload": "Root Port là cổng tốt nhất của mỗi switch không phải root để đi tới Root Bridge."
        },
        "deviceState": {
          "title": "Bảng vai trò cổng (Port Roles Table)",
          "headers": [
            "Switch",
            "Cổng",
            "Vai trò (Role)",
            "Trạng thái (State)",
            "Chi phí (Cost)"
          ],
          "rows": [
            [
              "S1 (Root)",
              "Gi0/1 & Gi0/2",
              "Designated (DP)",
              "Forwarding",
              "4"
            ],
            [
              "S2",
              "Gi0/1 (về S1)",
              "Root Port (RP)",
              "Forwarding",
              "4"
            ],
            [
              "S3",
              "Gi0/1 (về S1)",
              "Root Port (RP)",
              "Forwarding",
              "4"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Xác định Designated Port và Alternate Port (Khóa loop)",
        "desc": "Mọi cổng trên Root Bridge đều là Designated Port (DP). Trên liên kết giữa S2 và S3, cổng của S3 có BID lớn hơn bị chuyển sang trạng thái Alternate/Blocking để khóa vòng lặp dữ liệu.",
        "fromNode": "s2",
        "toNode": "s3",
        "packetLabel": "Block Loop Port",
        "status": "drop",
        "actionText": "Cổng trên S3 chuyển sang trạng thái Alternate (Blocking)",
        "pdu": {
          "layer2": "S2 Gi0/2 (BID thấp hơn) -> Designated Port | S3 Gi0/2 (BID cao hơn) -> Alternate Port",
          "layer3": "Loại bỏ vòng lặp Lớp 2 (Loop-Free Topology)",
          "layer4": "Alternate Port rơi vào trạng thái Blocking (Không chuyển tiếp dữ liệu)",
          "payload": "Khóa vòng lặp hoàn tất. Gói tin quảng bá sẽ không bị lặp vô tận giữa 3 switch."
        },
        "deviceState": {
          "title": "Bảng trạng thái hội tụ STP hoàn chỉnh",
          "headers": [
            "Liên kết",
            "Switch đầu A",
            "Switch đầu B",
            "Trạng thái liên kết"
          ],
          "rows": [
            [
              "S1 <-> S2",
              "S1 Gi0/1: DP (Forward)",
              "S2 Gi0/1: RP (Forward)",
              "Đang chuyển tiếp"
            ],
            [
              "S1 <-> S3",
              "S1 Gi0/2: DP (Forward)",
              "S3 Gi0/1: RP (Forward)",
              "Đang chuyển tiếp"
            ],
            [
              "S2 <-> S3",
              "S2 Gi0/2: DP (Forward)",
              "S3 Gi0/2: Alternate (BLOCK)",
              "Đã khóa chống loop"
            ]
          ]
        }
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
          "type": "switch",
          "label": "Blocking",
          "sub": "Khóa (20s)",
          "x": 80,
          "y": 80
        },
        {
          "id": "listening",
          "type": "switch",
          "label": "Listening",
          "sub": "Lắng nghe (15s)",
          "x": 230,
          "y": 80
        },
        {
          "id": "learning",
          "type": "switch",
          "label": "Learning",
          "sub": "Học MAC (15s)",
          "x": 390,
          "y": 80
        },
        {
          "id": "forwarding",
          "type": "switch",
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
        "packetLabel": "Recv BPDU Only",
        "status": "forward",
        "actionText": "Chỉ tiếp nhận BPDU | Không học MAC | Không gửi data",
        "pdu": {
          "layer2": "Nhận BPDU từ Root Bridge",
          "layer3": "Lưu trữ bộ đếm Max Age: 20 giây",
          "layer4": "Chặn toàn bộ khung dữ liệu người dùng",
          "payload": "Cổng không gửi BPDU, không học bảng CAM, ngăn ngừa hình thành loop."
        },
        "deviceState": {
          "title": "Bảng kiểm soát cổng Blocking",
          "headers": [
            "Tham số",
            "Giá trị",
            "Ý nghĩa"
          ],
          "rows": [
            [
              "Nhận BPDU",
              "Có",
              "Lắng nghe cập nhật cấu trúc mạng"
            ],
            [
              "Gửi BPDU",
              "Không",
              "Cổng không phát sinh BPDU"
            ],
            [
              "Học MAC",
              "Không",
              "Bảng CAM không ghi nhận địa chỉ"
            ],
            [
              "Chuyển tiếp Data",
              "Không",
              "Thả bỏ toàn bộ khung người dùng"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Trạng thái Listening (Lắng nghe - Forward Delay 15s)",
        "desc": "Sau khi hết thời gian Max Age (20s), cổng chuyển sang Listening. Cổng gửi và nhận BPDU để xác định vai trò Root/Designated/Alternate; chưa học MAC và chưa chuyển tiếp dữ liệu.",
        "fromNode": "blocking",
        "toNode": "listening",
        "packetLabel": "Send/Recv BPDU",
        "status": "forward",
        "actionText": "Xử lý BPDU xác định vai trò cổng | Chưa học MAC",
        "pdu": {
          "layer2": "Trao đổi BPDU xác định vai trò cổng",
          "layer3": "Bộ đếm Forward Delay: 15 giây",
          "layer4": "Cổng xác định vai trò Designated hoặc Root",
          "payload": "Chuẩn bị cấu trúc logic nhưng vẫn chưa mở luồng dữ liệu người dùng."
        },
        "deviceState": {
          "title": "Bảng kiểm soát cổng Listening",
          "headers": [
            "Tham số",
            "Giá trị",
            "Ý nghĩa"
          ],
          "rows": [
            [
              "Nhận BPDU",
              "Có",
              "Theo dõi cập nhật"
            ],
            [
              "Gửi BPDU",
              "Có",
              "Thông báo vai trò cổng"
            ],
            [
              "Học MAC",
              "Không",
              "Tránh làm ô nhiễm bảng CAM"
            ],
            [
              "Chuyển tiếp Data",
              "Không",
              "Tiếp tục chặn lưu lượng"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Trạng thái Learning (Học địa chỉ MAC - Forward Delay 15s)",
        "desc": "Sau 15 giây Listening, cổng chuyển sang Learning. Cổng tiếp tục nhận/gửi BPDU và bắt đầu học địa chỉ MAC vào bảng CAM; chưa chuyển tiếp khung dữ liệu.",
        "fromNode": "listening",
        "toNode": "learning",
        "packetLabel": "Learn CAM Table",
        "status": "forward",
        "actionText": "Bắt đầu học địa chỉ MAC vào bảng CAM | Chưa chuyển tiếp dữ liệu",
        "pdu": {
          "layer2": "Đọc Source MAC từ các khung đi vào -> Ghi nhận vào CAM",
          "layer3": "Bộ đếm Forward Delay: 15 giây",
          "layer4": "Chuẩn bị bảng chuyển mạch để tránh bão flooding khi mở cổng",
          "payload": "Học bảng MAC để khi chuyển sang Forwarding có thể chuyển tiếp Unicast ngay."
        },
        "deviceState": {
          "title": "Bảng CAM trong trạng thái Learning",
          "headers": [
            "VLAN",
            "Địa chỉ MAC",
            "Cổng",
            "Trạng thái"
          ],
          "rows": [
            [
              "1",
              "001a.2b3c.4d01",
              "Fa0/1",
              "Đang học (Chưa chuyển tiếp)"
            ],
            [
              "1",
              "001a.2b3c.4d02",
              "Fa0/2",
              "Đang học (Chưa chuyển tiếp)"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Trạng thái Forwarding (Chuyển tiếp dữ liệu)",
        "desc": "Sau 15 giây Learning, cổng chính thức chuyển sang trạng thái Forwarding. Cổng chuyển tiếp dữ liệu người dùng, tiếp tục học MAC và xử lý BPDU bình thường.",
        "fromNode": "learning",
        "toNode": "forwarding",
        "packetLabel": "Forward User Data",
        "status": "forward",
        "actionText": "Chuyển tiếp dữ liệu người dùng bình thường",
        "pdu": {
          "layer2": "Khung Ethernet người dùng chuyển tiếp với tốc độ dây (Line rate)",
          "layer3": "Định tuyến và chuyển mạch hoạt động đầy đủ",
          "layer4": "Tổng thời gian hội tụ từ Blocking: 20s + 15s + 15s = 50 giây",
          "payload": "Cổng ở trạng thái hoạt động bình thường."
        },
        "deviceState": {
          "title": "Trạng thái cổng Forwarding hoàn chỉnh",
          "headers": [
            "Giao thức",
            "Cổng",
            "Vai trò",
            "Trạng thái",
            "Đèn LED"
          ],
          "rows": [
            [
              "IEEE 802.1D",
              "FastEthernet0/1",
              "Root Port",
              "Forwarding",
              "Xanh lục ổn định"
            ],
            [
              "IEEE 802.1D",
              "FastEthernet0/2",
              "Designated",
              "Forwarding",
              "Xanh lục ổn định"
            ]
          ]
        }
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
          "type": "switch",
          "label": "Switch SW1",
          "sub": "Gi0/1, Gi0/2 (Active)",
          "x": 120,
          "y": 80
        },
        {
          "id": "bundle",
          "type": "server",
          "label": "Port-Channel 1",
          "sub": "Liên kết logic (2 Gbps)",
          "x": 310,
          "y": 80
        },
        {
          "id": "sw2",
          "type": "switch",
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
        "actionText": "Kiểm tra đồng nhất Speed, Duplex, VLAN trên các cổng",
        "pdu": {
          "layer2": "Kiểm tra thuộc tính cổng: Gi0/1 (1000/Full, Trunk) vs Gi0/2 (1000/Full, Trunk)",
          "layer3": "Cùng phân vùng cấu hình Lớp 2",
          "layer4": "Kiểm tra điều kiện bắt buộc trước khi kích hoạt giao thức",
          "payload": "Cấu hình hợp lệ: Hai cổng sẵn sàng gộp nhóm."
        },
        "deviceState": {
          "title": "Bảng tương thích cổng vật lý",
          "headers": [
            "Cổng mạng",
            "Tốc độ",
            "Duplex",
            "Native VLAN",
            "Trạng thái"
          ],
          "rows": [
            [
              "GigabitEthernet0/1",
              "1000 Mbps",
              "Full",
              "VLAN 1",
              "Khớp điều kiện"
            ],
            [
              "GigabitEthernet0/2",
              "1000 Mbps",
              "Full",
              "VLAN 1",
              "Khớp điều kiện"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Trao đổi gói tin đàm phán LACP hoặc PAgP",
        "desc": "Cổng cấu hình chế độ chủ động (LACP active hoặc PAgP desirable) phát các gói tin đàm phán sang switch đối diện để thiết lập thỏa thuận kết nhóm.",
        "fromNode": "sw1",
        "toNode": "sw2",
        "packetLabel": "LACP Request",
        "status": "forward",
        "actionText": "SW1 phát gói đàm phán LACP sang SW2",
        "pdu": {
          "layer2": "LACP Multicast: 01:80:C2:00:00:02 | EtherType: 0x8809 (Slow Protocols)",
          "layer3": "LACP Subtype: 0x01",
          "layer4": "Actor System Priority=32768 | Key=1 | State=Active (0x3d)",
          "payload": "SW1 yêu cầu SW2 kết hợp hai cổng Gi0/1 và Gi0/2 thành 1 nhóm EtherChannel."
        },
        "deviceState": {
          "title": "Trạng thái đàm phán LACP (show lacp neighbor)",
          "headers": [
            "Cổng",
            "Đối tác (Partner)",
            "Chế độ SW1",
            "Chế độ SW2",
            "Kết quả"
          ],
          "rows": [
            [
              "Gi0/1",
              "SW2 Gi0/1",
              "Active (Chủ động)",
              "Active hoặc Passive",
              "Đàm phán thành công"
            ],
            [
              "Gi0/2",
              "SW2 Gi0/2",
              "Active (Chủ động)",
              "Active hoặc Passive",
              "Đàm phán thành công"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Thiết lập liên kết logic Port-Channel",
        "desc": "Khi hai đầu thỏa mãn điều kiện kết hợp (ví dụ: active + passive hoặc active + active), liên kết logic Port-Channel được thiết lập và chuyển sang trạng thái Up.",
        "fromNode": "sw2",
        "toNode": "bundle",
        "packetLabel": "Port-Channel Up",
        "status": "forward",
        "actionText": "Khởi tạo giao diện logic Port-Channel 1",
        "pdu": {
          "layer2": "Tạo giao diện logic: interface Port-channel 1",
          "layer3": "Băng thông tổng hợp: 2 x 1 Gbps = 2 Gbps",
          "layer4": "STP coi Port-Channel 1 là 1 cổng duy nhất (Cost=3 thay vì 4)",
          "payload": "STP không khóa cổng vật lý riêng lẻ nữa, toàn bộ băng thông được khai thác."
        },
        "deviceState": {
          "title": "Bảng tổng hợp EtherChannel (show etherchannel summary)",
          "headers": [
            "Nhóm",
            "Giao diện ảo",
            "Giao thức",
            "Cổng thành viên"
          ],
          "rows": [
            [
              "Group 1",
              "Po1(SU) - Up Lớp 2",
              "LACP",
              "Gi0/1(P), Gi0/2(P) - In Bundled"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Cân bằng tải lưu lượng (Load Balancing)",
        "desc": "Lưu lượng truyền qua EtherChannel được băm (hash) theo Source MAC, Destination MAC hoặc Source/Dest IP để phân phối đều trên các liên kết vật lý.",
        "fromNode": "sw1",
        "toNode": "sw2",
        "packetLabel": "Hashed Packet Flow",
        "status": "forward",
        "actionText": "Cân bằng tải lưu lượng qua thuật toán băm (Hash)",
        "pdu": {
          "layer2": "Hash Algorithm: src-mac (hoặc src-dst-ip)",
          "layer3": "Luồng gói 1 (Src IP .10) -> Cáp Gi0/1 | Luồng gói 2 (Src IP .11) -> Cáp Gi0/2",
          "layer4": "Dữ liệu người dùng được phân bổ đều, tránh nghẽn cổ chai",
          "payload": "Nếu 1 cáp đứt, lưu lượng tự động chuyển sang cáp còn lại trong vòng dưới vài mili-giây."
        },
        "deviceState": {
          "title": "Thống kê lưu lượng phân bổ (Load Balance Stats)",
          "headers": [
            "Liên kết vật lý",
            "Lưu lượng truyền",
            "Tỷ lệ tải",
            "Trạng thái dự phòng"
          ],
          "rows": [
            [
              "GigabitEthernet0/1",
              "48.5 Mbps",
              "51%",
              "Hoạt động (Active)"
            ],
            [
              "GigabitEthernet0/2",
              "46.2 Mbps",
              "49%",
              "Hoạt động (Active)"
            ]
          ]
        }
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
          "type": "pc",
          "label": "DHCP Client",
          "sub": "0.0.0.0:68",
          "x": 100,
          "y": 80
        },
        {
          "id": "sw",
          "type": "switch",
          "label": "Switch Lớp 2",
          "sub": "Broadcast Domain",
          "x": 310,
          "y": 80
        },
        {
          "id": "server",
          "type": "server",
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
        "actionText": "Client phát Broadcast 255.255.255.255:67 tìm server",
        "pdu": {
          "layer2": "Dst MAC: FF:FF:FF:FF:FF:FF | Src MAC: Client MAC | Type: 0x0800",
          "layer3": "Src IP: 0.0.0.0 | Dst IP: 255.255.255.255 (Limited Broadcast)",
          "layer4": "UDP Src Port: 68 | Dst Port: 67",
          "payload": "DHCP Message Type: 1 (DHCPDISCOVER) | Client MAC: 001A.2B3C.4D01"
        },
        "deviceState": {
          "title": "Trạng thái giao diện Client",
          "headers": [
            "Địa chỉ IP",
            "Subnet Mask",
            "Default Gateway",
            "Trạng thái thuê"
          ],
          "rows": [
            [
              "0.0.0.0",
              "0.0.0.0",
              "Chưa có",
              "INIT: Đang tìm kiếm máy chủ"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "DHCPOFFER: Server đề xuất cấu hình IP",
        "desc": "DHCP Server tiếp nhận gói Discover, giữ tạm một địa chỉ IP chưa sử dụng trong pool và gửi gói DHCPOFFER chứa địa chỉ IP đề xuất, Subnet Mask, thời gian thuê và địa chỉ Server ID.",
        "fromNode": "server",
        "toNode": "client",
        "packetLabel": "DHCPOFFER",
        "status": "forward",
        "actionText": "Server đề xuất địa chỉ IP 192.168.1.50 cho Client",
        "pdu": {
          "layer2": "Dst MAC: Client MAC (hoặc Broadcast) | Src MAC: Server MAC",
          "layer3": "Src IP: 192.168.1.1 | Dst IP: 192.168.1.50 (hoặc 255.255.255.255)",
          "layer4": "UDP Src Port: 67 | Dst Port: 68",
          "payload": "Type: 2 (DHCPOFFER) | Offered IP: 192.168.1.50 | Mask: 255.255.255.0 | Router: 192.168.1.1"
        },
        "deviceState": {
          "title": "Bảng DHCP Scope của Server",
          "headers": [
            "Pool",
            "Địa chỉ đề xuất",
            "Trạng thái tạm",
            "Thời gian giữ chỗ"
          ],
          "rows": [
            [
              "LAN-POOL-1",
              "192.168.1.50",
              "Offered (Đã đề xuất cho Client)",
              "120 seconds"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "DHCPREQUEST: Client chấp thuận và yêu cầu thuê IP",
        "desc": "Client gửi gói Broadcast DHCPREQUEST thông báo chấp thuận địa chỉ IP đã đề xuất, đồng thời thông báo cho các máy chủ DHCP khác (nếu có) thu hồi đề xuất của họ.",
        "fromNode": "client",
        "toNode": "server",
        "packetLabel": "DHCPREQUEST",
        "status": "forward",
        "actionText": "Client phát Broadcast xác nhận thuê địa chỉ IP 192.168.1.50",
        "pdu": {
          "layer2": "Dst MAC: FF:FF:FF:FF:FF:FF | Src MAC: Client MAC",
          "layer3": "Src IP: 0.0.0.0 | Dst IP: 255.255.255.255 (Broadcast)",
          "layer4": "UDP Src Port: 68 | Dst Port: 67",
          "payload": "Type: 3 (DHCPREQUEST) | Requested IP: 192.168.1.50 | Server ID: 192.168.1.1"
        },
        "deviceState": {
          "title": "Trạng thái Client",
          "headers": [
            "Trạng thái",
            "Địa chỉ yêu cầu",
            "Server ID chấp thuận"
          ],
          "rows": [
            [
              "REQUESTING",
              "192.168.1.50",
              "192.168.1.1 (Server chính)"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "DHCPACK: Server xác nhận hoàn tất cấp phép",
        "desc": "Server gửi gói DHCPACK xác nhận hoàn tất thủ tục thuê. Client gán địa chỉ IP vào giao diện mạng và bắt đầu sử dụng.",
        "fromNode": "server",
        "toNode": "client",
        "packetLabel": "DHCPACK",
        "status": "forward",
        "actionText": "Server xác nhận cấp quyền sử dụng địa chỉ IP 192.168.1.50",
        "pdu": {
          "layer2": "Dst MAC: Client MAC | Src MAC: Server MAC",
          "layer3": "Src IP: 192.168.1.1 | Dst IP: 192.168.1.50",
          "layer4": "UDP Src Port: 67 | Dst Port: 68",
          "payload": "Type: 5 (DHCPACK) | Lease Time: 86400s (24h) | DNS: 8.8.8.8 | Gateway: 192.168.1.1"
        },
        "deviceState": {
          "title": "Bảng liên kết DHCP Binding (show ip dhcp binding)",
          "headers": [
            "Địa chỉ IP",
            "Địa chỉ MAC Client",
            "Hết hạn thuê (Lease)",
            "Loại"
          ],
          "rows": [
            [
              "192.168.1.50",
              "001a.2b3c.4d01",
              "24 giờ sau (Active)",
              "Automatic"
            ]
          ]
        }
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
          "type": "pc",
          "label": "Client (LAN A)",
          "sub": "192.168.10.x",
          "x": 100,
          "y": 80
        },
        {
          "id": "router",
          "type": "router",
          "label": "Relay Router",
          "sub": "G0/0: 192.168.10.1",
          "x": 310,
          "y": 80
        },
        {
          "id": "server",
          "type": "server",
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
        "actionText": "Phát Broadcast tìm server trên mạng 192.168.10.0/24",
        "pdu": {
          "layer2": "Dst MAC: FF:FF:FF:FF:FF:FF | Src MAC: Client MAC",
          "layer3": "Src IP: 0.0.0.0 | Dst IP: 255.255.255.255",
          "layer4": "UDP Src: 68 | Dst: 67",
          "payload": "DHCPDISCOVER: Tìm kiếm máy chủ DHCP trong subnet nội bộ."
        },
        "deviceState": {
          "title": "Trạng thái cổng Router G0/0",
          "headers": [
            "Cổng mạng",
            "IP Address",
            "ip helper-address",
            "Hành vi"
          ],
          "rows": [
            [
              "GigabitEthernet0/0",
              "192.168.10.1",
              "192.168.20.254",
              "Bắt gói broadcast cổng UDP 67"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Router chuyển đổi thành Unicast và gán giaddr",
        "desc": "Cổng G0/0 của Router có cấu hình lệnh ip helper-address 192.168.20.254 tiếp nhận gói tin, đóng gói lại thành Unicast với địa chỉ đích là 192.168.20.254 và gán địa chỉ IP của cổng G0/0 (192.168.10.1) vào trường giaddr.",
        "fromNode": "router",
        "toNode": "server",
        "packetLabel": "Unicast to Server",
        "status": "forward",
        "actionText": "Chuyển Broadcast thành Unicast, ghi giaddr = 192.168.10.1",
        "pdu": {
          "layer2": "Dst MAC: Server MAC (hoặc Next-hop) | Src MAC: Router G0/1 MAC",
          "layer3": "Src IP: 192.168.10.1 (Router) | Dst IP: 192.168.20.254 (DHCP Server)",
          "layer4": "UDP Src: 67 | Dst: 67",
          "payload": "DHCP Relay: giaddr (Gateway IP) = 192.168.10.1 | Hops = 1"
        },
        "deviceState": {
          "title": "Bảng chuyển tiếp Helper Agent",
          "headers": [
            "Trường giaddr",
            "Địa chỉ đích Unicast",
            "Hops",
            "Giao thức"
          ],
          "rows": [
            [
              "192.168.10.1",
              "192.168.20.254",
              "1",
              "BOOTP/DHCP Forwarding"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Server nhận Unicast và chọn Pool phù hợp",
        "desc": "DHCP Server đọc trường giaddr (192.168.10.1) để xác định đúng IP Pool của phân đoạn mạng 192.168.10.0/24 và gửi DHCPOFFER Unicast về cho Router.",
        "fromNode": "server",
        "toNode": "router",
        "packetLabel": "Unicast Offer",
        "status": "forward",
        "actionText": "Server cấp IP theo trường giaddr gửi Unicast về Router",
        "pdu": {
          "layer2": "Dst MAC: Router G0/1 MAC | Src MAC: Server MAC",
          "layer3": "Src IP: 192.168.20.254 | Dst IP: 192.168.10.1",
          "layer4": "UDP Src: 67 | Dst: 67",
          "payload": "DHCPOFFER: Đề xuất IP 192.168.10.55 từ Pool 192.168.10.0/24."
        },
        "deviceState": {
          "title": "Bảng chọn IP Pool của DHCP Server",
          "headers": [
            "Giá trị giaddr",
            "Pool khớp",
            "IP được cấp",
            "Gateway đề xuất"
          ],
          "rows": [
            [
              "192.168.10.1",
              "POOL-LAN-A (192.168.10.0/24)",
              "192.168.10.55",
              "192.168.10.1"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Router chuyển tiếp DHCPOFFER xuống Client",
        "desc": "Router tiếp nhận DHCPOFFER từ Server và chuyển tiếp xuống phân đoạn mạng LAN A cho Client để tiếp tục quá trình DORA.",
        "fromNode": "router",
        "toNode": "client",
        "packetLabel": "Relayed Offer",
        "status": "forward",
        "actionText": "Router đẩy gói DHCPOFFER xuống mạng LAN cho Client",
        "pdu": {
          "layer2": "Dst MAC: Client MAC | Src MAC: Router G0/0 MAC",
          "layer3": "Src IP: 192.168.10.1 | Dst IP: 192.168.10.55",
          "layer4": "UDP Src: 67 | Dst: 68",
          "payload": "Client nhận đề xuất IP thành công từ máy chủ ở mạng khác."
        },
        "deviceState": {
          "title": "Thống kê DHCP Relay (show ip dhcp relay information trusted-sources)",
          "headers": [
            "Số gói nhận",
            "Số gói chuyển đổi",
            "Số phản hồi chuyển tiếp"
          ],
          "rows": [
            [
              "1 Discover (Bcast)",
              "1 Discover (Ucast)",
              "1 Offer chuyển tiếp thành công"
            ]
          ]
        }
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
  "slaac_dhcpv6": {
    "title": "Cơ chế cấu hình địa chỉ IPv6 tự động: SLAAC & DHCPv6",
    "badge": "IPv6 Addressing / SLAAC & DHCPv6",
    "summary": "IPv6 cung cấp cơ chế tự động cấu hình địa chỉ không trạng thái SLAAC sử dụng các bản tin ICMPv6 Router Advertisement (RA). Các cờ M (Managed) và O (Other) trong bản tin RA quyết định host sẽ nhận IPv6 theo SLAAC, Stateless DHCPv6 hay Stateful DHCPv6.",
    "topology": {
      "nodes": [
        {
          "id": "client",
          "type": "pc",
          "label": "IPv6 Host",
          "sub": "FE80:: Client",
          "x": 100,
          "y": 80
        },
        {
          "id": "router",
          "type": "router",
          "label": "Router Gateway",
          "sub": "RA Sender (M & O flags)",
          "x": 310,
          "y": 80
        },
        {
          "id": "dhcp6",
          "type": "server",
          "label": "DHCPv6 Server",
          "sub": "Stateful/Stateless",
          "x": 520,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "client",
          "to": "router",
          "label": "RS / RA (ICMPv6)"
        },
        {
          "from": "router",
          "to": "dhcp6",
          "label": "DHCPv6 Relay (UDP 547)"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Host gửi bản tin Router Solicitation (RS)",
        "desc": "Khi khởi động hoặc gắn cáp, host IPv6 gửi bản tin ICMPv6 RS đến địa chỉ Multicast của tất cả router (FF02::2) để yêu cầu gửi thông tin cấu hình mạng.",
        "fromNode": "client",
        "toNode": "router",
        "packetLabel": "ICMPv6 RS",
        "status": "forward",
        "actionText": "Host gửi RS tới Multicast All-Routers FF02::2",
        "pdu": {
          "layer2": "Dst MAC: 33:33:00:00:00:02 (IPv6 Multicast) | Src MAC: Host MAC",
          "layer3": "Src IP: FE80::Client (Link-Local) | Dst IP: FF02::2 (All-Routers)",
          "layer4": "ICMPv6 Type: 133 (Router Solicitation)",
          "payload": "Yêu cầu Router quảng bá Prefix mạng và cờ chỉ dẫn."
        },
        "deviceState": {
          "title": "Trạng thái giao diện Host IPv6",
          "headers": [
            "Link-Local IP",
            "Global Unicast IP",
            "Trạng thái"
          ],
          "rows": [
            [
              "FE80::1A2B:3C4D:5E6F",
              "Chưa có (Đang gửi RS)",
              "Tự động sinh theo EUI-64 hoặc Random"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Router gửi bản tin Router Advertisement (RA)",
        "desc": "Router phản hồi bằng bản tin ICMPv6 RA gửi tới FF02::1 (All-Nodes) chứa Prefix mạng (2001:DB8:ACAD:1::/64), Default Gateway (Link-Local của router) và trạng thái của 2 cờ: M flag và O flag.",
        "fromNode": "router",
        "toNode": "client",
        "packetLabel": "ICMPv6 RA (Flags)",
        "status": "forward",
        "actionText": "Router gửi RA chứa Prefix 2001:DB8:ACAD:1::/64 và cờ M/O",
        "pdu": {
          "layer2": "Dst MAC: 33:33:00:00:00:01 (All-Nodes) | Src MAC: Router MAC",
          "layer3": "Src IP: FE80::1 (Router Link-Local) | Dst IP: FF02::1 (All-Nodes)",
          "layer4": "ICMPv6 Type: 134 (Router Advertisement) | Code: 0",
          "payload": "Prefix: 2001:DB8:ACAD:1::/64 | M=0, O=1 (Stateless DHCPv6)"
        },
        "deviceState": {
          "title": "Bảng thiết lập cờ RA của Router",
          "headers": [
            "Phương thức",
            "M Flag (Managed)",
            "O Flag (Other)",
            "Hành vi của Host"
          ],
          "rows": [
            [
              "Chỉ dùng SLAAC",
              "M = 0",
              "O = 0",
              "Tự sinh IP & Gateway từ RA; không hỏi DHCPv6"
            ],
            [
              "Stateless DHCPv6",
              "M = 0",
              "O = 1",
              "Tự sinh IP từ RA; hỏi DHCPv6 để lấy DNS/Domain"
            ],
            [
              "Stateful DHCPv6",
              "M = 1",
              "O = 0",
              "Nhận 100% IP và DNS từ máy chủ DHCPv6"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Host tự tính toán Interface ID (SLAAC)",
        "desc": "Nếu M=0, Host kết hợp Prefix mạng nhận được từ RA với Interface ID 64-bit tự tạo (bằng phương pháp EUI-64 chèn FFFE hoặc sinh ngẫu nhiên) để tạo thành địa chỉ Global Unicast Address (GUA).",
        "fromNode": "client",
        "toNode": "client",
        "packetLabel": "Generate GUA",
        "status": "forward",
        "actionText": "Host tự sinh địa chỉ 2001:DB8:ACAD:1:xxxx:xxxx:xxxx:xxxx",
        "pdu": {
          "layer2": "Khởi tạo địa chỉ nội bộ",
          "layer3": "GUA hoàn chỉnh: 2001:DB8:ACAD:1:1A2B:3CFF:FE4D:5E6F/64",
          "layer4": "Chạy tiến trình DAD (Duplicate Address Detection)",
          "payload": "Kiểm tra trùng lặp địa chỉ IPv6 trước khi chính thức áp dụng."
        },
        "deviceState": {
          "title": "Cấu trúc địa chỉ IPv6 được tạo",
          "headers": [
            "Phần mạng (Routing Prefix)",
            "Subnet ID",
            "Interface ID",
            "Nguồn"
          ],
          "rows": [
            [
              "2001:DB8:ACAD::/48",
              "1",
              "1A2B:3CFF:FE4D:5E6F",
              "SLAAC (RA + EUI-64)"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Truy vấn thông tin bổ sung từ DHCPv6 Server",
        "desc": "Nếu cờ O=1 (Stateless DHCPv6), host gửi bản tin DHCPv6 Information-Request (UDP 547) để xin máy chủ cung cấp thêm địa chỉ DNS Server và Domain Name.",
        "fromNode": "client",
        "toNode": "dhcp6",
        "packetLabel": "DHCPv6 Info-Req",
        "status": "forward",
        "actionText": "Host gửi DHCPv6 Information-Request nhận địa chỉ DNS",
        "pdu": {
          "layer2": "Dst MAC: Router MAC | Src MAC: Client MAC",
          "layer3": "Src IP: FE80::Client | Dst IP: FF02::1:2 (All-DHCP-Relay-Agents-and-Servers)",
          "layer4": "UDP Src: 546 | Dst: 547",
          "payload": "DHCPv6 Message Type: 11 (INFORMATION-REQUEST) | Option: DNS Recursive Name Server"
        },
        "deviceState": {
          "title": "Cấu hình IPv6 hoàn chỉnh của Host (ipconfig)",
          "headers": [
            "Mục cấu hình",
            "Giá trị IPv6 nhận được",
            "Phương thức cấp"
          ],
          "rows": [
            [
              "IPv6 Address",
              "2001:DB8:ACAD:1:1A2B:3CFF:FE4D:5E6F",
              "SLAAC (Router RA)"
            ],
            [
              "Default Gateway",
              "FE80::1",
              "Router RA Link-Local"
            ],
            [
              "DNS Server",
              "2001:4860:4860::8888",
              "Stateless DHCPv6 Server"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Phương thức cấp IPv6",
        "Cờ M (Managed)",
        "Cờ O (Other)",
        "Nguồn cấp IP",
        "Nguồn cấp DNS"
      ],
      "rows": [
        [
          "SLAAC đơn thuần",
          "0",
          "0",
          "Prefix từ Router RA",
          "Không có hoặc qua RDNSS"
        ],
        [
          "Stateless DHCPv6",
          "0",
          "1",
          "Prefix từ Router RA",
          "DHCPv6 Server (UDP 546/547)"
        ],
        [
          "Stateful DHCPv6",
          "1",
          "0",
          "DHCPv6 Server cấp đầy đủ",
          "DHCPv6 Server cấp đầy đủ"
        ]
      ]
    },
    "takeaway": "Trong SLAAC, cờ M=0 và O=1 kích hoạt chế độ Stateless DHCPv6: host tự tạo địa chỉ IP bằng SLAAC và chỉ hỏi DHCPv6 để lấy thông tin DNS/Domain."
  },
  "fhrp_hsrp": {
    "title": "Cơ chế dự phòng cổng ngõ mặc định HSRP (Hot Standby Router Protocol)",
    "badge": "First Hop Redundancy / HSRP Cisco",
    "summary": "HSRP cung cấp tính sẵn sàng cao cho mạng bằng cách cấu hình hai hoặc nhiều router tạo thành một Router ảo (Virtual Router). Các host trỏ Default Gateway vào Virtual IP; khi Active Router lỗi, Standby Router sẽ tự động thay thế.",
    "topology": {
      "nodes": [
        {
          "id": "pc",
          "type": "pc",
          "label": "Host Trạm",
          "sub": "GW: 192.168.1.1 (VIP)",
          "x": 80,
          "y": 80
        },
        {
          "id": "sw",
          "type": "switch",
          "label": "Switch LAN",
          "sub": "Access Port",
          "x": 220,
          "y": 80
        },
        {
          "id": "r1",
          "type": "router",
          "label": "Router R1 (Active)",
          "sub": "Priority: 150",
          "x": 400,
          "y": 40
        },
        {
          "id": "r2",
          "type": "router",
          "label": "Router R2 (Standby)",
          "sub": "Priority: 100",
          "x": 400,
          "y": 120
        },
        {
          "id": "inet",
          "type": "cloud",
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
        "actionText": "R1 (Priority 150) trở thành Active, R2 (100) làm Standby",
        "pdu": {
          "layer2": "Dst MAC: 01:00:5E:00:00:02 (HSRP v1 Multicast)",
          "layer3": "Src IP: 192.168.1.2 (R1 IP) | Dst IP: 224.0.0.2 (HSRP Multicast)",
          "layer4": "UDP Src: 1985 | Dst: 1985",
          "payload": "HSRP Hello: Group=1 | Priority=150 | State=Active | Virtual IP=192.168.1.1"
        },
        "deviceState": {
          "title": "Bảng trạng thái HSRP (show standby brief)",
          "headers": [
            "Giao diện",
            "Nhóm",
            "Priority",
            "Trạng thái",
            "Active Router",
            "Standby Router",
            "Virtual IP"
          ],
          "rows": [
            [
              "Gig0/0",
              "1",
              "150 (Preempt)",
              "Active",
              "local",
              "192.168.1.3",
              "192.168.1.1"
            ],
            [
              "Gig0/0",
              "1",
              "100",
              "Standby",
              "192.168.1.2",
              "local",
              "192.168.1.1"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Chuyển tiếp lưu lượng qua Active Router",
        "desc": "Host gửi lưu lượng đến Virtual IP (192.168.1.1) và Virtual MAC (0000.0c07.ac01). Active Router R1 chịu trách nhiệm chuyển tiếp toàn bộ lưu lượng này ra mạng ngoài.",
        "fromNode": "pc",
        "toNode": "r1",
        "packetLabel": "Data to VIP",
        "status": "forward",
        "actionText": "Active Router R1 chuyển tiếp lưu lượng người dùng ra WAN",
        "pdu": {
          "layer2": "Dst MAC: 0000.0C07.AC01 (Virtual MAC) | Src MAC: Host PC MAC",
          "layer3": "Src IP: 192.168.1.50 | Dst IP: 203.0.113.88 (Internet Server)",
          "layer4": "TCP Port 443",
          "payload": "Host PC chỉ gửi tới Virtual IP/MAC; không cần biết IP vật lý của từng router."
        },
        "deviceState": {
          "title": "Bảng ARP của máy trạm Client",
          "headers": [
            "Địa chỉ IP Cổng ngõ",
            "Địa chỉ MAC tương ứng",
            "Loại",
            "Thiết bị phản hồi"
          ],
          "rows": [
            [
              "192.168.1.1 (VIP)",
              "0000.0c07.ac01 (HSRP v1 VMAC)",
              "Dynamic",
              "R1 phản hồi ARP Reply"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Active Router gặp sự cố đứt kết nối",
        "desc": "Active Router R1 ngừng hoạt động. Standby Router R2 không nhận được gói tin Hello trong suốt thời gian Hold Timer (mặc định 10 giây).",
        "fromNode": "r1",
        "toNode": "r1",
        "packetLabel": "R1 Link Down",
        "status": "drop",
        "actionText": "Hold Timer hết hạn (10s không có Hello từ R1)",
        "pdu": {
          "layer2": "Không có tín hiệu mạng từ R1",
          "layer3": "Gói tin Hello bị gián đoạn",
          "layer4": "Bộ đếm Standby Router R2 Hold Timer đếm ngược về 0",
          "payload": "R2 phát hiện Active Router đã ngừng hoạt động và kích hoạt tiến trình tiếp quản."
        },
        "deviceState": {
          "title": "Bộ đếm thời gian HSRP trên Router R2",
          "headers": [
            "Timer",
            "Giá trị mặc định",
            "Đếm ngược",
            "Sự kiện kích hoạt"
          ],
          "rows": [
            [
              "Hello Timer",
              "3 seconds",
              "0s",
              "Không nhận được gói tin mới"
            ],
            [
              "Hold Timer",
              "10 seconds",
              "Hết hạn (Expired)",
              "Chuyển trạng thái từ Standby -> Active"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Standby Router tiếp quản và gửi Gratuitous ARP",
        "desc": "Standby Router R2 chuyển trạng thái thành Active Router mới và phát gói Gratuitous ARP để cập nhật bảng MAC của Switch. Lưu lượng của Host tự động chuyển qua R2 mà không cần cấu hình lại IP.",
        "fromNode": "r2",
        "toNode": "sw",
        "packetLabel": "GARP (New Active)",
        "status": "forward",
        "actionText": "R2 trở thành Active Router mới, phát Gratuitous ARP",
        "pdu": {
          "layer2": "Dst MAC: FF:FF:FF:FF:FF:FF | Src MAC: 0000.0C07.AC01 (VMAC) | Type: ARP",
          "layer3": "Gratuitous ARP: IP 192.168.1.1 hiện ở cổng nối với R2",
          "layer4": "Cập nhật bảng CAM của Switch chuyển sang cổng R2",
          "payload": "Mạng phục hồi tự động (Failover thành công) trong suốt với người dùng."
        },
        "deviceState": {
          "title": "Bảng CAM Switch LAN sau khi Failover",
          "headers": [
            "Địa chỉ MAC",
            "VLAN",
            "Cổng trước sự cố",
            "Cổng sau Failover"
          ],
          "rows": [
            [
              "0000.0c07.ac01 (VMAC)",
              "1",
              "Fa0/23 (về R1)",
              "Fa0/24 (về R2 - Cập nhật ngay)"
            ]
          ]
        }
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
          "type": "pc",
          "label": "Host Hợp Lệ",
          "sub": "Trusted MAC",
          "x": 80,
          "y": 45
        },
        {
          "id": "rogue_host",
          "type": "attacker",
          "label": "Thiết Bị Lạ",
          "sub": "Unknown MAC",
          "x": 80,
          "y": 120
        },
        {
          "id": "sw",
          "type": "switch",
          "label": "Switch Catalyst",
          "sub": "Port Sec / DAI",
          "x": 310,
          "y": 80
        },
        {
          "id": "srv",
          "type": "server",
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
        "actionText": "Địa chỉ MAC nguồn hợp lệ: Chuyển tiếp khung",
        "pdu": {
          "layer2": "Src MAC: 001A.2B3C.4D01 (Đã đăng ký Sticky MAC) | Dst MAC: Server MAC",
          "layer3": "Src IP: 192.168.1.10 | Dst IP: 192.168.1.100",
          "layer4": "TCP Port 80",
          "payload": "Khung tin hợp lệ phù hợp với chính sách bảo mật."
        },
        "deviceState": {
          "title": "Bảng Port Security (show port-security interface fa0/1)",
          "headers": [
            "Cổng mạng",
            "Chế độ bảo mật",
            "Số MAC tối đa",
            "Số MAC hiện tại",
            "Vi phạm"
          ],
          "rows": [
            [
              "FastEthernet0/1",
              "Enabled",
              "1",
              "1 (001a.2b3c.4d01)",
              "0 (Bình thường)"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "Thiết bị lạ gửi khung vi phạm Port Security",
        "desc": "Thiết bị lạ cắm vào cổng Fa0/2 gửi khung có Source MAC chưa được cấp phép, vượt quá số lượng địa chỉ MAC tối đa (maximum MAC) trên cổng.",
        "fromNode": "rogue_host",
        "toNode": "sw",
        "packetLabel": "Rogue MAC",
        "status": "drop",
        "actionText": "Phát hiện địa chỉ MAC không xác thực trên cổng Fa0/2",
        "pdu": {
          "layer2": "Src MAC: DEAD.BEEF.0001 (MAC lạ chưa đăng ký) | Dst MAC: Server MAC",
          "layer3": "IP Nguồn không được tin cậy",
          "layer4": "Kích hoạt bộ kiểm tra phần cứng ASIC Security",
          "payload": "Vi phạm chính sách: Số lượng MAC vượt quá giới hạn max 1."
        },
        "deviceState": {
          "title": "Báo động vi phạm bảo mật (Security Violation)",
          "headers": [
            "Cổng",
            "Địa chỉ MAC vi phạm",
            "Hành động cấu hình (Action)"
          ],
          "rows": [
            [
              "FastEthernet0/2",
              "dead.beef.0001",
              "Shutdown (Đưa cổng vào err-disabled)"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Kích hoạt chế độ xử lý vi phạm (Violation Mode)",
        "desc": "Switch kích hoạt chế độ vi phạm: Protect (thả bỏ khung im lặng), Restrict (thả bỏ khung, gửi cảnh báo Syslog/SNMP và tăng bộ đếm), hoặc Shutdown (đưa cổng về err-disabled).",
        "fromNode": "sw",
        "toNode": "rogue_host",
        "packetLabel": "err-disabled",
        "status": "drop",
        "actionText": "Chế độ Shutdown đưa cổng Fa0/2 vào trạng thái err-disabled",
        "pdu": {
          "layer2": "Khung dữ liệu bị hủy bỏ (Dropped)",
          "layer3": "Cổng mạng bị ngắt điện tử vật lý (Line protocol down)",
          "layer4": "Syslog: %PM-4-ERR_DISABLE: psecure-violation error detected on Fa0/2",
          "payload": "Ngăn chặn triệt để nguy cơ tấn công tràn bảng MAC (MAC Flooding)."
        },
        "deviceState": {
          "title": "Trạng thái cổng sau vi phạm",
          "headers": [
            "Cổng mạng",
            "Trạng thái cổng",
            "Nguyên nhân",
            "Khôi phục"
          ],
          "rows": [
            [
              "FastEthernet0/2",
              "down / down (err-disabled)",
              "psecure-violation",
              "Cần shutdown / no shutdown"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Dynamic ARP Inspection (DAI) kiểm tra gói tin ARP",
        "desc": "DAI kiểm tra gói tin ARP Reply trên cổng Untrusted đối chiếu với bảng DHCP Snooping Binding Table. Nếu thông tin IP/MAC không khớp, switch thả bỏ (drop) gói ARP ngay lập tức.",
        "fromNode": "rogue_host",
        "toNode": "sw",
        "packetLabel": "Bad ARP Drop",
        "status": "drop",
        "actionText": "DAI thả bỏ gói ARP giả mạo không khớp bảng Binding",
        "pdu": {
          "layer2": "Fake ARP Reply: IP 192.168.1.1 is at DEAD.BEEF.0001",
          "layer3": "DAI đối chiếu với DHCP Snooping: IP 192.168.1.1 thuộc MAC 000C.CF82.9A01",
          "layer4": "Xác định gói tin giả mạo (ARP Spoofing Attack)",
          "payload": "Switch thả bỏ gói ARP độc hại và ghi nhật ký cảnh báo DAI."
        },
        "deviceState": {
          "title": "Bảng DHCP Snooping Binding Table",
          "headers": [
            "Địa chỉ MAC",
            "Địa chỉ IP",
            "Thời gian thuê (Lease)",
            "VLAN",
            "Cổng"
          ],
          "rows": [
            [
              "000c.cf82.9a01",
              "192.168.1.1",
              "Static Trusted",
              "1",
              "Gi0/1 (Trusted)"
            ],
            [
              "001a.2b3c.4d01",
              "192.168.1.10",
              "86400s",
              "1",
              "Fa0/1 (Untrusted)"
            ]
          ]
        }
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
  "wlan_capwap_split_mac": {
    "title": "Kiến trúc mạng không dây Split-MAC: Lightweight AP & WLC qua CAPWAP",
    "badge": "Wireless LAN / Split-MAC Architecture",
    "summary": "Mạng không dây doanh nghiệp của Cisco sử dụng kiến trúc Split-MAC để chia tách các chức năng 802.11 giữa Lightweight Access Point (LAP) và Wireless LAN Controller (WLC) thông qua hai đường hầm CAPWAP mã hóa.",
    "topology": {
      "nodes": [
        {
          "id": "client",
          "type": "pc",
          "label": "Wi-Fi Client",
          "sub": "802.11 Station",
          "x": 70,
          "y": 80
        },
        {
          "id": "ap",
          "type": "server",
          "label": "Lightweight AP (LAP)",
          "sub": "Real-time MAC",
          "x": 230,
          "y": 80
        },
        {
          "id": "sw",
          "type": "switch",
          "label": "Switch phân phối",
          "sub": "PoE+ Trunk",
          "x": 390,
          "y": 80
        },
        {
          "id": "wlc",
          "type": "router",
          "label": "Cisco WLC",
          "sub": "Management MAC",
          "x": 550,
          "y": 80
        }
      ],
      "links": [
        {
          "from": "client",
          "to": "ap",
          "label": "802.11 Wireless"
        },
        {
          "from": "ap",
          "to": "sw",
          "label": "Ethernet PoE"
        },
        {
          "from": "sw",
          "to": "wlc",
          "label": "Đường hầm CAPWAP"
        }
      ]
    },
    "steps": [
      {
        "num": 1,
        "name": "Khách hàng kết nối không dây với Lightweight AP",
        "desc": "Thiết bị Wi-Fi của người dùng gửi các khung Beacon/Probe/Association tới AP trên băng tần 2.4GHz hoặc 5GHz.",
        "fromNode": "client",
        "toNode": "ap",
        "packetLabel": "802.11 Assoc",
        "status": "forward",
        "actionText": "Client thực hiện bắt tay liên kết 802.11 với AP",
        "pdu": {
          "layer2": "802.11 Frame: Subtype=Association Request | SSID='Campus-Secure'",
          "layer3": "Chưa có IP (Đang ở giai đoạn xác thực Lớp 2 không dây)",
          "layer4": "Mã hóa WPA2/WPA3 Enterprise (802.1X)",
          "payload": "Lightweight AP xử lý các tác vụ thời gian thực (Real-time MAC)."
        },
        "deviceState": {
          "title": "Phân chia chức năng Split-MAC",
          "headers": [
            "Thiết bị đảm nhiệm",
            "Chức năng thực thi",
            "Chi tiết kỹ thuật"
          ],
          "rows": [
            [
              "Lightweight AP (LAP)",
              "Real-Time MAC functions",
              "Gửi Beacon, mã hóa phần cứng vô tuyến, ACK L2"
            ],
            [
              "Controller (WLC)",
              "Management MAC functions",
              "Xác thực 802.1X, chuyển vùng Roaming, quản lý kênh RF"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "AP đóng gói dữ liệu vào đường hầm CAPWAP",
        "desc": "Lightweight AP đóng gói toàn bộ khung 802.11 của client vào tiêu đề đường hầm CAPWAP (sử dụng giao thức UDP) để chuyển tiếp qua mạng Lớp 3 tới WLC.",
        "fromNode": "ap",
        "toNode": "sw",
        "packetLabel": "CAPWAP Data",
        "status": "forward",
        "actionText": "Đóng gói dữ liệu vào đường hầm CAPWAP UDP 5247",
        "pdu": {
          "layer2": "Ethernet II nối giữa AP và Switch phân phối",
          "layer3": "Src IP: AP IP (10.0.1.50) | Dst IP: WLC IP (10.0.100.10)",
          "layer4": "UDP Src: 5247 | Dst: 5247 (CAPWAP Data Channel)",
          "payload": "Tiêu đề CAPWAP chứa toàn bộ khung 802.11 nguyên bản của Client."
        },
        "deviceState": {
          "title": "Trạng thái đường hầm CAPWAP",
          "headers": [
            "Loại kênh",
            "Cổng UDP",
            "Mã hóa DTLS",
            "Mục đích sử dụng"
          ],
          "rows": [
            [
              "CAPWAP Control",
              "UDP 5246",
              "Bắt buộc mã hóa DTLS",
              "Cấu hình, cập nhật firmware AP"
            ],
            [
              "CAPWAP Data",
              "UDP 5247",
              "Tùy chọn mã hóa DTLS",
              "Vận chuyển lưu lượng dữ liệu người dùng"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "WLC giải mã và xử lý xác thực tập trung",
        "desc": "WLC bóc tách tiêu đề CAPWAP, kiểm tra chính sách bảo mật, phối hợp với máy chủ RADIUS để xác thực tài khoản và gán VLAN tương ứng cho Client.",
        "fromNode": "sw",
        "toNode": "wlc",
        "packetLabel": "WLC Auth/VLAN",
        "status": "forward",
        "actionText": "WLC xử lý chính sách xác thực và gán VLAN người dùng",
        "pdu": {
          "layer2": "WLC bóc tiêu đề CAPWAP, chuyển đổi khung 802.11 sang 802.3 Ethernet",
          "layer3": "Kiểm tra IP Client và gửi truy vấn RADIUS Lớp 3",
          "layer4": "RADIUS UDP 1812/1813",
          "payload": "Client được xác thực thành công và đưa vào VLAN 10."
        },
        "deviceState": {
          "title": "Bảng Client trên WLC (show client summary)",
          "headers": [
            "Địa chỉ MAC",
            "AP kết nối",
            "WLAN SSID",
            "VLAN",
            "Bảo mật"
          ],
          "rows": [
            [
              "001a.2b3c.4d01",
              "AP-Floor-1",
              "Campus-Secure",
              "VLAN 10",
              "WPA2-Enterprise (AES)"
            ]
          ]
        }
      }
    ],
    "specTable": {
      "headers": [
        "Cơ chế kiến trúc",
        "Autonomous AP (Độc lập)",
        "Lightweight AP (Tập trung qua WLC)"
      ],
      "rows": [
        [
          "Quản lý cấu hình",
          "Cấu hình độc lập trên từng AP riêng lẻ",
          "Quản lý tập trung 100% từ giao diện WLC"
        ],
        [
          "Giao thức đường hầm",
          "Không có đường hầm (Cắm thẳng cổng Trunk)",
          "Đường hầm CAPWAP (Control: UDP 5246, Data: UDP 5247)"
        ],
        [
          "Xử lý chuyển vùng (Roaming)",
          "Chậm, dễ đứt kết nối phiên",
          "Nhanh chóng, chuyển vùng liền mạch giữa các AP"
        ]
      ]
    },
    "takeaway": "Trong kiến trúc Split-MAC, AP xử lý chức năng thời gian thực (Real-time MAC), còn WLC xử lý quản lý chính sách và xác thực (Management MAC) qua hai cổng UDP 5246 (Control) và 5247 (Data)."
  },
  "routing_lpm_static": {
    "title": "Nguyên lý chọn tuyến định tuyến: Longest Prefix Match (LPM)",
    "badge": "Routing Concepts / Longest Match",
    "summary": "Khi định tuyến một gói tin IP, Router duyệt bảng định tuyến để tìm tuyến khớp. Nguyên tắc ưu tiên hàng đầu là Tiền tố dài nhất (Longest Prefix Match - số bit 1 khớp trong subnet mask nhiều nhất).",
    "topology": {
      "nodes": [
        {
          "id": "ingress",
          "type": "pc",
          "label": "Gói tin IP",
          "sub": "Dst: 192.168.10.130",
          "x": 80,
          "y": 80
        },
        {
          "id": "table",
          "type": "router",
          "label": "Bảng Routing",
          "sub": "Thuật toán LPM",
          "x": 310,
          "y": 80
        },
        {
          "id": "egress",
          "type": "cloud",
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
        "actionText": "Đọc địa chỉ IP đích: 192.168.10.130",
        "pdu": {
          "layer2": "Dst MAC: Router MAC | Src MAC: Previous Hop MAC | Type: 0x0800",
          "layer3": "Src IP: 10.1.1.5 | Dst IP: 192.168.10.130 | TTL: 64",
          "layer4": "TCP Port 80",
          "payload": "Router đưa địa chỉ IP đích vào tiến trình tra cứu bảng định tuyến."
        },
        "deviceState": {
          "title": "Bảng định tuyến đang so khớp (Routing Table Entries)",
          "headers": [
            "Tuyến đường trong bảng",
            "Tiền tố (Prefix)",
            "Số bit khớp với 192.168.10.130",
            "Kết quả"
          ],
          "rows": [
            [
              "Tuyến A: 192.168.10.0/24",
              "24 bits",
              "24 bits khớp (192.168.10.x)",
              "Khớp một phần"
            ],
            [
              "Tuyến B: 192.168.10.128/28",
              "28 bits",
              "28 bits khớp (192.168.10.128 - 143)",
              "Khớp sâu nhất (LPM)"
            ],
            [
              "Tuyến C: 0.0.0.0/0 (Default)",
              "0 bits",
              "0 bits",
              "Tuyến mặc định dự phòng"
            ]
          ]
        }
      },
      {
        "num": 2,
        "name": "So khớp các mục trong Bảng định tuyến",
        "desc": "Router so sánh IP đích với các tuyến: Tuyến A (192.168.10.0/24 - khớp 24 bit), Tuyến B (192.168.10.128/28 - khớp 28 bit), Tuyến mặc định (0.0.0.0/0 - khớp 0 bit).",
        "fromNode": "table",
        "toNode": "table",
        "packetLabel": "Compare /28 vs /24",
        "status": "forward",
        "actionText": "So khớp độ dài tiền tố: /28 (28 bit) vs /24 (24 bit)",
        "pdu": {
          "layer2": "Tra cứu phần cứng CEF (Cisco Express Forwarding)",
          "layer3": "So sánh nhị phân: 192.168.10.10000010 khớp với 192.168.10.1000xxxx (/28)",
          "layer4": "Thuật toán Radix Tree tìm kiếm tuyến dài nhất",
          "payload": "Tiền tố /28 có độ dài tiền tố lớn hơn /24."
        },
        "deviceState": {
          "title": "Bảng chuyển tiếp FIB (Forwarding Information Base)",
          "headers": [
            "Tiền tố mạng",
            "Giao diện đầu ra",
            "Next-Hop IP",
            "Độ dài tiền tố"
          ],
          "rows": [
            [
              "192.168.10.128/28",
              "Serial0/0/0",
              "10.0.0.2",
              "/28 (Thắng chọn)"
            ],
            [
              "192.168.10.0/24",
              "GigabitEthernet0/1",
              "192.168.10.1",
              "/24 (Bị loại vì ngắn hơn)"
            ]
          ]
        }
      },
      {
        "num": 3,
        "name": "Chọn tuyến có Subnet Mask dài nhất (/28)",
        "desc": "Tuyến 192.168.10.128/28 có số bit khớp nhiều nhất (28 bit) nên được lựa chọn. Giá trị Administrative Distance (AD) chỉ được xét đến khi có 2 tuyến có cùng độ dài prefix.",
        "fromNode": "table",
        "toNode": "egress",
        "packetLabel": "Select /28 Route",
        "status": "forward",
        "actionText": "Tuyến /28 có độ dài tiền tố dài nhất được chọn",
        "pdu": {
          "layer2": "Xác định cổng xuất: Serial0/0/0 (Next-hop 10.0.0.2)",
          "layer3": "Giảm TTL đi 1 (TTL=63). Tính lại Header Checksum",
          "layer4": "Gói tin chuẩn bị đóng gói lớp 2 mới",
          "payload": "LPM luôn có độ ưu tiên cao nhất, vượt qua cả Administrative Distance."
        },
        "deviceState": {
          "title": "Thứ tự ưu tiên định tuyến Cisco",
          "headers": [
            "Mức ưu tiên",
            "Tiêu chí",
            "Quy tắc áp dụng"
          ],
          "rows": [
            [
              "Ưu tiên 1 (Cao nhất)",
              "Longest Prefix Match (LPM)",
              "Tuyến có nhiều bit 1 nhất trong Subnet Mask luôn thắng"
            ],
            [
              "Ưu tiên 2",
              "Administrative Distance (AD)",
              "Chỉ xét khi các tuyến có CÙNG độ dài tiền tố"
            ],
            [
              "Ưu tiên 3",
              "Metric (Cost / Hop count)",
              "Chỉ xét khi cùng giao thức và cùng tiền tố"
            ]
          ]
        }
      },
      {
        "num": 4,
        "name": "Đóng gói Lớp 2 và chuyển tiếp ra Next-Hop",
        "desc": "Router xác định cổng Egress và Next-Hop IP tương ứng, tra bảng ARP lấy Destination MAC và chuyển tiếp khung ra ngoài.",
        "fromNode": "table",
        "toNode": "egress",
        "packetLabel": "Forward Egress",
        "status": "forward",
        "actionText": "Chuyển tiếp gói tin ra cổng Next-Hop của tuyến /28",
        "pdu": {
          "layer2": "Encapsulation mới: HDLC / PPP trên cổng Serial0/0/0 (hoặc Ethernet MAC)",
          "layer3": "Src IP: 10.1.1.5 | Dst IP: 192.168.10.130 | TTL: 63",
          "layer4": "TCP Port 80",
          "payload": "Gói tin được chuyển tiếp thành công đến router kế tiếp."
        },
        "deviceState": {
          "title": "Bảng kề CEF Adjacency Table",
          "headers": [
            "Next-Hop IP",
            "Cổng ra",
            "Đóng gói L2",
            "Trạng thái"
          ],
          "rows": [
            [
              "10.0.0.2",
              "Serial0/0/0",
              "HDLC Encapsulation",
              "Up / Forwarding"
            ]
          ]
        }
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

  window.QUESTION_VISUAL_MAP = {
  "m1-4_q2": "switch_boot_sequence",
  "m1-4_q5": "etherchannel_bundling",
  "m1-4_q7": "switch_boot_sequence",
  "m1-4_q8": "switch_boot_sequence",
  "m1-4_q10": "etherchannel_bundling",
  "m1-4_q12": "switch_boot_sequence",
  "m1-4_q14": "switch_forwarding_methods",
  "m1-4_q15": "stp_port_states",
  "m1-4_q16": "switch_forwarding_methods",
  "m1-4_q17": "etherchannel_bundling",
  "m1-4_q19": "switch_forwarding_methods",
  "m1-4_q22": "switch_forwarding_methods",
  "m1-4_q24": "etherchannel_bundling",
  "m1-4_q25": "vlan_tagging",
  "m1-4_q26": "switch_boot_sequence",
  "m1-4_q27": "vlan_tagging",
  "m1-4_q29": "vlan_tagging",
  "m1-4_q30": "stp_port_states",
  "m1-4_q31": "vlan_tagging",
  "m1-4_q33": "etherchannel_bundling",
  "m1-4_q35": "vlan_tagging",
  "m1-4_q37": "vlan_tagging",
  "m1-4_q38": "etherchannel_bundling",
  "m1-4_q39": "inter_vlan_roas",
  "m1-4_q40": "inter_vlan_roas",
  "m1-4_q41": "inter_vlan_roas",
  "m1-4_q42": "inter_vlan_roas",
  "m1-4_q43": "vlan_tagging",
  "m1-4_q44": "inter_vlan_roas",
  "m1-4_q45": "inter_vlan_roas",
  "m1-4_q46": "inter_vlan_roas",
  "m1-4_q47": "inter_vlan_roas",
  "m1-4_q48": "vlan_tagging",
  "m1-4_q49": "inter_vlan_roas",
  "m1-4_q50": "etherchannel_bundling",
  "m1-4_q51": "inter_vlan_roas",
  "m1-4_q54": "inter_vlan_roas",
  "m1-4_q55": "inter_vlan_roas",
  "m1-4_q56": "inter_vlan_roas",
  "m1-4_q59": "etherchannel_bundling",
  "m1-4_q63": "vlan_tagging",
  "m1-4_q64": "etherchannel_bundling",
  "m1-4_q65": "vlan_tagging",
  "m1-4_q68": "vlan_tagging",
  "m1-4_q69": "vlan_tagging",
  "m1-4_q73": "inter_vlan_roas",
  "m1-4_q74": "inter_vlan_roas",
  "m1-4_q75": "vlan_tagging",
  "m1-4_q76": "vlan_tagging",
  "m1-4_q78": "dhcpv4_dora",
  "m1-4_q79": "vlan_tagging",
  "m5-6_q1": "vlan_tagging",
  "m5-6_q2": "stp_root_election",
  "m5-6_q3": "stp_port_states",
  "m5-6_q4": "stp_port_states",
  "m5-6_q5": "stp_root_election",
  "m5-6_q7": "stp_port_states",
  "m5-6_q8": "stp_root_election",
  "m5-6_q10": "stp_port_states",
  "m5-6_q13": "stp_port_states",
  "m5-6_q15": "stp_root_election",
  "m5-6_q16": "stp_root_election",
  "m5-6_q17": "stp_port_states",
  "m5-6_q18": "stp_root_election",
  "m5-6_q19": "etherchannel_bundling",
  "m5-6_q20": "etherchannel_bundling",
  "m5-6_q21": "etherchannel_bundling",
  "m5-6_q22": "etherchannel_bundling",
  "m5-6_q23": "etherchannel_bundling",
  "m5-6_q24": "etherchannel_bundling",
  "m5-6_q25": "etherchannel_bundling",
  "m5-6_q26": "etherchannel_bundling",
  "m5-6_q27": "etherchannel_bundling",
  "m5-6_q28": "etherchannel_bundling",
  "m5-6_q29": "vlan_tagging",
  "m5-6_q30": "etherchannel_bundling",
  "m5-6_q31": "stp_port_states",
  "m5-6_q32": "etherchannel_bundling",
  "m5-6_q33": "stp_port_states",
  "m5-6_q34": "vlan_tagging",
  "m5-6_q35": "etherchannel_bundling",
  "m5-6_q36": "etherchannel_bundling",
  "m5-6_q37": "stp_root_election",
  "m5-6_q38": "stp_port_states",
  "m5-6_q39": "stp_port_states",
  "m5-6_q40": "stp_port_states",
  "m5-6_q42": "stp_root_election",
  "m5-6_q43": "stp_port_states",
  "m5-6_q44": "stp_root_election",
  "m5-6_q45": "etherchannel_bundling",
  "m5-6_q46": "etherchannel_bundling",
  "m5-6_q47": "etherchannel_bundling",
  "m5-6_q48": "etherchannel_bundling",
  "m5-6_q49": "etherchannel_bundling",
  "m5-6_q50": "etherchannel_bundling",
  "m5-6_q51": "etherchannel_bundling",
  "m5-6_q52": "etherchannel_bundling",
  "m5-6_q53": "stp_port_states",
  "m5-6_q54": "stp_port_states",
  "m5-6_q55": "routing_lpm_static",
  "m5-6_q56": "stp_port_states",
  "m7-9_q1": "dhcpv4_dora",
  "m7-9_q2": "dhcp_relay_agent",
  "m7-9_q3": "dhcpv4_dora",
  "m7-9_q4": "dhcpv4_dora",
  "m7-9_q5": "dhcpv4_dora",
  "m7-9_q6": "etherchannel_bundling",
  "m7-9_q7": "dhcpv4_dora",
  "m7-9_q8": "dhcpv4_dora",
  "m7-9_q9": "etherchannel_bundling",
  "m7-9_q10": "dhcpv4_dora",
  "m7-9_q11": "dhcpv4_dora",
  "m7-9_q12": "etherchannel_bundling",
  "m7-9_q13": "dhcpv4_dora",
  "m7-9_q15": "dhcp_relay_agent",
  "m7-9_q16": "dhcpv4_dora",
  "m7-9_q17": "dhcp_relay_agent",
  "m7-9_q18": "dhcpv4_dora",
  "m7-9_q20": "slaac_dhcpv6",
  "m7-9_q22": "slaac_dhcpv6",
  "m7-9_q23": "slaac_dhcpv6",
  "m7-9_q24": "slaac_dhcpv6",
  "m7-9_q25": "slaac_dhcpv6",
  "m7-9_q26": "fhrp_hsrp",
  "m7-9_q27": "stp_port_states",
  "m7-9_q28": "fhrp_hsrp",
  "m7-9_q29": "fhrp_hsrp",
  "m7-9_q30": "fhrp_hsrp",
  "m7-9_q31": "fhrp_hsrp",
  "m7-9_q33": "dhcpv4_dora",
  "m7-9_q34": "slaac_dhcpv6",
  "m7-9_q35": "fhrp_hsrp",
  "m7-9_q36": "dhcpv4_dora",
  "m7-9_q38": "dhcpv4_dora",
  "m7-9_q39": "slaac_dhcpv6",
  "m7-9_q40": "fhrp_hsrp",
  "m7-9_q42": "dhcpv4_dora",
  "m7-9_q44": "dhcpv4_dora",
  "m7-9_q45": "dhcpv4_dora",
  "m7-9_q47": "dhcpv4_dora",
  "m7-9_q48": "dhcpv4_dora",
  "m7-9_q50": "slaac_dhcpv6",
  "m7-9_q51": "fhrp_hsrp",
  "m7-9_q52": "dhcpv4_dora",
  "m7-9_q53": "etherchannel_bundling",
  "m7-9_q54": "dhcpv4_dora",
  "m7-9_q55": "fhrp_hsrp",
  "m7-9_q56": "slaac_dhcpv6",
  "m7-9_q57": "dhcpv4_dora",
  "m7-9_q58": "fhrp_hsrp",
  "m7-9_q59": "fhrp_hsrp",
  "m7-9_q64": "fhrp_hsrp",
  "m7-9_q69": "dhcpv4_dora",
  "m10-13_q2": "stp_port_states",
  "m10-13_q6": "stp_port_states",
  "m14-16_q1": "routing_lpm_static",
  "m14-16_q5": "etherchannel_bundling",
  "m14-16_q6": "routing_lpm_static",
  "m14-16_q8": "routing_lpm_static",
  "m14-16_q9": "routing_lpm_static",
  "m14-16_q10": "routing_lpm_static",
  "m14-16_q12": "routing_lpm_static",
  "m14-16_q13": "routing_lpm_static",
  "m14-16_q14": "routing_lpm_static",
  "m14-16_q15": "routing_lpm_static",
  "m14-16_q17": "routing_lpm_static",
  "m14-16_q10_dup": "routing_lpm_static",
  "m14-16_q19": "routing_lpm_static",
  "m14-16_q20": "routing_lpm_static",
  "m14-16_q21": "routing_lpm_static",
  "m14-16_q22": "routing_lpm_static",
  "m14-16_q23": "routing_lpm_static",
  "m14-16_q24": "routing_lpm_static",
  "m14-16_q25": "etherchannel_bundling",
  "m14-16_q27": "routing_lpm_static",
  "m14-16_q28": "routing_lpm_static",
  "m14-16_q29": "routing_lpm_static",
  "m14-16_q30": "routing_lpm_static",
  "m14-16_q172": "routing_lpm_static",
  "m14-16_q32": "routing_lpm_static",
  "m14-16_q33": "routing_lpm_static",
  "m14-16_q34": "routing_lpm_static",
  "m14-16_q35": "routing_lpm_static",
  "m14-16_q36": "routing_lpm_static",
  "m14-16_q41": "routing_lpm_static",
  "m14-16_q42": "routing_lpm_static",
  "m14-16_q43": "routing_lpm_static",
  "m14-16_q44": "routing_lpm_static",
  "m14-16_q45": "routing_lpm_static",
  "m14-16_q46": "routing_lpm_static",
  "m14-16_q47": "routing_lpm_static",
  "m14-16_q49": "routing_lpm_static",
  "m14-16_q51": "routing_lpm_static",
  "m14-16_q52": "routing_lpm_static",
  "m14-16_q54": "routing_lpm_static",
  "m14-16_q55": "routing_lpm_static",
  "m14-16_q56": "routing_lpm_static",
  "m14-16_q57": "routing_lpm_static",
  "m14-16_q58": "routing_lpm_static",
  "m14-16_q59": "routing_lpm_static",
  "m14-16_q60": "routing_lpm_static",
  "m14-16_q61": "routing_lpm_static",
  "m14-16_q63": "routing_lpm_static",
  "m14-16_q64": "routing_lpm_static",
  "final_q1": "inter_vlan_roas",
  "final_q2": "vlan_tagging",
  "final_q3": "inter_vlan_roas",
  "final_q5": "wlan_capwap_split_mac",
  "final_q6": "etherchannel_bundling",
  "final_q7": "routing_lpm_static",
  "final_q8": "routing_lpm_static",
  "final_q9": "routing_lpm_static",
  "final_q16": "switch_forwarding_methods",
  "final_q17": "fhrp_hsrp",
  "final_q18": "fhrp_hsrp",
  "final_q19": "l2_security_defense",
  "final_q21": "dhcpv4_dora",
  "final_q24": "stp_root_election",
  "final_q28": "routing_lpm_static",
  "final_q29": "routing_lpm_static",
  "final_q30": "routing_lpm_static",
  "final_q31": "routing_lpm_static",
  "final_q32": "routing_lpm_static",
  "final_q33": "etherchannel_bundling",
  "final_q34": "etherchannel_bundling",
  "final_q35": "etherchannel_bundling",
  "final_q36": "vlan_tagging",
  "final_q37": "vlan_tagging",
  "final_q38": "vlan_tagging",
  "final_q39": "etherchannel_bundling",
  "final_q41": "slaac_dhcpv6",
  "final_q42": "slaac_dhcpv6",
  "final_q43": "etherchannel_bundling",
  "final_q44": "l2_security_defense",
  "final_q45": "l2_security_defense",
  "final_q46": "l2_security_defense",
  "final_q47": "l2_security_defense",
  "final_q48": "wlan_capwap_split_mac",
  "final_q49": "stp_port_states",
  "final_q50": "wlan_capwap_split_mac",
  "final_q51": "switch_boot_sequence",
  "final_q52": "wlan_capwap_split_mac",
  "final_q53": "vlan_tagging",
  "final_q54": "dhcp_relay_agent",
  "final_q55": "routing_lpm_static",
  "final_q56": "stp_root_election"
};

})();
