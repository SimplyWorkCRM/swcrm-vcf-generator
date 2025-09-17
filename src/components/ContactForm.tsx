import { useState } from "react";
import { ContactData } from "@/lib/vcfGenerator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  contact: ContactData;
  onContactChange: (contact: ContactData) => void;
}

export const ContactForm = ({ contact, onContactChange }: ContactFormProps) => {
  const updateContact = (field: string, value: string) => {
    onContactChange({ ...contact, [field]: value });
  };

  const updateAddress = (type: 'home_address' | 'work_address', field: string, value: string) => {
    onContactChange({
      ...contact,
      [type]: { ...contact[type], [field]: value }
    });
  };

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="space-y-6">
        <div className="glass-card bg-white/5 p-4 rounded-xl mb-6 border border-white/10">
          <h2 className="text-xl font-semibold text-white">
            Contact Information
          </h2>
        </div>
        
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first_name" className="form-label">First Name</Label>
            <Input
              id="first_name"
              className="form-input"
              value={contact.first_name}
              onChange={(e) => updateContact('first_name', e.target.value)}
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last_name" className="form-label">Last Name</Label>
            <Input
              id="last_name"
              className="form-input"
              value={contact.last_name}
              onChange={(e) => updateContact('last_name', e.target.value)}
              placeholder="Doe"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name_prefix" className="form-label">Prefix</Label>
            <Input
              id="name_prefix"
              className="form-input"
              value={contact.name_prefix}
              onChange={(e) => updateContact('name_prefix', e.target.value)}
              placeholder="Mr."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name_suffix" className="form-label">Suffix</Label>
            <Input
              id="name_suffix"
              className="form-input"
              value={contact.name_suffix}
              onChange={(e) => updateContact('name_suffix', e.target.value)}
              placeholder="Jr."
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="middle_name" className="form-label">Middle Name</Label>
            <Input
              id="middle_name"
              className="form-input"
              value={contact.middle_name}
              onChange={(e) => updateContact('middle_name', e.target.value)}
              placeholder="Michael"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nickname" className="form-label">Nickname</Label>
            <Input
              id="nickname"
              className="form-input"
              value={contact.nickname}
              onChange={(e) => updateContact('nickname', e.target.value)}
              placeholder="Johnny"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="organization" className="form-label">Organization</Label>
          <Input
            id="organization"
            className="form-input"
            value={contact.organization}
            onChange={(e) => updateContact('organization', e.target.value)}
            placeholder="Company Name"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="form-label">Title</Label>
            <Input
              id="title"
              className="form-input"
              value={contact.title}
              onChange={(e) => updateContact('title', e.target.value)}
              placeholder="Software Engineer"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role" className="form-label">Role</Label>
            <Input
              id="role"
              className="form-input"
              value={contact.role}
              onChange={(e) => updateContact('role', e.target.value)}
              placeholder="Senior Developer"
            />
          </div>
        </div>

        {/* Contact Methods Section */}
        <div className="glass-card bg-white/5 p-4 rounded-xl mb-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white">Contact Methods</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="form-label">Personal Email</Label>
              <Input
                id="email"
                type="email"
                className="form-input"
                value={contact.email}
                onChange={(e) => updateContact('email', e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="work_email" className="form-label">Work Email</Label>
              <Input
                id="work_email"
                type="email"
                className="form-input"
                value={contact.work_email}
                onChange={(e) => updateContact('work_email', e.target.value)}
                placeholder="john@company.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cell_phone" className="form-label">Cell Phone</Label>
              <Input
                id="cell_phone"
                type="tel"
                className="form-input"
                value={contact.cell_phone}
                onChange={(e) => updateContact('cell_phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="work_phone" className="form-label">Work Phone</Label>
              <Input
                id="work_phone"
                type="tel"
                className="form-input"
                value={contact.work_phone}
                onChange={(e) => updateContact('work_phone', e.target.value)}
                placeholder="+1 (555) 987-6543"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="home_phone" className="form-label">Home Phone</Label>
            <Input
              id="home_phone"
              type="tel"
              className="form-input"
              value={contact.home_phone}
              onChange={(e) => updateContact('home_phone', e.target.value)}
              placeholder="+1 (555) 111-2222"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pager_phone" className="form-label">Pager Phone</Label>
            <Input
              id="pager_phone"
              type="tel"
              className="form-input"
              value={contact.pager_phone}
              onChange={(e) => updateContact('pager_phone', e.target.value)}
              placeholder="+1 (555) 333-4444"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="work_url" className="form-label">Work Website</Label>
            <Input
              id="work_url"
              type="url"
              className="form-input"
              value={contact.work_url}
              onChange={(e) => updateContact('work_url', e.target.value)}
              placeholder="company.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="url" className="form-label">Personal Website</Label>
            <Input
              id="url"
              type="url"
              className="form-input"
              value={contact.url}
              onChange={(e) => updateContact('url', e.target.value)}
              placeholder="https://johndoe.com"
            />
          </div>
        </div>

        {/* Home Address Section */}
        <div className="glass-card bg-white/5 p-4 rounded-xl mb-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white">Home Address</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="home_street" className="form-label">Street</Label>
              <Input
                id="home_street"
                className="form-input"
                value={contact.home_address.street}
                onChange={(e) => updateAddress('home_address', 'street', e.target.value)}
                placeholder="123 Main Street"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="home_city" className="form-label">City</Label>
              <Input
                id="home_city"
                className="form-input"
                value={contact.home_address.city}
                onChange={(e) => updateAddress('home_address', 'city', e.target.value)}
                placeholder="New York"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="home_state" className="form-label">State/Province</Label>
              <Input
                id="home_state"
                className="form-input"
                value={contact.home_address.state_province}
                onChange={(e) => updateAddress('home_address', 'state_province', e.target.value)}
                placeholder="NY"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="home_postal" className="form-label">Postal Code</Label>
              <Input
                id="home_postal"
                className="form-input"
                value={contact.home_address.postal_code}
                onChange={(e) => updateAddress('home_address', 'postal_code', e.target.value)}
                placeholder="10001"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="home_country" className="form-label">Country</Label>
              <Input
                id="home_country"
                className="form-input"
                value={contact.home_address.country_region}
                onChange={(e) => updateAddress('home_address', 'country_region', e.target.value)}
                placeholder="USA"
              />
            </div>
          </div>
        </div>

        {/* Work Address Section */}
        <div className="glass-card bg-white/5 p-4 rounded-xl mb-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white">Work Address</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="work_street" className="form-label">Street</Label>
              <Input
                id="work_street"
                className="form-input"
                value={contact.work_address.street}
                onChange={(e) => updateAddress('work_address', 'street', e.target.value)}
                placeholder="456 Business Ave"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="work_city" className="form-label">City</Label>
              <Input
                id="work_city"
                className="form-input"
                value={contact.work_address.city}
                onChange={(e) => updateAddress('work_address', 'city', e.target.value)}
                placeholder="San Francisco"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="work_state" className="form-label">State/Province</Label>
              <Input
                id="work_state"
                className="form-input"
                value={contact.work_address.state_province}
                onChange={(e) => updateAddress('work_address', 'state_province', e.target.value)}
                placeholder="CA"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="work_postal" className="form-label">Postal Code</Label>
              <Input
                id="work_postal"
                className="form-input"
                value={contact.work_address.postal_code}
                onChange={(e) => updateAddress('work_address', 'postal_code', e.target.value)}
                placeholder="94105"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="work_country" className="form-label">Country</Label>
              <Input
                id="work_country"
                className="form-input"
                value={contact.work_address.country_region}
                onChange={(e) => updateAddress('work_address', 'country_region', e.target.value)}
                placeholder="USA"
              />
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="glass-card bg-white/5 p-4 rounded-xl mb-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white">Additional Information</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="birthday" className="form-label">Birthday</Label>
            <Input
              id="birthday"
              type="date"
              className="form-input"
              value={contact.birthday}
              onChange={(e) => updateContact('birthday', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="note" className="form-label">Notes</Label>
            <Textarea
              id="note"
              className="form-input min-h-[100px] resize-none"
              value={contact.note}
              onChange={(e) => updateContact('note', e.target.value)}
              placeholder="Additional notes about this contact..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};