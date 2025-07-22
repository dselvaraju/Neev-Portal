type RowObj = {
  name: string;
  visitors: number;
  unique: number;
  clients: number;
  bounce: string;
};

const tableDataComplex: RowObj[] = [
  {
    name: 'DICOM Test',
    visitors: 100,
    unique: 340,
    clients: 440,
    bounce: 'FAILED',
  },
  {
    name: 'FROM_HOSP1_PACS_DICOM',
    visitors: 330,
    unique: 240,
    clients: 570,
    bounce: 'SUCCESS',
  },
  {
    name: 'O_HOSP1_RIS_HL7_ORM',
    visitors: 125,
    unique: 225,
    clients: 350,
    bounce: 'SUCCESS',
  },
  {
    name: 'FROM_RAD_RIS_HL7_ORM',
    visitors: 440,
    unique: 560,
    clients: 1000,
    bounce: 'FAILED',
  },
  {
    name: 'TO_RAD_VR_HL7_ORM',
    visitors: 320,
    unique: 480,
    clients: 900,
    bounce: 'SUCCESS',
  },
];

export default tableDataComplex;
