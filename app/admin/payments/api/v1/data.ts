enum PaymentMethodType {
  BANK_MANUAL,
  EWALLET_MANUAL,
  BANK_AUTO,
  EWALLET_AUTO
}

enum StatusEnum {
  ENABLE,
  DISABLE
}

const columns = [
  {name: "ID", id: "id", sortable: true},
  {name: "NAME", id: "account_name", sortable: true},
  {name: "CODE", id: "account_code", sortable: true},
  {name: "NUMBER", id: "account_number", sortable: true},
  {name: "LOGO", id: "logo"},
  {name: "TYPE", id: "type"},
  {name: "STATUS", id: "status"},
  {name: "ACTIONS", id: "actions"},
];

const statusOptions = [
  {name: "Enable", id: "enable"},
  {name: "Disable", id: "Disable"},
];

const typeOptions = [
  {name: "Bank Manual", id: "bank_manual"},
  {name: "Bank Auto", id: "bank_auto"},
  {name: "E-Wallet Manual", id: "ewallet_manual"},
  {name: "E-Wallet Auto", id: "ewallet_auto"},
];

const results = [
  {
    id: 1,
    account_name: "Tony Reichert",
    account_code: "12312321",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.BANK_AUTO,
    logo: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 2,
    account_name: "Zoey Lang",
    account_code: "43141434",
    account_number: "352525325234",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.BANK_MANUAL,
    logo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 3,
    account_name: "Jane Fisher",
    account_code: "",
    account_number: "085723125482",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.EWALLET_AUTO,
    logo: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 4,
    account_name: "William Howard",
    account_code: "",
    account_number: "081342531232",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.EWALLET_AUTO,
    logo: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 5,
    account_name: "Kristen Copper",
    account_code: "",
    account_number: "085312321453",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.EWALLET_AUTO,
    logo: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 6,
    account_name: "Brian Kim",
    account_code: "12312321",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.BANK_AUTO,
    logo: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 7,
    account_name: "Michael Hunt",
    account_code: "12312321",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.BANK_AUTO,
    logo: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 8,
    account_name: "Samantha Brooks",
    account_code: "12312321",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.BANK_AUTO,
    logo: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 9,
    account_name: "Frank Harrison",
    account_code: "",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.EWALLET_AUTO,
    logo: "https://i.pravatar.cc/150?img=4",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 10,
    account_name: "Emma Adams",
    account_code: "",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.EWALLET_AUTO,
    logo: "https://i.pravatar.cc/150?img=5",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 11,
    account_name: "Brandon Stevens",
    account_code: "12312321",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.BANK_AUTO,
    logo: "https://i.pravatar.cc/150?img=8",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 12,
    account_name: "Megan Richards",
    account_code: "12312321",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.BANK_AUTO,
    logo: "https://i.pravatar.cc/150?img=10",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 13,
    account_name: "Oliver Scott",
    account_code: "12312321",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.BANK_AUTO,
    logo: "https://i.pravatar.cc/150?img=12",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 14,
    account_name: "Grace Allen",
    account_code: "",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.EWALLET_AUTO,
    logo: "https://i.pravatar.cc/150?img=16",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 15,
    account_name: "Noah Carter",
    account_code: "",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.EWALLET_AUTO,
    logo: "https://i.pravatar.cc/150?img=15",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 16,
    account_name: "Ava Perez",
    account_code: "12312321",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.BANK_AUTO,
    logo: "https://i.pravatar.cc/150?img=20",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 17,
    account_name: "Liam Johnson",
    account_code: "12312321",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.BANK_AUTO,
    logo: "https://i.pravatar.cc/150?img=33",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 18,
    account_name: "Sophia Taylor",
    account_code: "12312321",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.BANK_AUTO,
    logo: "https://i.pravatar.cc/150?img=29",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 19,
    account_name: "Lucas Harris",
    account_code: "",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.EWALLET_AUTO,
    logo: "https://i.pravatar.cc/150?img=50",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
  {
    id: 20,
    account_name: "Mia Robinson",
    account_code: "",
    account_number: "18473194734",
    status: StatusEnum.ENABLE,
    type: PaymentMethodType.EWALLET_AUTO,
    logo: "https://i.pravatar.cc/150?img=45",
    created_at: "2023-06-20 10:16:57",
    updated_at: "2023-06-20 10:16:57",
  },
];

export {columns, results, statusOptions, typeOptions};
