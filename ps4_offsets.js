export const REQUIRED_KEYS = [
    "fw_status",
    "wk_expm1_builtin", "wk_JSFunction_m_function",
    "wk_POP_RDI_RET", "wk_POP_RSI_RET", "wk_POP_RDX_RET", "wk_POP_RCX_RET",
    "wk_POP_RAX_RET", "wk_POP_R8_RET", "wk_POP_R9_RET", "wk_LEAVE_RET",
    "wk_MOV_QWORD_PTR_RDI_RAX_RET",
    "wk_MOV_RDI_RSI_30_CALL", "wk_POP_RAX_MOV_RAX_JMP_18",
    "wk_PUSH_RBP_MOV_RBP_RSP_10", "wk_MOV_RDI_RAX_8_CALL_20",
    "wk_MOV_RDX_RAX_18_CALL_10", "wk_PUSH_RDX_POP_RSP_RET",
    "pivot_view_sp", "wk_ArrayBuffer_m_impl", "wk_ArrayBuffer_m_contents_m_data",
    "wk___imp___error", "k__error",
    "k_scan_stage1", "k_scan_stage2",
    "k_evf_cv", "k_sysent_661", "k_jmp_rsi",
];
export const OPTIONAL_KEYS = [
    "k_stubs", "wk___imp_pthread_create", "k_pthread_create",
    // Overrides the patch-blob name, which otherwise derives from the firmware
    // key ("13.00" -> patches/1300.bin). Needed when two firmwares share one
    // kernel and therefore one blob.
    "kpatch",
    // Names the firmware this block was copied from. Purely declarative -- no
    // page reads it. tools/checkfw.js needs it: its copy-paste detector flags
    // two firmwares sharing an RVA, and an alias shares EVERY RVA by
    // construction, so without this a correct alias reports as 20 defects and
    // buries a real one.
    "alias_of",
];

