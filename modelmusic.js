{
  "asset": {
    "generator": "Khronos glTF Blender I/O v1.7.33",
    "version": "2.0"
  },
  "extensionsUsed": [
    "KHR_texture_transform"
  ],
  "extensionsRequired": [
    "KHR_texture_transform"
  ],
  "scene": 0,
  "scenes": [
    {
      "extras": {
        "skinify": {
          "connect_mesh": 0,
          "connect_parents": 0,
          "generate_all": 0,
          "thickness": 0.800000011920929,
          "finger_thickness": 0.25,
          "apply_mod": 1,
          "parent_armature": 1,
          "sub_level": 1
        },
        "terrain_settings": {
          "needs_restart": 0,
          "size_on_disk": {
            "byte_unit": "GB",
            "byte_size": 6.913382053375244
          },
          "data_path": "C:\\Users\\KaiMikel\\AppData\\Roaming\\Blender Foundation\\Blender\\3.0\\scripts\\addons\\True-Terrain ULTIMATE",
          "is_eevee": 0,
          "current_render_type": "CYCLES",
          "current_preview_type": "RENDERED"
        },
        "scatter5": {
          "emitter": {}
        },
        "simple_asset_manager": {
          "catSecond": 0,
          "catThird": 0,
          "catFourth": 0,
          "catFifth": 0,
          "catSixth": 0,
          "catSeventh": 0,
          "catEight": 0,
          "catNine": 0,
          "catTen": 0
        },
        "svg_export": {},
        "lightmixer": {}
      },
      "name": "Scene",
      "nodes": [
        0,
        1,
        5,
        8,
        9,
        10,
        11,
        12
      ]
    }
  ],
  "nodes": [
    {
      "extras": {
        "scatter5": {},
        "terrain_settings": {}
      },
      "mesh": 0,
      "name": "Object_5"
    },
    {
      "extras": {
        "scatter5": {},
        "terrain_settings": {
          "active_material": {}
        },
        "point_cloud_visualizer": {}
      },
      "mesh": 1,
      "name": "072722 WrapperDetailMesh.002",
      "rotation": [
        0.7071068286895752,
        0,
        0,
        0.7071067094802856
      ]
    },
    {
      "extras": {
        "scatter5": {},
        "terrain_settings": {
          "active_material": {}
        }
      },
      "mesh": 2,
      "name": "Object_1"
    },
    {
      "children": [
        2
      ],
      "extras": {
        "scatter5": {}
      },
      "name": "Roof"
    },
    {
      "children": [
        3
      ],
      "extras": {
        "scatter5": {}
      },
      "name": "Envelope"
    },
    {
      "children": [
        4
      ],
      "extras": {
        "scatter5": {}
      },
      "name": "Massing"
    },
    {
      "extras": {
        "scatter5": {},
        "terrain_settings": {}
      },
      "mesh": 3,
      "name": "Object_1.002",
      "translation": [
        -0.3810592591762543,
        0.3505876064300537,
        0
      ]
    },
    {
      "children": [
        6
      ],
      "extras": {
        "scatter5": {}
      },
      "name": "Structure"
    },
    {
      "children": [
        7
      ],
      "extras": {
        "scatter5": {}
      },
      "name": "Massing.002",
      "translation": [
        -0.4612269699573517,
        -0.8956953883171082,
        0
      ]
    },
    {
      "extras": {
        "scatter5": {}
      },
      "mesh": 4,
      "name": "theatremass",
      "rotation": [
        0.7071068286895752,
        0,
        0,
        0.7071067094802856
      ]
    },
    {
      "extras": {
        "scatter5": {},
        "terrain_settings": {}
      },
      "mesh": 5,
      "name": "UnderwrapperMesh",
      "rotation": [
        0.7071068286895752,
        0,
        0,
        0.7071067094802856
      ]
    },
    {
      "extras": {
        "scatter5": {},
        "terrain_settings": {}
      },
      "mesh": 6,
      "name": "skylightframeszed.001",
      "rotation": [
        0.7071068286895752,
        0,
        0,
        0.7071067094802856
      ]
    },
    {
      "extras": {
        "scatter5": {},
        "terrain_settings": {}
      },
      "mesh": 7,
      "name": "Object_1.003"
    }
  ],
  "materials": [
    {
      "doubleSided": true,
      "name": "cgbookcase/Concrete Wall 01/2K",
      "normalTexture": {
        "extensions": {
          "KHR_texture_transform": {
            "offset": [
              0,
              0.9700000006705523
            ],
            "scale": [
              0.029999999329447746,
              0.029999999329447746
            ]
          }
        },
        "index": 0
      },
      "pbrMetallicRoughness": {
        "baseColorTexture": {
          "extensions": {
            "KHR_texture_transform": {
              "offset": [
                0,
                0.7999999970197678
              ],
              "scale": [
                0.20000000298023224,
                0.20000000298023224
              ]
            }
          },
          "index": 1
        },
        "metallicFactor": 0,
        "metallicRoughnessTexture": {
          "extensions": {
            "KHR_texture_transform": {
              "offset": [
                0,
                0.7999999970197678
              ],
              "scale": [
                0.20000000298023224,
                0.20000000298023224
              ]
            }
          },
          "index": 2
        },
        "baseColorFactor": [
          1,
          1,
          1,
          1
        ],
        "roughnessFactor": 1
      },
      "emissiveFactor": [
        0,
        0,
        0
      ],
      "alphaMode": "OPAQUE",
      "alphaCutoff": 0.5
    },
    {
      "doubleSided": true,
      "name": "diffuse_0.008",
      "pbrMetallicRoughness": {
        "baseColorTexture": {
          "index": 3
        },
        "metallicFactor": 0,
        "baseColorFactor": [
          1,
          1,
          1,
          1
        ],
        "roughnessFactor": 1
      },
      "emissiveFactor": [
        0,
        0,
        0
      ],
      "alphaMode": "OPAQUE",
      "alphaCutoff": 0.5
    },
    {
      "doubleSided": true,
      "name": "cgbookcase/Old Iron 01/4K",
      "normalTexture": {
        "extensions": {
          "KHR_texture_transform": {
            "offset": [
              0,
              0.7999999970197678
            ],
            "scale": [
              0.20000000298023224,
              0.20000000298023224
            ]
          }
        },
        "index": 4
      },
      "pbrMetallicRoughness": {
        "baseColorTexture": {
          "extensions": {
            "KHR_texture_transform": {
              "offset": [
                0,
                0.7999999970197678
              ],
              "scale": [
                0.20000000298023224,
                0.20000000298023224
              ]
            }
          },
          "index": 5
        },
        "metallicRoughnessTexture": {
          "extensions": {
            "KHR_texture_transform": {
              "offset": [
                0,
                0.7999999970197678
              ],
              "scale": [
                0.20000000298023224,
                0.20000000298023224
              ]
            }
          },
          "index": 6
        },
        "baseColorFactor": [
          1,
          1,
          1,
          1
        ],
        "roughnessFactor": 1,
        "metallicFactor": 1
      },
      "emissiveFactor": [
        0,
        0,
        0
      ],
      "alphaMode": "OPAQUE",
      "alphaCutoff": 0.5
    },
    {
      "doubleSided": true,
      "name": "diffuse_0",
      "pbrMetallicRoughness": {
        "baseColorFactor": [
          0,
          1,
          1,
          1
        ],
        "metallicFactor": 0,
        "roughnessFactor": 1
      },
      "emissiveFactor": [
        0,
        0,
        0
      ],
      "alphaMode": "OPAQUE",
      "alphaCutoff": 0.5
    },
    {
      "doubleSided": true,
      "name": "diffuse_0.003",
      "pbrMetallicRoughness": {
        "baseColorTexture": {
          "index": 7
        },
        "metallicFactor": 0,
        "baseColorFactor": [
          1,
          1,
          1,
          1
        ],
        "roughnessFactor": 1
      },
      "emissiveFactor": [
        0,
        0,
        0
      ],
      "alphaMode": "OPAQUE",
      "alphaCutoff": 0.5
    },
    {
      "doubleSided": true,
      "name": "Material_2.003",
      "pbrMetallicRoughness": {
        "metallicFactor": 0.16969698667526245,
        "roughnessFactor": 0.5527864098548889,
        "baseColorFactor": [
          1,
          1,
          1,
          1
        ]
      },
      "emissiveFactor": [
        0,
        0,
        0
      ],
      "alphaMode": "OPAQUE",
      "alphaCutoff": 0.5
    }
  ],
  "meshes": [
    {
      "name": "Object_5.001",
      "primitives": [
        {
          "attributes": {
            "POSITION": 0,
            "NORMAL": 1,
            "TEXCOORD_0": 2
          },
          "indices": 3,
          "material": 0
        }
      ]
    },
    {
      "name": "072722 WrapperDetailMesh.002",
      "primitives": [
        {
          "attributes": {
            "POSITION": 4,
            "NORMAL": 5,
            "TEXCOORD_0": 6
          },
          "indices": 7,
          "material": 1
        }
      ]
    },
    {
      "name": "Object_1.003",
      "primitives": [
        {
          "attributes": {
            "POSITION": 8,
            "NORMAL": 9,
            "TEXCOORD_0": 10
          },
          "indices": 11,
          "material": 0
        }
      ]
    },
    {
      "name": "Object_1.004",
      "primitives": [
        {
          "attributes": {
            "POSITION": 12,
            "NORMAL": 13,
            "TEXCOORD_0": 14
          },
          "indices": 15,
          "material": 2
        }
      ]
    },
    {
      "name": "theatremass",
      "primitives": [
        {
          "attributes": {
            "POSITION": 16,
            "NORMAL": 17,
            "TEXCOORD_0": 18
          },
          "indices": 19,
          "material": 3
        }
      ]
    },
    {
      "name": "UnderwrapperMesh",
      "primitives": [
        {
          "attributes": {
            "POSITION": 20,
            "NORMAL": 21,
            "TEXCOORD_0": 22
          },
          "indices": 23,
          "material": 4
        }
      ]
    },
    {
      "name": "skylightframeszed.001",
      "primitives": [
        {
          "attributes": {
            "POSITION": 24,
            "NORMAL": 25
          },
          "indices": 26,
          "material": 0
        }
      ]
    },
    {
      "name": "Object_1.005",
      "primitives": [
        {
          "attributes": {
            "POSITION": 27,
            "NORMAL": 28
          },
          "indices": 29,
          "material": 5
        }
      ]
    }
  ],
  "textures": [
    {
      "sampler": 0,
      "source": 0
    },
    {
      "sampler": 0,
      "source": 1
    },
    {
      "sampler": 0,
      "source": 2
    },
    {
      "sampler": 0,
      "source": 3
    },
    {
      "sampler": 0,
      "source": 4
    },
    {
      "sampler": 0,
      "source": 5
    },
    {
      "sampler": 0,
      "source": 6
    },
    {
      "sampler": 0,
      "source": 7
    }
  ],
  "images": [
    {
      "bufferView": 4,
      "mimeType": "image/png",
      "name": "DiscoBump2"
    },
    {
      "bufferView": 5,
      "mimeType": "image/png",
      "name": "ConcreteWall01_2K_BaseColor"
    },
    {
      "bufferView": 6,
      "mimeType": "image/png",
      "name": "ConcreteWall01_2K_Roughness"
    },
    {
      "bufferView": 11,
      "mimeType": "image/png",
      "name": "UpdatedGraffiti Map copydark-PAnelizationAlpha"
    },
    {
      "bufferView": 20,
      "mimeType": "image/png",
      "name": "OldIron01_4K_Normal"
    },
    {
      "bufferView": 21,
      "mimeType": "image/png",
      "name": "OldIron01_4K_BaseColor"
    },
    {
      "bufferView": 22,
      "mimeType": "image/png",
      "name": "OldIron01_4K_Metallic-OldIron01_4K_Roughness"
    },
    {
      "bufferView": 31,
      "mimeType": "image/png",
      "name": "LargeDetailedMapTestGrey-PAnelizationAlpha"
    }
  ],
  "accessors": [
    {
      "bufferView": 0,
      "componentType": 5126,
      "count": 100,
      "max": [
        110.41043853759766,
        -1.9145185947418213,
        -96.52312469482422
      ],
      "min": [
        82.48025512695312,
        -8.390878677368164,
        -134.5233612060547
      ],
      "type": "VEC3"
    },
    {
      "bufferView": 1,
      "componentType": 5126,
      "count": 100,
      "type": "VEC3"
    },
    {
      "bufferView": 2,
      "componentType": 5126,
      "count": 100,
      "type": "VEC2"
    },
    {
      "bufferView": 3,
      "componentType": 5123,
      "count": 234,
      "type": "SCALAR"
    },
    {
      "bufferView": 7,
      "componentType": 5126,
      "count": 513252,
      "max": [
        115.963623046875,
        -68.49050903320312,
        2.2648847103118896
      ],
      "min": [
        79.79981994628906,
        -141.33389282226562,
        -15.117780685424805
      ],
      "type": "VEC3"
    },
    {
      "bufferView": 8,
      "componentType": 5126,
      "count": 513252,
      "type": "VEC3"
    },
    {
      "bufferView": 9,
      "componentType": 5126,
      "count": 513252,
      "type": "VEC2"
    },
    {
      "bufferView": 10,
      "componentType": 5125,
      "count": 3079500,
      "type": "SCALAR"
    },
    {
      "bufferView": 12,
      "componentType": 5126,
      "count": 1172,
      "max": [
        116.16010284423828,
        15.824727058410645,
        -79.02079772949219
      ],
      "min": [
        79.7864761352539,
        -0.5849853754043579,
        -141.15943908691406
      ],
      "type": "VEC3"
    },
    {
      "bufferView": 13,
      "componentType": 5126,
      "count": 1172,
      "type": "VEC3"
    },
    {
      "bufferView": 14,
      "componentType": 5126,
      "count": 1172,
      "type": "VEC2"
    },
    {
      "bufferView": 15,
      "componentType": 5123,
      "count": 6972,
      "type": "SCALAR"
    },
    {
      "bufferView": 16,
      "componentType": 5126,
      "count": 761074,
      "max": [
        115.88764190673828,
        15.089371681213379,
        -69.46539306640625
      ],
      "min": [
        86.204345703125,
        -8.554586410522461,
        -145.57952880859375
      ],
      "type": "VEC3"
    },
    {
      "bufferView": 17,
      "componentType": 5126,
      "count": 761074,
      "type": "VEC3"
    },
    {
      "bufferView": 18,
      "componentType": 5126,
      "count": 761074,
      "type": "VEC2"
    },
    {
      "bufferView": 19,
      "componentType": 5125,
      "count": 4227390,
      "type": "SCALAR"
    },
    {
      "bufferView": 23,
      "componentType": 5126,
      "count": 24,
      "max": [
        104.09767150878906,
        -105.68624877929688,
        7.928921699523926
      ],
      "min": [
        86.6300277709961,
        -130.59645080566406,
        -11.713761329650879
      ],
      "type": "VEC3"
    },
    {
      "bufferView": 24,
      "componentType": 5126,
      "count": 24,
      "type": "VEC3"
    },
    {
      "bufferView": 25,
      "componentType": 5126,
      "count": 24,
      "type": "VEC2"
    },
    {
      "bufferView": 26,
      "componentType": 5123,
      "count": 36,
      "type": "SCALAR"
    },
    {
      "bufferView": 27,
      "componentType": 5126,
      "count": 18171,
      "max": [
        115.64752960205078,
        -68.49119567871094,
        4.997468948364258
      ],
      "min": [
        88.79268646240234,
        -139.421630859375,
        -2.4596190452575684
      ],
      "type": "VEC3"
    },
    {
      "bufferView": 28,
      "componentType": 5126,
      "count": 18171,
      "type": "VEC3"
    },
    {
      "bufferView": 29,
      "componentType": 5126,
      "count": 18171,
      "type": "VEC2"
    },
    {
      "bufferView": 30,
      "componentType": 5123,
      "count": 105735,
      "type": "SCALAR"
    },
    {
      "bufferView": 32,
      "componentType": 5126,
      "count": 264567,
      "max": [
        114.88361358642578,
        -97.97085571289062,
        -7.845757007598877
      ],
      "min": [
        106.54895782470703,
        -130.62222290039062,
        -14.308149337768555
      ],
      "type": "VEC3"
    },
    {
      "bufferView": 33,
      "componentType": 5126,
      "count": 264567,
      "type": "VEC3"
    },
    {
      "bufferView": 34,
      "componentType": 5125,
      "count": 414876,
      "type": "SCALAR"
    },
    {
      "bufferView": 35,
      "componentType": 5126,
      "count": 97346,
      "max": [
        114.75724792480469,
        14.244658470153809,
        -98.22354888916016
      ],
      "min": [
        106.77408599853516,
        8.010866165161133,
        -130.59878540039062
      ],
      "type": "VEC3"
    },
    {
      "bufferView": 36,
      "componentType": 5126,
      "count": 97346,
      "type": "VEC3"
    },
    {
      "bufferView": 37,
      "componentType": 5125,
      "count": 582600,
      "type": "SCALAR"
    }
  ],
  "bufferViews": [
    {
      "buffer": 0,
      "byteLength": 1200,
      "byteOffset": 0
    },
    {
      "buffer": 0,
      "byteLength": 1200,
      "byteOffset": 1200
    },
    {
      "buffer": 0,
      "byteLength": 800,
      "byteOffset": 2400
    },
    {
      "buffer": 0,
      "byteLength": 468,
      "byteOffset": 3200
    },
    {
      "buffer": 0,
      "byteLength": 6645518,
      "byteOffset": 3668
    },
    {
      "buffer": 0,
      "byteLength": 11147205,
      "byteOffset": 6649188
    },
    {
      "buffer": 0,
      "byteLength": 5144948,
      "byteOffset": 17796396
    },
    {
      "buffer": 0,
      "byteLength": 6159024,
      "byteOffset": 22941344
    },
    {
      "buffer": 0,
      "byteLength": 6159024,
      "byteOffset": 29100368
    },
    {
      "buffer": 0,
      "byteLength": 4106016,
      "byteOffset": 35259392
    },
    {
      "buffer": 0,
      "byteLength": 12318000,
      "byteOffset": 39365408
    },
    {
      "buffer": 0,
      "byteLength": 304123449,
      "byteOffset": 51683408
    },
    {
      "buffer": 0,
      "byteLength": 14064,
      "byteOffset": 355806860
    },
    {
      "buffer": 0,
      "byteLength": 14064,
      "byteOffset": 355820924
    },
    {
      "buffer": 0,
      "byteLength": 9376,
      "byteOffset": 355834988
    },
    {
      "buffer": 0,
      "byteLength": 13944,
      "byteOffset": 355844364
    },
    {
      "buffer": 0,
      "byteLength": 9132888,
      "byteOffset": 355858308
    },
    {
      "buffer": 0,
      "byteLength": 9132888,
      "byteOffset": 364991196
    },
    {
      "buffer": 0,
      "byteLength": 6088592,
      "byteOffset": 374124084
    },
    {
      "buffer": 0,
      "byteLength": 16909560,
      "byteOffset": 380212676
    },
    {
      "buffer": 0,
      "byteLength": 40679120,
      "byteOffset": 397122236
    },
    {
      "buffer": 0,
      "byteLength": 35470370,
      "byteOffset": 437801356
    },
    {
      "buffer": 0,
      "byteLength": 25402737,
      "byteOffset": 473271728
    },
    {
      "buffer": 0,
      "byteLength": 288,
      "byteOffset": 498674468
    },
    {
      "buffer": 0,
      "byteLength": 288,
      "byteOffset": 498674756
    },
    {
      "buffer": 0,
      "byteLength": 192,
      "byteOffset": 498675044
    },
    {
      "buffer": 0,
      "byteLength": 72,
      "byteOffset": 498675236
    },
    {
      "buffer": 0,
      "byteLength": 218052,
      "byteOffset": 498675308
    },
    {
      "buffer": 0,
      "byteLength": 218052,
      "byteOffset": 498893360
    },
    {
      "buffer": 0,
      "byteLength": 145368,
      "byteOffset": 499111412
    },
    {
      "buffer": 0,
      "byteLength": 211470,
      "byteOffset": 499256780
    },
    {
      "buffer": 0,
      "byteLength": 155876161,
      "byteOffset": 499468252
    },
    {
      "buffer": 0,
      "byteLength": 3174804,
      "byteOffset": 655344416
    },
    {
      "buffer": 0,
      "byteLength": 3174804,
      "byteOffset": 658519220
    },
    {
      "buffer": 0,
      "byteLength": 1659504,
      "byteOffset": 661694024
    },
    {
      "buffer": 0,
      "byteLength": 1168152,
      "byteOffset": 663353528
    },
    {
      "buffer": 0,
      "byteLength": 1168152,
      "byteOffset": 664521680
    },
    {
      "buffer": 0,
      "byteLength": 2330400,
      "byteOffset": 665689832
    }
  ],
  "samplers": [
    {
      "magFilter": 9729,
      "minFilter": 9987,
      "wrapS": 1000,
      "wrapT": 1000
    }
  ],
  "buffers": [
    {
      "byteLength": 668020232
    }
  ]
}
          