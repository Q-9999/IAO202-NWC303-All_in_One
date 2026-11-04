const QUESTIONS_DATA = [
  {
    "id": "m1-4_q1",
    "original_num": 1,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which tasks can be accomplished by using the command history feature? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "View a list of commands entered in a previous session.",
        "is_correct": false
      },
      {
        "text": "Recall up to 15 command lines by default.",
        "is_correct": false
      },
      {
        "text": "Set the command history buffer size.",
        "is_correct": true
      },
      {
        "text": "Recall previously entered commands.",
        "is_correct": true
      },
      {
        "text": "Save command lines in a log file for future reference.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.5.7\nThe history command allows you to view and reuse previously entered commands stored in the buffer. It is also used to manage the of the buffer.",
    "topic": "Topic 1.5.7",
    "module": 1,
    "type": "multiple"
  },
  {
    "id": "m1-4_q2",
    "original_num": 2,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What is the first action in the boot sequence when a switch is powered on?",
    "images": [],
    "options": [
      {
        "text": "load the default Cisco IOS software",
        "is_correct": false
      },
      {
        "text": "load boot loader software",
        "is_correct": false
      },
      {
        "text": "low-level CPU initialization",
        "is_correct": false
      },
      {
        "text": "load a power-on self-test program",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 1.1.1\nThe first action to take place when a switch is powered on is the POST or power-on self-test. POST performs tests on the CPU, memory, and flash in preparation for loading the boot loader.",
    "topic": "Topic 1.1.1",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q3",
    "original_num": 3,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What must an administrator have in order to reset a lost password on a router?",
    "images": [],
    "options": [
      {
        "text": "a TFTP server",
        "is_correct": false
      },
      {
        "text": "a crossover cable",
        "is_correct": false
      },
      {
        "text": "access to another router",
        "is_correct": false
      },
      {
        "text": "physical access to the router",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 1.1.4\nConsole access to the device through a terminal or terminal emulator software on a PC is required for password recovery.",
    "topic": "Topic 1.1.4",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q4",
    "original_num": 4,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "When configuring a switch for SSH access, what other command that is associated with the login local command is required to be entered on the switch?",
    "images": [],
    "options": [
      {
        "text": "enable secret password",
        "is_correct": false
      },
      {
        "text": "password password",
        "is_correct": false
      },
      {
        "text": "username username secret secret",
        "is_correct": true
      },
      {
        "text": "login block-for seconds attempts number within*seconds*",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.3.4\nThe login local command designates that the local username database is used to authenticate interfaces such as console or vty.",
    "topic": "Topic 1.3.4",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q5",
    "original_num": 5,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which command displays information about the auto-MDIX setting for a specific interface?​",
    "images": [],
    "options": [
      {
        "text": "show interfaces",
        "is_correct": false
      },
      {
        "text": "show controllers",
        "is_correct": true
      },
      {
        "text": "show processes",
        "is_correct": false
      },
      {
        "text": "show running-config",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.2.3\nTo examine the auto-MDIX setting for a specific interface, the show controllers ethernet-controller command with the phy keyword should be used.",
    "topic": "Topic 1.2.3",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q6",
    "original_num": 6,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "If one end of an Ethernet connection is configured for full duplex and the other end of the connection is configured for half duplex, where would late collisions be observed?",
    "images": [],
    "options": [
      {
        "text": "on both ends of the connection",
        "is_correct": false
      },
      {
        "text": "on the full-duplex end of the connection",
        "is_correct": false
      },
      {
        "text": "only on serial interfaces",
        "is_correct": false
      },
      {
        "text": "on the half-duplex end of the connection",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 1.2.7\nFull-duplex communications do not produce collisions. However, collisions often occur in half-duplex operations. When a connection has two different duplex configurations, the half-duplex end will experience late collisions. Collisions are found on Ethernet networks. Serial interfaces use technologies other than Ethernet.",
    "topic": "Topic 1.2.7",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q7",
    "original_num": 7,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which command is used to set the BOOT environment variable that defines where to find the IOS image file on a switch?",
    "images": [],
    "options": [
      {
        "text": "config-register",
        "is_correct": false
      },
      {
        "text": "boot system",
        "is_correct": true
      },
      {
        "text": "boot loader",
        "is_correct": false
      },
      {
        "text": "confreg",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.1.2\nThe boot system command is used to set the BOOT environment variable. The config-register and confreg commands are used to set the configuration register. The boot loader command supports commands to format the flash file system, reinstall the operating system software, and recover from a lost or forgotten password.",
    "topic": "Topic 1.1.2",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q8",
    "original_num": 8,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What does a switch use to locate and load the IOS image?",
    "images": [],
    "options": [
      {
        "text": "BOOT environment variable",
        "is_correct": true
      },
      {
        "text": "IOS image file",
        "is_correct": false
      },
      {
        "text": "POST",
        "is_correct": false
      },
      {
        "text": "startup-config",
        "is_correct": false
      },
      {
        "text": "NVRAM",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.1.2\nThe BOOT environment variable contains the information about where to find the IOS image file.",
    "topic": "Topic 1.1.2",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q9",
    "original_num": 9,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which protocol adds security to remote connections?",
    "images": [],
    "options": [
      {
        "text": "FTP",
        "is_correct": false
      },
      {
        "text": "HTTP",
        "is_correct": false
      },
      {
        "text": "NetBEUI",
        "is_correct": false
      },
      {
        "text": "POP",
        "is_correct": false
      },
      {
        "text": "SSH",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 1.3.1\nSSH allows a technician to securely connect to a remote network device for monitoring and troubleshooting. HTTP establishes web page requests. FTP manages file transfer. NetBEUI is not routed on the Internet. POP downloads email messages from email servers.",
    "topic": "Topic 1.3.1",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q10",
    "original_num": 10,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What is a characteristic of an IPv4 loopback interface on a Cisco IOS router?​",
    "images": [],
    "options": [
      {
        "text": "The no shutdown command is required to place this interface in an UP state.​",
        "is_correct": false
      },
      {
        "text": "It is a logical interface internal to the router.",
        "is_correct": true
      },
      {
        "text": "Only one loopback interface can be enabled on a router.​",
        "is_correct": false
      },
      {
        "text": "It is assigned to a physical port and can be connected to other devices.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.4.6\nThe loopback interface is a logical interface internal to the router and is automatically placed in an UP state, as long as the router is functioning. It is not assigned to a physical port and can therefore never be connected to any other device. Multiple loopback interfaces can be enabled on a router.",
    "topic": "Topic 1.4.6",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q11",
    "original_num": 11,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What is the minimum Ethernet frame size that will not be discarded by the receiver as a runt frame?",
    "images": [],
    "options": [
      {
        "text": "64 bytes",
        "is_correct": true
      },
      {
        "text": "512 bytes",
        "is_correct": false
      },
      {
        "text": "1024 bytes",
        "is_correct": false
      },
      {
        "text": "1500 bytes",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.2.6\nThe minimum Ethernet frame size is 64 bytes. Frames smaller than 64 bytes are considered collision fragments or runt frames and are discarded.",
    "topic": "Topic 1.2.6",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q12",
    "original_num": 12,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "After which step of the switch bootup sequence is the boot loader executed?",
    "images": [],
    "options": [
      {
        "text": "after CPU initialization",
        "is_correct": false
      },
      {
        "text": "after IOS localization",
        "is_correct": false
      },
      {
        "text": "after flash file system initialization",
        "is_correct": false
      },
      {
        "text": "after POST execution",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 1.1.1\nThe correct bootup sequence order is as follows:\n1.- The switch loads and executes the POST.\n2.- The switch loads the boot loader software.\n3.- The boot loader performs low-level CPU initialization.\n4.- The boot loader initializes the flash memory.\n5.- The boot loader locates and loads the default IOS image.",
    "topic": "Topic 1.1.1",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q13",
    "original_num": 13,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which impact does adding a Layer 2 switch have on a network?",
    "images": [],
    "options": [
      {
        "text": "an increase in the number of dropped frames",
        "is_correct": false
      },
      {
        "text": "an increase in the size of the broadcast domain",
        "is_correct": true
      },
      {
        "text": "an increase in the number of network collisions",
        "is_correct": false
      },
      {
        "text": "an increase in the size of the collision domain",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.2.2\nAdding a Layer 2 switch to a network increases the number of collision domains and increases the size of the broadcast domain. Layer 2 switches do not decrease the amount of broadcast traffic, do not increase the amount of network collisions and do not increase the number of dropped frames.",
    "topic": "Topic 2.2.2",
    "module": 2,
    "type": "single"
  },
  {
    "id": "m1-4_q14",
    "original_num": 14,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which characteristic describes cut-through switching?",
    "images": [],
    "options": [
      {
        "text": "Error-free fragments are forwarded, so switching occurs with lower latency.",
        "is_correct": false
      },
      {
        "text": "Frames are forwarded without any error checking.",
        "is_correct": true
      },
      {
        "text": "Only outgoing frames are checked for errors.",
        "is_correct": false
      },
      {
        "text": "Buffering is used to support different Ethernet speeds.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.1.7\nCut-through switching reduces latency by forwarding frames as soon as the destination MAC address and the corresponding switch port are read from the MAC address table. This switching method does not perform any error checking and does not use buffers to support different Ethernet speeds. Error checking and buffers are characteristics of store-and-forward switching.",
    "topic": "Topic 2.1.7",
    "module": 2,
    "type": "single"
  },
  {
    "id": "m1-4_q15",
    "original_num": 15,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What is the significant difference between a hub and a Layer 2 LAN switch?",
    "images": [],
    "options": [
      {
        "text": "A hub extends a collision domain, and a switch divides collision domains.",
        "is_correct": true
      },
      {
        "text": "A hub divides collision domains, and a switch divides broadcast domains.",
        "is_correct": false
      },
      {
        "text": "Each port of a hub is a collision domain, and each port of a switch is a broadcast domain.",
        "is_correct": false
      },
      {
        "text": "A hub forwards frames, and a switch forwards only packets.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.2.1\nHubs operate only at the physical layer, forwarding bits as wire signals out all ports, and extend the collision domain of a network. Switches forward frames at the data link layer and each switch port is a separate collision domain which creates more, but smaller, collision domains. Switches do not manage broadcast domains because broadcast frames are always forwarded out all active ports.",
    "topic": "Topic 2.2.1",
    "module": 2,
    "type": "single"
  },
  {
    "id": "m1-4_q16",
    "original_num": 16,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which statement is correct about Ethernet switch frame forwarding decisions?",
    "images": [],
    "options": [
      {
        "text": "Frame forwarding decisions are based on MAC address and port mappings in the CAM table.",
        "is_correct": true
      },
      {
        "text": "Cut-through frame forwarding ensures that invalid frames are always dropped.",
        "is_correct": false
      },
      {
        "text": "Only frames with a broadcast destination address are forwarded out all active switch ports.",
        "is_correct": false
      },
      {
        "text": "Unicast frames are always forwarded regardless of the destination MAC address.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.1.2\nCut-through frame forwarding reads up to only the first 22 bytes of a frame, which excludes the frame check sequence and thus invalid frames may be forwarded. In addition to broadcast frames, frames with a destination MAC address that is not in the CAM are also flooded out all active ports. Unicast frames are not always forwarded. Received frames with a destination MAC address that is associated with the switch port on which it is received are not forwarded because the destination exists on the network segment connected to that port.",
    "topic": "Topic 2.1.2",
    "module": 2,
    "type": "single"
  },
  {
    "id": "m1-4_q17",
    "original_num": 17,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "How do switch buffers affect network performance?",
    "images": [],
    "options": [
      {
        "text": "They provide error checking on the data received.",
        "is_correct": false
      },
      {
        "text": "They store frames received, thus preventing premature frame discarding when network congestion occurs.",
        "is_correct": true
      },
      {
        "text": "They provide extra memory for a particular port if autonegotiation of speed or duplex fails.",
        "is_correct": false
      },
      {
        "text": "They hold data temporarily when a collision occurs until normal data transmission resumes.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.2.3\nSwitches have large frame buffers that allow data waiting to be transmitted to be stored so the data will not be dropped. This feature is beneficial especially if the incoming traffic is from a faster port than the egress port used for transmitting.",
    "topic": "Topic 2.2.3",
    "module": 2,
    "type": "single"
  },
  {
    "id": "m1-4_q18",
    "original_num": 18,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which switch characteristic helps keep traffic local and alleviates network congestion?",
    "images": [],
    "options": [
      {
        "text": "high port density",
        "is_correct": true
      },
      {
        "text": "fast port speed",
        "is_correct": false
      },
      {
        "text": "large frame buffers",
        "is_correct": false
      },
      {
        "text": "fast internal switching",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.2.3\nSwitches that have a lot of ports (high port density) reduce the number of switches required and keep some of the traffic locally on the switch, thus removing the need to send it between switches.",
    "topic": "Topic 2.2.3",
    "module": 2,
    "type": "single"
  },
  {
    "id": "m1-4_q19",
    "original_num": 19,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which switch component reduces the amount of packet handling time inside the switch?",
    "images": [],
    "options": [
      {
        "text": "ASIC",
        "is_correct": true
      },
      {
        "text": "dual processors",
        "is_correct": false
      },
      {
        "text": "large buffer size",
        "is_correct": false
      },
      {
        "text": "store-and-forward RAM",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.1.5\nApplication-specific integrated circuits (ASICs) are used in Cisco switches to speed up switch operations so that the switch can have an increased number of ports without degrading switch performance.",
    "topic": "Topic 2.1.5",
    "module": 2,
    "type": "single"
  },
  {
    "id": "m1-4_q20",
    "original_num": 20,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. A switch receives a Layer 2 frame that contains a source MAC address of 000b.a023.c501 and a destination MAC address of 0050.0fae.75aa. Place the switch steps in the order they occur. (Not all options are used.)",
    "images": [
      "images/m1-4_q20_0.png",
      "images/m1-4_q20_1.jpg"
    ],
    "options": [],
    "explanation": "Explanation: Topic 2.1.3\nThe first step a switch does when processing a frame is to see if the source MAC address is in the MAC address table. If the address is not there, the switch adds it. The switch then examines the destination MAC address and compares it to the MAC address table. If the address is in the table, the switch forwards the frame out the corresponding port. If the address is missing from the table, the switch will forward the frame to all ports except the port through which the frame arrived.",
    "topic": "Topic 2.1.3",
    "module": 2,
    "type": "match",
    "match_data": {
      "left_title": "Thứ tự xảy ra (Action Step)",
      "right_title": "Hành vi của Switch (Switch Action)",
      "pairs": [
        {
          "term": "occurs first",
          "desc": "The switch adds the source MAC address to the MAC address table.",
          "term_vi": "Xảy ra trước tiên (Bước 1)",
          "desc_vi": "Switch học và ghi nhận địa chỉ MAC nguồn vào bảng địa chỉ MAC."
        },
        {
          "term": "occurs second",
          "desc": "Because the destination is not known, the switch forwards the frame out all ports except the port through which the frame arrived.",
          "term_vi": "Xảy ra tiếp theo (Bước 2)",
          "desc_vi": "Vì địa chỉ MAC đích chưa có trong bảng, switch flood (chuyển tiếp) frame ra tất cả các cổng trừ cổng nhận vào."
        }
      ],
      "distractors": [
        {
          "term": "The switch drops the frame.",
          "term_vi": "Switch loại bỏ gói frame (Không phải)"
        },
        {
          "term": "The switch adds the destination MAC address to the MAC address table.",
          "term_vi": "Switch thêm MAC đích vào bảng MAC (Sai - switch chỉ học MAC nguồn)"
        }
      ]
    }
  },
  {
    "id": "m1-4_q21",
    "original_num": 21,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What information is added to the switch table from incoming frames?",
    "images": [],
    "options": [
      {
        "text": "source MAC address and incoming port number",
        "is_correct": true
      },
      {
        "text": "destination MAC address and incoming port number",
        "is_correct": false
      },
      {
        "text": "source IP address and incoming port number",
        "is_correct": false
      },
      {
        "text": "destination IP address and incoming port number",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.1.3\nA switch \"learns\" or builds the MAC address table based on the source MAC address as a frame comes into the switch. A switch forwards the frame onward based on the destination MAC address.",
    "topic": "Topic 2.1.3",
    "module": 2,
    "type": "single"
  },
  {
    "id": "m1-4_q22",
    "original_num": 22,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which switching method ensures that the incoming frame is error-free before forwarding?",
    "images": [],
    "options": [
      {
        "text": "cut-through",
        "is_correct": false
      },
      {
        "text": "FCS",
        "is_correct": false
      },
      {
        "text": "fragment free",
        "is_correct": false
      },
      {
        "text": "store-and-forward",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 2.1.6\nTwo methods used by switches to transmit frames are store-and-forward and cut-through switching. The store-and-forward method performs error checking on the frame using the frame check sequence (FCS) value before sending the frame. In contrast, cut-through switching sends the frame as soon as the destination MAC address part of the header has been read and processed.",
    "topic": "Topic 2.1.6",
    "module": 2,
    "type": "single"
  },
  {
    "id": "m1-4_q23",
    "original_num": 23,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. How many broadcast domains are displayed?",
    "images": [
      "images/m1-4_q23_0.png"
    ],
    "options": [
      {
        "text": "1",
        "is_correct": false
      },
      {
        "text": "4",
        "is_correct": false
      },
      {
        "text": "8",
        "is_correct": true
      },
      {
        "text": "16",
        "is_correct": false
      },
      {
        "text": "55",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.2.2\nA router defines a broadcast boundary, so every link between two routers is a broadcast domain. In the exhibit, 4 links between routers make 4 broadcast domains. Also, each LAN that is connected to a router is a broadcast domain. The 4 LANs in the exhibit result in 4 more broadcast domains, so there are 8 broadcast domains in all.",
    "topic": "Topic 2.2.2",
    "module": 2,
    "type": "single"
  },
  {
    "id": "m1-4_q24",
    "original_num": 24,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Under which two occasions should an administrator disable DTP while managing a local area network? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "when connecting a Cisco switch to a non-Cisco switch",
        "is_correct": true
      },
      {
        "text": "when a neighbor switch uses a DTP mode of dynamic auto",
        "is_correct": false
      },
      {
        "text": "when a neighbor switch uses a DTP mode of dynamic desirable",
        "is_correct": false
      },
      {
        "text": "on links that should not be trunking",
        "is_correct": true
      },
      {
        "text": "on links that should dynamically attempt trunking",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.5.1\nCisco best practice recommends disabling DTP on links where trunking is not intended and when a Cisco switch is connected to a non-Cisco switch. DTP is required for dynamic trunk negotiation.",
    "topic": "Topic 3.5.1",
    "module": 3,
    "type": "multiple"
  },
  {
    "id": "m1-4_q25",
    "original_num": 25,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which two characteristics describe the native VLAN? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "Designed to carry traffic that is generated by users, this type of VLAN is also known as the default VLAN.",
        "is_correct": false
      },
      {
        "text": "The native VLAN traffic will be untagged across the trunk link.",
        "is_correct": true
      },
      {
        "text": "This VLAN is necessary for remote management of a switch.",
        "is_correct": false
      },
      {
        "text": "High priority traffic, such as voice traffic, uses the native VLAN.",
        "is_correct": false
      },
      {
        "text": "The native VLAN provides a common identifier to both ends of a trunk.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 3.2.5\nThe native VLAN is assigned to 802.1Q trunks to provide a common identifier to both ends of the trunk link. Whatever VLAN native number is assigned to a port, or if the port is the default VLAN of 1, the port does not tag any frame in that VLAN as the traffic travels across the trunk. At the other end of the link, the receiving device that sees no tag knows the specific VLAN number because the receiving device must have the exact native VLAN number. The native VLAN should be an unused VLAN that is distinct from VLAN1, the default VLAN, as well as other VLANs. Data VLANs, also known as user VLANs, are configured to carry user-generated traffic, with the exception of high priority traffic, such as VoIP. Voice VLANs are configured for VoIP traffic. The management VLAN is configured to provide access to the management capabilities of a switch.",
    "topic": "Topic 3.2.5",
    "module": 3,
    "type": "multiple"
  },
  {
    "id": "m1-4_q26",
    "original_num": 26,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "On a switch that is configured with multiple VLANs, which command will remove only VLAN 100 from the switch?",
    "images": [],
    "options": [
      {
        "text": "Switch# delete flash:vlan.dat",
        "is_correct": false
      },
      {
        "text": "Switch(config-if)# no switchport access vlan 100",
        "is_correct": false
      },
      {
        "text": "Switch(config-if)# no switchport trunk allowed vlan 100",
        "is_correct": false
      },
      {
        "text": "Switch(config)# no vlan 100",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 3.3.10\nTo remove all VLANs from a switch, the delete flash:vlan.dat command would be used. To change the assigned VLAN for an interface, the no switchport access vlan 100 interface configuration command would be used. To remove VLAN 100 as an allowed VLAN on a trunk, the no switchport trunk allowed vlan 100 would be used, but this would not remove the VLAN from the switch. To delete a single VLAN, such as VLAN 100, the no vlan 100 global configuration command would be used.",
    "topic": "Topic 3.3.10",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q27",
    "original_num": 27,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. A network administrator is reviewing port and VLAN assignments on switch S2 and notices that interfaces Gi0/1 and Gi0/2 are not included in the output. Why would the interfaces be missing from the output?",
    "images": [
      "images/m1-4_q27_0.jpg"
    ],
    "options": [
      {
        "text": "There is a native VLAN mismatch between the switches.",
        "is_correct": false
      },
      {
        "text": "There is no media connected to the interfaces.",
        "is_correct": false
      },
      {
        "text": "They are administratively shut down.",
        "is_correct": false
      },
      {
        "text": "They are configured as trunk interfaces.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 3.3.8\nInterfaces that are configured as trunks do not belong to a VLAN and therefore will not show in the output of the show vlan brief commands.",
    "topic": "Topic 3.3.8",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q28",
    "original_num": 28,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A network contains multiple VLANs spanning multiple switches. What happens when a device in VLAN 20 sends a broadcast Ethernet frame?",
    "images": [],
    "options": [
      {
        "text": "All devices in all VLANs see the frame.",
        "is_correct": false
      },
      {
        "text": "Devices in VLAN 20 and the management VLAN see the frame.",
        "is_correct": false
      },
      {
        "text": "Only devices in VLAN 20 see the frame.",
        "is_correct": true
      },
      {
        "text": "Only devices that are connected to the local switch see the frame.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.1.1\nVLANs create logical broadcast domains that can span multiple VLAN segments. Ethernet frames that are sent by a device on a specific VLAN can only be seen by other devices in the same VLAN.",
    "topic": "Topic 3.1.1",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q29",
    "original_num": 29,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. All workstations are configured correctly in VLAN 20. Workstations that are connected to switch SW1 are not able to send traffic to workstations on SW2. What could be done to remedy the problem?",
    "images": [
      "images/m1-4_q29_0.png"
    ],
    "options": [
      {
        "text": "Allow VLAN 20 on the trunk link.",
        "is_correct": true
      },
      {
        "text": "Enable DTP on both ends of the trunk.",
        "is_correct": false
      },
      {
        "text": "Configure all workstations on SW1 to be part of the default VLAN.",
        "is_correct": false
      },
      {
        "text": "Configure all workstations on SW2 to be part of the native VLAN.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.4.1\nEnabling DTP on both switches simply allows negotiation of trunking. The \"Negotiation of Trunking\" line in the graphic shows that DTP is already enabled. The graphic also shows how the native VLAN is 1, and the default VLAN for any Cisco switch is 1. The graphic shows the PCs are to be in VLAN 20.",
    "topic": "Topic 3.4.1",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q30",
    "original_num": 30,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What happens to switch ports after the VLAN to which they are assigned is deleted?",
    "images": [],
    "options": [
      {
        "text": "The ports are disabled.",
        "is_correct": false
      },
      {
        "text": "The ports are placed in trunk mode.",
        "is_correct": false
      },
      {
        "text": "The ports are assigned to VLAN1, the default VLAN.",
        "is_correct": false
      },
      {
        "text": "The ports stop communicating with the attached devices.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 3.3.10\nAny ports that are not moved to an active VLAN cannot communicate with other hosts after the VLAN is deleted. They must be assigned to an active VLAN or their VLAN must be created.",
    "topic": "Topic 3.3.10",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q31",
    "original_num": 31,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Match the IEEE 802.1Q standard VLAN tag field with the description. (Not all options are used.)",
    "images": [
      "images/m1-4_q31_0.png",
      "images/m1-4_q31_1.png"
    ],
    "options": [
      {
        "text": "access",
        "is_correct": false
      },
      {
        "text": "trunk",
        "is_correct": true
      },
      {
        "text": "native",
        "is_correct": false
      },
      {
        "text": "auto",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.2.4\nThe IEEE 802.1Q standard header includes a 4-byte VLAN tag:\n\nType - A 2-byte value called the tag protocol ID (TPID) value.\nUser priority - A 3-bit value that supports level or service implementation.\nCanonical Format Identifier (CFI) - A 1-bit identifier that enables Token Ring frames to be carried across Ethernet links.\nVLAN ID (VID) - A 12-bit VLAN identification number that supports up to 4096 VLAN IDs.\n\n\n32. Refer to the exhibit. In what switch mode should port G0/1 be assigned if Cisco best practices are being used?\n\nExplanation: Topic 3.4.1\nThe router is used to route between the two VLANs, thus switch port G0/1 needs to be configured in trunk mode.",
    "topic": "Topic 3.4.1",
    "module": 3,
    "type": "match",
    "match_data": {
      "left_title": "Trường trong thẻ 802.1Q (Tag Field)",
      "right_title": "Mô tả / Ý nghĩa (Description)",
      "pairs": [
        {
          "term": "Type",
          "desc": "a value for the tag protocol ID value",
          "term_vi": "Trường Type (TPID)",
          "desc_vi": "Giá trị định danh giao thức gắn thẻ (Tag Protocol ID, giá trị 0x8100)."
        },
        {
          "term": "User Priority",
          "desc": "a value that supports level of service implementation",
          "term_vi": "User Priority (Ưu tiên)",
          "desc_vi": "Giá trị hỗ trợ triển khai mức độ dịch vụ / chất lượng dịch vụ (QoS / 802.1p CoS)."
        },
        {
          "term": "Canonical Format Identifier",
          "desc": "an identifier that enables Token Ring frames to be carried across Ethernet links",
          "term_vi": "CFI (Canonical Format Identifier)",
          "desc_vi": "Định danh cho phép các frame Token Ring được truyền qua liên kết Ethernet."
        },
        {
          "term": "VLAN ID",
          "desc": "a VLAN number",
          "term_vi": "VLAN ID (VID)",
          "desc_vi": "Số hiệu định danh phân vùng mạng VLAN (từ 1 đến 4094)."
        }
      ],
      "distractors": [
        {
          "term": "a value for the application protocol of the user data in the frame",
          "term_vi": "Giá trị giao thức ứng dụng của dữ liệu (Không dùng)"
        }
      ]
    }
  },
  {
    "id": "m1-4_q33",
    "original_num": 33,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Match the DTP mode with its function. (Not all options are used.)",
    "images": [
      "images/m1-4_q33_0.jpg"
    ],
    "options": [],
    "explanation": "Explanation: Topic 3.5.2\nThe dynamic auto mode makes the interface become a trunk interface if the neighboring interface is set to trunk or desirable mode. The dynamic desirable mode makes the interface actively attempt to convert the link to a trunk link. The trunk mode puts the interface into permanent trunking mode and negotiates to convert the neighboring link into a trunk link. The nonegotiate mode prevents the interface from generating DTP frames.",
    "topic": "Topic 3.5.2",
    "module": 3,
    "type": "match",
    "match_data": {
      "left_title": "Chế độ DTP (DTP Mode)",
      "right_title": "Chức năng (Function)",
      "pairs": [
        {
          "term": "Dynamic auto",
          "desc": "Passively waits for the neighbor to initiate trunking",
          "term_vi": "Dynamic auto",
          "desc_vi": "Chế độ thụ động: Chờ cổng đối diện chủ động khởi tạo liên kết trunk."
        },
        {
          "term": "Dynamic desirable",
          "desc": "Actively attempts to convert the link to a trunk",
          "term_vi": "Dynamic desirable",
          "desc_vi": "Chế độ chủ động: Tích cực gửi gói DTP để đàm phán chuyển liên kết thành trunk."
        },
        {
          "term": "Trunk",
          "desc": "Permanent trunking mode",
          "term_vi": "Trunk",
          "desc_vi": "Chế độ trunk vĩnh viễn (luôn đóng vai trò cổng trunk)."
        },
        {
          "term": "Nonegotiate",
          "desc": "Requires manual configuration of trunking or nontrunking",
          "term_vi": "Nonegotiate",
          "desc_vi": "Tắt đàm phán DTP, yêu cầu cấu hình thủ công cổng là trunk hoặc access."
        }
      ],
      "distractors": []
    }
  },
  {
    "id": "m1-4_q34",
    "original_num": 34,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Port Fa0/11 on a switch is assigned to VLAN 30. If the command no switchport access vlan 30 is entered on the Fa0/11 interface, what will happen?",
    "images": [],
    "options": [
      {
        "text": "Port Fa0/11 will be shutdown.",
        "is_correct": false
      },
      {
        "text": "An error message would be displayed.",
        "is_correct": false
      },
      {
        "text": "Port Fa0/11 will be returned to VLAN 1.",
        "is_correct": true
      },
      {
        "text": "VLAN 30 will be deleted.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.3.9\nWhen the no switchport access vlan command is entered, the port is returned to the default VLAN 1. The port will remain active as a member of VLAN 1, and VLAN 30 will still be intact, even if no other ports are associated with it.",
    "topic": "Topic 3.3.9",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q35",
    "original_num": 35,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which command displays the encapsulation type, the voice VLAN ID, and the access mode VLAN for the Fa0/1 interface?",
    "images": [],
    "options": [
      {
        "text": "show vlan brief",
        "is_correct": false
      },
      {
        "text": "show interfaces Fa0/1 switchport",
        "is_correct": true
      },
      {
        "text": "show mac address-table interface Fa0/1",
        "is_correct": false
      },
      {
        "text": "show interfaces trunk",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.3.8\nThe show interfaces switchport command displays the following information for a given port:\nSwitchport\nAdministrative Mode\nOperational Mode\nAdministrative Trunking Encapsulation\nOperational Trunking Encapsulation\nNegotiation of Trunking\nAccess Mode VLAN\nTrunking Native Mode VLAN\nAdministrative Native VLAN tagging\nVoice VLAN",
    "topic": "Topic 3.3.8",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q36",
    "original_num": 36,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. A technician is programming switch SW3 to manage voice and data traffic through port Fa0/20. What, if anything, is wrong with the configuration?",
    "images": [
      "images/m1-4_q36_0.png"
    ],
    "options": [
      {
        "text": "There is nothing wrong with the configuration.",
        "is_correct": false
      },
      {
        "text": "Interface Fa0/20 can only have one VLAN assigned.",
        "is_correct": false
      },
      {
        "text": "The mls qos trust cos command should reference VLAN 35.",
        "is_correct": false
      },
      {
        "text": "The command used to assign the voice VLAN to the switch port is incorrect.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 3.3.6\nThe voice VLAN should be configured with the switchport voice vlan 150 command. A switch interface can be configured to support one data VLAN and one voice VLAN. The mls qos trust cos associates with the interface. Voice traffic must be trusted so that fields within the voice packet can be used to classify it for QoS.",
    "topic": "Topic 3.3.6",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q37",
    "original_num": 37,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which four steps are needed to configure a voice VLAN on a switch port? (Choose four).",
    "images": [],
    "options": [
      {
        "text": "Configure the interface as an IEEE 802.1Q trunk.",
        "is_correct": false
      },
      {
        "text": "Assign the voice VLAN to the switch port.",
        "is_correct": true
      },
      {
        "text": "Activate spanning-tree PortFast on the interface.",
        "is_correct": false
      },
      {
        "text": "Ensure that voice traffic is trusted and tagged with a CoS priority value.",
        "is_correct": true
      },
      {
        "text": "Add a voice VLAN.",
        "is_correct": true
      },
      {
        "text": "Configure the switch port interface with subinterfaces.",
        "is_correct": false
      },
      {
        "text": "Assign a data VLAN to the switch port.",
        "is_correct": false
      },
      {
        "text": "Configure the switch port in access mode.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 3.3.11\nTo add an IP phone, the following commands should be added to the switch port:\nSW3(config-vlan)# vlan 150\nSW3(config-vlan)# name voice\nSW3(config-vlan)# int fa0/20\nSW3(config-if)# switchport mode access\nSW3(config-if)# mls qos trust cos\nSW3(config-if)# switchport access vlan 150",
    "topic": "Topic 3.3.11",
    "module": 3,
    "type": "multiple"
  },
  {
    "id": "m1-4_q38",
    "original_num": 38,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. PC1 is unable to communicate with server 1. The network administrator issues the show interfaces trunk command to begin troubleshooting. What conclusion can be made based on the output of this command?",
    "images": [
      "images/m1-4_q38_0.jpg"
    ],
    "options": [
      {
        "text": "Interface G0/2 is not configured as a trunk.",
        "is_correct": true
      },
      {
        "text": "VLAN 20 has not been created.",
        "is_correct": false
      },
      {
        "text": "The encapsulation on interface G0/1 is incorrect.",
        "is_correct": false
      },
      {
        "text": "The DTP mode is incorrectly set to dynamic auto on interface G0/1.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.4.4\nIn the show interfaces trunk output, the G0/2 interface of DLS1 is not listed. This indicates the interface has probably not been configured as a trunk link. In the show interfaces trunk output, the G0/2 interface of DLS1 is not listed. This indicates the interface has probably not been configured as a trunk link.",
    "topic": "Topic 4.4.4",
    "module": 4,
    "type": "single"
  },
  {
    "id": "m1-4_q39",
    "original_num": 39,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. What is the cause of the error that is displayed in the configuration of inter-VLAN routing on router CiscoVille?",
    "images": [
      "images/m1-4_q39_0.png"
    ],
    "options": [
      {
        "text": "The gig0/0 interface does not support inter-VLAN routing.",
        "is_correct": false
      },
      {
        "text": "The no shutdown command has not been configured.",
        "is_correct": false
      },
      {
        "text": "The IP address on CiscoVille is incorrect.",
        "is_correct": false
      },
      {
        "text": "The encapsulation dot1Q 20 command has not been configured.​",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 4.2.4",
    "topic": "Topic 4.2.4",
    "module": 4,
    "type": "single"
  },
  {
    "id": "m1-4_q40",
    "original_num": 40,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. A network administrator has configured router CiscoVille with the above commands to provide inter-VLAN routing. What command will be required on a switch that is connected to the Gi0/0 interface on router CiscoVille to allow inter-VLAN routing?​",
    "images": [
      "images/m1-4_q40_0.png"
    ],
    "options": [
      {
        "text": "switchport mode access",
        "is_correct": false
      },
      {
        "text": "no switchport",
        "is_correct": false
      },
      {
        "text": "switchport mode trunk",
        "is_correct": true
      },
      {
        "text": "switchport mode dynamic desirable",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.2.2\nWhen they are configured for inter-VLAN routing, routers do not support the dynamic trunking protocol that is used by switches. For router-on-a-stick configurations to function, a connected switch must use the command switchport mode trunk.",
    "topic": "Topic 4.2.2",
    "module": 4,
    "type": "single"
  },
  {
    "id": "m1-4_q41",
    "original_num": 41,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A high school uses VLAN15 for the laboratory network and VLAN30 for the faculty network. What is required to enable communication between these two VLANs while using the router-on-a-stick approach?",
    "images": [],
    "options": [
      {
        "text": "A multilayer switch is needed.",
        "is_correct": false
      },
      {
        "text": "A router with at least two LAN interfaces is needed.",
        "is_correct": false
      },
      {
        "text": "Two groups of switches are needed, each with ports that are configured for one VLAN.",
        "is_correct": false
      },
      {
        "text": "A switch with a port that is configured as a trunk is needed when connecting to the router.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 4.1.3\nWith router-on-a-stick, inter-VLAN routing is performed by a router with a single router interface that is connected to a switch port configured with trunk mode. Multiple subinterfaces, each configured for a VLAN, can be configured under the single physical router interface. Switches can have ports that are assigned to different VLANs, but communication between those VLANs requires routing function from the router. A multilayer switch is not used in a router-on-a-stick approach to inter-VLAN routing.",
    "topic": "Topic 4.1.3",
    "module": 4,
    "type": "single"
  },
  {
    "id": "m1-4_q42",
    "original_num": 42,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "When routing a large number of VLANs, what are two disadvantages of using the router-on-a-stick inter-VLAN routing method rather than the multilayer switch inter-VLAN routing method? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "Multiple SVIs are needed.",
        "is_correct": false
      },
      {
        "text": "A dedicated router is required.",
        "is_correct": true
      },
      {
        "text": "Router-on-a-stick requires subinterfaces to be configured on the same subnets.",
        "is_correct": false
      },
      {
        "text": "Router-on-a-stick requires multiple physical interfaces on a router.",
        "is_correct": false
      },
      {
        "text": "Multiple subinterfaces may impact the traffic flow speed.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 4.1.3\nWith the router-on-a-stick inter-VLAN routing method, a dedicated router is required. It only needs one physical interface on the router to route traffic among multiple VLANs, by using subinterfaces on one physical interface. On the other hand, since traffic of all VLANs will have to go through the same physical interfaces, the throughput will be impacted. Also, a multilayer switch can use multiple SVIs to perform inter-VLAN routing.",
    "topic": "Topic 4.1.3",
    "module": 4,
    "type": "multiple"
  },
  {
    "id": "m1-4_q43",
    "original_num": 43,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PCs on different VLANs cannot communicate. Based on the output, what are two configuration errors on switch interface Gi1/1? (Choose two.)",
    "images": [
      "images/m1-4_q43_0.png"
    ],
    "options": [
      {
        "text": "Gi1/1 is in the default VLAN.",
        "is_correct": true
      },
      {
        "text": "Voice VLAN is not assigned to Gi1/1.",
        "is_correct": false
      },
      {
        "text": "Gi1/1 is configured as trunk mode.",
        "is_correct": true
      },
      {
        "text": "Negotiation of trunking is turned on on Gi1/1.",
        "is_correct": false
      },
      {
        "text": "The trunking encapsulation protocol is configured wrong.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.4.4\nWith legacy inter-VLAN routing methods, the switch ports that connect to the router should be configured as access mode and be assigned appropriate VLANs. In this scenario, the Gi1/1 interface should be in access mode with VLAN 10 assigned. The other options are default settings on the switch and have no effect on legacy inter-VLAN routing.",
    "topic": "Topic 4.4.4",
    "module": 4,
    "type": "multiple"
  },
  {
    "id": "m1-4_q44",
    "original_num": 44,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PC2 cannot communicate with PC1. Based on the output, what is the possible cause of the problem?",
    "images": [
      "images/m1-4_q44_0.png"
    ],
    "options": [
      {
        "text": "Gi0/0 is not configured as a trunk port.",
        "is_correct": false
      },
      {
        "text": "The command interface GigabitEthernet0/0.5 was entered incorrectly.",
        "is_correct": false
      },
      {
        "text": "There is no IP address configured on the interface Gi0/0.",
        "is_correct": false
      },
      {
        "text": "The no shutdown command is not entered on subinterfaces.",
        "is_correct": false
      },
      {
        "text": "The encapsulation dot1Q 5 command contains the wrong VLAN.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 4.4.6\nIn router-on-a-stick, the subinterface configuration should match the VLAN number in the encapsulation command, in this case, the command encapsulation dot1Q 10 should be used for VLAN 10. Since subinterfaces are used, there is no need to configure IP on the physical interface Gi0/0. The trunk mode is configured on the switch port that connects to the router. The subinterfaces are turned on when they are added.",
    "topic": "Topic 4.4.6",
    "module": 4,
    "type": "single"
  },
  {
    "id": "m1-4_q45",
    "original_num": 45,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. A network administrator has configured router CiscoVille with the above commands to provide inter-VLAN routing. What type of port will be required on a switch that is connected to Gi0/0 on router CiscoVille to allow inter-VLAN routing?",
    "images": [
      "images/m1-4_q45_0.jpg"
    ],
    "options": [
      {
        "text": "routed port",
        "is_correct": false
      },
      {
        "text": "access port",
        "is_correct": false
      },
      {
        "text": "trunk port",
        "is_correct": true
      },
      {
        "text": "SVI",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.2.2\nTo allow a router-on-a-stick configuration to function, a switch must be connected to the router via a trunk port to carry the VLANs to be routed. An SVI would be used on a multilayer switch where the switch is performing inter-VLAN routing.",
    "topic": "Topic 4.2.2",
    "module": 4,
    "type": "single"
  },
  {
    "id": "m1-4_q46",
    "original_num": 46,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. A network administrator is configuring RT1 for inter-VLAN routing. The switch is configured correctly and is functional. Host1, Host2, and Host3 cannot communicate with each other. Based on the router configuration, what is causing the problem?",
    "images": [
      "images/m1-4_q46_0.png"
    ],
    "options": [
      {
        "text": "Interface Fa0/0 is missing IP address configuration information.",
        "is_correct": false
      },
      {
        "text": "IP addresses on the subinterfaces are incorrectly matched to the VLANs.",
        "is_correct": true
      },
      {
        "text": "Each subinterface of Fa0/0 needs separate no shutdown commands.",
        "is_correct": false
      },
      {
        "text": "Routers do not support 802.1Q encapsulation on subinterfaces.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.4.6\nSince Host 1 (in VLAN 20) has the IP 172.18.1.10/27, the subinterface Fa0/0.1 should be configured with an IP address in the network 172.168.1.0/27. Similarly, Fa0/0.2 should be with an IP address in the network 172.168.1.64/27 and Fa0/0.3 should be with an IP address in the network 172.168.1.96/27.",
    "topic": "Topic 4.4.6",
    "module": 4,
    "type": "single"
  },
  {
    "id": "m1-4_q47",
    "original_num": 47,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. A router-on-a-stick configuration was implemented for VLANs 15, 30, and 45, according to the show running-config command output. PCs on VLAN 45 that are using the 172.16.45.0 /24 network are having trouble connecting to PCs on VLAN 30 in the 172.16.30.0 /24 network. Which error is most likely causing this problem?​",
    "images": [
      "images/m1-4_q47_0.png"
    ],
    "options": [
      {
        "text": "The wrong VLAN has been configured on GigabitEthernet 0/0.45.",
        "is_correct": false
      },
      {
        "text": "The command no shutdown is missing on GigabitEthernet 0/0.30.",
        "is_correct": false
      },
      {
        "text": "The GigabitEthernet 0/0 interface is missing an IP address.",
        "is_correct": false
      },
      {
        "text": "There is an incorrect IP address configured on GigabitEthernet 0/0.30.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 4.4.6\nThe subinterface GigabitEthernet 0/0.30 has an IP address that does not correspond to the VLAN addressing scheme. The physical interface GigabitEthernet 0/0 does not need an IP address for the subinterfaces to function. Subinterfaces do not require the no shutdown command.",
    "topic": "Topic 4.4.6",
    "module": 4,
    "type": "single"
  },
  {
    "id": "m1-4_q48",
    "original_num": 48,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What is a characteristic of a routed port on a Layer 3 switch?",
    "images": [],
    "options": [
      {
        "text": "It supports trunking.",
        "is_correct": false
      },
      {
        "text": "It is not assigned to a VLAN.",
        "is_correct": true
      },
      {
        "text": "It is commonly used as a WAN link.",
        "is_correct": false
      },
      {
        "text": "It cannot have an IP address assigned to it.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.3.1\nA routed port on a Layer 3 switch is commonly used for connecting between distribution and core layer switches or between a Layer 3 switch and a router. This port does not get VLAN or trunking commands assigned to it. Instead, the port is programmed with an IP address. This is commonly used when static routing is configured on the switch or when a routing protocol is being run between the Layer 3 switch and the router or another Layer 3 switch.",
    "topic": "Topic 4.3.1",
    "module": 4,
    "type": "single"
  },
  {
    "id": "m1-4_q49",
    "original_num": 49,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. A network administrator needs to configure router-on-a-stick for the networks that are shown. How many subinterfaces will have to be created on the router if each VLAN that is shown is to be routed and each VLAN has its own subinterface?",
    "images": [
      "images/m1-4_q49_0.png"
    ],
    "options": [
      {
        "text": "1",
        "is_correct": false
      },
      {
        "text": "2",
        "is_correct": false
      },
      {
        "text": "3",
        "is_correct": false
      },
      {
        "text": "4",
        "is_correct": true
      },
      {
        "text": "5",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.2.4\nBased on the IP addresses and masks given, the PC, printer, IP phone, and switch management VLAN are all on different VLANs. This situation will require four subinterfaces on the router.",
    "topic": "Topic 4.2.4",
    "module": 4,
    "type": "single"
  },
  {
    "id": "m1-4_q50",
    "original_num": 50,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# mdix auto command?",
    "images": [],
    "options": [
      {
        "text": "It automatically adjusts the port to allow device connections to use either a straight-through or a crossover cable.",
        "is_correct": true
      },
      {
        "text": "It applies an IPv4 address to the virtual interface.",
        "is_correct": false
      },
      {
        "text": "It applies an IPv6 address to the virtual interface.",
        "is_correct": false
      },
      {
        "text": "It permits an IPv6 address to be configured on a switch physical interface.",
        "is_correct": false
      },
      {
        "text": "It updates the MAC address table for the associated port.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.2.3\nThe mdix auto (Media Dependent Interface Crossover) command enables the automatic cable detection feature on the switch interface. When enabled, the switch automatically detects the required cable type (straight-through or crossover) for the connection and configures the interface copper pins internally to establish the link. This eliminates the need for physical cable swapping. For this feature to function properly, both the speed and duplex of the interface must be set to auto (speed auto and duplex auto).",
    "topic": "Topic 1.2.3",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q51",
    "original_num": 51,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# ip address 172.18.33.88 255.255.255.0 command?",
    "images": [],
    "options": [
      {
        "text": "It applies an IPv4 address to the virtual interface.",
        "is_correct": true
      },
      {
        "text": "It applies an IPv6 address to the virtual interface.",
        "is_correct": false
      },
      {
        "text": "It activates a virtual or physical switch interface.",
        "is_correct": false
      },
      {
        "text": "It permits an IPv6 address to be configured on a switch physical interface.",
        "is_correct": false
      },
      {
        "text": "It updates the MAC address table for the associated port.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.1.6\nOn a Layer 2 switch such as the Cisco 2960, physical ports do not support network layer IP addresses directly. In order to enable remote management (such as SSH or Telnet) and allow the switch to communicate over the network, an IP address must be assigned to a Switch Virtual Interface (SVI), which is a logical interface (typically interface vlan 1 by default).\nTherefore, when the technician issues this command within the appropriate virtual interface configuration mode, the direct effect is that it applies an IPv4 address to the virtual interface.",
    "topic": "Topic 1.1.6",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q52",
    "original_num": 52,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw# configure terminal command?",
    "images": [],
    "options": [
      {
        "text": "It enters the global configuration mode.",
        "is_correct": true
      },
      {
        "text": "It enters configuration mode for a switch virtual interface.",
        "is_correct": false
      },
      {
        "text": "It applies an IPv4 address to the virtual interface.",
        "is_correct": false
      },
      {
        "text": "It updates the MAC address table for the associated port.",
        "is_correct": false
      },
      {
        "text": "It permits an IPv6 address to be configured on a switch physical interface.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.1.6\nThe configure terminal command is executed from the privileged EXEC mode (indicated by the # symbol in the prompt BranchSW#) and is used to transition the device into global configuration mode. Once in this mode, the switch prompt changes to BranchSW(config)#, allowing the administrator to implement configuration changes that affect the entire device. Other options, such as saving the configuration (copy running-config startup-config) or disabling an interface (shutdown), require entirely different commands.",
    "topic": "Topic 1.1.6",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q53",
    "original_num": 53,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw# configure terminal command?",
    "images": [],
    "options": [
      {
        "text": "It enters the global configuration mode.",
        "is_correct": true
      },
      {
        "text": "It saves the running configuration to NVRAM.",
        "is_correct": false
      },
      {
        "text": "It disables a virtual or physical switch interface.",
        "is_correct": false
      },
      {
        "text": "It updates the MAC address table for the associated port.",
        "is_correct": false
      },
      {
        "text": "It saves the startup configuration to the running configuration.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.1.6\nThe configure terminal command is executed from the privileged EXEC mode (indicated by the # symbol in the prompt BranchSW#) and is used to transition the device into global configuration mode. Once in this mode, the switch prompt changes to BranchSW(config)#, allowing the administrator to implement configuration changes that affect the entire device. Other options, such as saving the configuration (copy running-config startup-config) or disabling an interface (shutdown), require entirely different commands.",
    "topic": "Topic 1.1.6",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q54",
    "original_num": 54,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# shutdown command?",
    "images": [],
    "options": [
      {
        "text": "It disables a virtual or physical switch interface.",
        "is_correct": true
      },
      {
        "text": "It saves the running configuration to NVRAM.",
        "is_correct": false
      },
      {
        "text": "It activates a virtual or physical switch interface.",
        "is_correct": false
      },
      {
        "text": "It updates the MAC address table for the associated port.",
        "is_correct": false
      },
      {
        "text": "It saves the startup configuration to the running configuration.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.2.6\nThe shutdown command is used in Cisco IOS to administratively disable or turn off a specific interface. This applies to both physical interfaces (such as interface FastEthernet 0/1) and virtual / logical interfaces (such as an SVI like interface VLAN 10).\nWhen executed within the interface configuration mode (config-if), the interface immediately transitions to an “Administratively Down” state, completely halting all data traffic through it. To reverse this effect and re-enable the interface, the inverse command no shutdown must be used instead.",
    "topic": "Topic 1.2.6",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q55",
    "original_num": 55,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# shutdown command?",
    "images": [],
    "options": [
      {
        "text": "It disables a virtual or physical switch interface.",
        "is_correct": true
      },
      {
        "text": "It applies an IPv6 address to the virtual interface.",
        "is_correct": false
      },
      {
        "text": "It applies an IPv4 address to the virtual interface.",
        "is_correct": false
      },
      {
        "text": "It permits an IPv6 address to be configured on a switch physical interface.",
        "is_correct": false
      },
      {
        "text": "It updates the MAC address table for the associated port.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.2.6\nThe shutdown command is used in Cisco IOS to administratively disable or turn off a specific interface. This applies to both physical interfaces (such as interface FastEthernet 0/1) and virtual / logical interfaces (such as an SVI like interface VLAN 10).\nWhen executed within the interface configuration mode (config-if), the interface immediately transitions to an “Administratively Down” state, completely halting all data traffic through it. To reverse this effect and re-enable the interface, the inverse command no shutdown must be used instead.",
    "topic": "Topic 1.2.6",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q56",
    "original_num": 56,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# ipv6 address 2001:db8:a2b4:88::1/64 command?",
    "images": [],
    "options": [
      {
        "text": "It applies an IPv6 address to the virtual interface.",
        "is_correct": true
      },
      {
        "text": "It activates a virtual or physical switch interface.",
        "is_correct": false
      },
      {
        "text": "It applies an IPv4 address to the virtual interface.",
        "is_correct": false
      },
      {
        "text": "It permits an IPv6 address to be configured on a switch physical interface.",
        "is_correct": false
      },
      {
        "text": "It updates the MAC address table for the associated port.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.1.6\nOn a Layer 2 switch like the Cisco Catalyst 2960, the physical ports (such as FastEthernet or GigabitEthernet) operate strictly at the Data Link Layer (Layer 2). Therefore, you cannot directly assign a Layer 3 IP address (either IPv4 or IPv6) to a physical interface.\nIn order for a Layer 2 switch to have IP connectivity — which is required for remote management via SSH, Telnet, or Web UI, as well as communicating with other network devices — the IP address must be assigned to a Switch Virtual Interface (SVI), such as interface vlan 1.\nConsequently, when the technician executes this command within the interface configuration mode (config-if), they are configuring a logical/virtual interface, which successfully applies the global unicast IPv6 address to that specific SVI.",
    "topic": "Topic 1.1.6",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q57",
    "original_num": 57,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# exit command?",
    "images": [],
    "options": [
      {
        "text": "It returns to global configuration mode.",
        "is_correct": true
      },
      {
        "text": "It returns to privileged mode.",
        "is_correct": false
      },
      {
        "text": "It configures the default gateway for the switch.",
        "is_correct": false
      },
      {
        "text": "It enters user mode.",
        "is_correct": false
      },
      {
        "text": "It saves the startup configuration to the running configuration.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.4.1\nThe Cisco IOS Command Line Interface (CLI) uses a strict hierarchical structure. When the prompt displays (config-if)#, it indicates that the technician is currently inside the interface configuration sub-mode.\nIssuing the exit command moves the user back exactly one level in the command hierarchy. As a result, the switch leaves the interface sub-mode and returns to global configuration mode, changing the CLI prompt back to branchSW(config)#.",
    "topic": "Topic 1.4.1",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q58",
    "original_num": 58,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw> enable command?",
    "images": [],
    "options": [
      {
        "text": "It enters privileged mode.",
        "is_correct": true
      },
      {
        "text": "It enters the global configuration mode.",
        "is_correct": false
      },
      {
        "text": "It enters configuration mode for a switch virtual interface.",
        "is_correct": false
      },
      {
        "text": "It updates the MAC address table for the associated port.",
        "is_correct": false
      },
      {
        "text": "It permits an IPv6 address to be configured on a switch physical interface.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.1.6\nThe enable command is executed from the user EXEC mode (identified by the > symbol in the branchSW> prompt) and is used to transition the device into privileged EXEC mode. Once this command is entered, the switch prompt changes to branchSW#, granting the administrator access to higher-level monitoring and verification commands, as well as the ability to navigate into global configuration mode.",
    "topic": "Topic 1.1.6",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q59",
    "original_num": 59,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# duplex full command?",
    "images": [],
    "options": [
      {
        "text": "It allows data to flow in both directions at the same time on the interface.",
        "is_correct": true
      },
      {
        "text": "It allows data to flow in only one direction at a time on the interface",
        "is_correct": false
      },
      {
        "text": "It automatically adjusts the port to allow device connections to use either a straight-through or a crossover cable.",
        "is_correct": false
      },
      {
        "text": "It configures the switch as the default gateway.",
        "is_correct": false
      },
      {
        "text": "It encrypts user-mode passwords when users connect remotely.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.2.1\nThe duplex full command configures the switch interface to operate in full-duplex mode, enabling simultaneous two-way communication. This means that both the switch port and the connected device can transmit and receive data at the exact same time without causing any network collisions.\nIn contrast, if the interface were configured with duplex half, data could only flow in one direction at a time, forcing devices to take turns transmitting and introducing the risk of collisions. Implementing Full-Duplex maximizes bandwidth efficiency and significantly improves network performance on the link.",
    "topic": "Topic 1.2.1",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q60",
    "original_num": 60,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What type of VLAN should not carry voice and network management traffic?",
    "images": [],
    "options": [
      {
        "text": "data VLAN",
        "is_correct": true
      },
      {
        "text": "voice VLAN",
        "is_correct": false
      },
      {
        "text": "management VLAN",
        "is_correct": false
      },
      {
        "text": "security VLAN",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.1.3\nA data VLAN, also referred to as a user VLAN, is specifically designed to carry user-generated network traffic such as web browsing, emails, or file transfers. For both security and performance reasons, network design best practices dictate that a data VLAN should not carry high-priority voice traffic (VoIP) or critical network management traffic (such as SSH, Telnet, or SNMP). Separating these distinct types of traffic into dedicated VLANs ensures that regular user data congestion does not negatively impact essential network services or infrastructure management.",
    "topic": "Topic 3.1.3",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q62",
    "original_num": 62,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What type of VLAN is designed to reserve bandwidth to ensure IP Phone quality?",
    "images": [],
    "options": [
      {
        "text": "voice VLAN",
        "is_correct": true
      },
      {
        "text": "trunk VLAN",
        "is_correct": false
      },
      {
        "text": "security VLAN",
        "is_correct": false
      },
      {
        "text": "management VLAN",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.2.6\nA voice VLAN is specifically designed and configured to carry Voice over IP (VoIP) traffic from IP phones. Because voice communications are highly sensitive to network delay and jitter, a voice VLAN allows the implementation of Quality of Service (QoS) and traffic prioritization policies. This mechanism reserves the required network bandwidth to ensure crystal-clear and uninterrupted phone conversations by isolating critical voice streams from regular, lower-priority data traffic.",
    "topic": "Topic 3.2.6",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q63",
    "original_num": 63,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What type of VLAN is initially the management VLAN?",
    "images": [],
    "options": [
      {
        "text": "default VLAN",
        "is_correct": true
      },
      {
        "text": "native VLAN",
        "is_correct": false
      },
      {
        "text": "data VLAN",
        "is_correct": false
      },
      {
        "text": "management VLAN",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.1.3\nIn the out-of-the-box factory configuration of a Cisco switch, the default VLAN (VLAN 1) serves multiple foundational roles: it is the default data VLAN, the default native VLAN, and also the initial management VLAN. This means that before any custom configuration is applied, the switch's virtual interface (interface vlan 1) is the active logical interface used to assign an IP address for remote management. However, due to security best practices, it is highly recommended to change the management VLAN to a unique, dedicated VLAN separate from VLAN 1.",
    "topic": "Topic 3.1.3",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q64",
    "original_num": 64,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What type of VLAN is designed to have a delay of less than 150 ms across the network?",
    "images": [],
    "options": [
      {
        "text": "voice VLAN",
        "is_correct": true
      },
      {
        "text": "desirable VLAN",
        "is_correct": false
      },
      {
        "text": "trunk VLAN",
        "is_correct": false
      },
      {
        "text": "security VLAN",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.1.3\nA voice VLAN is explicitly designed to carry Voice over IP (VoIP) traffic. Because real-time voice communications are highly sensitive to network delay and jitter, industry standards (including Cisco guidelines) state that the one-way target delay across the network should not exceed 150 ms. To satisfy this stringent requirement, switches segment voice streams into a dedicated VLAN where Quality of Service (QoS) policies can be enforced to prioritize voice packets over regular data traffic.",
    "topic": "Topic 3.1.3",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q65",
    "original_num": 65,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What type of VLAN is used to separate the network into groups of users or devices?",
    "images": [],
    "options": [
      {
        "text": "data VLAN",
        "is_correct": true
      },
      {
        "text": "management VLAN",
        "is_correct": false
      },
      {
        "text": "voice VLAN",
        "is_correct": false
      },
      {
        "text": "native VLAN",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.1.3\nA data VLAN, also referred to as a user VLAN, is specifically designed and configured to carry user-generated network traffic (such as web browsing, emails, or file transfers). The primary purpose of a data VLAN is to separate the network into logical groups of users or devices based on their roles or functions. This practice ensures that regular user data traffic is isolated from critical network management traffic and high-priority voice (VoIP) traffic.",
    "topic": "Topic 3.1.3",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q66",
    "original_num": 66,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What type of VLAN is configured specifically for network traffic such as SSH, Telnet, HTTPS, HTTP, and SNMP?",
    "images": [],
    "options": [
      {
        "text": "management VLAN",
        "is_correct": true
      },
      {
        "text": "security VLAN",
        "is_correct": false
      },
      {
        "text": "trunk VLAN",
        "is_correct": false
      },
      {
        "text": "voice VLAN",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.1.3\nA management VLAN is any VLAN that is configured to provide remote management access to a switch. Network management traffic such as SSH, Telnet, HTTPS, HTTP, and SNMP is specifically assigned to this VLAN to ensure that IT personnel can securely configure, monitor, and troubleshoot network devices. This isolates critical infrastructure management traffic from regular user data traffic. By default, Cisco switches use VLAN 1 as the initial management VLAN, although security best practices dictate changing this to a unique, dedicated VLAN.",
    "topic": "Topic 3.1.3",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q68",
    "original_num": 68,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What type of VLAN supports untagged traffic?",
    "images": [],
    "options": [
      {
        "text": "native VLAN",
        "is_correct": true
      },
      {
        "text": "voice VLAN",
        "is_correct": false
      },
      {
        "text": "security VLAN",
        "is_correct": false
      },
      {
        "text": "management VLAN",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.2.5\nOn a switched network utilizing the IEEE 802.1Q encapsulation standard for trunk links, all data frames are normally tagged with a specific VLAN ID to identify their network of origin. The only exception to this rule is the native VLAN. Traffic belonging to the native VLAN is transmitted across the trunk link completely untagged. When the switch on the receiving end of the trunk encounters an untagged frame, it automatically associates it with its locally configured native VLAN.",
    "topic": "Topic 3.2.5",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q69",
    "original_num": 69,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What type of VLAN supports untagged traffic?",
    "images": [],
    "options": [
      {
        "text": "native VLAN",
        "is_correct": true
      },
      {
        "text": "desirable VLAN",
        "is_correct": false
      },
      {
        "text": "trunk VLAN",
        "is_correct": false
      },
      {
        "text": "security VLAN",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.2.5\nOn a switched network utilizing the IEEE 802.1Q encapsulation standard for trunk links, all data frames are normally tagged with a specific VLAN ID to identify their network of origin. The only exception to this rule is the native VLAN. Traffic belonging to the native VLAN is transmitted across the trunk link completely untagged. When the switch on the receiving end of the trunk encounters an untagged frame, it automatically associates it with its locally configured native VLAN.",
    "topic": "Topic 3.2.5",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q70",
    "original_num": 70,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. A network administrator has configured R1 as shown. When the administrator checks the status of the serial interface, the interface is shown as being administratively down. What additional command must be entered on the serial interface of R1 to bring the interface up?",
    "images": [
      "images/m1-4_q70_0.jpg"
    ],
    "options": [
      {
        "text": "IPv6 enable",
        "is_correct": false
      },
      {
        "text": "clockrate 128000",
        "is_correct": false
      },
      {
        "text": "end",
        "is_correct": false
      },
      {
        "text": "no shutdown",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 1.4.4\nBy default all router interfaces are shut down. To bring the interfaces up, an administrator must issue the no shutdown command in interface mode.",
    "topic": "Topic 1.4.4",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q71",
    "original_num": 71,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. The network administrator wants to configure Switch1 to allow SSH connections and prohibit Telnet connections. How should the network administrator change the displayed configuration to satisfy the requirement?",
    "images": [
      "images/m1-4_q71_0.jpg"
    ],
    "options": [
      {
        "text": "Use SSH version 1.",
        "is_correct": false
      },
      {
        "text": "Reconfigure the RSA key.",
        "is_correct": false
      },
      {
        "text": "Configure SSH on a different line.",
        "is_correct": false
      },
      {
        "text": "Modify the transport input command.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 1.3.4\nTo restrict remote management access exclusively to SSH and block unencrypted Telnet traffic on the virtual terminal lines (vty), the command transport input ssh must be applied under the line configuration mode.\nIn the exhibit, the current configuration shows transport input all, which accepts all incoming connection protocols (including both Telnet and SSH). Therefore, the network administrator needs to modify the transport input command to specify only ssh, forcing the switch to drop any Telnet connection attempts while keeping SSH active.",
    "topic": "Topic 1.3.4",
    "module": 1,
    "type": "single"
  },
  {
    "id": "m1-4_q72",
    "original_num": 72,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which solution would help a college alleviate network congestion due to collisions?",
    "images": [],
    "options": [
      {
        "text": "a firewall that connects to two Internet providers",
        "is_correct": false
      },
      {
        "text": "a high port density switch",
        "is_correct": true
      },
      {
        "text": "a router with two Ethernet ports",
        "is_correct": false
      },
      {
        "text": "a router with three Ethernet ports",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.2.3\nSwitches provide microsegmentation so that one device does not compete for the same Ethernet network bandwidth with another network device, thus practically eliminating collisions. A high port density switch provides very fast connectivity for many devices.",
    "topic": "Topic 2.2.3",
    "module": 2,
    "type": "single"
  },
  {
    "id": "m1-4_q73",
    "original_num": 73,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which two statements are correct with respect to SVI inter-VLAN routing? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "Switching packets is faster with SVI.",
        "is_correct": true
      },
      {
        "text": "There is no need for a connection to a router.",
        "is_correct": true
      },
      {
        "text": "Virtual interfaces support subinterfaces.",
        "is_correct": false
      },
      {
        "text": "SVIs can be bundled into EtherChannels.",
        "is_correct": false
      },
      {
        "text": "SVIs eliminate the need for a default gateway in the hosts.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.1.4\nThe SVI inter-VLAN routing method is faster than other methods. The switch can route the existing VLANs without the need for a router.",
    "topic": "Topic 4.1.4",
    "module": 4,
    "type": "multiple"
  },
  {
    "id": "m1-4_q74",
    "original_num": 74,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Refer to the exhibit. A network administrator is configuring inter-VLAN routing on a network. For now, only one VLAN is being used, but more will be added soon. What is the missing parameter that is shown as the highlighted question mark in the graphic?",
    "images": [
      "images/m1-4_q74_0.png"
    ],
    "options": [
      {
        "text": "It identifies the subinterface.",
        "is_correct": false
      },
      {
        "text": "It identifies the VLAN number.",
        "is_correct": true
      },
      {
        "text": "It identifies the native VLAN number.",
        "is_correct": false
      },
      {
        "text": "It identifies the type of encapsulation that is used.",
        "is_correct": false
      },
      {
        "text": "It identifies the number of hosts that are allowed on the interface.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.2.4\nThe completed command would be encapsulation dot1q 7. The encapsulation dot1q part of the command enables trunking and identifies the type of trunking to use. The 7 identifies the VLAN number.",
    "topic": "Topic 4.2.4",
    "module": 4,
    "type": "single"
  },
  {
    "id": "m1-4_q75",
    "original_num": 75,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Which type of VLAN is used to designate which traffic is untagged when crossing a trunk port?",
    "images": [],
    "options": [
      {
        "text": "data",
        "is_correct": false
      },
      {
        "text": "default",
        "is_correct": false
      },
      {
        "text": "native",
        "is_correct": true
      },
      {
        "text": "management",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.2.5\nA native VLAN is the VLAN that does not receive a VLAN tag in the IEEE 802.1Q frame header. Cisco best practices recommend the use of an unused VLAN (not a data VLAN, the default VLAN of VLAN 1, or the management VLAN) as the native VLAN whenever possible.",
    "topic": "Topic 3.2.5",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q76",
    "original_num": 76,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "A network administrator issues the show vlan brief command while troubleshooting a user support ticket. What output will be displayed?",
    "images": [],
    "options": [
      {
        "text": "the VLAN assignment and membership for device MAC addresses",
        "is_correct": false
      },
      {
        "text": "the VLAN assignment and membership for all switch ports",
        "is_correct": true
      },
      {
        "text": "the VLAN assignment and trunking encapsulation",
        "is_correct": false
      },
      {
        "text": "the VLAN assignment and native VLAN",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.3.8\nThe show vlan brief command will provide information displaying the VLAN assignment and membership for all switch ports on a switch.",
    "topic": "Topic 3.3.8",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m1-4_q77",
    "original_num": 77,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which message is displayed when 10.10.10.1 is entered into the PC1 Web Browser address bar?",
    "images": [
      "images/m1-4_q77_0.jpg",
      "images/m1-4_q77_1.png"
    ],
    "options": [
      {
        "text": "Local Server",
        "is_correct": false
      },
      {
        "text": "Test Server",
        "is_correct": false
      },
      {
        "text": "File Server",
        "is_correct": true
      },
      {
        "text": "Cisco Server",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.2.2\nExamining the configuration of switch SW1 shows that interface Gi0/1 is not configured as a trunk. Issuing the interface configuration command switchport mode trunk on this interface will enable communications between PC1 and Server1.",
    "topic": "Topic 4.2.2",
    "module": 4,
    "type": "single"
  },
  {
    "id": "m1-4_q78",
    "original_num": 78,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "Match each DHCP message type with its description. (Not all options are used.)",
    "images": [
      "images/m1-4_q78_0.jpg"
    ],
    "options": [],
    "explanation": "Explanation: Topic 7.1.2\nPlace the options in the following order:\n\na client initiating a message to find a DHCP server - DHCPDISCOVER\na DHCP server responding to the initial request by a client - DHCPOFFER\nthe client accepting the IP address provided by the DHCP server - DHCPREQUEST\nthe DHCP server confirming that the lease has been accepted - DHCPACK",
    "topic": "Topic 7.1.2",
    "module": 7,
    "type": "match",
    "match_data": {
      "left_title": "Thông điệp DHCP (DHCP Message)",
      "right_title": "Mô tả (Description)",
      "pairs": [
        {
          "term": "DHCPDISCOVER",
          "desc": "a client initiating a message to find a DHCP server",
          "term_vi": "DHCPDISCOVER",
          "desc_vi": "Client gửi broadcast khởi tạo để tìm kiếm máy chủ DHCP trên mạng."
        },
        {
          "term": "DHCPOFFER",
          "desc": "a DHCP server responding to the initial request by a client",
          "term_vi": "DHCPOFFER",
          "desc_vi": "DHCP server phản hồi đề xuất cấp địa chỉ IP cho client."
        },
        {
          "term": "DHCPREQUEST",
          "desc": "the client accepting the IP address provided by the DHCP server",
          "term_vi": "DHCPREQUEST",
          "desc_vi": "Client chấp nhận địa chỉ IP và gửi yêu cầu chính thức thuê địa chỉ đó."
        },
        {
          "term": "DHCPACK",
          "desc": "the DHCP server confirming that the address lease has been accepted",
          "term_vi": "DHCPACK",
          "desc_vi": "DHCP server gửi xác nhận hoàn tất việc cho thuê địa chỉ IP."
        }
      ],
      "distractors": [
        {
          "term": "DHCPNACK",
          "term_vi": "DHCPNACK (Từ chối yêu cầu thuê IP)"
        }
      ]
    }
  },
  {
    "id": "m1-4_q79",
    "original_num": 79,
    "source_group": "m1-4",
    "source_title": "Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing",
    "question": "What type of VLAN is configured specifically for network traffic such as SSH, Telnet, HTTPS, HHTP, and SNMP?",
    "images": [],
    "options": [
      {
        "text": "voice VLAN",
        "is_correct": false
      },
      {
        "text": "management VLAN",
        "is_correct": true
      },
      {
        "text": "native VLAN",
        "is_correct": false
      },
      {
        "text": "security VLAN",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.1.3",
    "topic": "Topic 3.1.3",
    "module": 3,
    "type": "single"
  },
  {
    "id": "m5-6_q1",
    "original_num": 1,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "What additional information is contained in the 12-bit extended system ID of a BPDU?",
    "images": [],
    "options": [
      {
        "text": "MAC address",
        "is_correct": false
      },
      {
        "text": "VLAN ID",
        "is_correct": true
      },
      {
        "text": "IP address",
        "is_correct": false
      },
      {
        "text": "port ID",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.1",
    "topic": "Topic 5.2.1",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q2",
    "original_num": 2,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "During the implementation of Spanning Tree Protocol, all switches are rebooted by the network administrator. What is the first step of the spanning-tree election process?",
    "images": [],
    "options": [
      {
        "text": "Each switch with a lower root ID than its neighbor will not send BPDUs.",
        "is_correct": false
      },
      {
        "text": "All the switches send out BPDUs advertising themselves as the root bridge.",
        "is_correct": true
      },
      {
        "text": "Each switch determines the best path to forward traffic.",
        "is_correct": false
      },
      {
        "text": "Each switch determines what port to block to prevent a loop from occurring.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.2",
    "topic": "Topic 5.2.2",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q3",
    "original_num": 3,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which STP port role is adopted by a switch port if there is no other port with a lower cost to the root bridge?",
    "images": [],
    "options": [
      {
        "text": "designated port",
        "is_correct": false
      },
      {
        "text": "root port",
        "is_correct": true
      },
      {
        "text": "alternate",
        "is_correct": false
      },
      {
        "text": "disabled port",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.5\nThe root port is the port with the lowest cost to reach the root bridge.",
    "topic": "Topic 5.2.5",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q4",
    "original_num": 4,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which two concepts relate to a switch port that is intended to have only end devices attached and intended never to be used to connect to another switch? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "bridge ID",
        "is_correct": false
      },
      {
        "text": "edge port",
        "is_correct": true
      },
      {
        "text": "extended system ID",
        "is_correct": false
      },
      {
        "text": "PortFast",
        "is_correct": true
      },
      {
        "text": "PVST+",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.3.4",
    "topic": "Topic 5.3.4",
    "module": 5,
    "type": "multiple"
  },
  {
    "id": "m5-6_q5",
    "original_num": 5,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which three components are combined to form a bridge ID?",
    "images": [],
    "options": [
      {
        "text": "extended system ID",
        "is_correct": true
      },
      {
        "text": "cost",
        "is_correct": false
      },
      {
        "text": "IP address",
        "is_correct": false
      },
      {
        "text": "bridge priority",
        "is_correct": true
      },
      {
        "text": "MAC address",
        "is_correct": true
      },
      {
        "text": "port ID",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.1\nThe three components that are combined to form a bridge ID are bridge priority, extended system ID, and MAC address.",
    "topic": "Topic 5.2.1",
    "module": 5,
    "type": "multiple"
  },
  {
    "id": "m5-6_q6",
    "original_num": 6,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Match the STP protocol with the correct description. (Not all options are used.)",
    "images": [
      "images/m5-6_q6_0.jpg",
      "images/m5-6_q6_1.jpg"
    ],
    "options": [],
    "explanation": "Explanation: Topic 5.3.1",
    "topic": "Topic 5.3.1",
    "module": 5,
    "type": "match",
    "match_data": {
      "left_title": "Giao thức STP (Protocol)",
      "right_title": "Mô tả đặc điểm (Description)",
      "pairs": [
        {
          "term": "STP",
          "desc": "The legacy standard for STP that runs all VLANs in a single spanning-tree instance",
          "term_vi": "STP (802.1D)",
          "desc_vi": "Tiêu chuẩn STP truyền thống, chạy tất cả các VLAN chung trong 1 phiên bản Spanning-Tree duy nhất."
        },
        {
          "term": "Rapid PVST+",
          "desc": "A Cisco enhancement of RSTP to provide a spanning-tree instance for each VLAN",
          "term_vi": "Rapid PVST+",
          "desc_vi": "Cải tiến của Cisco dựa trên RSTP (802.1w), cung cấp một phiên bản Spanning-Tree riêng biệt cho từng VLAN với tốc độ hội tụ nhanh."
        },
        {
          "term": "MSTP",
          "desc": "A protocol that allows multiple VLANs to run in a single spanning-tree instance",
          "term_vi": "MSTP (802.1s)",
          "desc_vi": "Chuẩn mở ánh xạ và gộp nhiều VLAN có chung topology chạy trên cùng 1 phiên bản Spanning-Tree để tiết kiệm CPU."
        }
      ],
      "distractors": []
    }
  },
  {
    "id": "m5-6_q7",
    "original_num": 7,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "In which two port states does a switch learn MAC addresses and process BPDUs in a PVST network? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "disabled",
        "is_correct": false
      },
      {
        "text": "forwarding",
        "is_correct": true
      },
      {
        "text": "listening",
        "is_correct": false
      },
      {
        "text": "blocking",
        "is_correct": false
      },
      {
        "text": "learning",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 5.2.9\nSwitches learn MAC addresses at the learning and forwarding port states. They receive and process BPDUs at the blocking, listening, learning, and forwarding port states.",
    "topic": "Topic 5.2.9",
    "module": 5,
    "type": "multiple"
  },
  {
    "id": "m5-6_q8",
    "original_num": 8,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "If no bridge priority is configured in PVST, which criteria is considered when electing the root bridge?",
    "images": [],
    "options": [
      {
        "text": "lowest MAC address",
        "is_correct": true
      },
      {
        "text": "lowest IP address",
        "is_correct": false
      },
      {
        "text": "highest IP address",
        "is_correct": false
      },
      {
        "text": "highest MAC address",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.3\nOnly one switch can be the root bridge for a VLAN. The root bridge is the switch with the lowest BID. The BID is determined by priority and the MAC address. If no priority is configured then all switches use the default priority and the election of the root bridge will be based on the lowest MAC address.",
    "topic": "Topic 5.2.3",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q9",
    "original_num": 9,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Match the spanning-tree feature with the protocol type. (Not all options are used.)",
    "images": [
      "images/m5-6_q9_0.webp"
    ],
    "options": [],
    "explanation": "Explanation: Topic 5.3.1",
    "topic": "Topic 5.3.1",
    "module": 5,
    "type": "match",
    "match_data": {
      "left_title": "Giao thức STP (STP Protocol)",
      "right_title": "Đặc điểm / Chuẩn (Feature / Standard)",
      "pairs": [
        {
          "term": "PVST+",
          "desc": "Cisco implementation of IEEE 802.1D",
          "term_vi": "PVST+",
          "desc_vi": "Bản triển khai độc quyền của Cisco chạy 802.1D trên từng VLAN riêng biệt."
        },
        {
          "term": "RSTP",
          "desc": "Fast converging enhancement of IEEE 802.1D",
          "term_vi": "RSTP (802.1w)",
          "desc_vi": "Cải tiến chuẩn IEEE 802.1D với tốc độ hội tụ nhanh hơn rất nhiều."
        },
        {
          "term": "MSTP",
          "desc": "IEEE standard that reduces the number of STP instances",
          "term_vi": "MSTP (802.1s)",
          "desc_vi": "Tiêu chuẩn IEEE giúp giảm số lượng phiên bản STP bằng cách gom nhóm VLAN."
        },
        {
          "term": "Rapid PVST+",
          "desc": "Proprietary per VLAN implementation of IEEE 802.1w",
          "term_vi": "Rapid PVST+",
          "desc_vi": "Bản triển khai độc quyền của Cisco chạy 802.1w trên từng VLAN."
        }
      ],
      "distractors": []
    }
  },
  {
    "id": "m5-6_q10",
    "original_num": 10,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "When the show spanning-tree vlan 33 command is issued on a switch, three ports are shown in the forwarding state. In which two port roles could these interfaces function while in the forwarding state? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "alternate",
        "is_correct": false
      },
      {
        "text": "designated",
        "is_correct": true
      },
      {
        "text": "disabled",
        "is_correct": false
      },
      {
        "text": "blocked",
        "is_correct": false
      },
      {
        "text": "root",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 5.2.9\nThe role of each of the three ports will be either designated port or root port. Ports in the disabled state are administratively disabled. Ports in the blocking state are alternate ports.",
    "topic": "Topic 5.2.9",
    "module": 5,
    "type": "multiple"
  },
  {
    "id": "m5-6_q11",
    "original_num": 11,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "What is the function of STP in a scalable network?",
    "images": [],
    "options": [
      {
        "text": "It decreases the size of the failure domain to contain the impact of failures.",
        "is_correct": false
      },
      {
        "text": "It protects the edge of the enterprise network from malicious activity.",
        "is_correct": false
      },
      {
        "text": "It combines multiple switch trunk links to act as one logical link for increased bandwidth.",
        "is_correct": false
      },
      {
        "text": "It disables redundant paths to eliminate Layer 2 loops.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 5.1.2\nSTP is an important component in a scalable network because it allows redundant physical connections between Layer 2 devices to be implemented without creating Layer 2 loops. STP prevents Layer 2 loops from forming by disabling interfaces on Layer 2 devices when they would create a loop.",
    "topic": "Topic 5.1.2",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q12",
    "original_num": 12,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "What is a characteristic of spanning tree?",
    "images": [],
    "options": [
      {
        "text": "It is enabled by default on Cisco switches.",
        "is_correct": true
      },
      {
        "text": "It is used to discover information about an adjacent Cisco device.",
        "is_correct": false
      },
      {
        "text": "It has a TTL mechanism that works at Layer 2.",
        "is_correct": false
      },
      {
        "text": "It prevents propagation of Layer 2 broadcast frames.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.3.1\nSpanning tree does work at Layer 2 on Ethernet-based networks and is enabled by default, but it does not have a TTL mechanism. Spanning tree exists because Layer 2 frames do not have a TTL mechanism. Layer 2 frames are still broadcast when spanning tree is enabled, but the frames can only be transmitted through a single path through the Layer 2 network that was created by spanning tree. Cisco Discovery Protocol (CDP) is used to discover information about an adjacent Cisco device.",
    "topic": "Topic 5.3.1",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q13",
    "original_num": 13,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which spanning tree standard supports only one root bridge so that traffic from all VLANs flows over the same path?",
    "images": [],
    "options": [
      {
        "text": "PVST+",
        "is_correct": false
      },
      {
        "text": "802.1D",
        "is_correct": true
      },
      {
        "text": "MST",
        "is_correct": false
      },
      {
        "text": "Rapid PVST",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.3.1\nMST is the Cisco implementation of MSTP, an IEEE standard protocol that provides up to 16 instances of RSTP. PVST+ provides a separate 802.1D spanning-tree instance for each VLAN that is configured in the network. 802.1D is the original STP standard defined by the IEEE and allows for only one root bridge for all VLANs. 802.1w, or RSTP, provides faster convergence but still uses only one STP instance for all VLANs.",
    "topic": "Topic 5.3.1",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q14",
    "original_num": 14,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "What is the purpose of the Spanning Tree Protocol (STP)?",
    "images": [],
    "options": [
      {
        "text": "creates smaller collision domains",
        "is_correct": false
      },
      {
        "text": "prevents routing loops on a router",
        "is_correct": false
      },
      {
        "text": "prevents Layer 2 loops",
        "is_correct": true
      },
      {
        "text": "allows Cisco devices to exchange routing table updates",
        "is_correct": false
      },
      {
        "text": "creates smaller broadcast domains",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.1.2\nThe Spanning-Tree Protocol (STP) creates one path through a switch network in order to prevent Layer 2 loops.",
    "topic": "Topic 5.1.2",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q15",
    "original_num": 15,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "What is the value used to determine which port on a non-root bridge will become a root port in a STP network?",
    "images": [],
    "options": [
      {
        "text": "the path cost",
        "is_correct": true
      },
      {
        "text": "the highest MAC address of all the ports in the switch",
        "is_correct": false
      },
      {
        "text": "the lowest MAC address of all the ports in the switch",
        "is_correct": false
      },
      {
        "text": "the VTP revision number",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.5\nSTP establishes one root port on each non-root bridge. The root port is the lowest-cost path from the non-root bridge to the root bridge, indicating the direction of the best path to the root bridge. This is primarily based on the path cost to the root bridge.",
    "topic": "Topic 5.2.5",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q16",
    "original_num": 16,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Refer to the exhibit. Which switch will be the root bridge after the election process is complete?",
    "images": [
      "images/m5-6_q16_0.png"
    ],
    "options": [
      {
        "text": "S1",
        "is_correct": false
      },
      {
        "text": "S2",
        "is_correct": true
      },
      {
        "text": "S3",
        "is_correct": false
      },
      {
        "text": "S4",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.2\nThe root bridge is determined by the lowest bridge ID, which consists of the priority value and the MAC address. Because the priority values of all of the switches are identical, the MAC address is used to determine the root bridge. Because S2 has the lowest MAC address, S2 becomes the root bridge.",
    "topic": "Topic 5.2.2",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q17",
    "original_num": 17,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "What are two drawbacks to turning spanning tree off and having multiple paths through the Layer 2 switch network? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "The MAC address table becomes unstable.",
        "is_correct": true
      },
      {
        "text": "The switch acts like a hub.",
        "is_correct": false
      },
      {
        "text": "Port security becomes unstable.",
        "is_correct": false
      },
      {
        "text": "Broadcast frames are transmitted indefinitely.",
        "is_correct": true
      },
      {
        "text": "Port security shuts down all of the ports that have attached devices.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.1.4\nSpanning tree should never be disabled. Without it, the MAC address table becomes unstable, broadcast storms can render network clients and the switches unusable, and multiple copies of unicast frames can be delivered to the end devices.",
    "topic": "Topic 5.1.4",
    "module": 5,
    "type": "multiple"
  },
  {
    "id": "m5-6_q18",
    "original_num": 18,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "A small company network has six interconnected Layer 2 switches. Currently all switches are using the default bridge priority value. Which value can be used to configure the bridge priority of one of the switches to ensure that it becomes the root bridge in this design?",
    "images": [],
    "options": [
      {
        "text": "1",
        "is_correct": false
      },
      {
        "text": "28672",
        "is_correct": true
      },
      {
        "text": "32768",
        "is_correct": false
      },
      {
        "text": "34816",
        "is_correct": false
      },
      {
        "text": "61440",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.1\nThe default bridge priority value for all Cisco switches is 32768. The range is 0 to 61440 in increments of 4096. Thus, the values 1 and 34816 are invalid. Configuring one switch with the lower value of 28672 (and leaving the bridge priority value of all other switches unchanged) will make the switch become the root bridge.",
    "topic": "Topic 5.2.1",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q19",
    "original_num": 19,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Refer to the exhibit. The administrator tried to create an EtherChannel between S1 and the other two switches via the commands that are shown, but was unsuccessful. What is the problem?",
    "images": [
      "images/m5-6_q19_0.png"
    ],
    "options": [
      {
        "text": "Traffic cannot be sent to two different switches through the same EtherChannel link.",
        "is_correct": true
      },
      {
        "text": "Traffic cannot be sent to two different switches, but only to two different devices like an EtherChannel-enabled server and a switch.​",
        "is_correct": false
      },
      {
        "text": "Traffic can only be sent to two different switches if EtherChannel is implemented on Gigabit Ethernet interfaces.​",
        "is_correct": false
      },
      {
        "text": "Traffic can only be sent to two different switches if EtherChannel is implemented on Layer 3 switches.​",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.1.4\nAn EtherChannel link can only be created between two switches or between an EtherChannel-enabled server and a switch. Traffic cannot be sent to two different switches through the same EtherChannel link.",
    "topic": "Topic 6.1.4",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q20",
    "original_num": 20,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which statement is true regarding the use of PAgP to create EtherChannels?",
    "images": [],
    "options": [
      {
        "text": "It requires full duplex.",
        "is_correct": false
      },
      {
        "text": "It increases the number of ports that are participating in spanning tree.",
        "is_correct": false
      },
      {
        "text": "It requires more physical links than LACP does.",
        "is_correct": false
      },
      {
        "text": "It mandates that an even number of ports (2, 4, 6, etc.) be used for aggregation.",
        "is_correct": false
      },
      {
        "text": "It is Cisco proprietary.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 6.1.6\nPAgP is used to automatically aggregate multiple ports into an EtherChannel bundle, but it only works between Cisco devices. LACP can be used for the same purpose between Cisco and non-Cisco devices. PAgP must have the same duplex mode at both ends and can use two ports or more. The number of ports depends on the switch platform or module. An EtherChannel aggregated link is seen as one port by the spanning-tree algorithm.",
    "topic": "Topic 6.1.6",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q21",
    "original_num": 21,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "What are two requirements to be able to configure an EtherChannel between two switches? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "All the interfaces need to work at the same speed.",
        "is_correct": true
      },
      {
        "text": "All interfaces need to be assigned to different VLANs.",
        "is_correct": false
      },
      {
        "text": "Different allowed ranges of VLANs must exist on each end.",
        "is_correct": false
      },
      {
        "text": "All the interfaces need to be working in the same duplex mode.",
        "is_correct": true
      },
      {
        "text": "The interfaces that are involved need to be contiguous on the switch.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.2.1\nAll interfaces in the EtherChannel bundle must be assigned to the same VLAN or be configured as a trunk. If the allowed range of VLANs is not the same, the interfaces do not form an EtherChannel even when set to auto or desirable mode.",
    "topic": "Topic 6.2.1",
    "module": 6,
    "type": "multiple"
  },
  {
    "id": "m5-6_q22",
    "original_num": 22,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Refer to the exhibit. On the basis of the output that is shown, what can be determined about the EtherChannel bundle?",
    "images": [
      "images/m5-6_q22_0.png"
    ],
    "options": [
      {
        "text": "The EtherChannel bundle is down.",
        "is_correct": false
      },
      {
        "text": "Two Gigabit Ethernet ports are used to form the EtherChannel.",
        "is_correct": false
      },
      {
        "text": "A Cisco proprietary protocol was used to negotiate the EtherChannel link.",
        "is_correct": true
      },
      {
        "text": "The EtherChannel bundle is operating at both Layer 2 and Layer 3.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.1.6\nTwo protocols can be used to send negotiation frames that are used to try to establish an EtherChannel link: PAgP and LACP. PAgP is Cisco proprietary, and LACP adheres to the industry standard.",
    "topic": "Topic 6.1.6",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q23",
    "original_num": 23,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which two parameters must match on the ports of two switches to create a PAgP EtherChannel between the switches? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "port ID",
        "is_correct": false
      },
      {
        "text": "PAgP mode",
        "is_correct": false
      },
      {
        "text": "MAC address",
        "is_correct": false
      },
      {
        "text": "speed",
        "is_correct": true
      },
      {
        "text": "VLAN information",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 6.1.6\nFor an EtherChannel to be created, the ports that are concerned on the two switches must match in terms of the speed, duplex, and VLAN information. The PAgP mode must be compatible but not necessarily equal. The port ID and the MAC addresses do not have to match.",
    "topic": "Topic 6.1.6",
    "module": 6,
    "type": "multiple"
  },
  {
    "id": "m5-6_q24",
    "original_num": 24,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Refer to the exhibit. A network administrator is configuring an EtherChannel link between two switches, SW1 and SW2. Which statement describes the effect after the commands are issued on SW1 and SW2?",
    "images": [
      "images/m5-6_q24_0.png"
    ],
    "options": [
      {
        "text": "The EtherChannel is established after SW2 initiates the link request.",
        "is_correct": false
      },
      {
        "text": "The EtherChannel is established after SW1 initiates the link request.",
        "is_correct": false
      },
      {
        "text": "The EtherChannel is established without negotiation.",
        "is_correct": false
      },
      {
        "text": "The EtherChannel fails to establish.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 6.1.7\nThe interfaces GigabitEthernet 0/1 and GigabitEthernet 0/2 are configured \"on\" for the EtherChannel link. This mode forces the interface to channel without PAgP or LACP. The EtherChannel will be established only if the other side is also set to \"on\". However, the mode on SW2 side is set to PAgP desirable. Thus the EtherChannel link will not be established.",
    "topic": "Topic 6.1.7",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q25",
    "original_num": 25,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Refer to the exhibit. A network administrator is configuring an EtherChannel link between two switches, SW1 and SW2. However, the EtherChannel link fails to establish. What change in configuration would correct the problem?",
    "images": [
      "images/m5-6_q25_0.png"
    ],
    "options": [
      {
        "text": "Configure SW2 EtherChannel mode to desirable.",
        "is_correct": true
      },
      {
        "text": "Configure SW2 EtherChannel mode to on.",
        "is_correct": false
      },
      {
        "text": "Configure SW1 EtherChannel mode to on.",
        "is_correct": false
      },
      {
        "text": "Configure SW2 EtherChannel mode to auto.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.1.7\nThe EtherChannel mode must be compatible on each side for the link to work. The three modes from PAgP protocol are on, desirable, and auto. The three modes from LACP protocol are on, active, and passive. The compatible modes include on-on, auto-desirable, desirable-desirable, active-passive, and active-active. Any other combinations will not form an EtherChannel link.",
    "topic": "Topic 6.1.7",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q26",
    "original_num": 26,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "A network administrator configured an EtherChannel link with three interfaces between two switches. What is the result if one of the three interfaces is down?",
    "images": [],
    "options": [
      {
        "text": "The remaining two interfaces continue to load balance traffic.",
        "is_correct": true
      },
      {
        "text": "The remaining two interfaces become separate links between the two switches.",
        "is_correct": false
      },
      {
        "text": "One interface becomes an active link for data traffic and the other becomes a backup link.",
        "is_correct": false
      },
      {
        "text": "The EtherChannel fails.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.1.3\nEtherChannel creates an aggregation that is seen as one logical link. It provides redundancy because the overall link is one logical connection. The loss of one physical link within the channel does not create a change in the topology; the EtherChannel remains functional.",
    "topic": "Topic 6.1.3",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q27",
    "original_num": 27,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "A network administrator is configuring an EtherChannel link between switches SW1 and SW2 by using the command SW1(config-if-range)# channel-group 1 mode auto. Which command must be used on SW2 to enable this EtherChannel?",
    "images": [],
    "options": [
      {
        "text": "SW2(config-if-range)# channel-group 1 mode passive",
        "is_correct": false
      },
      {
        "text": "SW2(config-if-range)# channel-group 1 mode desirable",
        "is_correct": true
      },
      {
        "text": "SW2(config-if-range)# channel-group 1 mode on",
        "is_correct": false
      },
      {
        "text": "SW2(config-if-range)# channel-group 1 mode active",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.1.6\nThe possible combinations to establish an EtherChannel between SW1 and SW2 using LACP or PAgP are as follows:\nPAgP\non on\nauto desirable\ndesirable desirable\nLACP\non on\nactive active\npassive active\nThe EtherChannel mode chosen on each side of the EtherChannel must be compatible in order to enable it.",
    "topic": "Topic 6.1.6",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q28",
    "original_num": 28,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which technology is an open protocol standard that allows switches to automatically bundle physical ports into a single logical link?",
    "images": [],
    "options": [
      {
        "text": "PAgP",
        "is_correct": false
      },
      {
        "text": "LACP",
        "is_correct": true
      },
      {
        "text": "Multilink PPP",
        "is_correct": false
      },
      {
        "text": "DTP",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.1.8\nLACP, or Link Aggregation Control Protocol, is defined by IEEE 802.3ad and is an open standard protocol. LACP allows switches to automatically bundle switch ports into a single logical link to increase bandwidth. PAgP, or Port Aggregation Protocol, performs a similar function, but it is a Cisco proprietary protocol. DTP is Dynamic Trunking Protocol and is used to automatically and dynamically build trunks between switches. Multilink PPP is used to load-balance PPP traffic across multiple serial interfaces.",
    "topic": "Topic 6.1.8",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q29",
    "original_num": 29,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "What is a requirement to configure a trunking EtherChannel between two switches?",
    "images": [],
    "options": [
      {
        "text": "The allowed range of VLANs must be the same on both switches.",
        "is_correct": true
      },
      {
        "text": "The participating interfaces must be assigned the same VLAN number on both switches.",
        "is_correct": false
      },
      {
        "text": "The participating interfaces must be physically contiguous on a switch.",
        "is_correct": false
      },
      {
        "text": "The participating interfaces must be on the same module on a switch.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.2.1\nTo enable a trunking EtherChannel successfully, the range of VLANs allowed on all the interfaces must match; otherwise, the EtherChannel cannot be formed. The interfaces involved in an EtherChannel do not have to be physically contiguous, or on the same module. Because the EtherChannel is a trunking one, participating interfaces are configured as trunk mode, not access mode.",
    "topic": "Topic 6.2.1",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q30",
    "original_num": 30,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "What are two advantages of using LACP? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "It allows directly connected switches to negotiate an EtherChannel link.",
        "is_correct": true
      },
      {
        "text": "It eliminates the need for configuring trunk interfaces when deploying VLANs on multiple switches.",
        "is_correct": false
      },
      {
        "text": "It decreases the amount of configuration that is needed on a switch.",
        "is_correct": false
      },
      {
        "text": "It provides a simulated environment for testing link aggregation.",
        "is_correct": false
      },
      {
        "text": "It allows the use of multivendor devices.",
        "is_correct": true
      },
      {
        "text": "LACP allows Fast Ethernet and Gigabit Ethernet interfaces to be mixed within a single EtherChannel.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.1.8\nThe Link Aggregation Control Protocol (LACP) allows directly connected multivendor switches to negotiate an EtherChannel link. LACP helps create the EtherChannel link by detecting the configuration of each side and making sure that they are compatible so that the EtherChannel link can be enabled when needed.",
    "topic": "Topic 6.1.8",
    "module": 6,
    "type": "multiple"
  },
  {
    "id": "m5-6_q31",
    "original_num": 31,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "A switch is configured to run STP. What term describes a non-root port that is permitted to forward traffic on the network?",
    "images": [],
    "options": [
      {
        "text": "root port",
        "is_correct": false
      },
      {
        "text": "designated port",
        "is_correct": true
      },
      {
        "text": "alternate port",
        "is_correct": false
      },
      {
        "text": "disabled",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.6",
    "topic": "Topic 5.2.6",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q32",
    "original_num": 32,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "What are two advantages of EtherChannel? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "Spanning Tree Protocol views the physical links in an EtherChannel as one logical connection.",
        "is_correct": true
      },
      {
        "text": "Load balancing occurs between links configured as different EtherChannels.",
        "is_correct": false
      },
      {
        "text": "Configuring the EtherChannel interface provides consistency in the configuration of the physical links.",
        "is_correct": true
      },
      {
        "text": "Spanning Tree Protocol ensures redundancy by transitioning failed interfaces in an EtherChannel to a forwarding state.",
        "is_correct": false
      },
      {
        "text": "EtherChannel uses upgraded physical links to provide increased bandwidth.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.1.3\nEtherChannel configuration of one logical interface ensures configuration consistency across the physical links in the EtherChannel. The EtherChannel provides increased bandwidth using existing switch ports without requiring any upgrades to the physical interfaces. Load balancing methods are implemented between links that are part of the same Etherchannel. Because EtherChannel views the bundled physical links as one logical connection, spanning tree recalculation is not required if one of the bundled physical links fail. If a physical interface fails, STP cannot transition the failed interface into a forwarding state.",
    "topic": "Topic 6.1.3",
    "module": 6,
    "type": "multiple"
  },
  {
    "id": "m5-6_q33",
    "original_num": 33,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Refer to the exhibit. What are the possible port roles for ports A, B, C, and D in this RSTP-enabled network?",
    "images": [
      "images/m5-6_q33_0.png"
    ],
    "options": [
      {
        "text": "alternate, designated, root, root",
        "is_correct": true
      },
      {
        "text": "designated, alternate, root, root",
        "is_correct": false
      },
      {
        "text": "alternate, root, designated, root",
        "is_correct": false
      },
      {
        "text": "designated, root, alternate, root",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.1\nBecause S1 is the root bridge, B is a designated port, and C and D root ports. RSTP supports a new port type, alternate port in discarding state, that can be port A in this scenario.",
    "topic": "Topic 5.2.1",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q34",
    "original_num": 34,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Refer to the exhibit. Which switching technology would allow each access layer switch link to be aggregated to provide more bandwidth between each Layer 2 switch and the Layer 3 switch?",
    "images": [
      "images/m5-6_q34_0.png"
    ],
    "options": [
      {
        "text": "trunking",
        "is_correct": false
      },
      {
        "text": "HSRP",
        "is_correct": false
      },
      {
        "text": "PortFast",
        "is_correct": false
      },
      {
        "text": "EtherChannel",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 6.1.1\nPortFast is used to reduce the amount of time that a port spends going through the spanning-tree algorithm, so that devices can start sending data sooner. Trunking can be implemented in conjunction with EtherChannel, but trunking alone does not aggregate switch links. HSRP is used to load-balance traffic across two different connections to Layer 3 devices for default gateway redundancy. HSRP does not aggregate links at either Layer 2 or Layer 3 as EtherChannel does.",
    "topic": "Topic 6.1.1",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q35",
    "original_num": 35,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Refer to the exhibit. An administrator wants to form an EtherChannel between the two switches by using the Port Aggregation Protocol. If switch S1 is configured to be in auto mode, which mode should be configured on S2 to form the EtherChannel?",
    "images": [
      "images/m5-6_q35_0.png"
    ],
    "options": [
      {
        "text": "auto",
        "is_correct": false
      },
      {
        "text": "on",
        "is_correct": false
      },
      {
        "text": "off",
        "is_correct": false
      },
      {
        "text": "desirable",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 6.1.6\nAn EtherChannel will be formed via PAgP when both switches are in on mode or when one of them is in auto or desirable mode and the other is in desirable mode.",
    "topic": "Topic 6.1.6",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q36",
    "original_num": 36,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which set of configuration commands issued on SW1 will successfully complete the EtherChannel link between SW1 and SW2?",
    "images": [
      "images/m5-6_q36_0.png",
      "images/m5-6_q36_1.png"
    ],
    "options": [
      {
        "text": "interface GigabitEthernet0/1\nno shutdown",
        "is_correct": false
      },
      {
        "text": "interface Port-channel 1\nno shutdown",
        "is_correct": false
      },
      {
        "text": "interface GigabitEthernet0/2\nchannel-group 2 mode desirable",
        "is_correct": false
      },
      {
        "text": "interface GigabitEthernet0/1\nchannel-group 1 mode desirable",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 6.2.2\nIssuing the show running-configuration command on SW1 shows that interface GigabitEthernet0/1 is missing the channel-group 1 mode desirable command which will compete the EtherChannel configuration for interface GigabitEthernet0/1 and interface GigabitEthernet0/2.",
    "topic": "Topic 6.2.2",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q37",
    "original_num": 37,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "A set of switches is being connected in a LAN topology. Which STP bridge priority value will make it least likely for the switch to be selected as the root?",
    "images": [],
    "options": [
      {
        "text": "65535",
        "is_correct": false
      },
      {
        "text": "4096",
        "is_correct": false
      },
      {
        "text": "32768",
        "is_correct": false
      },
      {
        "text": "61440",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 5.2.1\nThe STP bridge priority is a two byte number, but it can only be customized in increments of 4096. The smaller number is preferred, but the largest usable priority value is 61440.",
    "topic": "Topic 5.2.1",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q38",
    "original_num": 38,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "In which two PVST+ port states are MAC addresses learned? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "learning",
        "is_correct": true
      },
      {
        "text": "forwarding",
        "is_correct": true
      },
      {
        "text": "disabled",
        "is_correct": false
      },
      {
        "text": "listening",
        "is_correct": false
      },
      {
        "text": "blocking",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.10\nThe two PVST+ port states during which MAC addresses are learned and populate the MAC address table are the learning and the forwarding states.",
    "topic": "Topic 5.2.10",
    "module": 5,
    "type": "multiple"
  },
  {
    "id": "m5-6_q39",
    "original_num": 39,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which port role is assigned to the switch port that has the lowest cost to reach the root bridge?",
    "images": [],
    "options": [
      {
        "text": "designated port",
        "is_correct": false
      },
      {
        "text": "disabled port",
        "is_correct": false
      },
      {
        "text": "root port",
        "is_correct": true
      },
      {
        "text": "non-designated port",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.5\nThe root port on a switch is the port with the lowest cost to reach the root bridge.",
    "topic": "Topic 5.2.5",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q40",
    "original_num": 40,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "A switch is configured to run STP. What term describes the switch port closest, in terms of overall cost, to the root bridge?",
    "images": [],
    "options": [
      {
        "text": "root port",
        "is_correct": true
      },
      {
        "text": "designated port",
        "is_correct": false
      },
      {
        "text": "alternate port",
        "is_correct": false
      },
      {
        "text": "disabled",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.5",
    "topic": "Topic 5.2.5",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q42",
    "original_num": 42,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "A switch is configured to run STP. What term describes a field used to specify a VLAN ID?",
    "images": [],
    "options": [
      {
        "text": "extended system ID",
        "is_correct": true
      },
      {
        "text": "port ID",
        "is_correct": false
      },
      {
        "text": "bridge priority",
        "is_correct": false
      },
      {
        "text": "bridge ID",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.1",
    "topic": "Topic 5.2.1",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q43",
    "original_num": 43,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "A switch is configured to run STP. What term describes the reference point for all path calculations?",
    "images": [],
    "options": [
      {
        "text": "root bridge",
        "is_correct": true
      },
      {
        "text": "root port",
        "is_correct": false
      },
      {
        "text": "designated port",
        "is_correct": false
      },
      {
        "text": "alternate port",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.2",
    "topic": "Topic 5.2.2",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q44",
    "original_num": 44,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "A switch is configured to run STP. What term describes a field that has a default value of 32,768 and is the initial deciding factor when electing a root bridge?",
    "images": [],
    "options": [
      {
        "text": "bridge priority",
        "is_correct": true
      },
      {
        "text": "MAC Address",
        "is_correct": false
      },
      {
        "text": "extended system ID",
        "is_correct": false
      },
      {
        "text": "bridge ID",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.1",
    "topic": "Topic 5.2.1",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q45",
    "original_num": 45,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which statement describes an EtherChannel implementation?",
    "images": [],
    "options": [
      {
        "text": "EtherChannel operates only at Layer 2.",
        "is_correct": false
      },
      {
        "text": "PAgP cannot be used in conjunction with EtherChannel.",
        "is_correct": false
      },
      {
        "text": "A trunked port can be part of an EtherChannel bundle.",
        "is_correct": true
      },
      {
        "text": "EtherChannel can support up to a maximum of ten separate links.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.2.1\nUp to 16 links can be grouped in an EtherChannel by using the the PAgP or LACP protocol. EtherChannel can be configured as a Layer 2 bundle or a Layer 3 bundle. Configuring a Layer 3 bundle is beyond the scope of this course. If a trunked port is a part of the EtherChannel bundle, all ports in the bundle need to be trunk ports and the native VLAN must be the same on all of these ports. A best practice is to apply the configuration to the port channel interface. The configuration is then automatically applied to the individual ports.",
    "topic": "Topic 6.2.1",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q46",
    "original_num": 46,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Refer to the exhibit. A network administrator issued the show etherchannel summary command on the switch S1. What conclusion can be drawn?",
    "images": [
      "images/m5-6_q46_0.png"
    ],
    "options": [
      {
        "text": "The EtherChannel is suspended.",
        "is_correct": false
      },
      {
        "text": "The EtherChannel is not functional.",
        "is_correct": true
      },
      {
        "text": "The port aggregation protocol PAgP is misconfigured.",
        "is_correct": false
      },
      {
        "text": "FastEthernet ports Fa0/1, Fa0/2, and Fa0/3 do not join the EtherChannel.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.3.3\nThe EtherChannel status shows as (SD), which means it is a Layer 2 EtherChannel with a status of D or down. Because the EtherChannel is down, the status of the interfaces in the channel group is stand-alone. PAgP is configured on S1, but there is no indication whether it is configured correctly on S1. The problem might also be the adjacent switch EtherChannel configuration.",
    "topic": "Topic 6.3.3",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q47",
    "original_num": 47,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which statement describes a characteristic of EtherChannel?",
    "images": [],
    "options": [
      {
        "text": "It can combine up to a maximum of 4 physical links.",
        "is_correct": false
      },
      {
        "text": "It can bundle mixed types of 100 Mb/s and 1Gb/s Ethernet links.",
        "is_correct": false
      },
      {
        "text": "It consists of multiple parallel links between a switch and a router.",
        "is_correct": false
      },
      {
        "text": "It is made by combining multiple physical links that are seen as one link between two switches.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 6.1.1\nAn EtherChannel is formed by combining multiple (same type) Ethernet physical links so they are seen and configured as one logical link. It provides an aggregated link between two switches. Currently each EtherChannel can consist of up to eight compatibly configured Ethernet ports.",
    "topic": "Topic 6.1.1",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q48",
    "original_num": 48,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which two channel group modes would place an interface in a negotiating state using PAgP? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "on",
        "is_correct": false
      },
      {
        "text": "desirable",
        "is_correct": true
      },
      {
        "text": "active",
        "is_correct": false
      },
      {
        "text": "auto",
        "is_correct": true
      },
      {
        "text": "passive",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.1.6\nThere are three modes available when configuring an interface for PAgP: on, desirable, and auto. Only desirable and auto place the interface in a negotiating state. The active and passive states are used to configure LACP and not PAgP.",
    "topic": "Topic 6.1.6",
    "module": 6,
    "type": "multiple"
  },
  {
    "id": "m5-6_q49",
    "original_num": 49,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which mode configuration setting would allow formation of an EtherChannel link between switches SW1 and SW2 without sending negotiation traffic?",
    "images": [],
    "options": [
      {
        "text": "SW1: on\nSW2: on",
        "is_correct": true
      },
      {
        "text": "SW1: desirable\nSW2: desirable",
        "is_correct": false
      },
      {
        "text": "SW1: auto\nSW2: auto (trunking enabled on both switches)",
        "is_correct": false
      },
      {
        "text": "SW1: auto\nSW2: auto (PortFast enabled on both switches)",
        "is_correct": false
      },
      {
        "text": "SW1: passive\nSW2: active",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.1.6\nThe auto channel-group keyword enables PAgP only if a PAgP device is detected on the opposite side of the link. If the auto keyword is used, the only way to form an EtherChannel link is if the opposite connected device is configured with the desirable keyword. PortFast and trunking technologies are irrelevant to forming an EtherChannel link. Even though an EtherChannel can be formed if both sides are configured in desirable mode, PAgP is active and PAgP messages are being sent constantly across the link, decreasing the amount of bandwidth available for user traffic.",
    "topic": "Topic 6.1.6",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q50",
    "original_num": 50,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Refer to the exhibit. An EtherChannel was configured between switches S1 and S2, but the interfaces do not form an EtherChannel. What is the problem?",
    "images": [
      "images/m5-6_q50_0.png"
    ],
    "options": [
      {
        "text": "The interface port-channel number has to be different on each switch.",
        "is_correct": false
      },
      {
        "text": "The switch ports were not configured with speed and duplex mode.",
        "is_correct": false
      },
      {
        "text": "The switch ports have to be configured as access ports with each port having a VLAN assigned.​",
        "is_correct": false
      },
      {
        "text": "The EtherChannel was not configured with the same allowed range of VLANs on each interface.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 6.2.1",
    "topic": "Topic 6.2.1",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q51",
    "original_num": 51,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "When EtherChannel is configured, which mode will force an interface into a port channel without exchanging aggregation protocol packets?",
    "images": [],
    "options": [
      {
        "text": "active",
        "is_correct": false
      },
      {
        "text": "auto",
        "is_correct": false
      },
      {
        "text": "on",
        "is_correct": true
      },
      {
        "text": "desirable",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.1.6\nFor both LACP and PAgP, the \"on\" mode will force an interface into an EtherChannel without exchanging protocol packets.",
    "topic": "Topic 6.1.6",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m5-6_q52",
    "original_num": 52,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "What are two load-balancing methods in the EtherChannel technology? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "combination of source port and IP to destination port and IP",
        "is_correct": false
      },
      {
        "text": "source IP to destination IP",
        "is_correct": true
      },
      {
        "text": "source port to destination port",
        "is_correct": false
      },
      {
        "text": "combination of source MAC and IP to destination MAC and IP",
        "is_correct": false
      },
      {
        "text": "source MAC to destination MAC",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 6.1.3\nDepending on the hardware platform, one or more load-balancing methods can be implemented. These methods include source MAC to destination MAC load balancing or source IP to destination IP load balancing, across the physical links.",
    "topic": "Topic 6.1.3",
    "module": 6,
    "type": "multiple"
  },
  {
    "id": "m5-6_q53",
    "original_num": 53,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which protocol provides up to 16 instances of RSTP, combines many VLANs with the same physical and logical topology into a common RSTP instance, and provides support for PortFast, BPDU guard, BPDU filter, root guard, and loop guard?",
    "images": [],
    "options": [
      {
        "text": "STP",
        "is_correct": false
      },
      {
        "text": "Rapid PVST+",
        "is_correct": false
      },
      {
        "text": "PVST+",
        "is_correct": false
      },
      {
        "text": "MST",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 5.3.1\nMST is the Cisco implementation of MSTP, an IEEE standard protocol that provides up to 16 instances of RSTP and combines many VLANs with the same physical and logical topology into a common RSTP instance. Each instance supports PortFast, BPDU guard, BPDU filter, root guard, and loop guard. STP and RSTP assume only one spanning-tree instance for the entire bridged network, regardless of the number of VLANs. PVST+ provides a separate 802.1D spanning-tree instance for each VLAN that is configured in the network.",
    "topic": "Topic 5.3.1",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q54",
    "original_num": 54,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "What is the outcome of a Layer 2 broadcast storm?",
    "images": [],
    "options": [
      {
        "text": "Routers will take over the forwarding of frames as switches become congested.",
        "is_correct": false
      },
      {
        "text": "New traffic is discarded by the switch because it is unable to be processed.",
        "is_correct": true
      },
      {
        "text": "CSMA/CD will cause each host to continue transmitting frames.",
        "is_correct": false
      },
      {
        "text": "ARP broadcast requests are returned to the transmitting host.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.1.6\nWhen the network is saturated with broadcast traffic that is looping between switches, new traffic is discarded by each switch because it is unable to be processed.",
    "topic": "Topic 5.1.6",
    "module": 5,
    "type": "single"
  },
  {
    "id": "m5-6_q55",
    "original_num": 55,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "Which two network design features require Spanning Tree Protocol (STP) to ensure correct network operation? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "static default routes",
        "is_correct": false
      },
      {
        "text": "implementing VLANs to contain broadcasts",
        "is_correct": false
      },
      {
        "text": "redundant links between Layer 2 switches",
        "is_correct": true
      },
      {
        "text": "link-state dynamic routing that provides redundant routes",
        "is_correct": false
      },
      {
        "text": "removing single points of failure with multiple Layer 2 switches",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 5.1.1\nSpanning Tree Protocol (STP) is required to ensure correct network operation when designing a network with multiple interconnected Layer 2 switches or using redundant links to eliminate single points of failure between Layer 2 switches. Routing is a Layer 3 function and does not relate to STP. VLANs do reduce the number of broadcast domains but relate to Layer 3 subnets, not STP.",
    "topic": "Topic 5.1.1",
    "module": 5,
    "type": "multiple"
  },
  {
    "id": "m5-6_q56",
    "original_num": 56,
    "source_group": "m5-6",
    "source_title": "Modules 5 - 6: Redundant Networks",
    "question": "A network administrator has configured an EtherChannel between two switches that are connected via four trunk links. If the physical interface for one of the trunk links changes to a down state, what happens to the EtherChannel?",
    "images": [],
    "options": [
      {
        "text": "Spanning Tree Protocol will transition the failed physical interface into forwarding mode.",
        "is_correct": false
      },
      {
        "text": "Spanning Tree Protocol will recalculate the remaining trunk links.",
        "is_correct": false
      },
      {
        "text": "The EtherChannel will transition to a down state.",
        "is_correct": false
      },
      {
        "text": "The EtherChannel will remain functional.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 6.1.3\nEtherChannel offers redundancy by bundling multiple trunk links into one logical connection. Failure of one physical link within the EtherChannel will not create a change in the topology and therefore a recalculation by Spanning Tree is unnecessary. Just one physical link must remain operational for the EtherChannel to continue to function.",
    "topic": "Topic 6.1.3",
    "module": 6,
    "type": "single"
  },
  {
    "id": "m7-9_q1",
    "original_num": 1,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "A DHCP-enabled client PC has just booted. During which two steps will the client PC use broadcast messages when communicating with a DHCP server? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "DHCPDISCOVER",
        "is_correct": true
      },
      {
        "text": "DHCPACK",
        "is_correct": false
      },
      {
        "text": "DHCPOFFER",
        "is_correct": false
      },
      {
        "text": "DHCPREQUEST",
        "is_correct": true
      },
      {
        "text": "DHCPNAK",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.3\nAll DHCP messages between a DHCP-enabled client and a DHCP server are using broadcast messages until after the DHCPACK message. The DHCPDISCOVER and DHCPREQUEST messages are the only messages that are sent by a DHCP-enabled client. All DHCP messages between a DHCP-enabled client and a DHCP server use broadcast messages when the client is obtaining a lease for the first time.",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "multiple"
  },
  {
    "id": "m7-9_q2",
    "original_num": 2,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "An administrator issues the commands:\nRouter(config)# interface g0/1\nRouter(config-if)# ip address dhcp\nWhat is the administrator trying to achieve?",
    "images": [],
    "options": [
      {
        "text": "configuring the router to act as a DHCPv4 server",
        "is_correct": false
      },
      {
        "text": "configuring the router to obtain IP parameters from a DHCPv4 server",
        "is_correct": true
      },
      {
        "text": "configuring the router to act as a relay agent",
        "is_correct": false
      },
      {
        "text": "configuring the router to resolve IP address conflicts",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.3.1",
    "topic": "Topic 7.3.1",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q3",
    "original_num": 3,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "When a client is requesting an initial address lease from a DHCP server, why is the DHCPREQUEST message sent as a broadcast?",
    "images": [],
    "options": [
      {
        "text": "The client does not yet know the IP address of the DHCP server that sent the offer.",
        "is_correct": false
      },
      {
        "text": "The DHCP server may be on a different subnet, so the request must be sent as a broadcast.",
        "is_correct": false
      },
      {
        "text": "The client does not have a MAC address assigned yet, so it cannot send a unicast message at Layer 2.",
        "is_correct": false
      },
      {
        "text": "The client may have received offers from multiple servers, and the broadcast serves to implicitly decline those other offers.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 7.1.3\nDuring the initial DHCP exchange between a client and server, the client broadcasts a DHCPDISCOVER message looking for DHCP servers. Multiple servers may be configured to respond to this request with DHCPOFFER messages. The client will choose the lease from one of the servers by sending a DHCPREQUEST message. It sends this message as a broadcast so that the other DHCP servers that sent offers will know that their offers were declined and the corresponding address can go back into the pool.",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q4",
    "original_num": 4,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which DHCP IPv4 message contains the following information?\nDestination address: 255.255.255.255\nClient IPv4 address: 0.0.0.0\nDefault gateway address: 0.0.0.0\nSubnet mask: 0.0.0.0",
    "images": [],
    "options": [
      {
        "text": "DHCPACK",
        "is_correct": false
      },
      {
        "text": "DHCPDISCOVER",
        "is_correct": true
      },
      {
        "text": "DHCPOFFER",
        "is_correct": false
      },
      {
        "text": "DHCPREQUEST",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.3",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q5",
    "original_num": 5,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Place the options in the following order:",
    "images": [],
    "options": [
      {
        "text": "a client initiating a message to find a DHCP server - DHCPDISCOVER",
        "is_correct": false
      },
      {
        "text": "a DHCP server responding to the initial request by a client - DHCPOFFER",
        "is_correct": false
      },
      {
        "text": "the client accepting the IP address provided by the DHCP server - DHCPREQUEST",
        "is_correct": false
      },
      {
        "text": "the DHCP server confirming that the lease has been accepted - DHCPACK",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.3",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q6",
    "original_num": 6,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which protocol automates assignment of IP addresses on a network, and which port number does it use? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "DHCP",
        "is_correct": true
      },
      {
        "text": "DNS",
        "is_correct": false
      },
      {
        "text": "SMB",
        "is_correct": false
      },
      {
        "text": "53",
        "is_correct": false
      },
      {
        "text": "67",
        "is_correct": true
      },
      {
        "text": "80",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.1\nDNS uses port 53 and translates URLs to IP addresses. SMB provides shared access to files and printers and uses port 445. Port 80 is used by HTTP. HTTP is a protocol used to communicate between a web browser and a server.",
    "topic": "Topic 7.1.1",
    "module": 7,
    "type": "multiple"
  },
  {
    "id": "m7-9_q7",
    "original_num": 7,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Refer to the exhibit. PC1 is configured to obtain a dynamic IP address from the DHCP server. PC1 has been shut down for two weeks. When PC1 boots and tries to request an available IP address, which destination IP address will PC1 place in the IP header?",
    "images": [
      "images/m7-9_q7_0.png"
    ],
    "options": [
      {
        "text": "192.168.1.1",
        "is_correct": false
      },
      {
        "text": "192.168.1.255",
        "is_correct": false
      },
      {
        "text": "255.255.255.255",
        "is_correct": true
      },
      {
        "text": "192.168.1.8",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.3\nWhen a host boots and has been configured for dynamic IP addressing, the device tries to obtain a valid IP address. It sends a DHCPDISCOVER message. This is a broadcast message because the DHCP server address is unknown (by design). The destination IP address in the IP header is 255.255.255.255 and the destination MAC address is FF:FF:FF:FF:FF:FF.",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q8",
    "original_num": 8,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which message does an IPv4 host use to reply when it receives a DHCPOFFER message from a DHCP server?",
    "images": [],
    "options": [
      {
        "text": "DHCPOFFER",
        "is_correct": false
      },
      {
        "text": "DHCPDISCOVER",
        "is_correct": false
      },
      {
        "text": "DHCPREQUEST",
        "is_correct": true
      },
      {
        "text": "DHCPACK",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.3\nWhen the client receives the DHCPOFFER from the server, it sends back a DHCPREQUEST broadcast message. On receiving the DHCPREQUEST message, the server replies with a unicast DHCPACK message.",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q9",
    "original_num": 9,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which command, when issued in the interface configuration mode of a router, enables the interface to acquire an IPv4 address automatically from an ISP, when that link to the ISP is enabled?",
    "images": [],
    "options": [
      {
        "text": "service dhcp",
        "is_correct": false
      },
      {
        "text": "ip address dhcp",
        "is_correct": true
      },
      {
        "text": "ip helper-address",
        "is_correct": false
      },
      {
        "text": "ip dhcp pool",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.3.1\nThe ip address dhcp interface configuration command configures an Ethernet interface as a DHCP client. The service dhcp global configuration command enables the DHCPv4 server process on the router. The ip helper-address command is issued to enable DHCP relay on the router. The ip dhcp pool command creates the name of a pool of addresses that the server can assign to hosts.",
    "topic": "Topic 7.3.1",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q10",
    "original_num": 10,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which kind of message is sent by a DHCP client when its IP address lease has expired?​",
    "images": [],
    "options": [
      {
        "text": "a DHCPDISCOVER unicast message​",
        "is_correct": false
      },
      {
        "text": "a DHCPREQUEST broadcast message​",
        "is_correct": false
      },
      {
        "text": "a DHCPREQUEST unicast message​",
        "is_correct": true
      },
      {
        "text": "a DHCPDISCOVER broadcast message",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.4\nWhen the IP address lease time of the DHCP client expires, it sends a DHCPREQUEST unicast message directly to the DHCPv4 server that originally offered the IPv4 address.",
    "topic": "Topic 7.1.4",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q11",
    "original_num": 11,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "A host PC is attempting to lease an address through DHCP. What message is sent by the server to let the client know it is able to use the provided IP information?",
    "images": [],
    "options": [
      {
        "text": "DHCPDISCOVER",
        "is_correct": false
      },
      {
        "text": "DHCPOFFER",
        "is_correct": false
      },
      {
        "text": "DHCPREQUEST",
        "is_correct": false
      },
      {
        "text": "DHCPACK",
        "is_correct": true
      },
      {
        "text": "DHCPNACK",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.3\nWhen a host uses DHCP to automatically configure an IP address, the typically sends two messages: the DHCPDISCOVER message and the DHCPREQUEST message. These two messages are usually sent as broadcasts to ensure that all DHCP servers receive them. The servers respond to these messages using DHCPOFFER, DHCPACK, and DHCPNACK messages, depending on the circumstance.",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q12",
    "original_num": 12,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "What is one indication that a Windows computer did not receive an IPv4 address from a DHCP server?",
    "images": [],
    "options": [
      {
        "text": "The computer cannot ping 127.0.0.1.",
        "is_correct": false
      },
      {
        "text": "The computer receives an IP address that starts with 169.254.",
        "is_correct": true
      },
      {
        "text": "Windows displays a DHCP timeout message.",
        "is_correct": false
      },
      {
        "text": "The computer cannot ping other devices on the same network with IP addresses in the 169.254.0.0/16 range.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.1.2\nWhen a Windows PC cannot communicate with an IPv4 DHCP server, the computer automatically assigns an IP address in the 169.254.0.0/16 range. Any other device on the same network that receives an address in the same range is reachable.​",
    "topic": "Topic 8.1.2",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q13",
    "original_num": 13,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which DHCPv4 message will a client send to accept an IPv4 address that is offered by a DHCP server?",
    "images": [],
    "options": [
      {
        "text": "broadcast DHCPACK",
        "is_correct": false
      },
      {
        "text": "broadcast DHCPREQUEST",
        "is_correct": true
      },
      {
        "text": "unicast DHCPACK",
        "is_correct": false
      },
      {
        "text": "unicast DHCPREQUEST",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.3\nWhen a DHCP client receives DHCPOFFER messages, it will send a broadcast DHCPREQUEST message for two purposes. First, it indicates to the offering DHCP server that it would like to accept the offer and bind the IP address. Second, it notifies any other responding DHCP servers that their offers are declined.",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q14",
    "original_num": 14,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "A small coffee shop is offering free Wi-Fi to customers. The network includes a wireless router and a DSL modem that is connected to the local phone company. What method is typically used to configure the connection to the phone company?",
    "images": [],
    "options": [
      {
        "text": "Set the WAN connection in the wireless router as a DHCP client.",
        "is_correct": true
      },
      {
        "text": "Set the connection between the wireless router and the DSL modem as a private IP network.",
        "is_correct": false
      },
      {
        "text": "Set the DSL modem as a DHCP client to get a public IP address from the wireless router.",
        "is_correct": false
      },
      {
        "text": "Set the DSL modem as a DHCP client to the phone company and a DHCP server for the internal connection.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.3.3\nIn a SOHO environment, a wireless router connects to an ISP via a DSL or cable modem. The IP address between the wireless router and ISP site is typically assigned by the ISP through DHCP. The DSL modem does not manage IP address allocation.",
    "topic": "Topic 7.3.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q15",
    "original_num": 15,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "A company uses DHCP to manage IP address deployment for employee workstations. The IT department deploys multiple DHCP servers in the data center and uses DHCP relay agents to facilitate the DHCP requests from workstations. Which two UDP ports are used to forward DHCP traffic? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "23",
        "is_correct": false
      },
      {
        "text": "53",
        "is_correct": false
      },
      {
        "text": "67",
        "is_correct": true
      },
      {
        "text": "68",
        "is_correct": true
      },
      {
        "text": "80",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.9\nThe DHCP protocol operates with 2 UDP ports. UDP port 67 is the destination port for DHCP servers, and DHCP clients use UDP port 68.",
    "topic": "Topic 7.2.9",
    "module": 7,
    "type": "multiple"
  },
  {
    "id": "m7-9_q16",
    "original_num": 16,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "A client device on an Ethernet segment needs an IP address in order to communicate on the network. A DHCP server with IP address 192.168.1.1 has been configured and enabled on the network. How will a client device obtain a usable IP address for this network?",
    "images": [],
    "options": [
      {
        "text": "Send a DHCPACK packet to the default gateway address.",
        "is_correct": false
      },
      {
        "text": "Use a statically configured IP address from the pool of IP addresses that is offered by the DHCP server.",
        "is_correct": false
      },
      {
        "text": "Send a DHCPDISCOVER message to physical address FF-FF-FF-FF-FF-FF.",
        "is_correct": true
      },
      {
        "text": "Send a DHCPREQUEST packet to IP address 255.255.255.255.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.3\nLike IP addressing, there is also a special MAC address for broadcast purposes: FF-FF-FF-FF-FF-FF. When a DHCP client needs to send a DHCP Discover message in order to seek DHCP servers, the client will use this MAC address as the destination MAC address in the Ethernet frame. It does this because it has no knowledge of the IP and MAC addresses of DHCP servers.",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q17",
    "original_num": 17,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "What is an advantage of configuring a Cisco router as a relay agent?",
    "images": [],
    "options": [
      {
        "text": "It can provide relay services for multiple UDP services.",
        "is_correct": true
      },
      {
        "text": "It reduces the response time from a DHCP server.",
        "is_correct": false
      },
      {
        "text": "It can forward both broadcast and multicast messages on behalf of clients.",
        "is_correct": false
      },
      {
        "text": "It will allow DHCPDISCOVER messages to pass without alteration.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.9\nBy default, the ip helper-address command forwards the following eight UDP services:\nPort 37: Time\nPort 49: TACACS\nPort 53: DNS\nPort 67: DHCP/BOOTP client\nPort 68: DHCP/BOOTP server\nPort 69: TFTP\nPort 137: NetBIOS name service\nPort 138: NetBIOS datagram service",
    "topic": "Topic 7.2.9",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q18",
    "original_num": 18,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which statement is true about DHCP operation?​",
    "images": [
      "images/m7-9_q18_0.jpg"
    ],
    "options": [
      {
        "text": "When a device that is configured to use DHCP boots, the client broadcasts a DHCPDISCOVER message to identify any available DHCP servers on the network.​",
        "is_correct": true
      },
      {
        "text": "A client must wait for lease expiration before it sends another DHCPREQUEST message.​",
        "is_correct": false
      },
      {
        "text": "If the client receives several DHCPOFFER messages from different servers, it sends a unicast DHCPREQUEST message to the server from which it chooses to obtain the IP information.",
        "is_correct": false
      },
      {
        "text": "The DHCPDISCOVER message contains the IP address and subnet mask to be assigned, the IP address of the DNS server, and the IP address of the default gateway.​",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.3\nThe client broadcasts a DHCPDISCOVER message to identify any available DHCP servers on the network. A DHCP server replies with a DHCPOFFER message. This message offers to the client a lease that contains such information as the IP address and subnet mask to be assigned, the IP address of the DNS server, and the IP address of the default gateway. After the client receives the lease, the received information must be renewed through another DHCPREQUEST message prior to the lease expiration.\n\n19. Order the DHCP message types as they would occur between a DHCP client and a DHCP server.\n\nExplanation: Topic 7.1.3\nThe DHCPDISCOVER message is used to identify any DHCP servers on a network.\nThe DHCPOFFER message is used by a server to offer a lease to a client. The DHCPREQUEST message is used to identify both the specific DHCP server and the lease that the client is accepting.\nThe DHCPACK message is used by a server to finalize a successful lease with a client.\nThe DHCPNAK message is used when an offered lease is no longer valid.",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q20",
    "original_num": 20,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "A network administrator configures a router to send RA messages with M flag as 0 and O flag as 1. Which statement describes the effect of this configuration when a PC tries to configure its IPv6 address?",
    "images": [],
    "options": [
      {
        "text": "It should contact a DHCPv6 server for the prefix, the prefix-length information, and an interface ID that is both random and unique.",
        "is_correct": false
      },
      {
        "text": "It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information.",
        "is_correct": true
      },
      {
        "text": "It should use the information that is contained in the RA message exclusively.",
        "is_correct": false
      },
      {
        "text": "It should contact a DHCPv6 server for all the information that it needs.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.3.2\nICMPv6 RA messages contain two flags to indicate whether a workstation should use SLAAC, a DHCPv6 server, or a combination to configure its IPv6 address. These two flags are M flag and O flag. When both flags are 0 (by default), a client must only use the information in the RA message. When M flag is 0 and O flag is 1, a client should use the information in the RA message and look for the other configuration parameters (such as DNS server addresses) on DHCPv6 servers.",
    "topic": "Topic 8.3.2",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q21",
    "original_num": 21,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Refer to the exhibit. What should be done to allow PC-A to receive an IPv6 address from the DHCPv6 server?",
    "images": [
      "images/m7-9_q21_0.png"
    ],
    "options": [
      {
        "text": "Add the ipv6 dhcp relay command to interface Fa0/0.",
        "is_correct": true
      },
      {
        "text": "Change the ipv6 nd managed-config-flag command to ipv6 nd other-config-flag.",
        "is_correct": false
      },
      {
        "text": "Configure the ipv6 nd managed-config-flag command on interface Fa0/1.",
        "is_correct": false
      },
      {
        "text": "Add the IPv6 address 2001:DB8:1234:5678::10/64 to the interface configuration of the DHCPv6 server.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.4.7\nClient DHCPv6 messages are sent to a multicast address with link-local scope, which means that the messages will not be forwarded by routers. Because the client and server are on different subnets on different interfaces, the message will not reach the server. The router can be configured to relay the DHCPv6 messages from the client to the server by configuring the ipv6 dhcp relay command on the interface that is connected to the client.",
    "topic": "Topic 8.4.7",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q22",
    "original_num": 22,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Refer to the exhibit. A network administrator is implementing the stateless DHCPv6 operation for the company. Clients are configuring IPv6 addresses as expected. However, the clients are not getting the DNS server address and the domain name information configured in the DHCP pool. What could be the cause of the problem?",
    "images": [
      "images/m7-9_q22_0.png"
    ],
    "options": [
      {
        "text": "The DNS server address is not on the same network as the clients are on.",
        "is_correct": false
      },
      {
        "text": "The router is configured for SLAAC operation.",
        "is_correct": true
      },
      {
        "text": "The GigabitEthernet interface is not activated.",
        "is_correct": false
      },
      {
        "text": "The clients cannot communicate with the DHCPv6 server, evidenced by the number of active clients being 0.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.3.3\nThe router is configured for SLAAC operation because there is no configuration command to change the RA M and O flag value. By default, both M and O flags are set to 0. In order to permint stateless DHCPv6 operation, the interface command ipv6 nd other-config-flag should be issued. The GigabitEthernet interface is in working condition because clients can get RA messages and configure their IPv6 addresses as expected. Also, the fact that R1 is the DHCPv6 server and clients are getting RA messages indicates that clients can communicate with the DHCP server. The number of active clients is 0 because the DHCPv6 server does not maintain the state of clients IPv6 addresses (it is not configured for stateful DHCPv6 operation). The DNS server address issue is not relevant to the problem.",
    "topic": "Topic 8.3.3",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q23",
    "original_num": 23,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "A stateless DHCPv6 client sends which message as step 3 in the process?",
    "images": [],
    "options": [
      {
        "text": "DHCPv6 INFORMATION-REQUEST",
        "is_correct": true
      },
      {
        "text": "DHCPv6 SOLICIT",
        "is_correct": false
      },
      {
        "text": "DHCPv6 ADVERTISE",
        "is_correct": false
      },
      {
        "text": "DHCPv6 REPLY",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.3.1",
    "topic": "Topic 8.3.1",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q24",
    "original_num": 24,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "A company uses the SLAAC method to configure IPv6 addresses for the employee workstations. Which address will a client use as its default gateway?​",
    "images": [],
    "options": [
      {
        "text": "the global unicast address of the router interface that is attached to the network",
        "is_correct": false
      },
      {
        "text": "the unique local address of the router interface that is attached to the network",
        "is_correct": false
      },
      {
        "text": "the all-routers multicast address",
        "is_correct": false
      },
      {
        "text": "the link-local address of the router interface that is attached to the network",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 8.2.3\nWhen a PC is configured to use the SLAAC method for configuring IPv6 addresses, it will use the prefix and prefix-length information that is contained in the RA message, combined with a 64-bit interface ID (obtained by using the EUI-64 process or by using a random number that is generated by the client operating system), to form an IPv6 address. It uses the link-local address of the router interface that is attached to the LAN segment as its IPv6 default gateway address.",
    "topic": "Topic 8.2.3",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q25",
    "original_num": 25,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Refer to the exhibit. A network administrator is configuring a router for DHCPv6 operation. Which conclusion can be drawn based on the commands?",
    "images": [
      "images/m7-9_q25_0.png"
    ],
    "options": [
      {
        "text": "The router is configured for stateful DHCPv6 operation, but the DHCP pool configuration is incomplete.",
        "is_correct": false
      },
      {
        "text": "The DHCPv6 server name is ACAD_CLASS.",
        "is_correct": false
      },
      {
        "text": "Clients would configure the interface IDs above 0010.",
        "is_correct": false
      },
      {
        "text": "The router is configured for stateless DHCPv6 operation.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 8.3.3\nThe DHCPv6 is for the stateless DHCPv6 operation that is indicated by changing the O flag to 1 and leaving the M flag as default, which is 0. Therefore, it is not configured for stateful DHCPv6 operation. Although the DNS server has the interface ID 0010, clients in stateless DHCPv6 operation will configure their interface IDs either by EUI-64 or a random number. The ACAD_CLASS is the name of the DHCP pool, not the DHCP server name.",
    "topic": "Topic 8.3.3",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q26",
    "original_num": 26,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "A network administrator is analyzing the features that are supported by different first-hop router redundancy protocols. Which statement describes a feature that is associated with HSRP?",
    "images": [],
    "options": [
      {
        "text": "HSRP uses active and standby routers.",
        "is_correct": true
      },
      {
        "text": "HSRP is nonproprietary.",
        "is_correct": false
      },
      {
        "text": "It allows load balancing between a group of redundant routers.",
        "is_correct": false
      },
      {
        "text": "It uses ICMP messages in order to assign the default gateway to hosts.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 9.2.1\nThe HSRP first-hop router redundancy protocol is Cisco proprietary and supports standby and active devices. VRRPv2 and VRRPv3 are nonproprietary. GLBP is Cisco proprietary and supports load balancing between a group of redundant routers.",
    "topic": "Topic 9.2.1",
    "module": 9,
    "type": "single"
  },
  {
    "id": "m7-9_q27",
    "original_num": 27,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Refer to the exhibit. What protocol can be configured on gateway routers R1 and R2 that will allow traffic from the internal LAN to be load balanced across the two gateways to the Internet?",
    "images": [
      "images/m7-9_q27_0.png"
    ],
    "options": [
      {
        "text": "GLBP",
        "is_correct": true
      },
      {
        "text": "PVST+",
        "is_correct": false
      },
      {
        "text": "PVST",
        "is_correct": false
      },
      {
        "text": "STP",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 9.1.4\nGLBP, or Group Load Balancing Protocol, allows multiple routers to act as a single default gateway for hosts. GLBP load balances the traffic across the individual routers on a per host basis.",
    "topic": "Topic 9.1.4",
    "module": 9,
    "type": "single"
  },
  {
    "id": "m7-9_q28",
    "original_num": 28,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Refer to the exhibit. A network engineer is troubleshooting host connectivity on a LAN that uses a first hop redundancy protocol. Which IPv4 gateway address should be configured on the host?",
    "images": [
      "images/m7-9_q28_0.png"
    ],
    "options": [
      {
        "text": "192.168.2.0",
        "is_correct": false
      },
      {
        "text": "192.168.2.1",
        "is_correct": false
      },
      {
        "text": "192.168.2.2",
        "is_correct": false
      },
      {
        "text": "192.168.2.100",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 9.1.2\nThe host default gateway address should be the FHRP (in this case GLBP) virtual IP address.",
    "topic": "Topic 9.1.2",
    "module": 9,
    "type": "single"
  },
  {
    "id": "m7-9_q29",
    "original_num": 29,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Refer to the exhibit. Which destination MAC address is used when frames are sent from the workstation to the default gateway?",
    "images": [
      "images/m7-9_q29_0.png"
    ],
    "options": [
      {
        "text": "MAC address of the virtual router",
        "is_correct": true
      },
      {
        "text": "MAC address of the standby router",
        "is_correct": false
      },
      {
        "text": "MAC addresses of both the forwarding and standby routers",
        "is_correct": false
      },
      {
        "text": "MAC address of the forwarding router",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 9.1.2\nThe IP address of the virtual router acts as the default gateway for all the workstations. Therefore, the MAC address that is returned by the Address Resolution Protocol to the workstation will be the MAC address of the virtual router.",
    "topic": "Topic 9.1.2",
    "module": 9,
    "type": "single"
  },
  {
    "id": "m7-9_q30",
    "original_num": 30,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which Cisco-proprietary protocol is designed to allow for transparent failover of a first-hop IPv4 device?",
    "images": [],
    "options": [
      {
        "text": "Hot Standby Router Protocol (HSRP)",
        "is_correct": true
      },
      {
        "text": "Virtual Router Redundancy Protocol (VRRP)",
        "is_correct": false
      },
      {
        "text": "Gateway Load Balancing Protocol (GLBP)",
        "is_correct": false
      },
      {
        "text": "First-Hop Redundancy Protocol (FHRP)",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 9.1.4",
    "topic": "Topic 9.1.4",
    "module": 9,
    "type": "single"
  },
  {
    "id": "m7-9_q31",
    "original_num": 31,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which FHRP implementation is a Cisco-proprietary protocol that suppports IPv4 load sharing?",
    "images": [],
    "options": [
      {
        "text": "IRDP",
        "is_correct": false
      },
      {
        "text": "GLBP",
        "is_correct": true
      },
      {
        "text": "VRRPv3",
        "is_correct": false
      },
      {
        "text": "GLBP for IPv6",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 9.1.4",
    "topic": "Topic 9.1.4",
    "module": 9,
    "type": "single"
  },
  {
    "id": "m7-9_q32",
    "original_num": 32,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "The address pool of a DHCP server is configured with 10.92.71.0/25. The network administrator reserves 8 IP addresses for servers. How many IP addresses are left in the pool to be assigned to other hosts?",
    "images": [],
    "options": [
      {
        "text": "122",
        "is_correct": false
      },
      {
        "text": "118",
        "is_correct": true
      },
      {
        "text": "119",
        "is_correct": false
      },
      {
        "text": "108",
        "is_correct": false
      },
      {
        "text": "116",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.2\nCalculate the maximum number of hosts available for the slash value and subtract the required static IP addresses required for the devices.\n/24 = 254 hosts\n/25 = 126 hosts\n/26 = 62 hosts\n/27 = 30 hosts\n/28 = 14 hosts",
    "topic": "Topic 7.2.2",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q33",
    "original_num": 33,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which message does an IPv4 client broadcast to find available DHCPv4 servers on the network?",
    "images": [],
    "options": [
      {
        "text": "DHCPDISCOVER",
        "is_correct": true
      },
      {
        "text": "DHCPOFFER",
        "is_correct": false
      },
      {
        "text": "DHCPREQUEST",
        "is_correct": false
      },
      {
        "text": "DHCPACK",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.3",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q34",
    "original_num": 34,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "After a host has generated an IPv6 address by using the DHCPv6 or SLAAC process, how does the host verify that the address is unique and therefore usable?",
    "images": [],
    "options": [
      {
        "text": "The host sends an ICMPv6 echo request message to the DHCPv6 or SLAAC-learned address and if no reply is returned, the address is considered unique.",
        "is_correct": false
      },
      {
        "text": "The host sends an ICMPv6 neighbor solicitation message to the DHCP or SLAAC-learned address and if no neighbor advertisement is returned, the address is considered unique.",
        "is_correct": true
      },
      {
        "text": "The host checks the local neighbor cache for the learned address and if the address is not cached, it it considered unique.",
        "is_correct": false
      },
      {
        "text": "The host sends an ARP broadcast to the local link and if no hosts send a reply, the address is considered unique.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.2.6\nBefore a host can actually configure and use an IPv6 address learned through SLAAC or DHCP, the host must verify that no other host is already using that address. To verify that the address is indeed unique, the host sends an ICMPv6 neighbor solicitation to the address. If no neighbor advertisement is returned, the host considers the address to be unique and configures it on the interface.",
    "topic": "Topic 8.2.6",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q35",
    "original_num": 35,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which statement describes HSRP?​",
    "images": [],
    "options": [
      {
        "text": "It is used within a group of routers for selecting an active device and a standby device to provide gateway services to a LAN.",
        "is_correct": true
      },
      {
        "text": "It uses ICMP to allow IPv4 hosts to locate routers that provide IPv4 connectivity to remote IP networks.​",
        "is_correct": false
      },
      {
        "text": "If the virtual router master fails, one router is elected as the virtual router master with the other routers acting as backups.",
        "is_correct": false
      },
      {
        "text": "It is an open standard protocol.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 9.1.4\nIt is VRRP that elects one router as the virtual router master, with the other routers acting as backups in case the virtual router master fails. HSRP is a Cisco-proprietary protocol. IRDP uses ICMP messages to allow IPv4 hosts to locate routers that provide IPv4 connectivity to other (nonlocal) IP networks. HSRP selects active and standby routers to provide gateway services to hosts on a LAN.",
    "topic": "Topic 9.1.4",
    "module": 9,
    "type": "single"
  },
  {
    "id": "m7-9_q36",
    "original_num": 36,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. What is the keyword that is displayed on www.netacad.com?",
    "images": [
      "images/m7-9_q36_0.jpg",
      "images/m7-9_q36_1.png",
      "images/m7-9_q36_2.jpg"
    ],
    "options": [
      {
        "text": "DHCP",
        "is_correct": false
      },
      {
        "text": "switch",
        "is_correct": false
      },
      {
        "text": "Router",
        "is_correct": true
      },
      {
        "text": "networking",
        "is_correct": false
      },
      {
        "text": "Cisco",
        "is_correct": false
      },
      {
        "text": "IPv6",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.3.3\nIn order for the host to receive the address of the DNS server, the host must use stateless DHCPv6. The router is configured with the correct DHCPv6 pool, but is missing the command ipv6 nd other-config-flag that signals to the host that it should use DHCPv6 to get additional address information. This command should be added to the interface Gigabit0/0 configuration on the router.\n\n37. Match each DHCP message type with its description. (Not all options are used.)\n\nExplanation: Topic 7.1.3\nPlace the options in the following order:\n\na client initiating a message to find a DHCP server - DHCPDISCOVER\na DHCP server responding to the initial request by a client - DHCPOFFER\nthe client accepting the IP address provided by the DHCP server - DHCPREQUEST\nthe DHCP server confirming that the lease has been accepted - DHCPACK",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q38",
    "original_num": 38,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Match the purpose with its DHCP message type. (Not all options are used.)",
    "images": [
      "images/m7-9_q38_0.webp"
    ],
    "options": [],
    "explanation": "Explanation: Topic 7.1.3\n\n\n\nDHCPREQUEST\nA message that is used to locate any available DHCP server on a network\n\n\nDHCPOFFER\nA message that is used to suggest a lease to a client\n\n\nDHCPDISCOVER\nA message that is used to identify the explicit server and lease offer to accept\n\n\nDHCPNAK\nA message that is used to acknowledge that the lease is successful\n\n\nDHCPACK\nA message is used by a server to finalize a successful lease with a client",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "match",
    "match_data": {
      "left_title": "Mục đích sử dụng (Purpose)",
      "right_title": "Loại thông điệp DHCP (DHCP Message Type)",
      "pairs": [
        {
          "term": "A message that is used to locate any available DHCP server on a network",
          "desc": "DHCPDISCOVER",
          "term_vi": "Thông điệp dùng để định vị/tìm bất kỳ DHCP server nào đang có trên mạng",
          "desc_vi": "DHCPDISCOVER"
        },
        {
          "term": "A message that is used to suggest a lease to a client",
          "desc": "DHCPOFFER",
          "term_vi": "Thông điệp dùng để đề xuất một gói cho thuê địa chỉ IP cho client",
          "desc_vi": "DHCPOFFER"
        },
        {
          "term": "A message that is used to identify the explicit server and lease offer to accept",
          "desc": "DHCPREQUEST",
          "term_vi": "Thông điệp dùng để xác nhận máy chủ cụ thể và lời đề xuất thuê IP được chọn",
          "desc_vi": "DHCPREQUEST"
        },
        {
          "term": "A message that is used to acknowledge that the lease is successful",
          "desc": "DHCPACK",
          "term_vi": "Thông điệp dùng để xác nhận chính thức việc cấp thuê IP thành công",
          "desc_vi": "DHCPACK"
        }
      ],
      "distractors": [
        {
          "term": "A message is used by a server to finalize a successful lease with a client",
          "desc": "DHCPNAK",
          "term_vi": "DHCPNAK"
        }
      ]
    }
  },
  {
    "id": "m7-9_q39",
    "original_num": 39,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Match the DHCP message types to the order of the stateful DHCPv6 process when a client first connects to an IPv6 network. (Not all options are used.)",
    "images": [
      "images/m7-9_q39_0.jpg"
    ],
    "options": [],
    "explanation": "Explanation: Topic 8.3.1",
    "topic": "Topic 8.3.1",
    "module": 8,
    "type": "match",
    "match_data": {
      "left_title": "Thứ tự các bước (Step)",
      "right_title": "Thông điệp Stateful DHCPv6 (DHCPv6 Message)",
      "pairs": [
        {
          "term": "Step 1",
          "desc": "DHCPv6 SOLICIT",
          "term_vi": "Bước 1",
          "desc_vi": "DHCPv6 SOLICIT (Client gửi tìm kiếm server)"
        },
        {
          "term": "Step 2",
          "desc": "DHCPv6 ADVERTISE",
          "term_vi": "Bước 2",
          "desc_vi": "DHCPv6 ADVERTISE (Server phản hồi thông báo dịch vụ)"
        },
        {
          "term": "Step 3",
          "desc": "DHCPv6 REQUEST",
          "term_vi": "Bước 3",
          "desc_vi": "DHCPv6 REQUEST (Client gửi yêu cầu cấu hình)"
        },
        {
          "term": "Step 4",
          "desc": "DHCPv6 REPLY",
          "term_vi": "Bước 4",
          "desc_vi": "DHCPv6 REPLY (Server xác nhận cấp phát thông tin)"
        }
      ],
      "distractors": []
    }
  },
  {
    "id": "m7-9_q40",
    "original_num": 40,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Match the step number to the sequence of stages that occur during the HSRP failover process. (Not all options are used.)",
    "images": [
      "images/m7-9_q40_0.jpg"
    ],
    "options": [],
    "explanation": "Explanation: Topic 9.1.3\nHot Standby Router Protocol (HSRP) is a Cisco-proprietary protocol that is designed to allow for transparent failover of a first-hop IPv4 device.",
    "topic": "Topic 9.1.3",
    "module": 9,
    "type": "match",
    "match_data": {
      "left_title": "Thứ tự chuyển mạch dự phòng (Step)",
      "right_title": "Giai đoạn HSRP Failover (Stage)",
      "pairs": [
        {
          "term": "Step 1",
          "desc": "The forwarding router fails.",
          "term_vi": "Bước 1",
          "desc_vi": "Router chính (forwarding router) bị lỗi/gặp sự cố sập nguồn."
        },
        {
          "term": "Step 2",
          "desc": "The standby router stops seeing hello messages from the forwarding router.",
          "term_vi": "Bước 2",
          "desc_vi": "Router dự phòng (standby router) không còn nhận được các gói tin Hello định kỳ từ router chính."
        },
        {
          "term": "Step 3",
          "desc": "The standby router assumes the role of the forwarding router.",
          "term_vi": "Bước 3",
          "desc_vi": "Router dự phòng tự động đảm nhận vai trò router chuyển tiếp (forwarding router)."
        },
        {
          "term": "Step 4",
          "desc": "The new forwarding router assumes both the IP and MAC addresses of the virtual router.",
          "term_vi": "Bước 4",
          "desc_vi": "Router mới tiếp quản cả địa chỉ IP ảo và địa chỉ MAC ảo của virtual router để chuyển dữ liệu thông suốt."
        }
      ],
      "distractors": []
    }
  },
  {
    "id": "m7-9_q41",
    "original_num": 41,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Match the FHRP protocols to the appropriate description. (Not all options are used.)",
    "images": [
      "images/m7-9_q41_0.webp"
    ],
    "options": [],
    "explanation": "Explanation: Topic 9.1.4",
    "topic": "Topic 9.1.4",
    "module": 9,
    "type": "match",
    "match_data": {
      "left_title": "Giao thức FHRP (Protocol)",
      "right_title": "Đặc điểm mô tả (Description)",
      "pairs": [
        {
          "term": "HSRP",
          "desc": "A Cisco proprietary FHRP that provides redundancy through use of an active device and standby device",
          "term_vi": "HSRP",
          "desc_vi": "Giao thức độc quyền của Cisco cung cấp dự phòng gateway thông qua 1 thiết bị Active và 1 thiết bị Standby."
        },
        {
          "term": "VRRP",
          "desc": "An open standard FHRP that provides redundancy through use of a virtual routers master and one or more backups",
          "term_vi": "VRRP",
          "desc_vi": "Chuẩn mở công nghiệp (RFC) cung cấp dự phòng gateway qua 1 router Master và 1 hoặc nhiều router Backup."
        },
        {
          "term": "GLBP",
          "desc": "A Cisco proprietary FHRP that provides load sharing in addition to redundancy",
          "term_vi": "GLBP",
          "desc_vi": "Giao thức độc quyền của Cisco vừa cung cấp dự phòng vừa hỗ trợ cân bằng tải (Load Sharing) giữa nhiều router."
        }
      ],
      "distractors": []
    }
  },
  {
    "id": "m7-9_q42",
    "original_num": 42,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Match the DHCP message types to the order of the DHCPv4 process. (Not all options are used.)",
    "images": [
      "images/m7-9_q42_0.jpg"
    ],
    "options": [],
    "explanation": "Explanation: Topic 7.1.3\nThe broadcast DHCPDISCOVER message finds DHCPv4 servers on the network. When the DHCPv4 server receives a DHCPDISCOVER message, it reserves an available IPv4 address to lease to the client and sends the unicast DHCPOFFER message to the requesting client. When the client receives the DHCPOFFER from the server, it sends back a DHCPREQUEST. On receiving the DHCPREQUEST message the server replies with a unicast DHCPACK message. DHCPREPLY and DHCPINFORMATION-REQUEST are DHCPv6 messages.",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "match",
    "match_data": {
      "left_title": "Thứ tự quy trình DORA (Step)",
      "right_title": "Thông điệp DHCPv4 (DHCPv4 Message)",
      "pairs": [
        {
          "term": "Step 1",
          "desc": "DHCPDISCOVER",
          "term_vi": "Bước 1 (D - Discover)",
          "desc_vi": "DHCPDISCOVER (Client tìm kiếm server)"
        },
        {
          "term": "Step 2",
          "desc": "DHCPOFFER",
          "term_vi": "Bước 2 (O - Offer)",
          "desc_vi": "DHCPOFFER (Server đề xuất cấu hình IP)"
        },
        {
          "term": "Step 3",
          "desc": "DHCPREQUEST",
          "term_vi": "Bước 3 (R - Request)",
          "desc_vi": "DHCPREQUEST (Client yêu cầu thuê IP)"
        },
        {
          "term": "Step 4",
          "desc": "DHCPACK",
          "term_vi": "Bước 4 (A - Acknowledge)",
          "desc_vi": "DHCPACK (Server xác nhận cấp phát thành công)"
        }
      ],
      "distractors": []
    }
  },
  {
    "id": "m7-9_q43",
    "original_num": 43,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "The address pool of a DHCP server is configured with 192.168.234.0/27. The network administrator reserves 22 IP addresses for IP phones. How many IP addresses are left in the pool to be assigned to other hosts?",
    "images": [],
    "options": [
      {
        "text": "10",
        "is_correct": false
      },
      {
        "text": "0",
        "is_correct": false
      },
      {
        "text": "8",
        "is_correct": true
      },
      {
        "text": "21",
        "is_correct": false
      },
      {
        "text": "18",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.2\nCalculate the maximum number of hosts available for the slash value and subtract the required static IP addresses required for the devices.\n/24 = 254 hosts\n/25 = 126 hosts\n/26 = 62 hosts\n/27 = 30 hosts\n/28 = 14 hosts",
    "topic": "Topic 7.2.2",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q44",
    "original_num": 44,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "A company uses DHCP servers to dynamically assign IPv4 addresses to employee workstations. The address lease duration is set as 5 days. An employee returns to the office after an absence of one week. When the employee boots the workstation, it sends a message to obtain an IP address. Which Layer 2 and Layer 3 destination addresses will the message contain?",
    "images": [],
    "options": [
      {
        "text": "both MAC and IPv4 addresses of the DHCP server",
        "is_correct": false
      },
      {
        "text": "FF-FF-FF-FF-FF-FF and IPv4 address of the DHCP server",
        "is_correct": false
      },
      {
        "text": "FF-FF-FF-FF-FF-FF and 255.255.255.255",
        "is_correct": true
      },
      {
        "text": "MAC address of the DHCP server and 255.255.255.255",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.1.3\nWhen the lease of a dynamically assigned IPv4 address has expired, a workstation will send a DHCPDISCOVER message to start the process of obtaining a valid IP address. Because the workstation does not know the addresses of DHCP servers, it sends the message via broadcast, with destination addresses of FF-FF-FF-FF-FF-FF and 255.255.255.255.",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q45",
    "original_num": 45,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which command will allow a network administrator to check the IP address that is assigned to a particular MAC address?",
    "images": [],
    "options": [
      {
        "text": "Router# show running-config I section_dhcp",
        "is_correct": false
      },
      {
        "text": "Router# show ip dhcp server statistics",
        "is_correct": false
      },
      {
        "text": "Router# show ip dhcp binding",
        "is_correct": true
      },
      {
        "text": "Router# show ip dhcp pool",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.4\nThe show ip dhcp binding command will show the leases, including IP addresses, MAC addresses, lease expiration, type of lease, client ID, and user name.",
    "topic": "Topic 7.2.4",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q46",
    "original_num": 46,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "What is the reason that an ISP commonly assigns a DHCP address to a wireless router in a SOHO environment?",
    "images": [],
    "options": [
      {
        "text": "better network performance",
        "is_correct": false
      },
      {
        "text": "better connectivity",
        "is_correct": false
      },
      {
        "text": "easy IP address management",
        "is_correct": true
      },
      {
        "text": "easy configuration on ISP firewall",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.3.3\nIn a SOHO environment, a wireless router connects to the ISP via a DSL or cable modem. The IP address between the wireless router and ISP site is typically assigned by the ISP through DHCP. This method facilitates the IP addressing management in that IP addresses for clients are dynamically assigned so that if a client is dropped, the assigned IP address can be easily reassigned to another client.",
    "topic": "Topic 7.3.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q47",
    "original_num": 47,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "What information can be verified through the show ip dhcp binding command?",
    "images": [],
    "options": [
      {
        "text": "the IPv4 addresses that are assigned to hosts by the DHCP server",
        "is_correct": true
      },
      {
        "text": "that DHCPv4 discover messages are still being received by the DHCP server",
        "is_correct": false
      },
      {
        "text": "the IPv4 addresses that have been excluded from the DHCPv4 pool",
        "is_correct": false
      },
      {
        "text": "the number of IP addresses remaining in the DHCP pool",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.4\nThe show ip dhcp binding command shows a list of IPv4 addresses and the MAC addresses of the hosts to which they are assigned. Using this information an administrator can determine which host interfaces have been assigned to specific hosts.",
    "topic": "Topic 7.2.4",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q48",
    "original_num": 48,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "What is the result of a network technician issuing the command ip dhcp excluded-address 10.0.15.1 10.0.15.15 on a Cisco router?",
    "images": [],
    "options": [
      {
        "text": "The Cisco router will exclude only the 10.0.15.1 and 10.0.15.15 IP addresses from being leased to DHCP clients.",
        "is_correct": false
      },
      {
        "text": "The Cisco router will exclude 15 IP addresses from being leased to DHCP clients.",
        "is_correct": true
      },
      {
        "text": "The Cisco router will automatically create a DHCP pool using a /28 mask.",
        "is_correct": false
      },
      {
        "text": "The Cisco router will allow only the specified IP addresses to be leased to clients.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.2\nThe ip dhcp excluded-address command is followed by the first and the last addresses to be excluded from being leased to DHCP clients.",
    "topic": "Topic 7.2.2",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q49",
    "original_num": 49,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Match the descriptions to the corresponding DHCPv6 server type. (Not all options are used.)",
    "images": [
      "images/m7-9_q49_0.jpg"
    ],
    "options": [],
    "explanation": "Explanation: Topic 8.1.3",
    "topic": "Topic 8.1.3",
    "module": 8,
    "type": "match",
    "match_data": {
      "left_title": "Đặc điểm cấu hình (Configuration)",
      "right_title": "Loại DHCPv6 (DHCPv6 Server Type)",
      "pairs": [
        {
          "term": "enabled in RA messages with the ipv6 nd other-config-flag command",
          "desc": "Stateless DHCPv6",
          "term_vi": "Kích hoạt trong bản tin RA bằng lệnh 'ipv6 nd other-config-flag'",
          "desc_vi": "Stateless DHCPv6 (Chỉ cấp DNS, domain; IP tự sinh qua SLAAC)"
        },
        {
          "term": "clients send only DHCPv6 INFORMATION-REQUEST messages to the server",
          "desc": "Stateless DHCPv6",
          "term_vi": "Client chỉ gửi thông điệp DHCPv6 INFORMATION-REQUEST tới server",
          "desc_vi": "Stateless DHCPv6"
        },
        {
          "term": "the M flag is set to 1 in RA messages",
          "desc": "Stateful DHCPv6",
          "term_vi": "Cờ M (Managed Address Config) được gán bằng 1 trong bản tin RA",
          "desc_vi": "Stateful DHCPv6 (Server quản lý và cấp phát toàn bộ địa chỉ IP)"
        },
        {
          "term": "uses the address command to create a pool of addresses for clients",
          "desc": "Stateful DHCPv6",
          "term_vi": "Sử dụng lệnh 'address' trong DHCP pool để cấp dải IP cho client",
          "desc_vi": "Stateful DHCPv6"
        }
      ],
      "distractors": []
    }
  },
  {
    "id": "m7-9_q50",
    "original_num": 50,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Refer to the exhibit. Based on the output that is shown, what kind of IPv6 addressing is being configured?",
    "images": [
      "images/m7-9_q50_0.png"
    ],
    "options": [
      {
        "text": "stateless DHCPv6",
        "is_correct": true
      },
      {
        "text": "SLAAC",
        "is_correct": false
      },
      {
        "text": "static link-local",
        "is_correct": false
      },
      {
        "text": "stateful DHCPv6",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.4.2\nStateful DHCPv6 pools are configured with address prefixes for hosts via the address command, whereas stateless DHCPv6 pools typically only contain information such as DNS server addresses and the domain name. RA messages that are sent from routers that are configured as stateful DHCPv6 servers have the M flag set to 1 with the command ipv6 nd managed-config-flag, whereas stateless DHCPv6 servers are indicated by setting the O flag to 1 with the ipv6 nd other-config-flag command.",
    "topic": "Topic 8.4.2",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q51",
    "original_num": 51,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which FHRP implementation is a Cisco-proprietary protocol that suppports IPv6 load balancing?",
    "images": [],
    "options": [
      {
        "text": "GLBP",
        "is_correct": false
      },
      {
        "text": "GLBP for IPv6",
        "is_correct": true
      },
      {
        "text": "VRRPv3",
        "is_correct": false
      },
      {
        "text": "VRRPv2",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 9.1.4",
    "topic": "Topic 9.1.4",
    "module": 9,
    "type": "single"
  },
  {
    "id": "m7-9_q52",
    "original_num": 52,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which set of commands will configure a router as a DHCP server that will assign IPv4 addresses to the 192.168.100.0/23 LAN while reserving the first 10 and the last addresses for static assignment?",
    "images": [],
    "options": [
      {
        "text": "ip dhcp excluded-address 192.168.100.1 192.168.100.10\nip dhcp excluded-address 192.168.101.254\nip dhcp pool LAN-POOL-100\nnetwork 192.168.100.0 255.255.254.0\ndefault-router 192.168.100.1",
        "is_correct": true
      },
      {
        "text": "ip dhcp excluded-address 192.168.100.1 192.168.100.9\nip dhcp excluded-address 192.168.101.254\nip dhcp pool LAN-POOL-100\nip network 192.168.100.0 255.255.254.0\nip default-gateway 192.168.100.1",
        "is_correct": false
      },
      {
        "text": "dhcp pool LAN-POOL-100\nip dhcp excluded-address 192.168.100.1 192.168.100.9\nip dhcp excluded-address 192.168.100.254\nnetwork 192.168.100.0 255.255.254.0\ndefault-router 192.168.101.1",
        "is_correct": false
      },
      {
        "text": "ip dhcp excluded-address 192.168.100.1 192.168.100.10\nip dhcp excluded-address 192.168.100.254\nip dhcp pool LAN-POOL-100\nnetwork 192.168.100.0 255.255.255.0\nip default-gateway 192.168.100.1",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.2\nThe /23 prefix is equivalent to a network mask of 255.255.254.0. The network usable IPv4 address range is 192.168.100.1 to 192.168.101.254 inclusive. The commands dhcp pool, ip default-gateway, and ip network are not valid DHCP configuration commands.",
    "topic": "Topic 7.2.2",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q53",
    "original_num": 53,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "What is a result when the DHCP servers are not operational in a network?",
    "images": [],
    "options": [
      {
        "text": "Workstations are assigned with the IP address 127.0.0.1.",
        "is_correct": false
      },
      {
        "text": "Workstations are assigned with IP addresses in the 10.0.0.0/8 network.",
        "is_correct": false
      },
      {
        "text": "Workstations are assigned with IP addresses in the 169.254.0.0/16 network.",
        "is_correct": true
      },
      {
        "text": "Workstations are assigned with the IP address 0.0.0.0.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.1.2\nWhen workstations are configured with obtaining IP address automatically but DHCP servers are not available to respond to the requests, a workstation can assign itself an IP addresses from the 169.254.0.0/16 network.",
    "topic": "Topic 8.1.2",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q54",
    "original_num": 54,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "A company uses the method SLAAC to configure IPv6 addresses for the workstations of the employees. A network administrator configured the IPv6 address on the LAN interface of the router. The interface status is UP. However, the workstations on the LAN segment did not obtain the correct prefix and prefix length. What else should be configured on the router that is attached to the LAN segment for the workstations to obtain the information?",
    "images": [],
    "options": [
      {
        "text": "R1(config)# ipv6 unicast-routing",
        "is_correct": true
      },
      {
        "text": "R1(config)# ipv6 dhcp pool",
        "is_correct": false
      },
      {
        "text": "R1(config-if)# ipv6 enable",
        "is_correct": false
      },
      {
        "text": "R1(config-if)# ipv6 nd other-config-flag",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.2.3\nA PC that is configured to use the SLAAC method obtains the IPv6 prefix and prefix length from a router. When the PC boots, it sends an RS message to inform the routers that it needs the information. A router sends an RA message that includes the required information. For a router to be able to send RA messages, it must be enabled as an IPv6 router by the unicast ipv6-routing command in global configuration mode. The other options are not used to enable IPv6 routing on a router.",
    "topic": "Topic 8.2.3",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q55",
    "original_num": 55,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which FHRP implementation is a nonproprietary protocol which relies on ICMP to provide IPv4 redundancy?",
    "images": [],
    "options": [
      {
        "text": "VRRPv3",
        "is_correct": false
      },
      {
        "text": "GLBP for IPv6",
        "is_correct": false
      },
      {
        "text": "IRDP",
        "is_correct": true
      },
      {
        "text": "GLBP",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 9.1.4",
    "topic": "Topic 9.1.4",
    "module": 9,
    "type": "single"
  },
  {
    "id": "m7-9_q56",
    "original_num": 56,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Refer to the exhibit. PC-A is unable to receive an IPv6 address from the stateful DHCPv6 server. What is the problem?",
    "images": [
      "images/m7-9_q56_0.png"
    ],
    "options": [
      {
        "text": "The ipv6 dhcp relay command should be applied to interface Gig0/0.",
        "is_correct": true
      },
      {
        "text": "The ipv6 nd managed-config-flag should be applied to interface Gig0/1.",
        "is_correct": false
      },
      {
        "text": "The ipv6 dhcp relay command should use the link-local address of the DHCP server.",
        "is_correct": false
      },
      {
        "text": "The ipv6 nd managed-config-flag command should be ipv6 nd other-config-flag .",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.4.7\nThe ipv6 dhcp relay command must be applied to the interface where the clients are located. The ipv6 dhcp relay command can use either the link-local or global unicast address of the DHCPv6 server, or even a multicast address. The ipv6 nd managed-config-flag indicates to the clients that they should use stateful DHCPv6 and is also applied to the interface where the clients are located.",
    "topic": "Topic 8.4.7",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q57",
    "original_num": 57,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Refer to the exhibit. A network administrator is configuring a router as a DHCPv6 server. The administrator issues a show ipv6 dhcp pool command to verify the configuration. Which statement explains the reason that the number of active clients is 0?",
    "images": [
      "images/m7-9_q57_0.jpg"
    ],
    "options": [
      {
        "text": "The default gateway address is not provided in the pool.",
        "is_correct": false
      },
      {
        "text": "No clients have communicated with the DHCPv6 server yet.",
        "is_correct": false
      },
      {
        "text": "The IPv6 DHCP pool configuration has no IPv6 address range specified.",
        "is_correct": false
      },
      {
        "text": "The state is not maintained by the DHCPv6 server under stateless DHCPv6 operation.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 8.3.2\nUnder the stateless DHCPv6 configuration, indicated by the command ipv6 nd other-config-flag, the DHCPv6 server does not maintain the state information, because client IPv6 addresses are not managed by the DHCP server. Because the clients will configure their IPv6 addresses by combining the prefix/prefix-length and a self-generated interface ID, the ipv6 dhcp pool configuration does not need to specify the valid IPv6 address range. And because clients will use the link-local address of the router interface as the default gateway address, the default gateway address is not necessary.",
    "topic": "Topic 8.3.2",
    "module": 8,
    "type": "single"
  },
  {
    "id": "m7-9_q58",
    "original_num": 58,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which FHRP implementation is Cisco-proprietary and permits only one router in a group to forward IPv6 packets?",
    "images": [],
    "options": [
      {
        "text": "VRRPv3",
        "is_correct": false
      },
      {
        "text": "HSRP",
        "is_correct": false
      },
      {
        "text": "HSRP for IPv6",
        "is_correct": true
      },
      {
        "text": "VRRPv2",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 9.1.4",
    "topic": "Topic 9.1.4",
    "module": 9,
    "type": "single"
  },
  {
    "id": "m7-9_q59",
    "original_num": 59,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which FHRP implementation is a nonproprietary IPv4-only election protocol which has one master router per group?",
    "images": [],
    "options": [
      {
        "text": "HSRP for IPv6",
        "is_correct": false
      },
      {
        "text": "GLBP",
        "is_correct": false
      },
      {
        "text": "VRRPv2",
        "is_correct": true
      },
      {
        "text": "VRRPv3",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 9.1.4",
    "topic": "Topic 9.1.4",
    "module": 9,
    "type": "single"
  },
  {
    "id": "m7-9_q60",
    "original_num": 60,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "The address pool of a DHCP server is configured with 172.18.93.0/25. The network administrator reserves 10 IP addresses for web servers. How many IP addresses are left in the pool to be assigned to other hosts?",
    "images": [],
    "options": [
      {
        "text": "106",
        "is_correct": false
      },
      {
        "text": "117",
        "is_correct": false
      },
      {
        "text": "114",
        "is_correct": false
      },
      {
        "text": "120",
        "is_correct": false
      },
      {
        "text": "116",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 7.2.2\nCalculate the maximum number of hosts available for the slash value and subtract the required static IP addresses required for the devices.\n/24 = 254 hosts\n/25 = 126 hosts\n/26 = 62 hosts\n/27 = 30 hosts\n/28 = 14 hosts",
    "topic": "Topic 7.2.2",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q61",
    "original_num": 61,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "The address pool of a DHCP server is configured with 10.3.2.0/24. The network administrator reserves 3 IP addresses for printers. How many IP addresses are left in the pool to be assigned to other hosts?",
    "images": [],
    "options": [
      {
        "text": "252",
        "is_correct": false
      },
      {
        "text": "241",
        "is_correct": false
      },
      {
        "text": "255",
        "is_correct": false
      },
      {
        "text": "249",
        "is_correct": false
      },
      {
        "text": "251",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 7.2.2\nCIDR Subnet Calculator Online",
    "topic": "Topic 7.2.2",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q62",
    "original_num": 62,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "The address pool of a DHCP server is configured with 172.23.143.0/26. The network administrator reserves 14 IP addresses for file servers. How many IP addresses are left in the pool to be assigned to other hosts?",
    "images": [],
    "options": [
      {
        "text": "58",
        "is_correct": false
      },
      {
        "text": "48",
        "is_correct": true
      },
      {
        "text": "50",
        "is_correct": false
      },
      {
        "text": "61",
        "is_correct": false
      },
      {
        "text": "40",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.2",
    "topic": "Topic 7.2.2",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q63",
    "original_num": 63,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "The address pool of a DHCP server is configured with 10.7.30.0/24. The network administrator reserves 5 IP addresses for printers. How many IP addresses are left in the pool to be assigned to other hosts?",
    "images": [],
    "options": [
      {
        "text": "253",
        "is_correct": false
      },
      {
        "text": "239",
        "is_correct": false
      },
      {
        "text": "249",
        "is_correct": true
      },
      {
        "text": "250",
        "is_correct": false
      },
      {
        "text": "247",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.2\nCalculate the maximum number of hosts available for the slash value and subtract the required static IP addresses required for the devices.\n/24 = 254 hosts\n/25 = 126 hosts\n/26 = 62 hosts\n/27 = 30 hosts\n/28 = 14 hosts",
    "topic": "Topic 7.2.2",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q64",
    "original_num": 64,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which FHRP implementation is a nonproprietary IPv4-only election protocol with limited scalability?",
    "images": [],
    "options": [
      {
        "text": "VRRPv2",
        "is_correct": true
      },
      {
        "text": "GLBP",
        "is_correct": false
      },
      {
        "text": "GLBP for IPv6",
        "is_correct": false
      },
      {
        "text": "IRDP",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 9.1.4",
    "topic": "Topic 9.1.4",
    "module": 9,
    "type": "single"
  },
  {
    "id": "m7-9_q65",
    "original_num": 65,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "The address pool of a DHCP server is configured with 192.168.184.0/26. The network administrator reserves 18 IP addresses for access points. How many IP addresses are left in the pool to be assigned to other hosts?",
    "images": [],
    "options": [
      {
        "text": "57",
        "is_correct": false
      },
      {
        "text": "44",
        "is_correct": true
      },
      {
        "text": "54",
        "is_correct": false
      },
      {
        "text": "36",
        "is_correct": false
      },
      {
        "text": "46",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.2",
    "topic": "Topic 7.2.2",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q66",
    "original_num": 66,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "The address pool of a DHCP server is configured with 10.19.44.0/24. The network administrator reserves 3 IP addresses for servers. How many IP addresses are left in the pool to be assigned to other hosts?",
    "images": [],
    "options": [
      {
        "text": "255",
        "is_correct": false
      },
      {
        "text": "252",
        "is_correct": false
      },
      {
        "text": "241",
        "is_correct": false
      },
      {
        "text": "251",
        "is_correct": true
      },
      {
        "text": "249",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.2",
    "topic": "Topic 7.2.2",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q67",
    "original_num": 67,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "The address pool of a DHCP server is configured with 10.19.44.0/24. The network administrator reserves 6 IP addresses for servers. How many IP addresses are left in the pool to be assigned to other hosts?",
    "images": [],
    "options": [
      {
        "text": "246",
        "is_correct": false
      },
      {
        "text": "252",
        "is_correct": false
      },
      {
        "text": "249",
        "is_correct": false
      },
      {
        "text": "248",
        "is_correct": true
      },
      {
        "text": "238",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.2",
    "topic": "Topic 7.2.2",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q68",
    "original_num": 68,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "The address pool of a DHCP server is configured with 172.21.121.0/25. The network administrator reserves 12 IP addresses for web servers. How many IP addresses are left in the pool to be assigned to other hosts?",
    "images": [],
    "options": [
      {
        "text": "115",
        "is_correct": false
      },
      {
        "text": "114",
        "is_correct": true
      },
      {
        "text": "118",
        "is_correct": false
      },
      {
        "text": "104",
        "is_correct": false
      },
      {
        "text": "112",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.2\nCalculate the maximum number of hosts available for the slash value and subtract the required static IP addresses required for the devices.\n/24 = 254 hosts\n/25 = 126 hosts\n/26 = 62 hosts\n/27 = 30 hosts\n/28 = 14 hosts",
    "topic": "Topic 7.2.2",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m7-9_q69",
    "original_num": 69,
    "source_group": "m7-9",
    "source_title": "Modules 7 - 9: Available and Reliable Networks",
    "question": "Which kind of message is sent by a DHCP client when its IP address lease is about to expire?​",
    "images": [],
    "options": [
      {
        "text": "a DHCPREQUEST broadcast message​",
        "is_correct": false
      },
      {
        "text": "a DHCPDISCOVER unicast message​",
        "is_correct": false
      },
      {
        "text": "a DHCPDISCOVER broadcast message",
        "is_correct": false
      },
      {
        "text": "a DHCPREQUEST unicast message​",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 7.1.4",
    "topic": "Topic 7.1.4",
    "module": 7,
    "type": "single"
  },
  {
    "id": "m10-13_q1",
    "original_num": 1,
    "source_group": "m10-13",
    "source_title": "Modules 10 - 13: L2 Security and WLANs",
    "question": "Which Layer 2 attack will result in legitimate users not getting valid IP addresses?",
    "images": [],
    "options": [
      {
        "text": "ARP spoofing",
        "is_correct": false
      },
      {
        "text": "DHCP starvation",
        "is_correct": true
      },
      {
        "text": "IP address spoofing",
        "is_correct": false
      },
      {
        "text": "MAC address flooding",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 10.5.5\nThe DHCP starvation attack causes the exhaustion of the IP address pool of a DHCP server before legitimate users can obtain valid IP addresses.",
    "topic": "Topic 10.5.5",
    "module": 10,
    "type": "single"
  },
  {
    "id": "m10-13_q2",
    "original_num": 2,
    "source_group": "m10-13",
    "source_title": "Modules 10 - 13: L2 Security and WLANs",
    "question": "What mitigation plan is best for thwarting a DoS attack that is creating a MAC address table overflow?",
    "images": [],
    "options": [
      {
        "text": "Disable DTP.",
        "is_correct": false
      },
      {
        "text": "Disable STP.",
        "is_correct": false
      },
      {
        "text": "Enable port security.",
        "is_correct": true
      },
      {
        "text": "Place unused ports in an unused VLAN.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 11.1.2\nA MAC address (CAM) table overflow attack, buffer overflow, and MAC address spoofing can all be mitigated by configuring port security. A network administrator would typically not want to disable STP because it prevents Layer 2 loops. DTP is disabled to prevent VLAN hopping. Placing unused ports in an unused VLAN prevents unauthorized wired connectivity.",
    "topic": "Topic 11.1.2",
    "module": 11,
    "type": "single"
  },
  {
    "id": "m10-13_q3",
    "original_num": 3,
    "source_group": "m10-13",
    "source_title": "Modules 10 - 13: L2 Security and WLANs",
    "question": "Which three Cisco products focus on endpoint security solutions? (Choose three.)",
    "images": [],
    "options": [
      {
        "text": "IPS Sensor Appliance",
        "is_correct": false
      },
      {
        "text": "Web Security Appliance",
        "is_correct": true
      },
      {
        "text": "Email Security Appliance",
        "is_correct": true
      },
      {
        "text": "SSL/IPsec VPN Appliance",
        "is_correct": false
      },
      {
        "text": "Adaptive Security Appliance",
        "is_correct": false
      },
      {
        "text": "NAC Appliance",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 10.1.3\nThe primary components of endpoint security solutions are Cisco Email and Web Security appliances, and Cisco NAC appliance. ASA, SSL/IPsec VPN, and IPS sensor appliances all provide security solutions that focus on the enterprise network, not on endpoint devices.",
    "topic": "Topic 10.1.3",
    "module": 10,
    "type": "multiple"
  },
  {
    "id": "m10-13_q4",
    "original_num": 4,
    "source_group": "m10-13",
    "source_title": "Modules 10 - 13: L2 Security and WLANs",
    "question": "True or False?\nIn the 802.1X standard, the client attempting to access the network is referred to as the supplicant.",
    "images": [],
    "options": [
      {
        "text": "true",
        "is_correct": true
      },
      {
        "text": "false",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 10.2.6",
    "topic": "Topic 10.2.6",
    "module": 10,
    "type": "single"
  },
  {
    "id": "m10-13_q5",
    "original_num": 5,
    "source_group": "m10-13",
    "source_title": "Modules 10 - 13: L2 Security and WLANs",
    "question": "Which authentication method stores usernames and passwords in the router and is ideal for small networks?",
    "images": [],
    "options": [
      {
        "text": "server-based AAA over TACACS+",
        "is_correct": false
      },
      {
        "text": "local AAA over RADIUS",
        "is_correct": false
      },
      {
        "text": "server-based AAA",
        "is_correct": false
      },
      {
        "text": "local AAA over TACACS+",
        "is_correct": false
      },
      {
        "text": "local AAA",
        "is_correct": true
      },
      {
        "text": "server-based AAA over RADIUS",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 10.2.3\nIn a small network with a few network devices, AAA authentication can be implemented with the local database and with usernames and passwords stored on the network devices. Authentication using the TACACS+ or RADIUS protocol will require dedicated ACS servers although this authentication solution scales well in a large network.",
    "topic": "Topic 10.2.3",
    "module": 10,
    "type": "single"
  },
  {
    "id": "m10-13_q6",
    "original_num": 6,
    "source_group": "m10-13",
    "source_title": "Modules 10 - 13: L2 Security and WLANs",
    "question": "What represents a best practice concerning discovery protocols such as CDP and LLDP on network devices?",
    "images": [],
    "options": [
      {
        "text": "Enable CDP on edge devices, and enable LLDP on interior devices.",
        "is_correct": false
      },
      {
        "text": "Use the open standard LLDP rather than CDP.",
        "is_correct": false
      },
      {
        "text": "Use the default router settings for CDP and LLDP.",
        "is_correct": false
      },
      {
        "text": "Disable both protocols on all interfaces where they are not required.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 10.5.10\nBoth discovery protocols can provide hackers with sensitive network information. They should not be enabled on edge devices, and should be disabled globally or on a per-interface basis if not required. CDP is enabled by default.​",
    "topic": "Topic 10.5.10",
    "module": 10,
    "type": "single"
  },
  {
    "id": "m10-13_q7",
    "original_num": 7,
    "source_group": "m10-13",
    "source_title": "Modules 10 - 13: L2 Security and WLANs",
    "question": "Which protocol should be used to mitigate the vulnerability of using Telnet to remotely manage network devices?",
    "images": [],
    "options": [
      {
        "text": "SNMP",
        "is_correct": false
      },
      {
        "text": "TFTP",
        "is_correct": false
      },
      {
        "text": "SSH",
        "is_correct": true
      },
      {
        "text": "SCP",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 10.3.3\nTelnet uses plain text to communicate in a network. The username and password can be captured if the data transmission is intercepted. SSH encrypts data communications between two network devices. TFTP and SCP are used for file transfer over the network. SNMP is used in network management solutions.",
    "topic": "Topic 10.3.3",
    "module": 10,
    "type": "single"
  },
  {
    "id": "m10-13_q8",
    "original_num": 8,
    "source_group": "m10-13",
    "source_title": "Modules 10 - 13: L2 Security and WLANs",
    "question": "Which statement describes the behavior of a switch when the MAC address table is full?",
    "images": [],
    "options": [
      {
        "text": "It treats frames as unknown unicast and floods all incoming frames to all ports on the switch.",
        "is_correct": false
      },
      {
        "text": "It treats frames as unknown unicast and floods all incoming frames to all ports across multiple switches.",
        "is_correct": false
      },
      {
        "text": "It treats frames as unknown unicast and floods all incoming frames to all ports within the local VLAN.",
        "is_correct": true
      },
      {
        "text": "It treats frames as unknown unicast and floods all incoming frames to all ports within the collision domain.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 10.4.2\nWhen the MAC address table is full, the switch treats the frame as an unknown unicast and begins to flood all incoming traffic to all ports only within the local VLAN.",
    "topic": "Topic 10.4.2",
    "module": 10,
    "type": "single"
  },
  {
    "id": "m10-13_q9",
    "original_num": 9,
    "source_group": "m10-13",
    "source_title": "Modules 10 - 13: L2 Security and WLANs",
    "question": "What device is considered a supplicant during the 802.1X authentication process?",
    "images": [],
    "options": [
      {
        "text": "the router that is serving as the default gateway",
        "is_correct": false
      },
      {
        "text": "the authentication server that is performing client authentication",
        "is_correct": false
      },
      {
        "text": "the client that is requesting authentication",
        "is_correct": true
      },
      {
        "text": "the switch that is controlling network access",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 10.2.6\nThe devices involved in the 802.1X authentication process are as follows:\n\nThe supplicant, which is the client that is requesting network access\nThe authenticator, which is the switch that the client is connecting to and that is actually controlling physical network access\nThe authentication server, which performs the actual authentication",
    "topic": "Topic 10.2.6",
    "module": 10,
    "type": "single"
  },
  {
    "id": "m14-16_q1",
    "original_num": 1,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Which feature on a Cisco router permits the forwarding of traffic for which there is no specific route?",
    "images": [],
    "options": [
      {
        "text": "next-hop",
        "is_correct": false
      },
      {
        "text": "gateway of last resort",
        "is_correct": true
      },
      {
        "text": "route source",
        "is_correct": false
      },
      {
        "text": "outgoing interface",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.4.9\nA default static route is used as a gateway of last resort to forward unknown destination traffic to a next hop/exit interface. The next-hop or exit interface is the destination to send traffic to on a network after the traffic is matched in a router. The route source is the location a route was learned from.",
    "topic": "Topic 14.4.9",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q2",
    "original_num": 2,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Which three advantages are provided by static routing? (Choose three.)",
    "images": [],
    "options": [
      {
        "text": "Static routing does not advertise over the network, thus providing better security.",
        "is_correct": true
      },
      {
        "text": "Configuration of static routes is error-free.",
        "is_correct": false
      },
      {
        "text": "Static routes scale well as the network grows.",
        "is_correct": false
      },
      {
        "text": "Static routing typically uses less network bandwidth and fewer CPU operations than dynamic routing does.",
        "is_correct": true
      },
      {
        "text": "The path a static route uses to send data is known.",
        "is_correct": true
      },
      {
        "text": "No intervention is required to maintain changing route information.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.5.1\nStatic routes are prone to errors from incorrect configuration by the administrator. They do not scale well, because the routes must be manually reconfigured to accommodate a growing network. Intervention is required each time a route change is necessary. They do provide better security, use less bandwidth, and provide a known path to the destination.",
    "topic": "Topic 14.5.1",
    "module": 14,
    "type": "multiple"
  },
  {
    "id": "m14-16_q3",
    "original_num": 3,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What are two functions of dynamic routing protocols? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "to maintain routing tables",
        "is_correct": true
      },
      {
        "text": "to assure low router overhead",
        "is_correct": false
      },
      {
        "text": "to avoid exposing network information",
        "is_correct": false
      },
      {
        "text": "to discover the network",
        "is_correct": true
      },
      {
        "text": "to choose the path that is specified by the administrator",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.5.3\nDynamic routing protocols exist to discover the network, maintain routing tables, and calculate the best path. Having low levels of routing overhead, using the path specified by the administrator, and avoiding the exposure of network information are functions of static routing.",
    "topic": "Topic 14.5.3",
    "module": 14,
    "type": "multiple"
  },
  {
    "id": "m14-16_q4",
    "original_num": 4,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What is an advantage of using dynamic routing protocols instead of static routing?",
    "images": [],
    "options": [
      {
        "text": "easier to implement",
        "is_correct": false
      },
      {
        "text": "more secure in controlling routing updates",
        "is_correct": false
      },
      {
        "text": "fewer router resource overhead requirements",
        "is_correct": false
      },
      {
        "text": "ability to actively search for new routes if the current path becomes unavailable​",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 14.5.3\nDynamic routing has the ability to search and find a new best path if the current path is no longer available. The other options are actually the advantages of static routing.",
    "topic": "Topic 14.5.3",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q5",
    "original_num": 5,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What happens to a static route entry in a routing table when the outgoing interface associated with that route goes into the down state?",
    "images": [],
    "options": [
      {
        "text": "The static route is removed from the routing table.",
        "is_correct": true
      },
      {
        "text": "The router polls neighbors for a replacement route.",
        "is_correct": false
      },
      {
        "text": "The router automatically redirects the static route to use another interface.",
        "is_correct": false
      },
      {
        "text": "The static route remains in the table because it was defined as static.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.1.6\nWhen the interface associated with a static route goes down, the router will remove the route because it is no longer valid.",
    "topic": "Topic 14.1.6",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q6",
    "original_num": 6,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What is a characteristic of a static route that matches all packets?",
    "images": [],
    "options": [
      {
        "text": "It uses a single network address to send multiple static routes to one destination address.",
        "is_correct": false
      },
      {
        "text": "It identifies the gateway IP address to which the router sends all IP packets for which it does not have a learned or static route.",
        "is_correct": true
      },
      {
        "text": "It backs up a route already discovered by a dynamic routing protocol.",
        "is_correct": false
      },
      {
        "text": "It is configured with a higher administrative distance than the original dynamic routing protocol has.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.3.1\nA default static route is a route that matches all packets. It identifies the gateway IP address to which the router sends all IP packets for which it does not have a learned or static route. A default static route is simply a static route with 0.0.0.0/0 as the destination IPv4 address. Configuring a default static route creates a gateway of last resort.",
    "topic": "Topic 15.3.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q7",
    "original_num": 7,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "When would it be more beneficial to use a dynamic routing protocol instead of static routing?",
    "images": [],
    "options": [
      {
        "text": "in an organization where routers suffer from performance issues",
        "is_correct": false
      },
      {
        "text": "on a stub network that has a single exit point",
        "is_correct": false
      },
      {
        "text": "in an organization with a smaller network that is not expected to grow in size",
        "is_correct": false
      },
      {
        "text": "on a network where there is a lot of topology changes",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 14.5.1\nDynamic routing protocols consume more router resources, are suitable for larger networks, and are more useful on networks that are growing and changing.",
    "topic": "Topic 14.5.1",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q8",
    "original_num": 8,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Which route would be used to forward a packet with a source IP address of 192.168.10.1 and a destination IP address of 10.1.1.1?",
    "images": [],
    "options": [
      {
        "text": "C 192.168.10.0/30 is directly connected, GigabitEthernet0/1",
        "is_correct": false
      },
      {
        "text": "O 10.1.1.0/24 [110/65] via 192.168.200.2, 00:01:20, Serial0/1/0",
        "is_correct": true
      },
      {
        "text": "S* 0.0.0.0/0 [1/0] via 172.16.1.1",
        "is_correct": false
      },
      {
        "text": "S 10.1.0.0/16 is directly connected, GigabitEthernet0/0",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.1.3\nEven though OSPF has a higher administrative distance value (less trustworthy), the best match is the route in the routing table that has the most number of far left matching bits.",
    "topic": "Topic 14.1.3",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q9",
    "original_num": 9,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. What is the administrative distance value of the route for router R1 to reach the destination IPv6 address of 2001:DB8:CAFE:4::A?",
    "images": [
      "images/m14-16_q9_0.png"
    ],
    "options": [
      {
        "text": "120",
        "is_correct": true
      },
      {
        "text": "110",
        "is_correct": false
      },
      {
        "text": "1",
        "is_correct": false
      },
      {
        "text": "4",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.4.3\nThe RIP route with the source code R is used to forward data to the destination IPv6 address of 2001:DB8:CAFE:4::A. This route has an AD value of 120.",
    "topic": "Topic 14.4.3",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q10",
    "original_num": 10,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Which value in a routing table represents trustworthiness and is used by the router to determine which route to install into the routing table when there are multiple routes toward the same destination?",
    "images": [],
    "options": [
      {
        "text": "administrative distance",
        "is_correct": true
      },
      {
        "text": "metric",
        "is_correct": false
      },
      {
        "text": "outgoing interface",
        "is_correct": false
      },
      {
        "text": "routing protocol",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.4.12\nThe administrative distance represents the trustworthiness of a particular route. The lower an administrative distance, the more trustworthy the learned route is. When a router learns multiple routes toward the same destination, the router uses the administrative distance value to determine which route to place into the routing table. A metric is used by a routing protocol to compare routes received from the routing protocol. An exit interface is the interface used to send a packet in the direction of the destination network. A routing protocol is used to exchange routing updates between two or more adjacent routers.",
    "topic": "Topic 14.4.12",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q12",
    "original_num": 12,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the graphic. Which command would be used on router A to configure a static route to direct traffic from LAN A that is destined for LAN C?",
    "images": [
      "images/m14-16_q12_0.png"
    ],
    "options": [
      {
        "text": "A(config)# ip route 192.168.3.0 255.255.255.0 192.168.3.1",
        "is_correct": false
      },
      {
        "text": "A(config)# ip route 192.168.3.2 255.255.255.0 192.168.4.0",
        "is_correct": false
      },
      {
        "text": "A(config)# ip route 192.168.4.0 255.255.255.0 192.168.5.2",
        "is_correct": false
      },
      {
        "text": "A(config)# ip route 192.168.5.0 255.255.255.0 192.168.3.2",
        "is_correct": false
      },
      {
        "text": "A(config)# ip route 192.168.4.0 255.255.255.0 192.168.3.2",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.2.1\nThe destination network on LAN C is 192.168.4.0 and the next-hop address from the perspective of router A is 192.168.3.2.",
    "topic": "Topic 15.2.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q13",
    "original_num": 13,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "On which two routers would a default static route be configured? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "any router where a backup route to dynamic routing is needed for reliability",
        "is_correct": false
      },
      {
        "text": "the router that serves as the gateway of last resort",
        "is_correct": false
      },
      {
        "text": "any router running an IOS prior to 12.0",
        "is_correct": false
      },
      {
        "text": "stub router connection to the rest of the corporate or campus network",
        "is_correct": true
      },
      {
        "text": "edge router connection to the ISP",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.3.1\nA stub router or an edge router connected to an ISP has only one other router as a connection. A default static route works in those situations because all traffic will be sent to one destination. The destination router is the gateway of last resort. The default route is not configured on the gateway, but on the router sending traffic to the gateway. The router IOS does not matter.",
    "topic": "Topic 15.3.1",
    "module": 15,
    "type": "multiple"
  },
  {
    "id": "m14-16_q14",
    "original_num": 14,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. This network has two connections to the ISP, one via router C and one via router B. The serial link between router A and router C supports EIGRP and is the primary link to the Internet. If the primary link fails, the administrator needs a floating static route that avoids recursive route lookups and any potential next-hop issues caused by the multiaccess nature of the Ethernet segment with router B. What should the administrator configure?",
    "images": [
      "images/m14-16_q14_0.png"
    ],
    "options": [
      {
        "text": "Create a static route pointing to 10.1.1.1 with an AD of 95.",
        "is_correct": false
      },
      {
        "text": "Create a fully specified static route pointing to Fa0/0 with an AD of 1.",
        "is_correct": false
      },
      {
        "text": "Create a fully specified static route pointing to Fa0/0 with an AD of 95.",
        "is_correct": true
      },
      {
        "text": "Create a static route pointing to 10.1.1.1 with an AD of 1.",
        "is_correct": false
      },
      {
        "text": "Create a static route pointing to Fa0/0 with an AD of 1.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.2.5\nA floating static route is a static route with an administrative distance higher than that of another route already in the routing table. If the route in the table disappears, the floating static route will be put into the routing table in its place. Internal EIGRP has an AD of 90, so a floating static route in this scenario would need to have an AD higher than 90. Also, when creating a static route to a multiaccess interface like a FastEthernet segment a fully specified route should be used, with both a next-hop IP address and an exit interface. This prevents the router from doing a recursive lookup, but still ensures the correct next-hop device on the multiaccess segment forwards the packet.",
    "topic": "Topic 15.2.5",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q15",
    "original_num": 15,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What is a characteristic of a floating static route?",
    "images": [],
    "options": [
      {
        "text": "When it is configured, it creates a gateway of last resort.​",
        "is_correct": false
      },
      {
        "text": "It is used to provide load balancing between static routes.",
        "is_correct": false
      },
      {
        "text": "It is simply a static route with 0.0.0.0/0 as the destination IPv4 address.",
        "is_correct": false
      },
      {
        "text": "It is configured with a higher administrative distance than the original dynamic routing protocol has.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.4.1\nFloating static routes are static routes used to provide a backup path to a primary static or dynamic route, in the event of a link failure. They must be configured with a higher administrative distance than the original dynamic routing protocol has. A default static route is simply a static route with 0.0.0.0/0 as the destination IPv4 address. Configuring a default static route creates a gateway of last resort.",
    "topic": "Topic 15.4.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q16",
    "original_num": 16,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What network prefix and prefix-length combination is used to create a default static route that will match any IPv6 destination?",
    "images": [],
    "options": [
      {
        "text": "FFFF::/128",
        "is_correct": false
      },
      {
        "text": "::1/64",
        "is_correct": false
      },
      {
        "text": "::/128",
        "is_correct": false
      },
      {
        "text": "::/0",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.3.1\nA default static route configured for IPv6, is a network prefix of all zeros and a prefix mask of 0 which is expressed as ::/0.",
    "topic": "Topic 15.3.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q17",
    "original_num": 17,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Consider the following command:\nip route 192.168.10.0 255.255.255.0 10.10.10.2 5\nWhat does the 5 at the end of the command signify?",
    "images": [],
    "options": [
      {
        "text": "exit interface",
        "is_correct": false
      },
      {
        "text": "maximum number of hops to the 192.168.10.0/24 network",
        "is_correct": false
      },
      {
        "text": "metric",
        "is_correct": false
      },
      {
        "text": "administrative distance",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.1.3\nThe 5 at the end of the command signifies administrative distance. This value is added to floating static routes or routes that only appear in the routing table when the preferred route has gone down. The 5 at the end of the command signifies administrative distance configured for the static route. This value indicates that the floating static route will appear in the routing table when the preferred route (with an administrative distance less than 5) is down.",
    "topic": "Topic 15.1.3",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q10_dup",
    "original_num": 10,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. What will router R2 do with a packet destined for 192.168.10.129?",
    "images": [
      "images/m14-16_q10_0.png"
    ],
    "options": [
      {
        "text": "send the packet out interface FastEthernet0/0",
        "is_correct": false
      },
      {
        "text": "send the packet out interface Serial0/0/1",
        "is_correct": true
      },
      {
        "text": "drop the packet",
        "is_correct": false
      },
      {
        "text": "send the packet out interface Serial0/0/0",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.2.1\nWhen a static route is configured with the next hop address (as in the case of the 192.168.10.128 network), the output of the show ip route command lists the route as \"via\" a particular IP address. The router has to look up that IP address to determine which interface to send the packet out. Because the IP address of 10.0.0.6 is part of network 10.0.0.4, the router sends the packet out interface Serial0/0/1.",
    "topic": "Topic 15.2.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q19",
    "original_num": 19,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "An administrator issues the ipv6 route 2001:db8:acad:1::/32 gigabitethernet0/0 2001:db8:acad:6::1 100 command on a router. What administrative distance is assigned to this route?",
    "images": [],
    "options": [
      {
        "text": "0",
        "is_correct": false
      },
      {
        "text": "1",
        "is_correct": false
      },
      {
        "text": "32",
        "is_correct": false
      },
      {
        "text": "100",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.1.4\nThe command ipv6 route 2001:db8:acad:1::/32 gigabitethernet0/0 2001:db8:acad:6::1 100 will configure a floating static route on a router. The 100 at the end of the command specifies the administrative distance of 100 to be applied to the route.",
    "topic": "Topic 15.1.4",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q20",
    "original_num": 20,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. Which default static route command would allow R1 to potentially reach all unknown networks on the Internet?",
    "images": [
      "images/m14-16_q20_0.jpg"
    ],
    "options": [
      {
        "text": "R1(config)# ipv6 route 2001:db8:32::/64 G0/0",
        "is_correct": false
      },
      {
        "text": "R1(config)# ipv6 route ::/0 G0/0 fe80::2",
        "is_correct": false
      },
      {
        "text": "R1(config)# ipv6 route 2001:db8:32::/64 G0/1 fe80::2",
        "is_correct": false
      },
      {
        "text": "R1(config)# ipv6 route ::/0 G0/1 fe80::2",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.2.6\nTo route packets to unknown IPv6 networks a router will need an IPv6 default route. The static route ipv6 route ::/0 G0/1 fe80::2 will match all networks and send packets out the specified exit interface G0/1 toward R2.",
    "topic": "Topic 15.2.6",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q21",
    "original_num": 21,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. The network engineer for the company that is shown wants to use the primary ISP connection for all external connectivity. The backup ISP connection is used only if the primary ISP connection fails. Which set of commands would accomplish this goal?",
    "images": [
      "images/m14-16_q21_0.jpg"
    ],
    "options": [
      {
        "text": "ip route 0.0.0.0 0.0.0.0 s0/0/0\nip route 0.0.0.0 0.0.0.0 s0/1/0",
        "is_correct": false
      },
      {
        "text": "ip route 0.0.0.0 0.0.0.0 s0/0/0\nip route 0.0.0.0 0.0.0.0 s0/1/0 10",
        "is_correct": true
      },
      {
        "text": "ip route 198.133.219.24 255.255.255.252\nip route 64.100.210.80 255.255.255.252 10",
        "is_correct": false
      },
      {
        "text": "ip route 198.133.219.24 255.255.255.252\nip route 64.100.210.80 255.255.255.252",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.4.1\nA static route that has no administrative distance added as part of the command has a default administrative distance of 1. The backup link should have a number higher than 1. The correct answer has an administrative distance of 10. The other quad zero route would load balance packets across both links and both links would appear in the routing table. The remaining answers are simply static routes (either a default route or a floating static default route).",
    "topic": "Topic 15.4.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q22",
    "original_num": 22,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. Which set of commands will configure static routes that will allow the Park and the Alta routers to a) forward packets to each LAN and b) direct all other traffic to the Internet?",
    "images": [
      "images/m14-16_q22_0.png"
    ],
    "options": [
      {
        "text": "Park(config)# ip route 0.0.0.0 0.0.0.0 192.168.14.1\nAlta(config)# ip route 10.0.234.0 255.255.255.0 192.168.14.2\nAlta(config)# ip route 0.0.0.0 0.0.0.0 s0/0/0",
        "is_correct": true
      },
      {
        "text": "Park(config)# ip route 0.0.0.0 0.0.0.0 192.168.14.1\nAlta(config)# ip route 10.0.234.0 255.255.255.0 192.168.14.2\nAlta(config)# ip route 198.18.222.0 255.255.255.255 s0/0/0",
        "is_correct": false
      },
      {
        "text": "Park(config)# ip route 172.16.67.0 255.255.255.0 192.168.14.1\nPark(config)# ip route 0.0.0.0 0.0.0.0 192.168.14.1\nAlta(config)# ip route 10.0.234.0 255.255.255.0 192.168.14.2",
        "is_correct": false
      },
      {
        "text": "Park(config)# ip route 172.16.67.0 255.255.255.0 192.168.14.1\nAlta(config)# ip route 10.0.234.0 255.255.255.0 192.168.14.2\nAlta(config)# ip route 0.0.0.0 0.0.0.0 s0/0/1",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.3.1\nThe LAN connected to the router Park is a stud network, therefore, a default route should be used to forward network traffic destined to non-local networks. The router Alta connects to both the internet and the Park router, it would require two static routes configured, one toward the internet and the other toward the LAN connected to the router Park.",
    "topic": "Topic 15.3.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q23",
    "original_num": 23,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. The small company shown uses static routing. Users on the R2 LAN have reported a problem with connectivity. What is the issue?",
    "images": [
      "images/m14-16_q23_0.png"
    ],
    "options": [
      {
        "text": "R1 needs a static route to the R2 LAN.",
        "is_correct": true
      },
      {
        "text": "R2 needs a static route to the R1 LANs.",
        "is_correct": false
      },
      {
        "text": "R1 needs a default route to R2.",
        "is_correct": false
      },
      {
        "text": "R2 needs a static route to the Internet.",
        "is_correct": false
      },
      {
        "text": "R1 and R2 must use a dynamic routing protocol.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.4.2\nR1 has a default route to the Internet. R2 has a default route to R1. R1 is missing a static route for the 10.0.60.0 network. Any traffic that reached R1 and is destined for 10.0.60.0/24 will be routed to the ISP.",
    "topic": "Topic 14.4.2",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q24",
    "original_num": 24,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. An administrator is attempting to install an IPv6 static route on router R1 to reach the network attached to router R2. After the static route command is entered, connectivity to the network is still failing. What error has been made in the static route configuration?",
    "images": [
      "images/m14-16_q24_0.jpg"
    ],
    "options": [
      {
        "text": "The next hop address is incorrect.",
        "is_correct": false
      },
      {
        "text": "The interface is incorrect.",
        "is_correct": true
      },
      {
        "text": "The destination network is incorrect.",
        "is_correct": false
      },
      {
        "text": "The network prefix is incorrect.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.1.4\nIn this example the interface in the static route is incorrect. The interface should be the exit interface on R1, which is s0/0/0.",
    "topic": "Topic 15.1.4",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q25",
    "original_num": 25,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. How was the host route 2001:DB8:CAFE:4::1/128 installed in the routing table?",
    "images": [
      "images/m14-16_q25_0.png"
    ],
    "options": [
      {
        "text": "The route was dynamically created by router R1.",
        "is_correct": false
      },
      {
        "text": "The route was dynamically learned from another router.",
        "is_correct": false
      },
      {
        "text": "The route was manually entered by an administrator.",
        "is_correct": true
      },
      {
        "text": "The route was automatically installed when an IP address was configured on an active interface.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.5.3\nA host route is an IPv6 route with a 128-bit mask. A host route can be installed in a routing table automatically when an IP address is configured on a router interface or manually if a static route is created.",
    "topic": "Topic 15.5.3",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q26",
    "original_num": 26,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. HostA is attempting to contact ServerB. Which two statements correctly describe the addressing that HostA will generate in the process? (Choose two.)",
    "images": [
      "images/m14-16_q26_0.png"
    ],
    "options": [
      {
        "text": "A packet with the destination IP address of RouterA.",
        "is_correct": false
      },
      {
        "text": "A frame with the destination MAC address of SwitchA.",
        "is_correct": false
      },
      {
        "text": "A packet with the destination IP address of ServerB.",
        "is_correct": true
      },
      {
        "text": "A frame with the destination MAC address of RouterA.",
        "is_correct": true
      },
      {
        "text": "A frame with the destination MAC address of ServerB.",
        "is_correct": false
      },
      {
        "text": "A packet with the destination IP address of RouterB.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.2.2\nIn order to send data to ServerB, HostA will generate a packet that contains the IP address of the destination device on the remote network and a frame that contains the MAC address of the default gateway device on the local network.",
    "topic": "Topic 14.2.2",
    "module": 14,
    "type": "multiple"
  },
  {
    "id": "m14-16_q27",
    "original_num": 27,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. A ping from R1 to 10.1.1.2 is successful, but a ping from R1 to any address in the 192.168.2.0 network fails. What is the cause of this problem?",
    "images": [
      "images/m14-16_q27_0.jpg"
    ],
    "options": [
      {
        "text": "There is no gateway of last resort at R1.",
        "is_correct": false
      },
      {
        "text": "The static route for 192.168.2.0 is incorrectly configured.",
        "is_correct": true
      },
      {
        "text": "A default route is not configured on R1.",
        "is_correct": false
      },
      {
        "text": "The serial interface between the two routers is down.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.2.1",
    "topic": "Topic 15.2.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q28",
    "original_num": 28,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. An administrator is attempting to install a default static route on router R1 to reach the Site B network on router R2. After entering the static route command, the route is still not showing up in the routing table of router R1. What is preventing the route from installing in the routing table?",
    "images": [
      "images/m14-16_q28_0.jpg"
    ],
    "options": [
      {
        "text": "The netmask is incorrect.",
        "is_correct": false
      },
      {
        "text": "The exit interface is missing.",
        "is_correct": false
      },
      {
        "text": "The next hop address is incorrect.",
        "is_correct": true
      },
      {
        "text": "The destination network is incorrect.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.2.1\nThe next hop address is incorrect. From R1 the next hop address should be that of the serial interface of R2, 209.165.202.130.",
    "topic": "Topic 15.2.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q29",
    "original_num": 29,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. The Branch Router has an OSPF neighbor relationship with the HQ router over the 198.51.0.4/30 network. The 198.51.0.8/30 network link should serve as a backup when the OSPF link goes down. The floating static route command ip route 0.0.0.0 0.0.0.0 S0/1/1 100 was issued on Branch and now traffic is using the backup link even when the OSPF link is up and functioning. Which change should be made to the static route command so that traffic will only use the OSPF link when it is up?",
    "images": [
      "images/m14-16_q29_0.png"
    ],
    "options": [
      {
        "text": "Add the next hop neighbor address of 198.51.0.8.",
        "is_correct": false
      },
      {
        "text": "Change the administrative distance to 1.",
        "is_correct": false
      },
      {
        "text": "Change the destination network to 198.51.0.5.",
        "is_correct": false
      },
      {
        "text": "Change the administrative distance to 120.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.4.1\nThe problem with the current floating static route is that the administrative distance is set too low. The administrative distance will need to be higher than that of OSPF, which is 110, so that the router will only use the OSPF link when it is up.",
    "topic": "Topic 15.4.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q30",
    "original_num": 30,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What characteristic completes the following statement?\nWhen an IPv6 static route is configured, the next-hop address can be ......",
    "images": [],
    "options": [
      {
        "text": "a destination host route with a /128 prefix.",
        "is_correct": false
      },
      {
        "text": "the \"show ipv6 route static\" command.",
        "is_correct": false
      },
      {
        "text": "an IPv6 link-local address on the adjacent router.",
        "is_correct": true
      },
      {
        "text": "the interface type and interface number.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.5.6",
    "topic": "Topic 15.5.6",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q172",
    "original_num": 172,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. Which interface will be the exit interface to forward a data packet that has the destination IP address 172.19.115.206?",
    "images": [
      "images/m14-16_q172_0.svg"
    ],
    "options": [
      {
        "text": "GigabitEthernet0/1",
        "is_correct": false
      },
      {
        "text": "None, the packet will be dropped.",
        "is_correct": false
      },
      {
        "text": "GigabitEthernet0/0",
        "is_correct": true
      },
      {
        "text": "Serial0/0/1",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.1.3",
    "topic": "Topic 14.1.3",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q32",
    "original_num": 32,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. What routing solution will allow both PC A and PC B to access the Internet with the minimum amount of router CPU and network bandwidth utilization?",
    "images": [
      "images/m14-16_q32_0.gif"
    ],
    "options": [
      {
        "text": "Configure a dynamic routing protocol between R1 and Edge and advertise all routes.",
        "is_correct": false
      },
      {
        "text": "Configure a static route from R1 to Edge and a dynamic route from Edge to R1.",
        "is_correct": false
      },
      {
        "text": "Configure a static default route from R1 to Edge, a default route from Edge to the Internet, and a static route from Edge to R1.",
        "is_correct": true
      },
      {
        "text": "Configure a dynamic route from R1 to Edge and a static route from Edge to R1.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.4.5\nTwo routes have to be created: a default route in R1 to reach Edge and a static route in Edge to reach R1 for the return traffic. This is a best solution once PC A and PC B belong to stub networks. Moreover, static routing consumes less bandwidth than dynamic routing.",
    "topic": "Topic 14.4.5",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q33",
    "original_num": 33,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. What would happen after the IT administrator enters the new static route?",
    "images": [
      "images/m14-16_q33_0.png"
    ],
    "options": [
      {
        "text": "The 172.16.1.0 static route would be entered into the running-config but not shown in the routing table.",
        "is_correct": false
      },
      {
        "text": "The 172.16.1.0 route learned from RIP would be replaced with the 172.16.1.0 static route.",
        "is_correct": true
      },
      {
        "text": "The 0.0.0.0 default route would be replaced with the 172.16.1.0 static route.",
        "is_correct": false
      },
      {
        "text": "The 172.16.1.0 static route is added to the existing routes in the routing table.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.4.12\nA route will be installed in a routing table if there is not another routing source with a lower administrative distance. If a route with a lower administrative distance to the same destination network as a current route is entered, the route with the lower administrative distance will replace the route with a higher administrative distance.",
    "topic": "Topic 14.4.12",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q34",
    "original_num": 34,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What two pieces of information are needed in a fully specified static route to eliminate recursive lookups? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "the interface ID of the next-hop neighbor",
        "is_correct": false
      },
      {
        "text": "the interface ID exit interface",
        "is_correct": true
      },
      {
        "text": "the IP address of the exit interface",
        "is_correct": false
      },
      {
        "text": "the IP address of the next-hop neighbor",
        "is_correct": true
      },
      {
        "text": "the administrative distance for the destination network",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.1.2\nA fully specified static route can be used to avoid recursive routing table lookups by the router. A fully specified static route contains both the IP address of the next-hop router and the ID of the exit interface.",
    "topic": "Topic 15.1.2",
    "module": 15,
    "type": "multiple"
  },
  {
    "id": "m14-16_q35",
    "original_num": 35,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. Which command will properly configure an IPv6 static route on R2 that will allow traffic from PC2 to reach PC1 without any recursive lookups by router R2?",
    "images": [
      "images/m14-16_q35_0.gif"
    ],
    "options": [
      {
        "text": "R2(config)# ipv6 route ::/0 2001:db8:32::1",
        "is_correct": false
      },
      {
        "text": "R2(config)# ipv6 route 2001:db8:10:12::/64 S0/0/0",
        "is_correct": true
      },
      {
        "text": "R2(config)# ipv6 route 2001:db8:10:12::/64 2001:db8:32::1",
        "is_correct": false
      },
      {
        "text": "R2(config)# ipv6 route 2001:db8:10:12::/64 S0/0/1",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.2.4\nA nonrecursive route must have an exit interface specified from which the destination network can be reached. In this example 2001:db8:10:12::/64 is the destination network and R2 will use exit interface S0/0/0 to reach that network. Therefore, the static route would be ipv6 route 2001:db8:10:12::/64 S0/0/0.",
    "topic": "Topic 15.2.4",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q36",
    "original_num": 36,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. Which static route would an IT technician enter to create a backup route to the 172.16.1.0 network that is only used if the primary RIP learned route fails?",
    "images": [
      "images/m14-16_q36_0.png"
    ],
    "options": [
      {
        "text": "ip route 172.16.1.0 255.255.255.0 s0/0/0",
        "is_correct": false
      },
      {
        "text": "ip route 172.16.1.0 255.255.255.0 s0/0/0 121",
        "is_correct": true
      },
      {
        "text": "ip route 172.16.1.0 255.255.255.0 s0/0/0 111",
        "is_correct": false
      },
      {
        "text": "ip route 172.16.1.0 255.255.255.0 s0/0/0 91",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.4.1\nA backup static route is called a floating static route. A floating static route has an administrative distance greater than the administrative distance of another static route or dynamic route.",
    "topic": "Topic 15.4.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q37",
    "original_num": 37,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. A user reports that PC0 cannot visit the web server www.server.com. Troubleshoot the network configuration to identify the problem. What is the cause of the problem?",
    "images": [
      "images/m14-16_q37_0.jpg",
      "images/m14-16_q37_1.png"
    ],
    "options": [
      {
        "text": "The clock rate on one of the serial links is configured incorrectly.",
        "is_correct": false
      },
      {
        "text": "A serial interface on Branch is configured incorrectly.",
        "is_correct": false
      },
      {
        "text": "The DNS server address on PC0 is configured incorrectly.",
        "is_correct": false
      },
      {
        "text": "Routing between HQ and Branch is configured incorrectly.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 16.2.3\nIn order to allow communication to remote networks, proper routing, either static or dynamic, is necessary. Both routers must be configured with a routing method.",
    "topic": "Topic 16.2.3",
    "module": 16,
    "type": "single"
  },
  {
    "id": "m14-16_q38",
    "original_num": 38,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Match the routing table entry to the corresponding function. (Not all options are used.)",
    "images": [
      "images/m14-16_q38_0.jpg"
    ],
    "options": [],
    "explanation": "Explanation: Topic 14.4.3",
    "topic": "Topic 14.4.3",
    "module": 14,
    "type": "match",
    "match_data": {
      "left_title": "Thành phần bảng định tuyến (Routing Table Field)",
      "right_title": "Ý nghĩa chức năng (Function)",
      "pairs": [
        {
          "term": "route source",
          "desc": "identifies how a route was learned",
          "term_vi": "Nguồn định tuyến (Route Source)",
          "desc_vi": "Xác định tuyến đường được học bằng cách nào (C: trực tiếp, S: tĩnh, O: OSPF,...)."
        },
        {
          "term": "destination network",
          "desc": "identifies the address of the remote network",
          "term_vi": "Mạng đích (Destination Network)",
          "desc_vi": "Xác định địa chỉ mạng từ xa cần gửi gói tin đến."
        },
        {
          "term": "administrative distance",
          "desc": "identifies the trustworthiness of a route source",
          "term_vi": "Administrative Distance (AD)",
          "desc_vi": "Xác định độ tin cậy của nguồn tuyến đường (số càng nhỏ càng ưu tiên)."
        },
        {
          "term": "metric",
          "desc": "identifies the value assigned to reach a remote network",
          "term_vi": "Metric",
          "desc_vi": "Giá trị chi phí được gán để tính toán độ tối ưu đến mạng từ xa."
        }
      ],
      "distractors": [
        {
          "term": "exit interface",
          "term_vi": "Cổng ra (Exit Interface - cổng đưa gói tin ra ngoài)"
        }
      ]
    }
  },
  {
    "id": "m14-16_q39",
    "original_num": 39,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. PC A sends a request to Server B. What IPv4 address is used in the destination field in the packet as the packet leaves PC A?",
    "images": [
      "images/m14-16_q39_0.jpg"
    ],
    "options": [
      {
        "text": "192.168.11.1",
        "is_correct": false
      },
      {
        "text": "192.168.10.1",
        "is_correct": false
      },
      {
        "text": "192.168.12.16",
        "is_correct": true
      },
      {
        "text": "192.168.10.10",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.2.2\nThe destination IP address in packets does not change along the path between the source and destination.",
    "topic": "Topic 14.2.2",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q40",
    "original_num": 40,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What does R1 use as the MAC address of the destination when constructing the frame that will go from R1 to Server B?",
    "images": [
      "images/m14-16_q40_0.jpg"
    ],
    "options": [
      {
        "text": "If the destination MAC address that corresponds to the IPv4 address is not in the ARP cache, R1 sends an ARP request.",
        "is_correct": true
      },
      {
        "text": "R1 uses the destination MAC address of S1.",
        "is_correct": false
      },
      {
        "text": "The packet is encapsulated into a PPP frame, and R1 adds the PPP destination address to the frame.",
        "is_correct": false
      },
      {
        "text": "R1 leaves the field blank and forwards the data to the PC.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.2.1\nCommunication inside a local network uses Address Resolution Protocol to obtain a MAC address from a known IPv4 address. A MAC address is needed to construct the frame in which the packet is encapsulated.",
    "topic": "Topic 14.2.1",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q41",
    "original_num": 41,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What route would have the lowest administrative distance?",
    "images": [],
    "options": [
      {
        "text": "a route received through the OSPF routing protocol",
        "is_correct": false
      },
      {
        "text": "a directly connected network",
        "is_correct": true
      },
      {
        "text": "a static route",
        "is_correct": false
      },
      {
        "text": "a route received through the EIGRP routing protocol",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.4.12\nThe most believable route or the route with the lowest administrative distance is one that is directly connected to a router.",
    "topic": "Topic 14.4.12",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q42",
    "original_num": 42,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What characteristic completes the following statement?\nWhen an IPv6 static route is configured, as a backup route to a static route in the routing table, the \"distance\" command is used with ......",
    "images": [],
    "options": [
      {
        "text": "the \"show ipv6 route static\" command.",
        "is_correct": false
      },
      {
        "text": "an administrative distance of 2.",
        "is_correct": true
      },
      {
        "text": "a destination host route with a /128 prefix.",
        "is_correct": false
      },
      {
        "text": "the interface type and interface number.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.4.1",
    "topic": "Topic 15.4.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q43",
    "original_num": 43,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "A router has used the OSPF protocol to learn a route to the 172.16.32.0/19 network. Which command will implement a backup floating static route to this network?",
    "images": [],
    "options": [
      {
        "text": "ip route 172.16.0.0 255.255.224.0 S0/0/0 100",
        "is_correct": false
      },
      {
        "text": "ip route 172.16.0.0 255.255.240.0 S0/0/0 200",
        "is_correct": false
      },
      {
        "text": "ip route 172.16.32.0 255.255.224.0 S0/0/0 200",
        "is_correct": true
      },
      {
        "text": "ip route 172.16.32.0 255.255.0.0 S0/0/0 100",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.4.1\nOSPF has an administrative distance of 110, so the floating static route must have an administrative distance higher than 110. Because the target network is 172.16.32.0/19, that static route must use the network 172.16.32.0 and a netmask of 255.255.224.0.",
    "topic": "Topic 15.4.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q44",
    "original_num": 44,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Consider the following command:\nip route 192.168.10.0 255.255.255.0 10.10.10.2 5\nHow would an administrator test this configuration?",
    "images": [],
    "options": [
      {
        "text": "Delete the default gateway route on the router.",
        "is_correct": false
      },
      {
        "text": "Manually shut down the router interface used as a primary route.",
        "is_correct": true
      },
      {
        "text": "Ping from the 192.168.10.0 network to the 10.10.10.2 address.",
        "is_correct": false
      },
      {
        "text": "Ping any valid address on the 192.168.10.0/24 network.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.4.3\nA floating static is a backup route that only appears in the routing table when the interface used with the primary route is down. To test a floating static route, the route must be in the routing table. Therefore, shutting down the interface used as a primary route would allow the floating static route to appear in the routing table.",
    "topic": "Topic 15.4.3",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q45",
    "original_num": 45,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. Which type of IPv6 static route is configured in the exhibit?",
    "images": [
      "images/m14-16_q45_0.gif"
    ],
    "options": [
      {
        "text": "floating static route",
        "is_correct": false
      },
      {
        "text": "fully specified static route",
        "is_correct": false
      },
      {
        "text": "recursive static route",
        "is_correct": true
      },
      {
        "text": "directly attached static route",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.1.4\nThe route provided points to another address that must be looked up in the routing table. This makes the route a recursive static route.",
    "topic": "Topic 15.1.4",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q46",
    "original_num": 46,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What characteristic completes the following statement?\nWhen an IPv6 static route is configured, it is first necessary to configure ......",
    "images": [],
    "options": [
      {
        "text": "the next-hop address of two different adjacent routers.",
        "is_correct": false
      },
      {
        "text": "the \"ipv6 unicast-routing\" command.",
        "is_correct": true
      },
      {
        "text": "an IPv6 link-local address on the adjacent router.",
        "is_correct": false
      },
      {
        "text": "an administrative distance of 2.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.1.4",
    "topic": "Topic 15.1.4",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q47",
    "original_num": 47,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. Which interface will be the exit interface to forward a data packet that has the destination IP address 172.18.109.152?",
    "images": [
      "images/m14-16_q47_0.svg"
    ],
    "options": [
      {
        "text": "GigabitEthernet0/0",
        "is_correct": false
      },
      {
        "text": "GigabitEthernet0/1",
        "is_correct": false
      },
      {
        "text": "Serial0/0/0",
        "is_correct": true
      },
      {
        "text": "None, the packet will be dropped.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.1.3",
    "topic": "Topic 14.1.3",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q48",
    "original_num": 48,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. What will the router do with a packet that has a destination IP address of 192.168.12.227?",
    "images": [
      "images/m14-16_q48_0.jpg"
    ],
    "options": [
      {
        "text": "Drop the packet.",
        "is_correct": false
      },
      {
        "text": "Send the packet out the GigabitEthernet0/0 interface.",
        "is_correct": false
      },
      {
        "text": "Send the packet out the Serial0/0/0 interface.",
        "is_correct": true
      },
      {
        "text": "Send the packet out the GigabitEthernet0/1 interface.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.4.9\nAfter a router determines the destination network by ANDing the destination IP address with the subnet mask, the router examines the routing table for the resulting destination network number. When a match is found, the packet is sent to the interface associated with the network number. When no routing table entry is found for the particular network, the default gateway or gateway of last resort (if configured or known) is used. If there is no gateway of last resort, the packet is dropped. In this instance, the 192.168.12.224 network is not found in the routing table and the router uses the gateway of last resort. The gateway of last resort is the IP address of 209.165.200.226. The router knows this is an IP address that is associated with the 209.165.200.224 network. The router then proceeds to transmit the packet out the Serial0/0/0 interface, or the interface that is associated with 209.165.200.224.",
    "topic": "Topic 14.4.9",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q49",
    "original_num": 49,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Consider the following command:\nip route 192.168.10.0 255.255.255.0 10.10.10.2 5\nWhich route would have to go down in order for this static route to appear in the routing table?",
    "images": [],
    "options": [
      {
        "text": "a default route",
        "is_correct": false
      },
      {
        "text": "a static route to the 192.168.10.0/24 network",
        "is_correct": true
      },
      {
        "text": "an OSPF-learned route to the 192.168.10.0/24 network",
        "is_correct": false
      },
      {
        "text": "an EIGRP-learned route to the 192.168.10.0/24 network",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.4.1\nThe administrative distance of 5 added to the end of the static route creates a floating static situation for a static route that goes down. Static routes have a default administrative distance of 1. This route that has an administrative distance of 5 will not be placed into the routing table unless the previously entered static route to the 192.168.10.0/24 goes down or was never entered. The administrative distance of 5 added to the end of the static route configuration creates a floating static route that will be placed in the routing table when the primary route to the same destination network goes down. By default, a static route to the 192.168.10.0/24 network has an administrative distance of 1. Therefore, the floating route with an administrative distance of 5 will not be placed into the routing table unless the previously entered static route to the 192.168.10.0/24 goes down or was never entered. Because the floating route has an administrative distance of 5, the route is preferred to an OSPF-learned route (with the administrative distance of 110) or an EIGRP-learned route (with the administrative distance of 110) to the same destination network.",
    "topic": "Topic 15.4.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q50",
    "original_num": 50,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What are two advantages of static routing over dynamic routing? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "Static routing is more secure because it does not advertise over the network.",
        "is_correct": true
      },
      {
        "text": "Static routing scales well with expanding networks.",
        "is_correct": false
      },
      {
        "text": "Static routing requires very little knowledge of the network for correct implementation.",
        "is_correct": false
      },
      {
        "text": "Static routing uses fewer router resources than dynamic routing.",
        "is_correct": true
      },
      {
        "text": "Static routing is relatively easy to configure for large networks.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.5.1\nStatic routing requires a thorough understanding of the entire network for proper implementation. It can be prone to errors and does not scale well for large networks. Static routing uses fewer router resources, because no computing is required for updating routes. Static routing can also be more secure because it does not advertise over the network.",
    "topic": "Topic 14.5.1",
    "module": 14,
    "type": "multiple"
  },
  {
    "id": "m14-16_q51",
    "original_num": 51,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What characteristic completes the following statement?\nWhen an IPv6 static route is configured, it is possible that the same IPv6 link-local address is used for ...",
    "images": [],
    "options": [
      {
        "text": "a destination host route with a /128 prefix.",
        "is_correct": false
      },
      {
        "text": "the “ipv6 unicast-routing” command.",
        "is_correct": false
      },
      {
        "text": "the next-hop address of two different adjacent routers.",
        "is_correct": true
      },
      {
        "text": "an administrative distance of 2.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.2.6",
    "topic": "Topic 15.2.6",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q52",
    "original_num": 52,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "A network administrator configures the interface fa0/0 on the router R1 with the command ip address 172.16.1.254 255.255.255.0. However, when the administrator issues the command show ip route, the routing table does not show the directly connected network. What is the possible cause of the problem?",
    "images": [],
    "options": [
      {
        "text": "The subnet mask is incorrect for the IPv4 address.",
        "is_correct": false
      },
      {
        "text": "The configuration needs to be saved first.",
        "is_correct": false
      },
      {
        "text": "The interface fa0/0 has not been activated.",
        "is_correct": true
      },
      {
        "text": "No packets with a destination network of 172.16.1.0 have been sent to R1.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.4.4\nA directly connected network will be added to the routing table when these three conditions are met: (1) the interface is configured with a valid IP address; (2) it is activated with no shutdown command; and (3) it receives a carrier signal from another device that is connected to the interface. An incorrect subnet mask for an IPv4 address will not prevent its appearance in the routing table, although the error may prevent successful communications.",
    "topic": "Topic 14.4.4",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q53",
    "original_num": 53,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. What command would be used to configure a static route on R1 so that traffic from both LANs can reach the 2001:db8:1:4::/64 remote network?",
    "images": [
      "images/m14-16_q53_0.jpg"
    ],
    "options": [
      {
        "text": "ipv6 route 2001:db8:1:4::/64 2001:db8:1:3::1",
        "is_correct": false
      },
      {
        "text": "ipv6 route 2001:db8:1::/65 2001:db8:1:3::1",
        "is_correct": false
      },
      {
        "text": "ipv6 route ::/0 serial0/0/0",
        "is_correct": false
      },
      {
        "text": "ipv6 route 2001:db8:1:4::/64 2001:db8:1:3::2",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.2.2\nTo configure an IPv6 static route, use the ipv6 route command followed by the destination network. Then add either the IP address of the adjacent router or the interface R1 will use to transmit a packet to the 2001:db8:1:4::/64 network.",
    "topic": "Topic 15.2.2",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q54",
    "original_num": 54,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. What two commands will change the next-hop address for the 10.0.0.0/8 network from 172.16.40.2 to 192.168.1.2? (Choose two.)",
    "images": [
      "images/m14-16_q54_0.jpg"
    ],
    "options": [
      {
        "text": "A(config)# ip route 10.0.0.0 255.0.0.0 192.168.1.2",
        "is_correct": true
      },
      {
        "text": "A(config)# ip route 10.0.0.0 255.0.0.0 s0/0/0",
        "is_correct": false
      },
      {
        "text": "A(config)# no ip address 10.0.0.1 255.0.0.0 172.16.40.2",
        "is_correct": false
      },
      {
        "text": "A(config)# no network 10.0.0.0 255.0.0.0 172.16.40.2",
        "is_correct": false
      },
      {
        "text": "A(config)# no ip route 10.0.0.0 255.0.0.0 172.16.40.2",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.1.3\nThe two required commands are A(config)# no ip route 10.0.0.0 255.0.0.0 172.16.40.2 and A(config)# ip route 10.0.0.0 255.0.0.0 192.168.1.2.",
    "topic": "Topic 15.1.3",
    "module": 15,
    "type": "multiple"
  },
  {
    "id": "m14-16_q55",
    "original_num": 55,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. Which interface will be the exit interface to forward a data packet that has the destination IP address 192.168.139.244?",
    "images": [
      "images/m14-16_q55_0.svg"
    ],
    "options": [
      {
        "text": "GigabitEthernet0/1",
        "is_correct": true
      },
      {
        "text": "None, the packet will be dropped.",
        "is_correct": false
      },
      {
        "text": "Serial0/0/1",
        "is_correct": false
      },
      {
        "text": "GigabitEthernet0/0",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.1.3",
    "topic": "Topic 14.1.3",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q56",
    "original_num": 56,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What characteristic completes the following statement?\nWhen an IPv6 static route is configured, a fully-specified configuration should be used with ...",
    "images": [],
    "options": [
      {
        "text": "::/0.",
        "is_correct": false
      },
      {
        "text": "the \"ipv6 unicast-routing\" command.",
        "is_correct": false
      },
      {
        "text": "the next-hop address of two different adjacent routers.",
        "is_correct": false
      },
      {
        "text": "a directly connected multiaccess network.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.2.6",
    "topic": "Topic 15.2.6",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q57",
    "original_num": 57,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. Which interface will be the exit interface to forward a data packet that has the destination IP address 192.168.71.52?",
    "images": [
      "images/m14-16_q57_0.svg"
    ],
    "options": [
      {
        "text": "The packet will take the gateway of last resort.",
        "is_correct": false
      },
      {
        "text": "GigabitEthernet0/1",
        "is_correct": false
      },
      {
        "text": "Serial0/0/0",
        "is_correct": true
      },
      {
        "text": "None, the packet will be dropped.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.1.3",
    "topic": "Topic 14.1.3",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q58",
    "original_num": 58,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "What characteristic completes the following statement?\nWhen an IPv6 static route is configured, the installation of the route can be verified with ......",
    "images": [],
    "options": [
      {
        "text": "a destination host route with a /128 prefix.",
        "is_correct": false
      },
      {
        "text": "the interface type and interface number.",
        "is_correct": false
      },
      {
        "text": "the \"show ipv6 route static\" command.",
        "is_correct": true
      },
      {
        "text": "an administrative distance of 2.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.2.7",
    "topic": "Topic 15.2.7",
    "module": 15,
    "type": "single"
  },
  {
    "id": "m14-16_q59",
    "original_num": 59,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. Which interface will be the exit interface to forward a data packet that has the destination IP address 10.55.99.78?",
    "images": [
      "images/m14-16_q59_0.svg"
    ],
    "options": [
      {
        "text": "None, the packet will be dropped.",
        "is_correct": false
      },
      {
        "text": "GigabitEthernet0/0",
        "is_correct": false
      },
      {
        "text": "GigabitEthernet0/1",
        "is_correct": false
      },
      {
        "text": "Serial0/0/1",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 14.1.3",
    "topic": "Topic 14.1.3",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q60",
    "original_num": 60,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "A network administrator configures the interface fa0/0 on the router R1 with the command ip address 172.16.1.254 255.255.255.0. However, when the administrator issues the command show ip route, the routing table does not show the directly connected network. What is the possible cause of the problem?",
    "images": [],
    "options": [
      {
        "text": "The subnet mask is incorrect for the IPv4 address.",
        "is_correct": false
      },
      {
        "text": "No packets with a destination network of 172.16.1.0 have been sent to R1.",
        "is_correct": false
      },
      {
        "text": "The configuration needs to be saved first.",
        "is_correct": false
      },
      {
        "text": "The interface fa0/0 has not been activated.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 14.4.4\nA directly connected network will be added to the routing table when these three conditions are met: (1) the interface is configured with a valid IP address; (2) it is activated with no shutdown command; and (3) it receives a carrier signal from another device that is connected to the interface. An incorrect subnet mask for an IPv4 address will not prevent its appearance in the routing table, although the error may prevent successful communications.",
    "topic": "Topic 14.4.4",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q61",
    "original_num": 61,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. Which interface will be the exit interface to forward a data packet that has the destination IP address 10.3.86.2?",
    "images": [
      "images/m14-16_q61_0.svg"
    ],
    "options": [
      {
        "text": "GigabitEthernet0/1",
        "is_correct": false
      },
      {
        "text": "Serial0/0/1",
        "is_correct": false
      },
      {
        "text": "GigabitEthernet0/0",
        "is_correct": false
      },
      {
        "text": "Serial0/0/0",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 14.1.3",
    "topic": "Topic 14.1.3",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q62",
    "original_num": 62,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Match the characteristic to the corresponding type of routing. (Not all options are used.)",
    "images": [
      "images/m14-16_q62_0.jpg"
    ],
    "options": [],
    "explanation": "Explanation: Topic 14.5.1\nBoth static and dynamic routing could be used when more than one router is involved. Dynamic routing is when a routing protocol is used. Static routing is when every remote route is entered manually by an administrator into every router in the network topology.",
    "topic": "Topic 14.5.1",
    "module": 14,
    "type": "match",
    "match_data": {
      "left_title": "Đặc điểm (Characteristic)",
      "right_title": "Phương thức định tuyến (Routing Type)",
      "pairs": [
        {
          "term": "Typically used on stub networks",
          "desc": "Static routing",
          "term_vi": "Thường được dùng trên mạng cụt (stub networks - chỉ có 1 đường ra)",
          "desc_vi": "Định tuyến tĩnh (Static routing)"
        },
        {
          "term": "Less routing overhead",
          "desc": "Static routing",
          "term_vi": "Ít tốn tài nguyên CPU/RAM và băng thông (không trao đổi gói cập nhật định kỳ)",
          "desc_vi": "Định tuyến tĩnh (Static routing)"
        },
        {
          "term": "New networks are added automatically to the routing table",
          "desc": "Dynamic routing",
          "term_vi": "Các mạng mới được tự động học và thêm vào bảng định tuyến",
          "desc_vi": "Định tuyến động (Dynamic routing)"
        },
        {
          "term": "Best choice for networks with multiple routers",
          "desc": "Dynamic routing",
          "term_vi": "Lựa chọn tốt nhất cho các mạng phức tạp có nhiều router kết nối",
          "desc_vi": "Định tuyến động (Dynamic routing)"
        }
      ],
      "distractors": []
    }
  },
  {
    "id": "m14-16_q63",
    "original_num": 63,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Refer to the exhibit. Which interface will be the exit interface to forward a data packet that has the destination IP address 172.25.128.244?",
    "images": [
      "images/m14-16_q63_0.svg"
    ],
    "options": [
      {
        "text": "GigabitEthernet0/0",
        "is_correct": false
      },
      {
        "text": "GigabitEthernet0/1",
        "is_correct": true
      },
      {
        "text": "None, the packet will be dropped.",
        "is_correct": false
      },
      {
        "text": "Serial0/0/1",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.1.3",
    "topic": "Topic 14.1.3",
    "module": 14,
    "type": "single"
  },
  {
    "id": "m14-16_q64",
    "original_num": 64,
    "source_group": "m14-16",
    "source_title": "Modules 14 - 16: Routing Concepts and Configuration",
    "question": "Ipv6 route 2001:0DB8::/32 2001:0DB8:3000::1\nWhich static route is configured here?",
    "images": [],
    "options": [
      {
        "text": "Floating static",
        "is_correct": false
      },
      {
        "text": "Recursive static",
        "is_correct": true
      },
      {
        "text": "Directly attached static",
        "is_correct": false
      },
      {
        "text": "Fully specified static",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.1.2\nThe Router has to look up in the routing table twice to find the exit interface. The first is shown in the Question now the router has to lookup what interface ex.s0/0/0 that the 3000::1 address is associated with. route table ex. 2001:0DB8:3000::1 is directly connected, Serial0/0/0. This is the 2nd lookup in the table to find out that the packet needs to exit the s0/0/0 interface making the first route a recursive and 2nd route a direct.",
    "topic": "Topic 15.1.2",
    "module": 15,
    "type": "single"
  },
  {
    "id": "final_q1",
    "original_num": 1,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "A network administrator is using the router-on-a-stick method to configure inter-VLAN routing. Switch port Gi1/1 is used to connect to the router. Which command should be entered to prepare this port for the task?",
    "images": [],
    "options": [
      {
        "text": "Switch(config)# interface gigabitethernet 1/1\nSwitch(config-if)# spanning-tree vlan 1",
        "is_correct": false
      },
      {
        "text": "Switch(config)# interface gigabitethernet 1/1\nSwitch(config-if)# spanning-tree portfast",
        "is_correct": false
      },
      {
        "text": "Switch(config)# interface gigabitethernet 1/1\nSwitch(config-if)# switchport mode trunk",
        "is_correct": true
      },
      {
        "text": "Switch(config)# interface gigabitethernet 1/1\nSwitch(config-if)# switchport access vlan 1",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.2.2\nWith the router-on-a-stick method, the switch port that connects to the router must be configured as trunk mode. This can be done with the command Switch(config-if)# switchport mode trunk. The other options do not put the switch port into trunk mode.",
    "topic": "Topic 4.2.2",
    "module": 4,
    "type": "single"
  },
  {
    "id": "final_q2",
    "original_num": 2,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. The configuration shows commands entered by a network administrator for inter-VLAN routing. However, host H1 cannot communicate with H2. Which part of the inter-VLAN configuration causes the problem?",
    "images": [
      "images/final_q2_0.png"
    ],
    "options": [
      {
        "text": "trunking",
        "is_correct": false
      },
      {
        "text": "port mode on the two switch FastEthernet ports",
        "is_correct": false
      },
      {
        "text": "VLAN configuration",
        "is_correct": true
      },
      {
        "text": "router port configuration",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.4.5\nAll Cisco switch ports are assigned to VLAN 1 by default. For VLAN implementation, ports Fa0/1 and Fa0/2 should be assigned to VLAN 10 and VLAN 20, respectively. The missing commands on S1 are as follows: switchport access vlan 10 and switchport access vlan 20 .",
    "topic": "Topic 4.4.5",
    "module": 4,
    "type": "single"
  },
  {
    "id": "final_q3",
    "original_num": 3,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. Inter-VLAN communication between VLAN 10, VLAN 20, and VLAN 30 is not successful. What is the problem?",
    "images": [
      "images/final_q3_0.jpg"
    ],
    "options": [
      {
        "text": "The access interfaces do not have IP addresses and each should be configured with an IP address.",
        "is_correct": false
      },
      {
        "text": "The switch interface FastEthernet0/1 is configured as an access interface and should be configured as a trunk interface.",
        "is_correct": true
      },
      {
        "text": "The switch interface FastEthernet0/1 is configured to not negotiate and should be configured to negotiate.​",
        "is_correct": false
      },
      {
        "text": "The switch interfaces FastEthernet0/2, FastEthernet0/3, and FastEthernet0/4 are configured to not negotiate and should be configured to negotiate.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 4.4.4\nTo forward all VLANs to the router, the switch interface Fa0/1 must be configured as a trunk interface with the switchport mode trunk command.",
    "topic": "Topic 4.4.4",
    "module": 4,
    "type": "single"
  },
  {
    "id": "final_q4",
    "original_num": 4,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "An employee connects wirelessly to the company network using a cell phone. The employee then configures the cell phone to act as a wireless access point that will allow new employees to connect to the company network. Which type of security threat best describes this situation?",
    "images": [],
    "options": [
      {
        "text": "cracking",
        "is_correct": false
      },
      {
        "text": "denial of service",
        "is_correct": false
      },
      {
        "text": "rogue access point",
        "is_correct": true
      },
      {
        "text": "spoofing",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 12.6.4\nConfiguring the cell phone to act as a wireless access point means that the cell phone is now a rogue access point. The employee unknowingly breached the security of the company network by allowing a user to access the network without connecting through the company access point. Cracking is the process of obtaining passwords from data stored or transmitted on a network. Denial of service attacks refer to sending large amounts of data to a networked device, such as a server, to prevent legitimate access to the server. Spoofing refers to access gained to a network or data by an attacker appearing to be a legitimate network device or user.",
    "topic": "Topic 12.6.4",
    "module": 12,
    "type": "single"
  },
  {
    "id": "final_q5",
    "original_num": 5,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Which combination of WLAN authentication and encryption is recommended as a best practice for home users?",
    "images": [],
    "options": [
      {
        "text": "WPA2 and AES",
        "is_correct": true
      },
      {
        "text": "WEP and RC4",
        "is_correct": false
      },
      {
        "text": "WPA and PSK",
        "is_correct": false
      },
      {
        "text": "EAP and AES",
        "is_correct": false
      },
      {
        "text": "WEP and TKIP",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 12.7.4\nWPA2 is the Wi-Fi alliance version of 802.11i, the industry standard for authentication. Neither WEP nor WPA possess the level of authentication provided by WPA2. AES aligns with WPA2 as an encryption standard, and is stronger than TKIP or RC4. PSK refers to pre-shared passwords, an authentication method that can be used by either WPA or WPA2. EAP is intended for use with enterprise networks which use a RADIUS server.",
    "topic": "Topic 12.7.4",
    "module": 12,
    "type": "single"
  },
  {
    "id": "final_q6",
    "original_num": 6,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "What are the two methods that a wireless NIC can use to discover an AP? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "transmitting a probe request",
        "is_correct": true
      },
      {
        "text": "sending an ARP request broadcast",
        "is_correct": false
      },
      {
        "text": "receiving a broadcast beacon frame",
        "is_correct": true
      },
      {
        "text": "initiating a three-way handshake",
        "is_correct": false
      },
      {
        "text": "sending a multicast frame",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 12.3.7\nTwo methods can be used by a wireless device to discover and register with an access point: passive mode and active mode. In passive mode, the AP sends a broadcast beacon frame that contains the SSID and other wireless settings. In active mode, the wireless device must be manually configured for the SSID, and then the device broadcasts a probe request.",
    "topic": "Topic 12.3.7",
    "module": 12,
    "type": "multiple"
  },
  {
    "id": "final_q7",
    "original_num": 7,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "What address and prefix length is used when configuring an IPv6 default static route?",
    "images": [],
    "options": [
      {
        "text": "::/0",
        "is_correct": true
      },
      {
        "text": "::1/128",
        "is_correct": false
      },
      {
        "text": "0.0.0.0/0",
        "is_correct": false
      },
      {
        "text": "FF02::1/8",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.3.1\nThe IPv6 address and prefix for a default static route is ::/0. This represents all zeros in the address and a prefix length of zero.",
    "topic": "Topic 15.3.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "final_q8",
    "original_num": 8,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. Match the description with the routing table entries. (Not all options are used.)",
    "images": [
      "images/final_q8_0.gif",
      "images/final_q8_1.webp"
    ],
    "options": [],
    "explanation": "Explanation: Topic 14.4.3\nroute source protocol = D (which is EIGRP)\ndestination network = 10.3.0.0\nmetric = 21024000\nadministrative distance = 1\nnext hop = 172.16.2.2\nroute timestamp = 00:22:15",
    "topic": "Topic 14.4.3",
    "module": 14,
    "type": "match",
    "exhibit_answer_img": "images/final_q8_1.webp",
    "match_data": {
      "left_title": "Thành phần bảng định tuyến (Routing Table Entry)",
      "right_title": "Giá trị tương ứng trong sơ đồ (Exhibit Value)",
      "pairs": [
        {
          "term": "route source protocol",
          "desc": "D (which is EIGRP)",
          "term_vi": "Giao thức nguồn tạo tuyến đường",
          "desc_vi": "D (viết tắt của giao thức EIGRP)"
        },
        {
          "term": "destination network",
          "desc": "10.3.0.0",
          "term_vi": "Mạng đích cần đến",
          "desc_vi": "10.3.0.0"
        },
        {
          "term": "administrative distance",
          "desc": "90",
          "term_vi": "Chỉ số độ tin cậy Administrative Distance (AD)",
          "desc_vi": "90 (AD chuẩn của EIGRP internal)"
        },
        {
          "term": "metric",
          "desc": "21024000",
          "term_vi": "Chi phí đo lường tuyến đường (Metric / Cost)",
          "desc_vi": "21024000"
        },
        {
          "term": "next hop",
          "desc": "172.16.2.2",
          "term_vi": "Địa chỉ IP cổng bước nhảy kế tiếp (Next-hop)",
          "desc_vi": "172.16.2.2"
        },
        {
          "term": "route timestamp",
          "desc": "00:22:15",
          "term_vi": "Thời gian cập nhật tuyến đường",
          "desc_vi": "00:22:15"
        }
      ],
      "distractors": [
        {
          "term": "exit interface",
          "desc": "Serial0/0/0",
          "term_vi": "Cổng giao tiếp đầu ra",
          "desc_vi": "Serial0/0/0"
        },
        {
          "term": "metric",
          "desc": "1",
          "term_vi": "Chỉ số AD",
          "desc_vi": "1"
        }
      ]
    }
  },
  {
    "id": "final_q9",
    "original_num": 9,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. Which interface will be the exit interface to forward a data packet that has the destination IP address 172.18.109.152?",
    "images": [
      "images/final_q9_0.svg"
    ],
    "options": [
      {
        "text": "GigabitEthernet0/0",
        "is_correct": false
      },
      {
        "text": "GigabitEthernet0/1",
        "is_correct": false
      },
      {
        "text": "Serial0/0/0",
        "is_correct": true
      },
      {
        "text": "None, the packet will be dropped.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.1.3",
    "topic": "Topic 14.1.3",
    "module": 14,
    "type": "single"
  },
  {
    "id": "final_q10",
    "original_num": 10,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Match the dynamic routing protocol component to the characteristic. (Not all options are used.)",
    "images": [
      "images/final_q10_0.webp"
    ],
    "options": [],
    "explanation": "Explanation: Topic 14.5.3",
    "topic": "Topic 14.5.3",
    "module": 14,
    "type": "match",
    "exhibit_answer_img": "images/final_q10_0.webp",
    "match_data": {
      "left_title": "Thành phần giao thức (Protocol Component)",
      "right_title": "Đặc điểm chức năng (Characteristic)",
      "pairs": [
        {
          "term": "data structures",
          "desc": "tables or databases that are stored in RAM",
          "term_vi": "Cấu trúc dữ liệu (Data structures)",
          "desc_vi": "Bảng hoặc cơ sở dữ liệu lưu trữ trực tiếp trên bộ nhớ RAM"
        },
        {
          "term": "routing protocol messages",
          "desc": "exchanges routing information and maintains accurate information about networks",
          "term_vi": "Thông điệp định tuyến (Protocol messages)",
          "desc_vi": "Trao đổi thông tin định tuyến và duy trì trạng thái chính xác của các mạng"
        },
        {
          "term": "algorithm",
          "desc": "a finite list of steps used to determine the best path",
          "term_vi": "Thuật toán định tuyến (Algorithm)",
          "desc_vi": "Chuỗi các bước hữu hạn được thực thi để tính toán ra đường dẫn tốt nhất"
        }
      ],
      "distractors": []
    }
  },
  {
    "id": "final_q11",
    "original_num": 11,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Which statement describes the behavior of a switch when the MAC address table is full?",
    "images": [],
    "options": [
      {
        "text": "It treats frames as unknown unicast and floods all incoming frames to all ports on the switch.",
        "is_correct": false
      },
      {
        "text": "It treats frames as unknown unicast and floods all incoming frames to all ports across multiple switches.",
        "is_correct": false
      },
      {
        "text": "It treats frames as unknown unicast and floods all incoming frames to all ports within the local VLAN.",
        "is_correct": true
      },
      {
        "text": "It treats frames as unknown unicast and floods all incoming frames to all ports within the collision domain.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 10.4.2\nWhen the MAC address table is full, the switch treats the frame as an unknown unicast and begins to flood all incoming traffic to all ports only within the local VLAN.",
    "topic": "Topic 10.4.2",
    "module": 10,
    "type": "single"
  },
  {
    "id": "final_q12",
    "original_num": 12,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Which term describes the role of a Cisco switch in the 802.1X port-based access control?",
    "images": [],
    "options": [
      {
        "text": "agent",
        "is_correct": false
      },
      {
        "text": "supplicant",
        "is_correct": false
      },
      {
        "text": "authenticator",
        "is_correct": true
      },
      {
        "text": "authentication server",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 10.2.6\n802.1X port-based authentication defines specific roles for the devices in the network: Client (Supplicant) – The device that requests access to LAN and switch services\nSwitch (Authenticator) – Controls physical access to the network based on the authentication status of the client\nAuthentication server – Performs the actual authentication of the client",
    "topic": "Topic 10.2.6",
    "module": 10,
    "type": "single"
  },
  {
    "id": "final_q13",
    "original_num": 13,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "What is a result of connecting two or more switches together?",
    "images": [],
    "options": [
      {
        "text": "The number of broadcast domains is increased.",
        "is_correct": false
      },
      {
        "text": "The size of the broadcast domain is increased.",
        "is_correct": true
      },
      {
        "text": "The number of collision domains is reduced.",
        "is_correct": false
      },
      {
        "text": "The size of the collision domain is increased.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.2.2\nWhen two or more switches are connected together, the size of the broadcast domain is increased and so is the number of collision domains. The number of broadcast domains is increased only when routers are added.",
    "topic": "Topic 2.2.2",
    "module": 2,
    "type": "single"
  },
  {
    "id": "final_q14",
    "original_num": 14,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "A small publishing company has a network design such that when a broadcast is sent on the LAN, 200 devices receive the transmitted broadcast. How can the network administrator reduce the number of devices that receive broadcast traffic?",
    "images": [],
    "options": [
      {
        "text": "Add more switches so that fewer devices are on a particular switch.",
        "is_correct": false
      },
      {
        "text": "Replace the switches with switches that have more ports per switch. This will allow more devices on a particular switch.",
        "is_correct": false
      },
      {
        "text": "Segment the LAN into smaller LANs and route between them.",
        "is_correct": true
      },
      {
        "text": "Replace at least half of the switches with hubs to reduce the size of the broadcast domain.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.2.2\nBy dividing the one big network into two smaller network, the network administrator has created two smaller broadcast domains. When a broadcast is sent on the network now, the broadcast will only be sent to the devices on the same Ethernet LAN. The other LAN will not receive the broadcast.",
    "topic": "Topic 2.2.2",
    "module": 2,
    "type": "single"
  },
  {
    "id": "final_q15",
    "original_num": 15,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. How is a frame sent from PCA forwarded to PCC if the MAC address table on switch SW1 is empty?",
    "images": [
      "images/final_q15_0.png"
    ],
    "options": [
      {
        "text": "SW1 forwards the frame directly to SW2. SW2 floods the frame to all ports connected to SW2, excluding the port through which the frame entered the switch.",
        "is_correct": false
      },
      {
        "text": "SW1 floods the frame on all ports on the switch, excluding the interconnected port to switch SW2 and the port through which the frame entered the switch.",
        "is_correct": false
      },
      {
        "text": "SW1 floods the frame on all ports on SW1, excluding the port through which the frame entered the switch.",
        "is_correct": true
      },
      {
        "text": "SW1 drops the frame because it does not know the destination MAC address.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.1.3\nWhen a switch powers on, the MAC address table is empty. The switch builds the MAC address table by examining the source MAC address of incoming frames. The switch forwards based on the destination MAC address found in the frame header. If a switch has no entries in the MAC address table or if the destination MAC address is not in the switch table, the switch will forward the frame out all ports except the port that brought the frame into the switch.",
    "topic": "Topic 2.1.3",
    "module": 2,
    "type": "single"
  },
  {
    "id": "final_q16",
    "original_num": 16,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "What are two switch characteristics that could help alleviate network congestion? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "fast internal switching",
        "is_correct": true
      },
      {
        "text": "large frame buffers",
        "is_correct": true
      },
      {
        "text": "store-and-forward switching",
        "is_correct": false
      },
      {
        "text": "low port density",
        "is_correct": false
      },
      {
        "text": "frame check sequence (FCS) check",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 2.2.3\nSwitch characteristics that help alleviate network congestion include fast port speeds, fast internal switching, large frame buffers, and high port density.",
    "topic": "Topic 2.2.3",
    "module": 2,
    "type": "multiple"
  },
  {
    "id": "final_q17",
    "original_num": 17,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "A network engineer is configuring a LAN with a redundant first hop to make better use of the available network resources. Which protocol should the engineer implement?",
    "images": [],
    "options": [
      {
        "text": "FHRP",
        "is_correct": false
      },
      {
        "text": "GLBP",
        "is_correct": true
      },
      {
        "text": "HSRP",
        "is_correct": false
      },
      {
        "text": "VRRP",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 9.1.4\nGateway Load Balancing Protocol (GLBP) provides load sharing between a group of redundant routers while also protecting data traffic from a failed router or circuit.",
    "topic": "Topic 9.1.4",
    "module": 9,
    "type": "single"
  },
  {
    "id": "final_q18",
    "original_num": 18,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Match the FHRP protocols to the appropriate description. (Not all options are used.)",
    "images": [
      "images/final_q18_0.webp"
    ],
    "options": [],
    "explanation": "Explanation: Topic 9.1.4\nGLBP, A Cisco proprietary FHRP that provides load sharing in addition to redundancy. HSRP A Cisco proprietary FHRP that provides redundancy through use of an active device and standby device. VRRP, An open standard FHRP that provides redundancy through use of a virtual routers master and one or more backups. Distractor, A legacy open standard FHRP that allows IPv4 hosts to discover gateway routers.",
    "topic": "Topic 9.1.4",
    "module": 9,
    "type": "match",
    "exhibit_answer_img": "images/final_q18_0.webp",
    "match_data": {
      "left_title": "Giao thức FHRP (FHRP Protocol)",
      "right_title": "Mô tả tính năng tương ứng (Description)",
      "pairs": [
        {
          "term": "HSRP",
          "desc": "a Cisco proprietary FHRP that provides redundancy through use of an active device and standby device",
          "term_vi": "HSRP",
          "desc_vi": "Giao thức độc quyền của Cisco cung cấp dự phòng gateway qua 1 thiết bị Active và 1 thiết bị Standby"
        },
        {
          "term": "VRRP",
          "desc": "an open standard FHRP that provides redundancy through use of a virtual routers master and one or more backups",
          "term_vi": "VRRP",
          "desc_vi": "Chuẩn mở IETF cung cấp dự phòng qua 1 router Master và 1 hoặc nhiều router Backup"
        },
        {
          "term": "GLBP",
          "desc": "a Cisco proprietary FHRP that provides load sharing in addition to redundancy",
          "term_vi": "GLBP",
          "desc_vi": "Giao thức độc quyền của Cisco vừa cung cấp dự phòng vừa hỗ trợ cân bằng tải lưu lượng (Load Sharing)"
        }
      ],
      "distractors": [
        {
          "term": "IRDP",
          "desc": "a legacy open standard FHRP that allows IPv4 hosts to discover gateway routers",
          "term_vi": "IRDP",
          "desc_vi": "Chuẩn cũ cho phép host tự động phát hiện router gateway"
        }
      ]
    }
  },
  {
    "id": "final_q19",
    "original_num": 19,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "After sticky learning of MAC addresses is enabled, what action is needed to prevent dynamically learned MAC addresses from being lost in the event that an associated interface goes down?",
    "images": [],
    "options": [
      {
        "text": "Reboot the switch.",
        "is_correct": false
      },
      {
        "text": "Copy the running configuration to the startup configuration.",
        "is_correct": true
      },
      {
        "text": "Shut down the interface then enable it again with the no shutdown command.",
        "is_correct": false
      },
      {
        "text": "Configure port security for violation protect mode.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 11.1.4\nWhen sticky learning is enabled, dynamically learned MAC addresses are stored in the running configuration in RAM and will be lost if the switch is rebooted or an interface goes down. To prevent the loss of learned MAC addresses, an administrator can save the running configuration into the startup configuration in NVRAM.",
    "topic": "Topic 11.1.4",
    "module": 11,
    "type": "single"
  },
  {
    "id": "final_q20",
    "original_num": 20,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "A small coffee shop is offering free Wi-Fi to customers. The network includes a wireless router and a DSL modem that is connected to the local phone company. What method is typically used to configure the connection to the phone company?",
    "images": [],
    "options": [
      {
        "text": "Set the WAN connection in the wireless router as a DHCP client.",
        "is_correct": true
      },
      {
        "text": "Set the connection between the wireless router and the DSL modem as a private IP network.",
        "is_correct": false
      },
      {
        "text": "Set the DSL modem as a DHCP client to get a public IP address from the wireless router.",
        "is_correct": false
      },
      {
        "text": "Set the DSL modem as a DHCP client to the phone company and a DHCP server for the internal connection.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.3.3\nIn a SOHO environment, a wireless router connects to an ISP via a DSL or cable modem. The IP address between the wireless router and ISP site is typically assigned by the ISP through DHCP. The DSL modem does not manage IP address allocation.",
    "topic": "Topic 7.3.3",
    "module": 7,
    "type": "single"
  },
  {
    "id": "final_q21",
    "original_num": 21,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Match the purpose with its DHCP message type. (Not all options are used.)",
    "images": [
      "images/final_q21_0.webp"
    ],
    "options": [],
    "explanation": "Explanation: Topic 7.1.3\n\n\n\nDHCPREQUEST\nA message that is used to locate any available DHCP server on a network\n\n\nDHCPOFFER\nA message that is used to suggest a lease to a client\n\n\nDHCPDISCOVER\nA message that is used to identify the explicit server and lease offer to accept\n\n\nDHCPNAK\nA message that is used to acknowledge that the lease is successful\n\n\nDHCPACK\nA message is used by a server to finalize a successful lease with a client",
    "topic": "Topic 7.1.3",
    "module": 7,
    "type": "match",
    "exhibit_answer_img": "images/final_q21_0.webp",
    "match_data": {
      "left_title": "Mục đích sử dụng (Purpose)",
      "right_title": "Loại thông điệp DHCP tương ứng (DHCP Message)",
      "pairs": [
        {
          "term": "A message that is used to locate any available DHCP server on a network",
          "desc": "DHCPDISCOVER",
          "term_vi": "Thông điệp tìm kiếm các DHCP server khả dụng trên mạng",
          "desc_vi": "DHCPDISCOVER"
        },
        {
          "term": "A message that is used to suggest a lease to a client",
          "desc": "DHCPOFFER",
          "term_vi": "Thông điệp do server gửi đề xuất cấp gói IP cho client",
          "desc_vi": "DHCPOFFER"
        },
        {
          "term": "A message that is used to identify the explicit server and lease offer to accept",
          "desc": "DHCPREQUEST",
          "term_vi": "Thông điệp do client gửi yêu cầu chấp nhận lời đề nghị cấp IP",
          "desc_vi": "DHCPREQUEST"
        },
        {
          "term": "A message is used by a server to finalize a successful lease with a client",
          "desc": "DHCPACK",
          "term_vi": "Thông điệp do server gửi xác nhận việc cấp phát IP hoàn tất thành công",
          "desc_vi": "DHCPACK"
        }
      ],
      "distractors": [
        {
          "term": "A message that is used to reject a lease",
          "desc": "DHCPNAK",
          "term_vi": "Thông điệp từ chối",
          "desc_vi": "DHCPNAK"
        }
      ]
    }
  },
  {
    "id": "final_q22",
    "original_num": 22,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Match the spanning-tree feature with the protocol type. (Not all options are used.)",
    "images": [
      "images/final_q22_0.webp"
    ],
    "options": [],
    "explanation": "Explanation:Topic 5.3.1\nPlace the options in the following order:",
    "topic": "Topic 5.3.1",
    "module": 5,
    "type": "match",
    "exhibit_answer_img": "images/final_q22_0.webp",
    "match_data": {
      "left_title": "Giao thức STP (STP Protocol)",
      "right_title": "Đặc điểm / Chuẩn hoạt động (Feature / Standard)",
      "pairs": [
        {
          "term": "PVST+",
          "desc": "Cisco implementation of IEEE 802.1D",
          "term_vi": "PVST+",
          "desc_vi": "Triển khai độc quyền Cisco chạy 802.1D trên từng VLAN riêng biệt"
        },
        {
          "term": "RSTP",
          "desc": "Fast converging enhancement of IEEE 802.1D",
          "term_vi": "RSTP (802.1w)",
          "desc_vi": "Cải tiến chuẩn IEEE 802.1D với tốc độ hội tụ nhanh hơn nhiều"
        },
        {
          "term": "MST",
          "desc": "IEEE standard that reduces the number of STP instances",
          "term_vi": "MST (802.1s)",
          "desc_vi": "Tiêu chuẩn IEEE giúp giảm số lượng phiên bản STP bằng ánh xạ nhiều VLAN vào 1 phiên bản"
        },
        {
          "term": "Rapid PVST+",
          "desc": "Proprietary per VLAN implementation of IEEE 802.1w",
          "term_vi": "Rapid PVST+",
          "desc_vi": "Triển khai độc quyền Cisco chạy giao thức hội tụ nhanh 802.1w trên từng VLAN"
        }
      ],
      "distractors": []
    }
  },
  {
    "id": "final_q24",
    "original_num": 24,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "What is an advantage of PVST+?",
    "images": [],
    "options": [
      {
        "text": "PVST+ requires fewer CPU cycles for all the switches in the network.",
        "is_correct": false
      },
      {
        "text": "PVST+ reduces bandwidth consumption compared to traditional implementations of STP that use CST.",
        "is_correct": false
      },
      {
        "text": "PVST+ optimizes performance on the network through autoselection of the root bridge.",
        "is_correct": false
      },
      {
        "text": "PVST+ optimizes performance on the network through load sharing.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 5.3.1\nPVST+ results in optimum load balancing. However, this is accomplished by manually configuring switches to be elected as root bridges for different VLANs on the network. The root bridges are not automatically selected. Furthermore, having spanning-tree instances for each VLAN actually consumes more bandwidth and it increases the CPU cycles for all the switches in the network.",
    "topic": "Topic 5.3.1",
    "module": 5,
    "type": "single"
  },
  {
    "id": "final_q25",
    "original_num": 25,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Which problem is evident if the show ip interface command shows that the interface is down and the line protocol is down?",
    "images": [],
    "options": [
      {
        "text": "An encapsulation mismatch has occurred.",
        "is_correct": false
      },
      {
        "text": "A cable has not been attached to the port.",
        "is_correct": true
      },
      {
        "text": "The no shutdown command has not been issued on the interface.",
        "is_correct": false
      },
      {
        "text": "There is an IP address conflict with the configured address on the interface.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.2.6\nIf an interface has not been brought up with the no shutdown command, the interface status shows administratively down. A duplicate IP address will not bring an interface down. An encapsulation error is normally found using the show interfaces command.",
    "topic": "Topic 1.2.6",
    "module": 1,
    "type": "single"
  },
  {
    "id": "final_q26",
    "original_num": 26,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config)#interface VLAN88 command?",
    "images": [],
    "options": [
      {
        "text": "It updates the MAC address table for the associated port.",
        "is_correct": false
      },
      {
        "text": "It applies an IPv4 address to the virtual interface.",
        "is_correct": false
      },
      {
        "text": "It permits an IPv6 address to be configured on a switch physical interface.",
        "is_correct": false
      },
      {
        "text": "It applies an IPv6 address to the virtual interface.",
        "is_correct": false
      },
      {
        "text": "It enters configuration mode for a switch virtual interface.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 1.1.6",
    "topic": "Topic 1.1.6",
    "module": 1,
    "type": "single"
  },
  {
    "id": "final_q27",
    "original_num": 27,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "In what situation would a Layer 2 switch have an IP address configured?",
    "images": [],
    "options": [
      {
        "text": "when the Layer 2 switch is using a routed port",
        "is_correct": false
      },
      {
        "text": "when the Layer 2 switch needs to be remotely managed",
        "is_correct": true
      },
      {
        "text": "when the Layer 2 switch is the default gateway of user traffic",
        "is_correct": false
      },
      {
        "text": "when the Layer 2 switch needs to forward user traffic to another device",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 1.1.5\nLayer 2 switches can be configured with an IP address so that they can be remotely managed by an administrator. Layer 3 switches can use an IP address on routed ports. Layer 2 switches do not need a configured IP address to forward user traffic or act as a default gateway.",
    "topic": "Topic 1.1.5",
    "module": 1,
    "type": "single"
  },
  {
    "id": "final_q28",
    "original_num": 28,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Which command would create a valid IPv6 default route?",
    "images": [],
    "options": [
      {
        "text": "ipv6 route ::/0 2001:db8:acad:2::a",
        "is_correct": true
      },
      {
        "text": "ipv6 route ::/0 fe80::1",
        "is_correct": false
      },
      {
        "text": "ipv6 route ::/128 2001:db8:acad:1::1",
        "is_correct": false
      },
      {
        "text": "ipv6 route 2001:db8:acad:1::/64 ::1",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.3.1\nThe correct prefix and prefix length for a default route is ::/0, which matches any address. ::/128 matches only the specific address of all zeros. When creating a static route that uses a link-local address as the next hop, an exit interface must also be specified for the route to be valid.",
    "topic": "Topic 15.3.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "final_q29",
    "original_num": 29,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. The routing table for R2 is as follows:\n<pre class=\"code-block\"><code>Gateway of last resort is not set\n\n10.0.0.0/30 is subnetted, 2 subnets\n\nC 10.0.0.0 is directly connected, Serial0/0/0\n\nC 10.0.0.4 is directly connected, Serial0/0/1\n\n192.168.10.0/26 is subnetted, 3 subnets\n\nS 192.168.10.0 is directly connected, Serial0/0/0\n\nC 192.168.10.64 is directly connected, FastEthernet0/0\n\nS 192.168.10.128 [1/0] via 10.0.0.6</code></pre>\nWhat will router R2 do with a packet destined for 192.168.10.129?",
    "images": [
      "images/final_q29_0.jpg"
    ],
    "options": [
      {
        "text": "drop the packet",
        "is_correct": false
      },
      {
        "text": "send the packet out interface Serial0/0/0",
        "is_correct": false
      },
      {
        "text": "send the packet out interface Serial0/0/1",
        "is_correct": true
      },
      {
        "text": "send the packet out interface FastEthernet0/0",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.4.3\nWhen a static route is configured with the next hop address (as in the case of the 192.168.10.128 network), the output of the show ip route command lists the route as \"via\" a particular IP address. The router has to look up that IP address to determine which interface to send the packet out. Because the IP address of 10.0.0.6 is part of network 10.0.0.4, the router sends the packet out interface Serial0/0/1.",
    "topic": "Topic 14.4.3",
    "module": 14,
    "type": "single"
  },
  {
    "id": "final_q30",
    "original_num": 30,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. Router R1 has an OSPF neighbor relationship with the ISP router over the 192.168.0.32 network. The 192.168.0.36 network link should serve as a backup when the OSPF link goes down. The floating static route command ip route 0.0.0.0 0.0.0.0 S0/0/1 100 was issued on R1 and now traffic is using the backup link even when the OSPF link is up and functioning. Which change should be made to the static route command so that traffic will only use the OSPF link when it is up?​",
    "images": [
      "images/final_q30_0.jpg"
    ],
    "options": [
      {
        "text": "Add the next hop neighbor address of 192.168.0.36.",
        "is_correct": false
      },
      {
        "text": "Change the administrative distance to 1.",
        "is_correct": false
      },
      {
        "text": "Change the destination network to 192.168.0.34.",
        "is_correct": false
      },
      {
        "text": "Change the administrative distance to 120.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.4.1\nThe problem with the current floating static route is that the administrative distance is set too low. The administrative distance will need to be higher than that of OSPF, which is 110, so that the router will only use the OSPF link when it is up.",
    "topic": "Topic 15.4.1",
    "module": 15,
    "type": "single"
  },
  {
    "id": "final_q31",
    "original_num": 31,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "A junior technician was adding a route to a LAN router. A traceroute to a device on the new network revealed a wrong path and unreachable status. What should be done or checked?",
    "images": [],
    "options": [
      {
        "text": "Create a floating static route to that network.",
        "is_correct": false
      },
      {
        "text": "Check the configuration on the floating static route and adjust the AD.",
        "is_correct": false
      },
      {
        "text": "Check the configuration of the exit interface on the new static route.",
        "is_correct": true
      },
      {
        "text": "Verify that the static route to the server is present in the routing table. ?",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 16.2.2\nWhen a traceroute reveals a wrong path or unreachable status immediately after adding a static route, it typically indicates that the route was configured with an incorrect egress point; therefore, checking the exit interface is essential to ensure the router is forwarding packets toward the intended network segment rather than misdirecting them out a different physical or logical interface.",
    "topic": "Topic 16.2.2",
    "module": 16,
    "type": "single"
  },
  {
    "id": "final_q32",
    "original_num": 32,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. When a packet arrives on interface Serial0/0/0 on R1, with a destination IP address of PC1, which two events occur? (Choose two)",
    "images": [
      "images/final_q32_0.jpg"
    ],
    "options": [
      {
        "text": "Router R1 will de-encapsulate the packet and encapsulate it in a PPP frame.",
        "is_correct": false
      },
      {
        "text": "Router R1 will forward the packet out Gig0/1.",
        "is_correct": true
      },
      {
        "text": "Router R1 will forward the packet out Gig0/0.",
        "is_correct": false
      },
      {
        "text": "Router R1 will de-encapsulate the packet and encapsulate it in an Ethernet frame.",
        "is_correct": true
      },
      {
        "text": "Router R1 will forward the packet out S0/0/0.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 14.2.1\nRouting and Switching Essentials\n1.1.1 Router Functions\n1.2.2 Path Determination\nA router will look in the routing table for a destination network and locate an exit interface to forward a packet to a destination. After the exit interface is determined, the router will encapsulate a packet into the correct frame type.\n(PPP) is a data link (layer 2) protocol used to establish a direct connection between two nodes. (from wikipedia)",
    "topic": "Topic 14.2.1",
    "module": 14,
    "type": "multiple"
  },
  {
    "id": "final_q33",
    "original_num": 33,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. How was the host route 2001:DB8:CAFE:4::1/128 installed in the routing table?",
    "images": [
      "images/final_q33_0.png"
    ],
    "options": [
      {
        "text": "The route was dynamically created by router R1.",
        "is_correct": false
      },
      {
        "text": "The route was dynamically learned from another router.",
        "is_correct": false
      },
      {
        "text": "The route was manually entered by an administrator.",
        "is_correct": true
      },
      {
        "text": "The route was automatically installed when an IP address was configured on an active interface.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 15.5.3\nA host route is an IPv6 route with a 128-bit mask. A host route can be installed in a routing table automatically when an IP address is configured on a router interface or manually if a static route is created.",
    "topic": "Topic 15.5.3",
    "module": 15,
    "type": "single"
  },
  {
    "id": "final_q34",
    "original_num": 34,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Which command will start the process to bundle two physical interfaces to create an EtherChannel group via LACP?",
    "images": [],
    "options": [
      {
        "text": "channel-group 2 mode auto",
        "is_correct": false
      },
      {
        "text": "interface port-channel 2",
        "is_correct": false
      },
      {
        "text": "channel-group 1 mode desirable",
        "is_correct": false
      },
      {
        "text": "interface range GigabitEthernet 0/4 - 5",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 6.2.2\nTo specify the interfaces in an EtherChannel group, use the interface range interface global configuration command for the range of interfaces used. The interface range GigabitEthernet 0/4 – 5 command is the correct option because it specifies two interfaces for the EtherChannel group.",
    "topic": "Topic 6.2.2",
    "module": 6,
    "type": "single"
  },
  {
    "id": "final_q35",
    "original_num": 35,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. Based on the command output shown, what is the status of the EtherChannel?",
    "images": [
      "images/final_q35_0.png"
    ],
    "options": [
      {
        "text": "The EtherChannel is dynamic and is using ports Fa0/10 and Fa0/11 as passive ports.",
        "is_correct": false
      },
      {
        "text": "The EtherChannel is down as evidenced by the protocol field being empty.",
        "is_correct": false
      },
      {
        "text": "The EtherChannel is partially functional as indicated by the P flags for the FastEthernet ports.",
        "is_correct": false
      },
      {
        "text": "The EtherChannel is in use and functional as indicated by the SU and P flags in the command output.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 6.3.1\nThe command output shows the port channel as SU, which means Layer 2 and in use; and the FastEthernet 0/10 and 0/11 interfaces are bundled in port-channel as indicated by the P flag. Configuring the EtherChannel using the channel-group 1 mode on command will cause the Protocol field in the command output to be empty.",
    "topic": "Topic 6.3.1",
    "module": 6,
    "type": "single"
  },
  {
    "id": "final_q36",
    "original_num": 36,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. DLS1 is connected to another switch, DLS2, via a trunk link. A host that is connected to DLS1 is not able to communicate to a host that is connected to DLS2, even though they are both in VLAN 99. Which command should be added to Fa0/1 on DLS1 to correct the problem?",
    "images": [
      "images/final_q36_0.png"
    ],
    "options": [
      {
        "text": "switchport nonegotiate",
        "is_correct": false
      },
      {
        "text": "switchport mode dynamic auto",
        "is_correct": false
      },
      {
        "text": "switchport trunk native vlan 66",
        "is_correct": true
      },
      {
        "text": "switchport trunk allowed vlan add 99",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.4.2\nWhen configuring 802.1Q trunk links, the native VLAN must match on both sides of the link, or else CDP error messages will be generated, and traffic that is coming from or going to the native VLAN will not be handled correctly.",
    "topic": "Topic 3.4.2",
    "module": 3,
    "type": "single"
  },
  {
    "id": "final_q37",
    "original_num": 37,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Which type of traffic is designed for a native VLAN?",
    "images": [],
    "options": [
      {
        "text": "management",
        "is_correct": false
      },
      {
        "text": "user-generated",
        "is_correct": false
      },
      {
        "text": "tagged",
        "is_correct": false
      },
      {
        "text": "untagged",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 3.2.5\nA native VLAN carries untagged traffic, which is traffic that does not come from a VLAN. A data VLAN carries user-generated traffic. A management VLAN carries management traffic.",
    "topic": "Topic 3.2.5",
    "module": 3,
    "type": "single"
  },
  {
    "id": "final_q38",
    "original_num": 38,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. PC-A and PC-B are both in VLAN 60. PC-A is unable to communicate with PC-B. What is the problem?",
    "images": [
      "images/final_q38_0.png"
    ],
    "options": [
      {
        "text": "The native VLAN should be VLAN 60.",
        "is_correct": false
      },
      {
        "text": "The native VLAN is being pruned from the link.",
        "is_correct": false
      },
      {
        "text": "The trunk has been configured with the switchport nonegotiate command.",
        "is_correct": false
      },
      {
        "text": "The VLAN that is used by PC-A is not in the list of allowed VLANs on the trunk.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 3.4.1\nBecause PC-A and PC-B are connected to different switches, traffic between them must flow over the trunk link. Trunks can be configured so that they only allow traffic for particular VLANs to cross the link. In this scenario, VLAN 60, the VLAN that is associated with PC-A and PC-B, has not been allowed across the link, as shown by the output of show interfaces trunk.",
    "topic": "Topic 3.4.1",
    "module": 3,
    "type": "single"
  },
  {
    "id": "final_q39",
    "original_num": 39,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Match the DTP mode with its function. (Not all options are used.)",
    "images": [
      "images/final_q39_0.webp"
    ],
    "options": [],
    "explanation": "Explanation: Topic 3.5.2\n\n\n\nNonegotiate\nRequires manual configuration of trunking or nontrunking\n\n\nDynamic auto\nPassively waits for the neighbor to initiate trunking\n\n\nTrunk\nPermanent trunking mode\n\n\nDynamic desirable\nActively attempts to convert the link to a trunk",
    "topic": "Topic 3.5.2",
    "module": 3,
    "type": "match",
    "exhibit_answer_img": "images/final_q39_0.webp",
    "match_data": {
      "left_title": "Chế độ DTP (DTP Mode)",
      "right_title": "Chức năng hoạt động (Function)",
      "pairs": [
        {
          "term": "Nonegotiate",
          "desc": "Requires manual configuration of trunking or nontrunking",
          "term_vi": "Nonegotiate",
          "desc_vi": "Tắt việc thương lượng DTP, yêu cầu phải cấu hình thủ công cổng thành trunk hoặc access"
        },
        {
          "term": "Dynamic auto",
          "desc": "Passively waits for the neighbor to initiate trunking",
          "term_vi": "Dynamic auto",
          "desc_vi": "Chế độ thụ động: Chờ cổng đối diện chủ động gửi bản tin DTP để chuyển thành trunk"
        },
        {
          "term": "Trunk",
          "desc": "Permanent trunking mode",
          "term_vi": "Trunk",
          "desc_vi": "Cố định thành đường trunk vĩnh viễn và gửi gói tin DTP đàm phán với đầu bên kia"
        },
        {
          "term": "Dynamic desirable",
          "desc": "Actively attempts to convert the link to a trunk",
          "term_vi": "Dynamic desirable",
          "desc_vi": "Chế độ chủ động: Tích cực gửi gói tin DTP để chuyển kết nối thành đường trunk"
        }
      ],
      "distractors": []
    }
  },
  {
    "id": "final_q40",
    "original_num": 40,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "What type of VLAN is configured specifically for network traffic such as SSH, Telnet, HTTPS, HTTP, and SNMP?",
    "images": [],
    "options": [
      {
        "text": "management VLAN",
        "is_correct": true
      },
      {
        "text": "security VLAN",
        "is_correct": false
      },
      {
        "text": "trunk VLAN",
        "is_correct": false
      },
      {
        "text": "voice VLAN",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 3.1.3",
    "topic": "Topic 3.1.3",
    "module": 3,
    "type": "single"
  },
  {
    "id": "final_q41",
    "original_num": 41,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. The users on the LAN network of R1 cannot receive an IPv6 address from the configured stateful DHCPv6 server. What is missing from the stateful DHCPv6 configuration on router R1?",
    "images": [
      "images/final_q41_0.png"
    ],
    "options": [
      {
        "text": "The FA0/0 interface is missing the command that informs the clients to use stateful DHCPv6.",
        "is_correct": true
      },
      {
        "text": "IPv6 has not been enabled globally on router R1.",
        "is_correct": false
      },
      {
        "text": "The DHCPv6 pool has not been bound to the LAN interface.",
        "is_correct": false
      },
      {
        "text": "The DHCPv6 pool does not match the IPv6 address configured on interface FA0/0.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.3.5\nWhen configuring a router interface for stateful DHCPv6, the router must be able to inform the host PC's to receive IPv6 addressing from a stateful DHCPv6 server. The interface command is ipv6 nd managed-config-flag",
    "topic": "Topic 8.3.5",
    "module": 8,
    "type": "single"
  },
  {
    "id": "final_q42",
    "original_num": 42,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "A network administrator is implementing DHCPv6 for the company. The administrator configures a router to send RA messages with M flag as 1 by using the interface command ipv6 nd managed-config-flag. What effect will this configuration have on the operation of the clients?",
    "images": [],
    "options": [
      {
        "text": "Clients must use the information that is contained in RA messages.",
        "is_correct": false
      },
      {
        "text": "Clients must use all configuration information that is provided by a DHCPv6 server.",
        "is_correct": true
      },
      {
        "text": "Clients must use the prefix and prefix length that are provided by a DHCPv6 server and generate a random interface ID.",
        "is_correct": false
      },
      {
        "text": "Clients must use the prefix and prefix length that are provided by RA messages and obtain additional information from a DHCPv6 server.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 8.3.4\nUnder stateful DHCPv6 configuration, which is indicated by setting M flag as 1 (through the interface command ipv6 nd managed-config-flag ), the dynamic IPv6 address assignments are managed by the DHCPv6 server. Clients must obtain all configuration information from a DHCPv6 server.",
    "topic": "Topic 8.3.4",
    "module": 8,
    "type": "single"
  },
  {
    "id": "final_q43",
    "original_num": 43,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. A network administrator is troubleshooting a problem with EtherChannel. What command was used to produce the exhibited output?",
    "images": [
      "images/final_q43_0.jpg"
    ],
    "options": [
      {
        "text": "show etherchannel Port-channel",
        "is_correct": false
      },
      {
        "text": "show interfaces Port-channel11",
        "is_correct": false
      },
      {
        "text": "show interfaces fastethernet 0/11 etherchannel",
        "is_correct": true
      },
      {
        "text": "show etherchannel summary",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 6.3.1\nThe show interfaces fastethernet 0/11 etherchannel command will show the EtherChannel information for the FastEthernet 0/11 interface. The displayed information includes the port channel it belongs to, the current mode, and the channel group, among other information.",
    "topic": "Topic 6.3.1",
    "module": 6,
    "type": "single"
  },
  {
    "id": "final_q44",
    "original_num": 44,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. The administrator wants to enable port security on an interface on switch S1, but the command was rejected. Which conclusion can be drawn?",
    "images": [
      "images/final_q44_0.jpg"
    ],
    "options": [
      {
        "text": "The interface must be initially configured with the switchport mode trunk command.",
        "is_correct": false
      },
      {
        "text": "The interface needs to be configured initially with an IP address.",
        "is_correct": false
      },
      {
        "text": "The interface needs to be previously configured with the no shutdown command.",
        "is_correct": false
      },
      {
        "text": "The interface must be initially configured with the switchport mode access command.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 11.1.3\nTo enable port security, use the switchport port-security interface configuration command on an access port. By default, Layer 2 switch ports are set to dynamic auto (trunking on); therefore, the port must be initially configured as an access port before port security can be enabled.",
    "topic": "Topic 11.1.3",
    "module": 11,
    "type": "single"
  },
  {
    "id": "final_q45",
    "original_num": 45,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "On which port should Dynamic ARP Inspection (DAI) be configured on a switch?",
    "images": [],
    "options": [
      {
        "text": "access ports only",
        "is_correct": false
      },
      {
        "text": "any untrusted port",
        "is_correct": false
      },
      {
        "text": "an uplink port to another switch",
        "is_correct": true
      },
      {
        "text": "on any port where DHCP snooping is disabled",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 11.4.2\nDHCP snooping must be enabled on a port where DAI is configured, because DAI requires the DHCP snooping table to operate. Only a trusted interface, such as an uplink port between switches, is configured to implement DAI. All access ports are untrusted.",
    "topic": "Topic 11.4.2",
    "module": 11,
    "type": "single"
  },
  {
    "id": "final_q46",
    "original_num": 46,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Refer to the exhibit. A network administrator is configuring DAI on switch SW1. What is the result of entering the exhibited commands?",
    "images": [
      "images/final_q46_0.jpg"
    ],
    "options": [
      {
        "text": "DAI will validate both source and destination MAC addresses as well as the IP addresses in the order specified. If all parameters are valid then the ARP packet is allowed to pass.",
        "is_correct": false
      },
      {
        "text": "DAI will validate both source and destination MAC addresses as well as the IP addresses in the order specified. When one set of parameters are valid, the ARP packet is allowed to pass.",
        "is_correct": false
      },
      {
        "text": "DAI will validate only the destination MAC addresses.",
        "is_correct": true
      },
      {
        "text": "DAI will validate only the IP addresses.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 11.4.3\nDAI can be configured to check for destination MAC, source MAC, and IP addresses. However, only one ip arp inspection validate command can be configured. Entering multiple ip arp inspection validate commands overwrites the previous command.",
    "topic": "Topic 11.4.3",
    "module": 11,
    "type": "single"
  },
  {
    "id": "final_q47",
    "original_num": 47,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Which Cisco solution helps prevent ARP spoofing and ARP poisoning attacks?",
    "images": [],
    "options": [
      {
        "text": "Dynamic ARP Inspection",
        "is_correct": true
      },
      {
        "text": "IP Source Guard",
        "is_correct": false
      },
      {
        "text": "DHCP Snooping",
        "is_correct": false
      },
      {
        "text": "Port Security",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 11.4.1\nCisco provides solutions to help mitigate Layer 2 attacks. The solutions include the following:\nIP Source Guard (IPSG) – prevents MAC and IP address spoofing attacks\nDynamic ARP Inspection (DAI) – prevents ARP spoofing and ARP poisoning attacks\nDHCP Snooping – prevents DHCP starvation and SHCP spoofing attacks\nPort Security – prevents many types of attacks including MAC table overflow attacks and DHCP starvation attacks",
    "topic": "Topic 11.4.1",
    "module": 11,
    "type": "single"
  },
  {
    "id": "final_q48",
    "original_num": 48,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "What is the reason for disabling SSID broadcasting and changing the default SSID on a wireless access point?",
    "images": [],
    "options": [
      {
        "text": "Wireless clients must then have the SSID manually configured to connect to the wireless network.",
        "is_correct": true
      },
      {
        "text": "Disabling SSID broadcasting frees up radio frequency bandwidth and increases the data throughput of the access point.",
        "is_correct": false
      },
      {
        "text": "Anyone with the default SSID can gain access to the access point and change the configuration.",
        "is_correct": false
      },
      {
        "text": "The access point stops broadcasting its own MAC address, thus preventing unauthorized wireless clients from connecting to the network.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 12.7.2\nThe SSID is the name of the wireless network. Changing the default SSID forces device users to manually enter the SSID in order to gain access to the network. Broadcasting the SSID does not allow other devices to access the configuration, or to discover the MAC address of the device. SSID broadcasts do not affect radio frequency bandwidth.",
    "topic": "Topic 12.7.2",
    "module": 12,
    "type": "single"
  },
  {
    "id": "final_q49",
    "original_num": 49,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "What are two characteristics of Cisco Express Forwarding (CEF)? (Choose two.)",
    "images": [],
    "options": [
      {
        "text": "When a packet arrives on a router interface, it is forwarded to the control plane where the CPU searches for a match in the fast-switching cache.",
        "is_correct": false
      },
      {
        "text": "This is the fastest forwarding mechanism on Cisco routers and multilayer switches.",
        "is_correct": true
      },
      {
        "text": "With this switching method, flow information for a packet is stored in the fast-switching cache to forward future packets to the same destination without CPU intervention.",
        "is_correct": false
      },
      {
        "text": "When a packet arrives on a router interface, it is forwarded to the control plane where the CPU matches the destination address with a matching routing table entry.",
        "is_correct": false
      },
      {
        "text": "Packets are forwarded based on information in the FIB and an adjacency table.",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 14.2.3\nCisco Express Forwarding (CEF) builds a forwarding information base (FIB) and an adjacency table to be able to route packets quicker than traditional packet forwarding methods can.",
    "topic": "Topic 14.2.3",
    "module": 14,
    "type": "multiple"
  },
  {
    "id": "final_q50",
    "original_num": 50,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "A network administrator of a college is configuring WLAN security with WPA2 Enterprise authentication. Which server is required when deploying this type of authentication?",
    "images": [],
    "options": [
      {
        "text": "AAA",
        "is_correct": false
      },
      {
        "text": "RADIUS",
        "is_correct": true
      },
      {
        "text": "DHCP",
        "is_correct": false
      },
      {
        "text": "SNMP",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 12.7.7\nWAP2 Enterprise provides stronger secure user authentication than WPA2 PSK does. Instead of using a pre-shared key for all users to access a WLAN, WPA2 Enterprise requires that users enter their own username and password credentials to be authenticated before they can access the WLAN. The RADIUS server is required for deploying WPA2 Enterprise authentication.",
    "topic": "Topic 12.7.7",
    "module": 12,
    "type": "single"
  },
  {
    "id": "final_q51",
    "original_num": 51,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "What is a potential issue when using the WLC to upgrade and deploy the latest firmware image to all APs?",
    "images": [],
    "options": [
      {
        "text": "Usernames and passwords must be manually entered into the AP so that WLAN authentication continues during the upgrade.",
        "is_correct": false
      },
      {
        "text": "Only one of the two bands would work at a time.",
        "is_correct": false
      },
      {
        "text": "Users will not be able to use the WLAN.",
        "is_correct": true
      },
      {
        "text": "Old 802.11 standards may not be supported anymore.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 13.4.4\nWhen APs are performing a firmware upgrade, users will be disconnected from the WLAN and the internet until the upgrade finishes. The wireless router may need to reboot several times before normal network operations are restored.",
    "topic": "Topic 13.4.4",
    "module": 13,
    "type": "single"
  },
  {
    "id": "final_q52",
    "original_num": 52,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "A network administrator is configuring a WLC to provide WLAN access to users in an office building. When testing the newly created WLAN, the administrator does not see the SSID from a wireless device. What is a possible cause?",
    "images": [],
    "options": [
      {
        "text": "The WLAN security setting is incorrect.",
        "is_correct": false
      },
      {
        "text": "The APs have not been configured for the new WLAN.",
        "is_correct": false
      },
      {
        "text": "The new WLAN needs to be enabled.",
        "is_correct": true
      },
      {
        "text": "The RADUIS server is not operational.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 13.2.6\nAfter a new WLAN is created and configured on a WLC, it should be enabled before it can be accessed by users.",
    "topic": "Topic 13.2.6",
    "module": 13,
    "type": "single"
  },
  {
    "id": "final_q53",
    "original_num": 53,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "What is the best way to prevent a VLAN hopping attack?",
    "images": [],
    "options": [
      {
        "text": "Disable trunk negotiation for trunk ports and statically set nontrunk ports as access ports.",
        "is_correct": true
      },
      {
        "text": "Disable STP on all nontrunk ports.",
        "is_correct": false
      },
      {
        "text": "Use VLAN 1 as the native VLAN on trunk ports.",
        "is_correct": false
      },
      {
        "text": "Use ISL encapsulation on all trunk links.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 11.2.2\nVLAN hopping attacks rely on the attacker being able to create a trunk link with a switch. Disabling DTP and configuring user-facing ports as static access ports can help prevent these types of attacks. Disabling the Spanning Tree Protocol (STP) will not eliminate VLAN hopping attacks.",
    "topic": "Topic 11.2.2",
    "module": 11,
    "type": "single"
  },
  {
    "id": "final_q54",
    "original_num": 54,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "An administrator has configured a DHCPv4 relay router and issued these commands:\n<pre class=\"code-block\"><code>Router(config)# interface g0/0 \n\nRouter(config-if)# ip address 10.0.1.1 255.255.255.0 \n\nRouter(config-if)# no shutdown \n\nRouter(config-if)# exit \n\nRouter(config)# ip dhcp pool RELAY \n\nRouter(dhcp-config)# end</code></pre>\nThe clients are not receiving IP parameters from the DHCPv4 server. What is a possible cause?",
    "images": [],
    "options": [
      {
        "text": "The IP address is incorrect for the subnet mask that is used.",
        "is_correct": false
      },
      {
        "text": "The pool cannot be named 'RELAY'.",
        "is_correct": false
      },
      {
        "text": "The ip helper-address command is missing.",
        "is_correct": true
      },
      {
        "text": "The router is configured as a DHCPv4 client.",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 7.2.8\nThis router should be configured with the ip helper-address command, followed with the IP address of the DHCPv4 server, because the router is meant to be used as a relay agent. The ip dhcp pool RELAY command just names the DHCPv4 pool, and it does not enable the relay function.",
    "topic": "Topic 7.2.8",
    "module": 7,
    "type": "single"
  },
  {
    "id": "final_q55",
    "original_num": 55,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Consider the following command:\n<pre class=\"code-block\"><code>ip route 192.168.10.0 255.255.255.0 10.10.10.2 5</code></pre>\nWhat does the 5 at the end of the command signify?",
    "images": [],
    "options": [
      {
        "text": "exit interface",
        "is_correct": false
      },
      {
        "text": "maximum number of hops to the 192.168.10.0/24 network",
        "is_correct": false
      },
      {
        "text": "metric",
        "is_correct": false
      },
      {
        "text": "administrative distance",
        "is_correct": true
      }
    ],
    "explanation": "Explanation: Topic 15.4.2\nThe 5 at the end of the command signifies administrative distance. This value is added to floating static routes or routes that only appear in the routing table when the preferred route has gone down. The 5 at the end of the command signifies administrative distance configured for the static route. This value indicates that the floating static route will appear in the routing table when the preferred route (with an administrative distance less than 5) is down.",
    "topic": "Topic 15.4.2",
    "module": 15,
    "type": "single"
  },
  {
    "id": "final_q56",
    "original_num": 56,
    "source_group": "final",
    "source_title": "CCNA 2 v7 SRWE Practice Final Exam",
    "question": "Which three components are combined to form a bridge ID? (Choose three.)",
    "images": [],
    "options": [
      {
        "text": "extended system ID",
        "is_correct": true
      },
      {
        "text": "cost",
        "is_correct": false
      },
      {
        "text": "IP address",
        "is_correct": false
      },
      {
        "text": "bridge priority",
        "is_correct": true
      },
      {
        "text": "MAC address",
        "is_correct": true
      },
      {
        "text": "port ID",
        "is_correct": false
      }
    ],
    "explanation": "Explanation: Topic 5.2.1\nThe three components that are combined to form a bridge ID are bridge priority, extended system ID, and MAC address.",
    "topic": "Topic 5.2.1",
    "module": 5,
    "type": "multiple"
  }
];

if (typeof window !== "undefined") window.QUESTIONS_DATA = QUESTIONS_DATA;

var EXAM_DATA = QUESTIONS_DATA;
if (typeof window !== "undefined") { window.EXAM_DATA = QUESTIONS_DATA; window.QUESTIONS_DATA = QUESTIONS_DATA; }