export const PS4 = {
    "11.00": {

        fw_status: "state=proven step4q=90/0 reboot=0 kernel_rvas=5/5-vs-dump",

        wk_expm1_builtin:      0x2193f30,

        wk_JSFunction_m_function: 0x28,

        wk_CSSFontFace_vtable: 0x3627aa8,

        wk___imp___error:      0x36e1c68,
        k__error:              0x3370,
        wk___imp_strerror:     0x36e1c98,
        c_strerror:            0x10d00,

        wk_POP_RDI_RET:        0x357a0,
        wk_POP_RAX_RET:        0x4e6a9,

        wk_MOV_RDI_RSI_30_CALL:       0x24dae58,

        wk_POP_RAX_MOV_RAX_JMP_18:    0x11d5d53,

        wk_PUSH_RBP_MOV_RBP_RSP_10:   0x2f1890,

        wk_MOV_RDI_RAX_8_CALL_20:     0x41a81,

        wk_MOV_RDX_RAX_18_CALL_10:    0x90ffe6,

        wk_PUSH_RDX_POP_RSP_RET:      0x1cc607a,

        wk_MOV_QWORD_PTR_RDI_RAX_RET: 0x97db,
        wk_LEAVE_RET:                 0x31f9d,

        wk_POP_RSI_RET:        0x249e2,
        wk_POP_RDX_RET:        0x10d11,
        wk_POP_RCX_RET:        0x71617,

        wk_POP_R8_RET:         0xe53a2,
        wk_POP_R9_RET:         0x6403a1,

        pivot_view_sp:                0x18,

        wk_ArrayBuffer_m_impl:        0x10,

        wk_ArrayBuffer_m_contents_m_data: 0x10,

        k_getpid:                     0x1b280,

        k_scan_stage1:                0x40000,
        k_scan_stage2:                0x60000,

        k_evf_cv:                     0x7fc26f,
        k_sysent_661:                 0x1109350,
        k_jmp_rsi:                    0x71a21,
    },

    "9.00": {
        fw_status: "state=proven kernel_rvas=custom-offsets-supplied",

        // data
        XFAST_SYSCALL_addr:                  0x000001C0,
        PRISON0_addr:                        0x0111F870,
        ROOTVNODE_addr:                      0x021EFF20,
        M_TEMP_addr:                         0x015621E0,
        MINI_SYSCORE_SELF_BINARY_addr:       0x01579DF8,
        ALLPROC_addr:                        0x01B946E0,
        SBL_DRIVER_MAPPED_PAGES_addr:        0x02646CA8,
        SBL_PFS_SX_addr:                     0x0264DB40,
        SBL_KEYMGR_KEY_SLOTS_addr:           0x02648238,
        SBL_KEYMGR_KEY_RBTREE_addr:          0x02648248,
        SBL_KEYMGR_BUF_VA_addr:              0x0264C000,
        SBL_KEYMGR_BUF_GVA_addr:             0x0264C808,
        FPU_CTX_addr:                        0x026541C0,
        SYSENT_addr:                         0x01100310,

        // common
        memcmp_addr:                         0x00271E20,
        _sx_xlock_addr:                      0x0043E610,
        _sx_xunlock_addr:                    0x0043E7D0,
        malloc_addr:                         0x00301B20,
        free_addr:                           0x00301CE0,
        strstr_addr:                         0x00487AB0,
        fpu_kern_enter_addr:                 0x002196D0,
        fpu_kern_leave_addr:                 0x00219790,
        memcpy_addr:                         0x002714B0,
        memset_addr:                         0x001496C0,
        strlen_addr:                         0x0030F450,
        printf_addr:                         0x000B7A30,
        eventhandler_register_addr:          0x000F8370,

        // Fself
        sceSblACMgrGetPathId_addr:           0x0008BCD0,
        sceSblServiceMailbox_addr:           0x00630C40,
        sceSblAuthMgrSmIsLoadable2_addr:     0x006439A0,
        _sceSblAuthMgrGetSelfInfo_addr:      0x006441E0,
        _sceSblAuthMgrSmStart_addr:          0x0063FEE0,
        sceSblAuthMgrVerifyHeader_addr:      0x00643A00,

        // Fpkg
        RsaesPkcs1v15Dec2048CRT_addr:        0x004628B0,
        Sha256Hmac_addr:                     0x00445060,
        AesCbcCfb128Encrypt_addr:            0x001FF2D0,
        AesCbcCfb128Decrypt_addr:            0x001FF500,
        sceSblDriverSendMsg_0_addr:          0x0061CED0,
        sceSblPfsSetKeys_addr:               0x006252D0,
        sceSblKeymgrSetKeyStorage_addr:      0x00624970,
        sceSblKeymgrSetKeyForPfs_addr:       0x0061F690,
        sceSblKeymgrCleartKey_addr:          0x0061F9D0,
        sceSblKeymgrSmCallfunc_addr:         0x0061F260,

        // Patch
        vmspace_acquire_ref_addr:            0x0007B9E0,
        vmspace_free_addr:                   0x0007B810,
        vm_map_lock_read_addr:               0x0007BB80,
        vm_map_unlock_read_addr:             0x0007BBD0,
        vm_map_lookup_entry_addr:            0x0007C1C0,
        proc_rwmem_addr:                     0x0041EB00,

        // Fself hooks
        sceSblAuthMgrIsLoadable__sceSblACMgrGetPathId_hook: 0x0064473C,
        sceSblAuthMgrIsLoadable2_hook:       0x0064488E,
        sceSblAuthMgrVerifyHeader_hook1:     0x00645026,
        sceSblAuthMgrVerifyHeader_hook2:     0x00645D09,
        sceSblAuthMgrSmLoadSelfSegment__sceSblServiceMailbox_hook: 0x0064232D,
        sceSblAuthMgrSmLoadSelfBlock__sceSblServiceMailbox_hook:   0x00642F68,

        // Fpkg hooks
        sceSblKeymgrSetKeyStorage__sceSblDriverSendMsg_hook: 0x00624A15,
        sceSblKeymgrInvalidateKey__sx_xlock_hook: 0x0062084D,
        sceSblKeymgrSmCallfunc_npdrm_decrypt_isolated_rif_hook: 0x0064E070,
        sceSblKeymgrSmCallfunc_npdrm_decrypt_rif_new_hook: 0x0064EE3E,
        mountpfs__sceSblPfsSetKeys_hook1:    0x006C3EF9,
        mountpfs__sceSblPfsSetKeys_hook2:    0x006C412A,

        // SceShellUI patches - debug patches - libkernel_sys.sprx
        sceSblRcMgrIsAllowDebugMenuForSettings_patch: 0x0001D1C0,
        sceSblRcMgrIsStoreMode_patch:         0x0001D520,

        // SceShellUI patches - remote play patches
        CreateUserForIDU_patch:              0x00188C10, // system_ex\app\NPXS20001\eboot.bin
        remote_play_menu_patch:              0x00EE55C1, // system_ex\app\NPXS20001\psm\Application\app.exe.sprx

        // SceRemotePlay patches - remote play patches - system\vsh\app\NPXS21006
        SceRemotePlay_patch1:                0x0010039B,
        SceRemotePlay_patch2:                0x001003B6,

        // SceShellCore patches - call sceKernelIsGenuineCEX
        sceKernelIsGenuineCEX_patch1:         0x0016EAA4,
        sceKernelIsGenuineCEX_patch2:         0x008621D4,
        sceKernelIsGenuineCEX_patch3:         0x008AFBC2,
        sceKernelIsGenuineCEX_patch4:         0x00A27BD4,

        // SceShellCore patches - call nidf_libSceDipsw
        nidf_libSceDipsw_patch1:             0x0016EAD2,
        nidf_libSceDipsw_patch2:             0x00249F7B,
        nidf_libSceDipsw_patch3:             0x00862202,
        nidf_libSceDipsw_patch4:             0x00A27C02,

        // SceShellCore patches - bypass firmware checks
        check_disc_root_param_patch:         0x00138DA0,
        app_installer_patch:                 0x00138E90,
        check_system_version:                0x003C5EA7,
        check_title_system_update_patch:     0x003C8540,

        // SceShellCore patches - enable remote pkg installer
        enable_data_mount_patch:             0x0032079B,

        // SceShellCore patches - enable VR without spoof
        enable_psvr_patch:                   0x00DB0B60,

        // SceShellCore patches - enable fpkg
        enable_fpkg_patch:                   0x003D7AFF,

        // SceShellCore patches - use `free` prefix instead `fake`
        fake_free_patch:                     0x00FD3211,

        // SceShellCore patches - enable official external HDD support
        pkg_installer_patch:                 0x00A10A81,
        ext_hdd_patch:                       0x006180FD,

        // SceShellCore patches - enable debug trophies
        debug_trophies_patch:                0x00743299,

        // SceShellCore patches - disable screenshot block
        disable_screenshot_patch:            0x000D1866,

        // Process structure offsets
        proc_p_comm_offset:                  0x454,
        proc_path_offset:                    0x474,
    },

    "11.50": {
        fw_status: "state=proven step4q=90/0 reboot=0 webkit=step7-20/20-x2 "
            + "kernel_rvas=untested-vs-dump kstr_residue=0x318",

        wk_expm1_builtin:                  0x2587bd0,
        wk_JSFunction_m_function:          0x28,

        wk_POP_RDI_RET:                    0x2445241,
        wk_POP_RSI_RET:                    0x2503c9e,
        wk_POP_RDX_RET:                    0x24cfa22,
        wk_POP_RCX_RET:                    0x24c7ebf,
        wk_POP_RAX_RET:                    0x2554e3f,
        wk_POP_R8_RET:                     0x23bb4bd,
        wk_POP_R9_RET:                     0x1c2cda1,
        wk_LEAVE_RET:                      0x23c3790,
        wk_MOV_QWORD_PTR_RDI_RAX_RET:      0x2445d1a,

        wk_MOV_RDI_RSI_30_CALL:            0x29609f8,
        wk_POP_RAX_MOV_RAX_JMP_18:         0x1c8bbc3,
        wk_PUSH_RBP_MOV_RBP_RSP_10:        0x1645270,
        wk_MOV_RDI_RAX_8_CALL_20:          0x1e3f795,
        wk_MOV_RDX_RAX_18_CALL_10:         0x1dea16a,
        wk_PUSH_RDX_POP_RSP_RET:           0x2abe00a,

        pivot_view_sp:                     0x38,
        wk_ArrayBuffer_m_impl:             0x10,
        wk_ArrayBuffer_m_contents_m_data:  0x10,

        wk___imp___error:                  0x3cbcc98,
        k__error:                          0x183c0,

        wk___imp_pthread_create:           0x3cbdbb8,
        k_pthread_create:                  0xa1d0,

        k_stubs: {
            3: 0x2c170,
            4: 0x2b8d0,
            5: 0x2b970,
            6: 0x2d620,
            20: 0x2cb70,
            23: 0x2b6f0,
            24: 0x2d5e0,
            25: 0x2b4d0,
            30: 0x2c9d0,
            54: 0x2cff0,
            92: 0x2b650,
            97: 0x2d050,
            98: 0x2b5f0,
            104: 0x2d380,
            105: 0x2b490,
            106: 0x2d480,
            118: 0x2b2f0,
            135: 0x2c280,
            240: 0x2d4c0,
            331: 0x2c6b0,
            432: 0x2b510,
            466: 0x2cc70,
            487: 0x2ba80,
            488: 0x2bd10,
            538: 0x2b430,
            539: 0x2b4f0,
            544: 0x2beb0,
            545: 0x2ca30,
            632: 0x2d090,
            633: 0x2d840,
            662: 0x2ccb0,
            663: 0x2c3e0,
            664: 0x2d740,
            666: 0x2d540,
            669: 0x2bdf0,
        },
        k_scan_stage1:                     0x40000,
        k_scan_stage2:                     0x60000,

        k_evf_cv:                          0x784318,
        k_sysent_661:                      0x110a760,
        k_jmp_rsi:                         0x704d5,

    },
    "12.00": {
        fw_status: "state=UNTESTED-on-hardware webkit=offline-from-sprx "
            + "anchor=findcaller-validated-on-11.50 "
            + "kernel_rvas=verified-vs-kernel_1202.elf kpatch=10/10-sites-verified",

        wk_expm1_builtin:                   0x2585090,
        wk_JSFunction_m_function:           0x28,

        wk_POP_RDI_RET:                     0x4902f,
        wk_POP_RSI_RET:                     0x10e37,
        wk_POP_RDX_RET:                     0xf7a,
        wk_POP_RCX_RET:                     0x53c0b,
        wk_POP_RAX_RET:                     0x22f53,
        wk_POP_R8_RET:                      0x22f52,
        wk_POP_R9_RET:                      0x60b6c1,
        wk_LEAVE_RET:                       0x11823,
        wk_MOV_QWORD_PTR_RDI_RAX_RET:       0x2b5cb,
        wk_PUSH_RDX_POP_RSP_RET:            0x2abb03a,
        wk_MOV_RDI_RSI_30_CALL:             0x295dcd8,
        wk_POP_RAX_MOV_RAX_JMP_18:          0x8e4873,
        wk_PUSH_RBP_MOV_RBP_RSP_10:         0x285e10,
        wk_MOV_RDI_RAX_8_CALL_20:           0x6c7b0d,
        wk_MOV_RDX_RAX_18_CALL_10:          0xd37cca,

        pivot_view_sp:                      0x38,
        wk_ArrayBuffer_m_impl:              0x10,
        wk_ArrayBuffer_m_contents_m_data:   0x10,

        wk___imp___error:                   0x3cbcc48,
        k__error:                           0x299c0,
        wk___imp_pthread_create:            0x3cbdb80,
        k_pthread_create:                   0x24e00,

        k_stubs: {
            3: 0x2c160,
            4: 0x2b8c0,
            5: 0x2b960,
            6: 0x2d610,
            20: 0x2cb60,
            23: 0x2b6e0,
            24: 0x2d5d0,
            25: 0x2b4c0,
            30: 0x2c9c0,
            54: 0x2cfe0,
            92: 0x2b640,
            97: 0x2d040,
            98: 0x2b5e0,
            104: 0x2d370,
            105: 0x2b480,
            106: 0x2d470,
            118: 0x2b2e0,
            135: 0x2c270,
            240: 0x2d4b0,
            331: 0x2c6a0,
            432: 0x2b500,
            466: 0x2cc60,
            487: 0x2ba70,
            488: 0x2bd00,
            538: 0x2b420,
            539: 0x2b4e0,
            544: 0x2bea0,
            545: 0x2ca20,
            632: 0x2d080,
            633: 0x2d830,
            662: 0x2cca0,
            663: 0x2c3d0,
            664: 0x2d730,
            666: 0x2d530,
            669: 0x2bde0,
        },
        k_scan_stage1:                      0x40000,
        k_scan_stage2:                      0x60000,

        k_evf_cv:                           0x784798,
        k_sysent_661:                       0x110a760,
        k_jmp_rsi:                          0x47b31,
    },
    "13.00": {
        fw_status: "state=proven step10=32/0-x3 reboot=0 webkit=step7-20/20 anchor=findcaller kernel_rvas=verified-on-hardware kpatch=1300.bin-10-sites-verified bug=poops",

        wk_expm1_builtin:                   0x2586880,
        wk_JSFunction_m_function:           0x28,

        wk_POP_RDI_RET:                     0x5c480,
        wk_POP_RSI_RET:                     0x6e45e,
        wk_POP_RDX_RET:                     0x12c5ba,
        wk_POP_RCX_RET:                     0x1bade,
        wk_POP_RAX_RET:                     0x10504,
        wk_POP_R8_RET:                      0x9b311,
        wk_POP_R9_RET:                      0x1dcfb1,
        wk_LEAVE_RET:                       0x182f7,
        wk_MOV_QWORD_PTR_RDI_RAX_RET:       0x548b,
        wk_PUSH_RDX_POP_RSP_RET:            0x2abccaa,
        wk_MOV_RDI_RSI_30_CALL:             0x295f948,
        wk_POP_RAX_MOV_RAX_JMP_18:          0x1d989e3,
        wk_PUSH_RBP_MOV_RBP_RSP_10:         0x25bae0,
        wk_MOV_RDI_RAX_8_CALL_20:           0x4a0406,
        wk_MOV_RDX_RAX_18_CALL_10:          0x1ec3ada,

        pivot_view_sp:                      0x38,
        wk_ArrayBuffer_m_impl:              0x10,
        wk_ArrayBuffer_m_contents_m_data:   0x10,

        wk___imp___error:                   0x3cb8cc8,
        k__error:                           0x26420,
        wk___imp_pthread_create:            0x3cb9c00,
        k_pthread_create:                   0x10110,

        k_stubs: {
            3: 0x2c170,
            4: 0x2b8d0,
            5: 0x2b970,
            6: 0x2d620,
            20: 0x2cb70,
            23: 0x2b6f0,
            24: 0x2d5e0,
            25: 0x2b4d0,
            30: 0x2c9d0,
            54: 0x2cff0,
            92: 0x2b650,
            97: 0x2d050,
            98: 0x2b5f0,
            104: 0x2d380,
            105: 0x2b490,
            106: 0x2d480,
            118: 0x2b2f0,
            135: 0x2c280,
            240: 0x2d4c0,
            331: 0x2c6b0,
            432: 0x2b510,
            466: 0x2cc70,
            487: 0x2ba80,
            488: 0x2bd10,
            538: 0x2b430,
            539: 0x2b4f0,
            544: 0x2beb0,
            545: 0x2ca30,
            632: 0x2d090,
            633: 0x2d840,
            662: 0x2ccb0,
            663: 0x2c3e0,
            664: 0x2d740,
            666: 0x2d540,
            669: 0x2bdf0,
        },
        k_scan_stage1:                      0x40000,
        k_scan_stage2:                      0x60000,

        k_kl_lock:                          0xe6c20,

        k_evf_cv:                           0x0,
        k_sysent_661:                       0x110a760,
        k_jmp_rsi:                          0x47b31,
    },
"13.02": {
        fw_status: "state=proven kernel_rvas=custom-offsets-supplied",

        // data
        XFAST_SYSCALL_addr:                  0x000001C0,
        PRISON0_addr:                        0x0111FA18,
        ROOTVNODE_addr:                      0x02136E90,
        M_TEMP_addr:                         0x01520D00,
        MINI_SYSCORE_SELF_BINARY_addr:       0x0153D6C8,
        ALLPROC_addr:                        0x01B28538,
        SBL_DRIVER_MAPPED_PAGES_addr:        0x02647350,
        SBL_PFS_SX_addr:                     0x0265C080,
        SBL_KEYMGR_KEY_SLOTS_addr:           0x02668040,
        SBL_KEYMGR_KEY_RBTREE_addr:          0x02668050,
        SBL_KEYMGR_BUF_VA_addr:              0x0266C000,
        SBL_KEYMGR_BUF_GVA_addr:             0x0266C808,
        FPU_CTX_addr:                        0x026542C0,
        SYSENT_addr:                         0x01102B70,

        // common
        memcmp_addr:                         0x00394310,
        _sx_xlock_addr:                      0x000A3840,
        _sx_xunlock_addr:                    0x000A3A00,
        malloc_addr:                         0x00009520,
        free_addr:                           0x000096E0,
        strstr_addr:                         0x0021CCC0,
        fpu_kern_enter_addr:                 0x001E0050,
        fpu_kern_leave_addr:                 0x001E0110,
        memcpy_addr:                         0x002BD4F0,
        memset_addr:                         0x001FA1B0,
        strlen_addr:                         0x0036ABA0,
        printf_addr:                         0x002E0450,
        eventhandler_register_addr:          0x00224180,

        // Fself
        sceSblACMgrGetPathId_addr:           0x003B2DF0,
        sceSblServiceMailbox_addr:           0x0062F9F0,
        sceSblAuthMgrSmIsLoadable2_addr:     0x0063C860,
        _sceSblAuthMgrGetSelfInfo_addr:      0x0063D0A0,
        _sceSblAuthMgrSmStart_addr:          0x0063DC30,
        sceSblAuthMgrVerifyHeader_addr:      0x0063C8C0,

        // Fpkg
        RsaesPkcs1v15Dec2048CRT_addr:        0x0021BC70,
        Sha256Hmac_addr:                     0x001F8DB0,
        AesCbcCfb128Encrypt_addr:            0x00340EA0,
        AesCbcCfb128Decrypt_addr:            0x003410D0,
        sceSblDriverSendMsg_0_addr:          0x0061C030,
        sceSblPfsSetKeys_addr:               0x00626770,
        sceSblKeymgrSetKeyStorage_addr:      0x006247D0,
        sceSblKeymgrSetKeyForPfs_addr:       0x0062B0C0,
        sceSblKeymgrCleartKey_addr:          0x0062B400,
        sceSblKeymgrSmCallfunc_addr:         0x0062AC90,

        // Patch
        vmspace_acquire_ref_addr:            0x002F6F90,
        vmspace_free_addr:                   0x002F6DC0,
        vm_map_lock_read_addr:               0x002F7120,
        vm_map_unlock_read_addr:             0x002F7170,
        vm_map_lookup_entry_addr:            0x002F7760,
        proc_rwmem_addr:                     0x00366010,

        // Fself hooks
        sceSblAuthMgrIsLoadable__sceSblACMgrGetPathId_hook: 0x0064207C,
        sceSblAuthMgrIsLoadable2_hook:       0x006421CE,
        sceSblAuthMgrVerifyHeader_hook1:     0x00642966,
        sceSblAuthMgrVerifyHeader_hook2:     0x00643649,
        sceSblAuthMgrSmLoadSelfSegment__sceSblServiceMailbox_hook: 0x0064007D,
        sceSblAuthMgrSmLoadSelfBlock__sceSblServiceMailbox_hook:   0x00640CB8,

        // Fpkg hooks
        sceSblKeymgrSetKeyStorage__sceSblDriverSendMsg_hook: 0x00624875,
        sceSblKeymgrInvalidateKey__sx_xlock_hook: 0x0062C27D,
        sceSblKeymgrSmCallfunc_npdrm_decrypt_isolated_rif_hook: 0x0064C5D0,
        sceSblKeymgrSmCallfunc_npdrm_decrypt_rif_new_hook: 0x0064D39E,
        mountpfs__sceSblPfsSetKeys_hook1:    0x006A2EF9,
        mountpfs__sceSblPfsSetKeys_hook2:    0x006A312A,

        // SceShellUI patches - debug patches - libkernel_sys.sprx
        sceSblRcMgrIsAllowDebugMenuForSettings_patch: 0x0001D100,
        sceSblRcMgrIsStoreMode_patch:         0x0001D460,

        // SceShellUI patches - remote play patches
        CreateUserForIDU_patch:              0x0018B3B0,
        remote_play_menu_patch:              0x00EC8902,

        // SceRemotePlay patches
        SceRemotePlay_patch1:                0x000ED1F5,
        SceRemotePlay_patch2:                0x000ED210,

        // SceShellCore patches - call sceKernelIsGenuineCEX
        sceKernelIsGenuineCEX_patch1:         0x0016F5A4,
        sceKernelIsGenuineCEX_patch2:         0x00874674,
        sceKernelIsGenuineCEX_patch3:         0x008C4992,
        sceKernelIsGenuineCEX_patch4:         0x00A28244,

        // SceShellCore patches - call nidf_libSceDipsw
        nidf_libSceDipsw_patch1:             0x0016F5D2,
        nidf_libSceDipsw_patch2:             0x0024E11C,
        nidf_libSceDipsw_patch3:             0x008746A2,
        nidf_libSceDipsw_patch4:             0x00A28272,

        // SceShellCore patches - bypass firmware checks
        check_disc_root_param_patch:         0xDEADC0DE,
        app_installer_patch:                 0x001389A0,
        check_system_version:                0x003CA3A7,
        check_title_system_update_patch:     0x003CD5F0,

        // SceShellCore patches - enable remote pkg installer
        enable_data_mount_patch:             0x00323380,

        // SceShellCore patches - enable VR without spoof
        enable_psvr_patch:                   0x00DAF5E0,

        // SceShellCore patches - enable fpkg
        enable_fpkg_patch:                   0x003DE07F,

        // SceShellCore patches - use `free` prefix instead `fake`
        fake_free_patch:                     0x00FD0E59,

        // SceShellCore patches - enable official external HDD support
        pkg_installer_patch:                 0x00A11791,
        ext_hdd_patch:                       0x0061465D,

        // SceShellCore patches - enable debug trophies
        debug_trophies_patch:                0x0074D0C9,

        // SceShellCore patches - disable screenshot block
        disable_screenshot_patch:            0x000D2216,

        // Process structure offsets
        proc_p_comm_offset:                  0x454,
        proc_path_offset:                    0x474,
    },

    "13.04": {
        fw_status: "state=proven kernel_rvas=custom-offsets-supplied",

        // data
        XFAST_SYSCALL_addr:                  0x000001C0,
        PRISON0_addr:                        0x0111FA18,
        ROOTVNODE_addr:                      0x02136E90,
        M_TEMP_addr:                         0x01520D00,
        MINI_SYSCORE_SELF_BINARY_addr:       0x0153D6C8,
        ALLPROC_addr:                        0x01B28538,
        SBL_DRIVER_MAPPED_PAGES_addr:        0x02647350,
        SBL_PFS_SX_addr:                     0x0265C080,
        SBL_KEYMGR_KEY_SLOTS_addr:           0x02668040,
        SBL_KEYMGR_KEY_RBTREE_addr:          0x02668050,
        SBL_KEYMGR_BUF_VA_addr:              0x0266C000,
        SBL_KEYMGR_BUF_GVA_addr:             0x0266C808,
        FPU_CTX_addr:                        0x026542C0,
        SYSENT_addr:                         0x01102B70,

        // common
        memcmp_addr:                         0x00394310,
        _sx_xlock_addr:                      0x000A3840,
        _sx_xunlock_addr:                    0x000A3A00,
        malloc_addr:                         0x00009520,
        free_addr:                           0x000096E0,
        strstr_addr:                         0x0021CCC0,
        fpu_kern_enter_addr:                 0x001E0050,
        fpu_kern_leave_addr:                 0x001E0110,
        memcpy_addr:                         0x002BD4F0,
        memset_addr:                         0x001FA1B0,
        strlen_addr:                         0x0036ABA0,
        printf_addr:                         0x002E0450,
        eventhandler_register_addr:          0x00224180,

        // Fself
        sceSblACMgrGetPathId_addr:           0x003B2DF0,
        sceSblServiceMailbox_addr:           0x0062F9F0,
        sceSblAuthMgrSmIsLoadable2_addr:     0x0063C860,
        _sceSblAuthMgrGetSelfInfo_addr:      0x0063D0A0,
        _sceSblAuthMgrSmStart_addr:          0x0063DC30,
        sceSblAuthMgrVerifyHeader_addr:      0x0063C8C0,

        // Fpkg
        RsaesPkcs1v15Dec2048CRT_addr:        0x0021BC70,
        Sha256Hmac_addr:                     0x001F8DB0,
        AesCbcCfb128Encrypt_addr:            0x00340EA0,
        AesCbcCfb128Decrypt_addr:            0x003410D0,
        sceSblDriverSendMsg_0_addr:          0x0061C030,
        sceSblPfsSetKeys_addr:               0x00626770,
        sceSblKeymgrSetKeyStorage_addr:      0x006247D0,
        sceSblKeymgrSetKeyForPfs_addr:       0x0062B0C0,
        sceSblKeymgrCleartKey_addr:          0x0062B400,
        sceSblKeymgrSmCallfunc_addr:         0x0062AC90,

        // Patch
        vmspace_acquire_ref_addr:            0x002F6F90,
        vmspace_free_addr:                   0x002F6DC0,
        vm_map_lock_read_addr:               0x002F7120,
        vm_map_unlock_read_addr:             0x002F7170,
        vm_map_lookup_entry_addr:            0x002F7760,
        proc_rwmem_addr:                     0x00366010,

        // Fself hooks
        sceSblAuthMgrIsLoadable__sceSblACMgrGetPathId_hook: 0x0064207C,
        sceSblAuthMgrIsLoadable2_hook:       0x006421CE,
        sceSblAuthMgrVerifyHeader_hook1:     0x00642966,
        sceSblAuthMgrVerifyHeader_hook2:     0x00643649,
        sceSblAuthMgrSmLoadSelfSegment__sceSblServiceMailbox_hook: 0x0064007D,
        sceSblAuthMgrSmLoadSelfBlock__sceSblServiceMailbox_hook:   0x00640CB8,

        // Fpkg hooks
        sceSblKeymgrSetKeyStorage__sceSblDriverSendMsg_hook: 0x00624875,
        sceSblKeymgrInvalidateKey__sx_xlock_hook: 0x0062C27D,
        sceSblKeymgrSmCallfunc_npdrm_decrypt_isolated_rif_hook: 0x0064C5D0,
        sceSblKeymgrSmCallfunc_npdrm_decrypt_rif_new_hook: 0x0064D39E,
        mountpfs__sceSblPfsSetKeys_hook1:    0x006A2EF9,
        mountpfs__sceSblPfsSetKeys_hook2:    0x006A312A,

        // SceShellUI patches - debug patches - libkernel_sys.sprx
        sceSblRcMgrIsAllowDebugMenuForSettings_patch: 0x0001D100,
        sceSblRcMgrIsStoreMode_patch:         0x0001D460,

        // SceShellUI patches - remote play patches
        CreateUserForIDU_patch:              0x0018B3B0, // system_ex\app\NPXS20001\eboot.bin
        remote_play_menu_patch:              0x00EC8902, // system_ex\app\NPXS20001\psm\Application\app.exe.sprx

        // SceRemotePlay patches - remote play patches - system\vsh\app\NPXS21006
        SceRemotePlay_patch1:                0x000ED1F5,
        SceRemotePlay_patch2:                0x000ED210,

        // SceShellCore patches - call sceKernelIsGenuineCEX
        sceKernelIsGenuineCEX_patch1:         0x0016F5A4,
        sceKernelIsGenuineCEX_patch2:         0x00874674,
        sceKernelIsGenuineCEX_patch3:         0x008C4992,
        sceKernelIsGenuineCEX_patch4:         0x00A28244,

        // SceShellCore patches - call nidf_libSceDipsw
        nidf_libSceDipsw_patch1:             0x0016F5D2,
        nidf_libSceDipsw_patch2:             0x0024E11C,
        nidf_libSceDipsw_patch3:             0x008746A2,
        nidf_libSceDipsw_patch4:             0x00A28272,

        // SceShellCore patches - bypass firmware checks
        check_disc_root_param_patch:         0xDEADC0DE,
        app_installer_patch:                 0x001389A0,
        check_system_version:                0x003CA3A7,
        check_title_system_update_patch:     0x003CD5F0,

        // SceShellCore patches - enable remote pkg installer
        enable_data_mount_patch:             0x00323380,

        // SceShellCore patches - enable VR without spoof
        enable_psvr_patch:                   0x00DAF5E0,

        // SceShellCore patches - enable fpkg
        enable_fpkg_patch:                   0x003DE07F,

        // SceShellCore patches - use `free` prefix instead `fake`
        fake_free_patch:                     0x00FD0E59,

        // SceShellCore patches - enable official external HDD support
        pkg_installer_patch:                 0x00A11791,
        ext_hdd_patch:                       0x0061465D,

        // SceShellCore patches - enable debug trophies
        debug_trophies_patch:                0x0074D0C9,

        // SceShellCore patches - disable screenshot block
        disable_screenshot_patch:            0x000D2216,

        // Process structure offsets
        proc_p_comm_offset:                  0x454,
        proc_path_offset:                    0x474,
    },

    "13.50": {
        fw_status: "state=proven kernel_rvas=custom-offsets-supplied",

        // data
        XFAST_SYSCALL_addr:                  0x000001C0,
        PRISON0_addr:                        0x0111FA18,
        ROOTVNODE_addr:                      0x02136E90,
        M_TEMP_addr:                         0x01520D00,
        MINI_SYSCORE_SELF_BINARY_addr:       0x0153D6C8,
        ALLPROC_addr:                        0x01B28538,
        SBL_DRIVER_MAPPED_PAGES_addr:        0x02647350,
        SBL_PFS_SX_addr:                     0x0265C080,
        SBL_KEYMGR_KEY_SLOTS_addr:           0x02668040,
        SBL_KEYMGR_KEY_RBTREE_addr:          0x02668050,
        SBL_KEYMGR_BUF_VA_addr:              0x0266C000,
        SBL_KEYMGR_BUF_GVA_addr:             0x0266C808,
        FPU_CTX_addr:                        0x026542C0,
        SYSENT_addr:                         0x01102B70,

        // common
        memcmp_addr:                         0x003946D0,
        _sx_xlock_addr:                      0x000A3840,
        _sx_xunlock_addr:                    0x000A3A00,
        malloc_addr:                         0x00009520,
        free_addr:                           0x000096E0,
        strstr_addr:                         0x0021CCD0,
        fpu_kern_enter_addr:                 0x001E0060,
        fpu_kern_leave_addr:                 0x001E0120,
        memcpy_addr:                         0x002BD500,
        memset_addr:                         0x001FA1C0,
        strlen_addr:                         0x0036AEF0,
        printf_addr:                         0x002E0460,
        eventhandler_register_addr:          0x00224190,

        // Fself
        sceSblACMgrGetPathId_addr:           0x003B3230,
        sceSblServiceMailbox_addr:           0x0062FE30,
        sceSblAuthMgrSmIsLoadable2_addr:     0x0063CCA0,
        _sceSblAuthMgrGetSelfInfo_addr:      0x0063D4E0,
        _sceSblAuthMgrSmStart_addr:          0x0063E070,
        sceSblAuthMgrVerifyHeader_addr:      0x0063CD00,

        // Fpkg
        RsaesPkcs1v15Dec2048CRT_addr:        0x0021BC80,
        Sha256Hmac_addr:                     0x001F8DC0,
        AesCbcCfb128Encrypt_addr:            0x003411F0,
        AesCbcCfb128Decrypt_addr:            0x00341420,
        sceSblDriverSendMsg_0_addr:          0x0061C470,
        sceSblPfsSetKeys_addr:               0x00626BB0,
        sceSblKeymgrSetKeyStorage_addr:      0x00624C10,
        sceSblKeymgrSetKeyForPfs_addr:       0x0062B500,
        sceSblKeymgrCleartKey_addr:          0x0062B840,
        sceSblKeymgrSmCallfunc_addr:         0x0062B0D0,

        // Patch
        vmspace_acquire_ref_addr:            0x002F72E0,
        vmspace_free_addr:                   0x002F7110,
        vm_map_lock_read_addr:               0x002F7470,
        vm_map_unlock_read_addr:             0x002F74C0,
        vm_map_lookup_entry_addr:            0x002F7AB0,
        proc_rwmem_addr:                     0x00366360,

        // Fself hooks
        sceSblAuthMgrIsLoadable__sceSblACMgrGetPathId_hook: 0x006424BC,
        sceSblAuthMgrIsLoadable2_hook:       0x0064260E,
        sceSblAuthMgrVerifyHeader_hook1:     0x00642DA6,
        sceSblAuthMgrVerifyHeader_hook2:     0x00643A89,
        sceSblAuthMgrSmLoadSelfSegment__sceSblServiceMailbox_hook: 0x006404BD,
        sceSblAuthMgrSmLoadSelfBlock__sceSblServiceMailbox_hook:   0x006410F8,

        // Fpkg hooks
        sceSblKeymgrSetKeyStorage__sceSblDriverSendMsg_hook: 0x00624CB5,
        sceSblKeymgrInvalidateKey__sx_xlock_hook: 0x0062C6BD,
        sceSblKeymgrSmCallfunc_npdrm_decrypt_isolated_rif_hook: 0x0064CA10,
        sceSblKeymgrSmCallfunc_npdrm_decrypt_rif_new_hook: 0x0064D7DE,
        mountpfs__sceSblPfsSetKeys_hook1:    0x006A3339,
        mountpfs__sceSblPfsSetKeys_hook2:    0x006A356A,

        // SceShellUI patches - debug patches - libkernel_sys.sprx
        sceSblRcMgrIsAllowDebugMenuForSettings_patch: 0x0001D100,
        sceSblRcMgrIsStoreMode_patch:         0x0001D460,

        // SceShellUI patches - remote play patches
        CreateUserForIDU_patch:              0x0018B3B0, // system_ex\app\NPXS20001\eboot.bin
        remote_play_menu_patch:              0x00EC8902, // system_ex\app\NPXS20001\psm\Application\app.exe.sprx

        // SceRemotePlay patches - remote play patches - system\vsh\app\NPXS21006
        SceRemotePlay_patch1:                0x000ED1F5,
        SceRemotePlay_patch2:                0x000ED210,

        // SceShellCore patches - call sceKernelIsGenuineCEX
        sceKernelIsGenuineCEX_patch1:         0x0016F5A4,
        sceKernelIsGenuineCEX_patch2:         0x00874C14,
        sceKernelIsGenuineCEX_patch3:         0x008C4F32,
        sceKernelIsGenuineCEX_patch4:         0x00A287E4,

        // SceShellCore patches - call nidf_libSceDipsw
        nidf_libSceDipsw_patch1:             0x0016F5D2,
        nidf_libSceDipsw_patch2:             0x0024E11C,
        nidf_libSceDipsw_patch3:             0x00874C42,
        nidf_libSceDipsw_patch4:             0x00A28812,

        // SceShellCore patches - bypass firmware checks
        check_disc_root_param_patch:         0xDEADC0DE,
        app_installer_patch:                 0x001389A0,
        check_system_version:                0x003CA3A7,
        check_title_system_update_patch:     0x003CD5F0,

        // SceShellCore patches - enable remote pkg installer
        enable_data_mount_patch:             0x00323380,

        // SceShellCore patches - enable VR without spoof
        enable_psvr_patch:                   0x00DAFB80,

        // SceShellCore patches - enable fpkg
        enable_fpkg_patch:                   0x003DE07F,

        // SceShellCore patches - use `free` prefix instead `fake`
        fake_free_patch:                     0x00FD13F9,

        // SceShellCore patches - enable official external HDD support
        pkg_installer_patch:                 0x00A11D31,
        ext_hdd_patch:                       0x0061465D,

        // SceShellCore patches - enable debug trophies
        debug_trophies_patch:                0x0074D5E9,

        // SceShellCore patches - disable screenshot block
        disable_screenshot_patch:            0x000D2216,

        // Process structure offsets
        proc_p_comm_offset:                  0x454,
        proc_path_offset:                    0x474,
    },

    "13.52": {
        fw_status: "state=proven kernel_rvas=custom-offsets-supplied",

        // data
        XFAST_SYSCALL_addr:                  0x000001C0,
        PRISON0_addr:                        0x0111FA18,
        ROOTVNODE_addr:                      0x02136E90,
        M_TEMP_addr:                         0x01520D00,
        MINI_SYSCORE_SELF_BINARY_addr:       0x0153D6C8,
        ALLPROC_addr:                        0x01B28538,
        SBL_DRIVER_MAPPED_PAGES_addr:        0x02647350,
        SBL_PFS_SX_addr:                     0x0265C080,
        SBL_KEYMGR_KEY_SLOTS_addr:           0x02668040,
        SBL_KEYMGR_KEY_RBTREE_addr:          0x02668050,
        SBL_KEYMGR_BUF_VA_addr:              0x0266C000,
        SBL_KEYMGR_BUF_GVA_addr:             0x0266C808,
        FPU_CTX_addr:                        0x026542C0,
        SYSENT_addr:                         0x01102B70,

        // common
        memcmp_addr:                         0x00394AD0,
        _sx_xlock_addr:                      0x000A3840,
        _sx_xunlock_addr:                    0x000A3A00,
        malloc_addr:                         0x00009520,
        free_addr:                           0x000096E0,
        strstr_addr:                         0x0021CD70,
        fpu_kern_enter_addr:                 0x001E0100,
        fpu_kern_leave_addr:                 0x001E01C0,
        memcpy_addr:                         0x002BD5A0,
        memset_addr:                         0x001FA260,
        strlen_addr:                         0x0036B2F0,
        printf_addr:                         0x002E0510,
        eventhandler_register_addr:          0x00224230,

        // Fself
        sceSblACMgrGetPathId_addr:           0x003B3630,
        sceSblServiceMailbox_addr:           0x00630230,
        sceSblAuthMgrSmIsLoadable2_addr:     0x0063D0A0,
        _sceSblAuthMgrGetSelfInfo_addr:      0x0063D8E0,
        _sceSblAuthMgrSmStart_addr:          0x0063E470,
        sceSblAuthMgrVerifyHeader_addr:      0x0063D100,

        // Fpkg
        RsaesPkcs1v15Dec2048CRT_addr:        0x0021BD20,
        Sha256Hmac_addr:                     0x001F8E60,
        AesCbcCfb128Encrypt_addr:            0x003415F0,
        AesCbcCfb128Decrypt_addr:            0x00341820,
        sceSblDriverSendMsg_0_addr:          0x0061C870,
        sceSblPfsSetKeys_addr:               0x00626FB0,
        sceSblKeymgrSetKeyStorage_addr:      0x00625010,
        sceSblKeymgrSetKeyForPfs_addr:       0x0062B900,
        sceSblKeymgrCleartKey_addr:          0x0062BC40,
        sceSblKeymgrSmCallfunc_addr:         0x0062B4D0,

        // Patch
        vmspace_acquire_ref_addr:            0x002F76E0,
        vmspace_free_addr:                   0x002F7510,
        vm_map_lock_read_addr:               0x002F7870,
        vm_map_unlock_read_addr:             0x002F78C0,
        vm_map_lookup_entry_addr:            0x002F7EB0,
        proc_rwmem_addr:                     0x00366760,

        // Fself hooks
        sceSblAuthMgrIsLoadable__sceSblACMgrGetPathId_hook: 0x006428BC,
        sceSblAuthMgrIsLoadable2_hook:       0x00642A0E,
        sceSblAuthMgrVerifyHeader_hook1:     0x006431A6,
        sceSblAuthMgrVerifyHeader_hook2:     0x00643E89,
        sceSblAuthMgrSmLoadSelfSegment__sceSblServiceMailbox_hook: 0x006408BD,
        sceSblAuthMgrSmLoadSelfBlock__sceSblServiceMailbox_hook:   0x006414F8,

        // Fpkg hooks
        sceSblKeymgrSetKeyStorage__sceSblDriverSendMsg_hook: 0x006250B5,
        sceSblKeymgrInvalidateKey__sx_xlock_hook: 0x0062CABD,
        sceSblKeymgrSmCallfunc_npdrm_decrypt_isolated_rif_hook: 0x0064CE10,
        sceSblKeymgrSmCallfunc_npdrm_decrypt_rif_new_hook: 0x0064DBDE,
        mountpfs__sceSblPfsSetKeys_hook1:    0x006A3739,
        mountpfs__sceSblPfsSetKeys_hook2:    0x006A396A,

        // SceShellUI patches - debug patches - libkernel_sys.sprx
        sceSblRcMgrIsAllowDebugMenuForSettings_patch: 0x0001D100,
        sceSblRcMgrIsStoreMode_patch:         0x0001D460,

        // SceShellUI patches - remote play patches
        CreateUserForIDU_patch:              0x0018B3B0,
        remote_play_menu_patch:              0x00EC8902,

        // SceRemotePlay patches
        SceRemotePlay_patch1:                0x000ED1F5,
        SceRemotePlay_patch2:                0x000ED210,

        // SceShellCore patches - call sceKernelIsGenuineCEX
        sceKernelIsGenuineCEX_patch1:         0x0016F5A4,
        sceKernelIsGenuineCEX_patch2:         0x00874C14,
        sceKernelIsGenuineCEX_patch3:         0x008C4F32,
        sceKernelIsGenuineCEX_patch4:         0x00A287E4,

        // SceShellCore patches - call nidf_libSceDipsw
        nidf_libSceDipsw_patch1:             0x0016F5D2,
        nidf_libSceDipsw_patch2:             0x0024E11C,
        nidf_libSceDipsw_patch3:             0x00874C42,
        nidf_libSceDipsw_patch4:             0x00A28812,

        // SceShellCore patches - bypass firmware checks
        check_disc_root_param_patch:         0xDEADC0DE,
        app_installer_patch:                 0x001389A0,
        check_system_version:                0x003CA3A7,
        check_title_system_update_patch:     0x003CD5F0,

        // SceShellCore patches - enable remote pkg installer
        enable_data_mount_patch:             0x00323380,

        // SceShellCore patches - enable VR without spoof
        enable_psvr_patch:                   0x00DAFB80,

        // SceShellCore patches - enable fpkg
        enable_fpkg_patch:                   0x003DE07F,

        // SceShellCore patches - use `free` prefix instead `fake`
        fake_free_patch:                     0x00FD13F9,

        // SceShellCore patches - enable official external HDD support
        pkg_installer_patch:                 0x00A11D31,
        ext_hdd_patch:                       0x0061465D,

        // SceShellCore patches - enable debug trophies
        debug_trophies_patch:                0x0074D5E9,

        // SceShellCore patches - disable screenshot block
        disable_screenshot_patch:            0x000D2216,

        // Process structure offsets
        proc_p_comm_offset:                  0x454,
        proc_path_offset:                    0x474,
    },

    "12.50": {
        fw_status: "state=UNTESTED-on-hardware "
            + "webkit=addfw-from-decrypted-12.50-modules (15/15 gadgets, 35/35 stubs) "
            + "anchor=findcaller-offline (self-check reproduces the known 11.50 and "
            + "12.00 anchors) "
            + "kernel_rvas=asserted-by-supplied-table UNVERIFIED (no 12.50 kernel dump; "
            + "equal to 13.00's row, which came from the same table) "
            + "kpatch=1250.bin bug=poops",

        wk_expm1_builtin:                   0x2585110,   // the anchor
        wk_JSFunction_m_function:           0x28,

        wk_POP_RDI_RET:                     0x4902f,   // 5f c3
        wk_POP_RSI_RET:                     0x10e37,   // 5e c3
        wk_POP_RDX_RET:                     0x771ea,   // 5a c3
        wk_POP_RCX_RET:                     0x5def9,   // 59 c3
        wk_POP_RAX_RET:                     0x22f53,   // 58 c3
        wk_POP_R8_RET:                      0x22f52,   // 47 58 c3
        wk_POP_R9_RET:                      0x60b6c1,   // 47 59 c3
        wk_LEAVE_RET:                       0x77caa,   // c9 c3
        wk_MOV_QWORD_PTR_RDI_RAX_RET:       0x2b5cb,   // 48 89 07 c3
        wk_PUSH_RDX_POP_RSP_RET:            0x2abb0ba,   // 52 5c c3
        wk_MOV_RDI_RSI_30_CALL:             0x295dd58,   // 48 8b 7e 30 48 8b 07 ff 10
        wk_POP_RAX_MOV_RAX_JMP_18:          0x8e4873,   // 58 48 8b 07 ff 60 18
        wk_PUSH_RBP_MOV_RBP_RSP_10:         0x285e10,   // 55 48 89 e5 48 8b 07 ff 50 10
        wk_MOV_RDI_RAX_8_CALL_20:           0x6c7b0d,   // 48 8b 78 08 48 8b 07 ff 50 20
        wk_MOV_RDX_RAX_18_CALL_10:          0xd37cca,   // 48 8b 50 38 48 8b 07 ff 50 10

        pivot_view_sp:                      0x38,   // read off G4's displacement
        wk_ArrayBuffer_m_impl:              0x10,
        wk_ArrayBuffer_m_contents_m_data:   0x10,

        wk___imp___error:                   0x3cb4c48,
        k__error:                           0xd9d0,
        wk___imp_pthread_create:            0x3cb5b80,
        k_pthread_create:                   0x23d20,

        k_stubs: {
            3: 0x2c160,   // read
            4: 0x2b8c0,   // write
            5: 0x2b960,   // open
            6: 0x2d610,   // close
            20: 0x2cb60,   // getpid
            23: 0x2b6e0,   // setuid
            24: 0x2d5d0,   // getuid
            25: 0x2b4c0,   // geteuid
            30: 0x2c9c0,   // accept
            54: 0x2cfe0,   // ioctl
            92: 0x2b640,   // fcntl
            97: 0x2d040,   // socket
            98: 0x2b5e0,   // connect
            104: 0x2d370,   // bind
            105: 0x2b480,   // setsockopt
            106: 0x2d470,   // listen
            118: 0x2b2e0,   // getsockopt
            135: 0x2c270,   // socketpair
            240: 0x2d4b0,   // nanosleep
            331: 0x2c6a0,   // sched_yield
            432: 0x2b500,   // thr_self
            466: 0x2cc60,   // rtprio_thread
            487: 0x2ba70,   // cpuset_getaffinity
            488: 0x2bd00,   // cpuset_setaffinity
            538: 0x2b420,   // evf_create
            539: 0x2b4e0,   // evf_delete
            544: 0x2bea0,   // evf_set
            545: 0x2ca20,   // evf_clear
            632: 0x2d080,   // thr_suspend_ucontext
            633: 0x2d830,   // thr_resume_ucontext
            662: 0x2cca0,   // aio_multi_delete
            663: 0x2c3d0,   // aio_multi_wait
            664: 0x2d730,   // aio_multi_poll
            666: 0x2d530,   // aio_multi_cancel
            669: 0x2bde0,   // aio_submit_cmd
        },
        k_scan_stage1:                      0x40000,
        k_scan_stage2:                      0x60000,

        // KERNEL RVAs -- not derivable from userland modules. These are the
        // supplied 12.50 table, which is identical to our 13.00 row on every
        // key we carry. Not independently verified: there is no 12.50 kernel
        // dump here. step4q byte-gates sysent/jmp before firing either.
        //
        // The table also carries PRISON0 and ROOTVNODE. We deliberately do NOT
        // store those -- chain_poops.js:1722 reads prison0 out of the live
        // kernel via curproc->ucred->cr_prison, so a wrong constant cannot
        // exist to be wrong. Its EVF_OFFSET/TARGET_ID_OFFSET are 0 because
        // netctrl does not use them, which matches k_evf_cv below.
        k_evf_cv:                           0x0,      // unused by poops
        k_sysent_661:                       0x110a760,
        k_jmp_rsi:                          0x47b31,
        k_kl_lock:                          0xe6c20,  // kernel_base = kl_lock - this
    },
};

