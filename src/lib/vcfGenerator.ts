export interface ContactData {
  first_name: string;
  last_name: string;
  middle_name: string;
  name_prefix: string;
  name_suffix: string;
  nickname: string;
  email: string;
  work_email: string;
  cell_phone: string;
  work_phone: string;
  home_phone: string;
  pager_phone: string;
  organization: string;
  title: string;
  role: string;
  home_address: {
    street: string;
    city: string;
    state_province: string;
    postal_code: string;
    country_region: string;
    label: string;
  };
  work_address: {
    street: string;
    city: string;
    state_province: string;
    postal_code: string;
    country_region: string;
    label: string;
  };
  url: string;
  work_url: string;
  birthday: string;
  note: string;
}

export const generateVCF = (contact: ContactData): string => {
  let vcf = "BEGIN:VCARD\nVERSION:3.0\n";

  // Full name
  const fullName = [
    contact.name_prefix,
    contact.first_name,
    contact.middle_name,
    contact.last_name,
    contact.name_suffix
  ].filter(Boolean).join(" ");
  
  if (fullName) {
    vcf += `FN:${fullName}\n`;
    vcf += `N:${contact.last_name};${contact.first_name};${contact.middle_name};${contact.name_prefix};${contact.name_suffix}\n`;
  }

  // Nickname
  if (contact.nickname) {
    vcf += `NICKNAME:${contact.nickname}\n`;
  }

  // Organization and title
  if (contact.organization) {
    vcf += `ORG:${contact.organization}\n`;
  }
  if (contact.title) {
    vcf += `TITLE:${contact.title}\n`;
  }
  if (contact.role) {
    vcf += `ROLE:${contact.role}\n`;
  }

  // Emails
  if (contact.email) {
    vcf += `EMAIL;TYPE=INTERNET:${contact.email}\n`;
  }
  if (contact.work_email) {
    vcf += `EMAIL;TYPE=WORK:${contact.work_email}\n`;
  }

  // Phone numbers
  if (contact.cell_phone) {
    vcf += `TEL;TYPE=CELL:${contact.cell_phone}\n`;
  }
  if (contact.work_phone) {
    vcf += `TEL;TYPE=WORK:${contact.work_phone}\n`;
  }
  if (contact.home_phone) {
    vcf += `TEL;TYPE=HOME:${contact.home_phone}\n`;
  }
  if (contact.pager_phone) {
    vcf += `TEL;TYPE=PAGER:${contact.pager_phone}\n`;
  }

  // Addresses
  if (contact.home_address.street || contact.home_address.city) {
    vcf += `ADR;TYPE=HOME:;;${contact.home_address.street};${contact.home_address.city};${contact.home_address.state_province};${contact.home_address.postal_code};${contact.home_address.country_region}\n`;
  }
  if (contact.work_address.street || contact.work_address.city) {
    vcf += `ADR;TYPE=WORK:;;${contact.work_address.street};${contact.work_address.city};${contact.work_address.state_province};${contact.work_address.postal_code};${contact.work_address.country_region}\n`;
  }

  // URLs
  if (contact.url) {
    vcf += `URL:${contact.url}\n`;
  }
  if (contact.work_url) {
    vcf += `URL;TYPE=WORK:${contact.work_url}\n`;
  }

  // Birthday
  if (contact.birthday) {
    vcf += `BDAY:${contact.birthday}\n`;
  }

  // Note
  if (contact.note) {
    vcf += `NOTE:${contact.note}\n`;
  }

  vcf += "END:VCARD";
  return vcf;
};

export const downloadVCF = (contact: ContactData) => {
  const vcfContent = generateVCF(contact);
  const blob = new Blob([vcfContent], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${contact.first_name}_${contact.last_name}.vcf` || 'contact.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};