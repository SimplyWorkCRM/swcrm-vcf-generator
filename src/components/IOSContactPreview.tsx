import { ContactData } from "@/lib/vcfGenerator";
import { Phone, Mail, MapPin, Calendar, Globe, User, Building2 } from "lucide-react";

interface IOSContactPreviewProps {
  contact: ContactData;
}

export const IOSContactPreview = ({ contact }: IOSContactPreviewProps) => {
  const fullName = [
    contact.name_prefix,
    contact.first_name,
    contact.middle_name,
    contact.last_name,
    contact.name_suffix
  ].filter(Boolean).join(" ");

  const hasHomeAddress = contact.home_address.street || contact.home_address.city;
  const hasWorkAddress = contact.work_address.street || contact.work_address.city;

  return (
    <div className="contact-card p-6 max-w-sm mx-auto bg-card">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-semibold text-foreground mb-1">
          {fullName || "Contact Name"}
        </h1>
        {contact.nickname && (
          <p className="text-muted-foreground text-sm">"{contact.nickname}"</p>
        )}
        {contact.organization && (
          <div className="flex items-center justify-center gap-2 mt-2">
            <Building2 className="w-4 h-4 text-muted-foreground" />
            <p className="text-muted-foreground">{contact.organization}</p>
          </div>
        )}
      </div>

      {/* Contact Info */}
      <div className="space-y-4">
        {/* Phone Numbers */}
        {contact.cell_phone && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">mobile</p>
              <p className="font-medium">{contact.cell_phone}</p>
            </div>
          </div>
        )}

        {contact.work_phone && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">work</p>
              <p className="font-medium">{contact.work_phone}</p>
            </div>
          </div>
        )}

        {contact.home_phone && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">home</p>
              <p className="font-medium">{contact.home_phone}</p>
            </div>
          </div>
        )}

        {/* Emails */}
        {contact.email && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">personal</p>
              <p className="font-medium break-all">{contact.email}</p>
            </div>
          </div>
        )}

        {contact.work_email && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">work</p>
              <p className="font-medium break-all">{contact.work_email}</p>
            </div>
          </div>
        )}

        {/* Addresses */}
        {hasHomeAddress && (
          <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <MapPin className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">home</p>
              <p className="font-medium">
                {[
                  contact.home_address.street,
                  contact.home_address.city,
                  contact.home_address.state_province,
                  contact.home_address.postal_code,
                  contact.home_address.country_region
                ].filter(Boolean).join(", ")}
              </p>
            </div>
          </div>
        )}

        {hasWorkAddress && (
          <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <MapPin className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">work</p>
              <p className="font-medium">
                {[
                  contact.work_address.street,
                  contact.work_address.city,
                  contact.work_address.state_province,
                  contact.work_address.postal_code,
                  contact.work_address.country_region
                ].filter(Boolean).join(", ")}
              </p>
            </div>
          </div>
        )}

        {/* URLs */}
        {contact.url && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <Globe className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">website</p>
              <p className="font-medium break-all">{contact.url}</p>
            </div>
          </div>
        )}

        {contact.work_url && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <Globe className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">work website</p>
              <p className="font-medium break-all">{contact.work_url}</p>
            </div>
          </div>
        )}

        {/* Birthday */}
        {contact.birthday && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">birthday</p>
              <p className="font-medium">{new Date(contact.birthday).toLocaleDateString()}</p>
            </div>
          </div>
        )}

        {/* Notes */}
        {contact.note && (
          <div className="p-3 rounded-xl bg-secondary/50">
            <p className="text-sm text-muted-foreground mb-1">notes</p>
            <p className="font-medium">{contact.note}</p>
          </div>
        )}
      </div>
    </div>
  );
};