// 12.02 IS 12.00 for everything this table describes. The 12.00 block's own
// fw_status reads "kernel_rvas=verified-vs-kernel_1202.elf" -- those offsets
// were derived from the 12.02 kernel in the first place. Same WebKit gadgets,
// same kernel RVAs, same ten patch sites, so it takes the same blob
// (patches/1200.bin) rather than a 1202.bin that does not exist.
//
// A copy rather than a shared reference, so its fw_status can say where the
// data came from without rewriting 12.00's.
PS4["12.02"] = Object.assign({}, PS4["12.00"], {
    alias_of: "12.00",
    fw_status: "state=UNTESTED-on-hardware shares=12.00 "
        + "kernel_rvas=verified-vs-kernel_1202.elf (this firmware) "
        + "kpatch=1200.bin-10-sites-verified bug=lapse",
    kpatch: "1200.bin",
});

// 12.52 IS 12.50, per the supplied table -- same kernel row, and the WebKit
// side is taken from the single Lib_dump/12.50 module set because that is the
// only 12.5x dump we have. The kernel half of that claim is consistent with
// what we already believed (12.50's row equals 13.00's); the WebKit half is an
// ASSERTION, not a measurement. If a 12.52 libSceNKWebKit.sprx ever turns up,
// re-derive with tools/addfw.js and compare -- a moved anchor would fail at
// stage 1, loudly and harmlessly, rather than corrupting anything.
//
// Takes patches/1250.bin, since a 1252.bin does not exist.
PS4["12.52"] = Object.assign({}, PS4["12.50"], {
    alias_of: "12.50",
    fw_status: "state=UNTESTED-on-hardware shares=12.50 "
        + "webkit=assumed-identical-to-12.50 (no 12.52 module dump) "
        + "kernel_rvas=asserted-by-supplied-table UNVERIFIED "
        + "kpatch=1250.bin bug=poops",
    kpatch: "1250.bin",
});

export function offsetsFor(uaString) {
    const m = (uaString || "").match(/PlayStation\s+4[\/ ](\d+)\.(\d+)/);
    if (!m) return { key: null, off: null };

    const key = m[1] + "." + parseInt(m[2], 16).toString(16).padStart(2, "0");
    return { key, off: PS4[key] || null };
}
