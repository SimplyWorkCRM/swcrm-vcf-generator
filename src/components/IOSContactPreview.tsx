import { ContactData } from "@/lib/vcfGenerator";
import { Phone, Mail, MapPin, Calendar, Globe, User, Building2, MessageCircle, Video, ChevronRight } from "lucide-react";
interface IOSContactPreviewProps {
  contact: ContactData;
}
export const IOSContactPreview = ({
  contact
}: IOSContactPreviewProps) => {
  const fullName = [contact.name_prefix, contact.first_name, contact.middle_name, contact.last_name, contact.name_suffix].filter(Boolean).join(" ");
  const hasHomeAddress = contact.home_address.street || contact.home_address.city;
  const hasWorkAddress = contact.work_address.street || contact.work_address.city;

  // Get initials for avatar
  const getInitials = () => {
    if (contact.first_name) {
      return contact.first_name[0].toUpperCase();
    }
    return fullName?.[0]?.toUpperCase() || 'C';
  };
  return <div className="ios-contact-preview max-w-lg mx-auto">
      {/* Header with large profile photo */}
      <div className="text-center mb-8 pt-8">
        <div className="w-32 h-32 glass-avatar mx-auto mb-6 flex items-center justify-center">
          <span className="text-white tracking-wider text-7xl font-normal">
            {getInitials()}
          </span>
        </div>
        
        {/* Organization - small text above name */}
        {contact.organization && <p className="text-white/70 text-sm font-medium mb-2 tracking-wide">
            {contact.organization}
          </p>}

        {/* Title and Role - if available */}
        {contact.title && <p className="text-white/60 text-sm mb-1">
            {contact.title}
          </p>}
        {contact.role && <p className="text-white/60 text-xs mb-2">
            {contact.role}
          </p>}
        
        {/* Large contact name */}
        <h1 className="text-white text-3xl font-bold mb-1 tracking-tight">
          {fullName || "Contact Name"}
        </h1>
        
        {contact.nickname && <p className="text-white/60 text-base">"{contact.nickname}"</p>}
      </div>

      {/* Action buttons row */}
      <div className="flex justify-center gap-4 mb-8">
        <div className="glass-action-button">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        <div className="glass-action-button">
          <Phone className="w-7 h-7 text-white" />
        </div>
        <div className="glass-action-button">
          <Video className="w-7 h-7 text-white" />
        </div>
        <div className="glass-action-button">
          <Mail className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Contact Photo & Poster section */}
      <div className="glass-section mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 glass-mini-avatar flex items-center justify-center">
            <span className="text-white text-sm font-bold">
              {getInitials()}
            </span>
          </div>
          <span className="text-white text-lg">Contact Photo & Poster</span>
        </div>
        <ChevronRight className="w-5 h-5 text-white/60" />
      </div>

      {/* Main contact details in unified box */}
      <div className="glass-unified-section">
        {/* Phone Numbers */}
        {contact.cell_phone && <>
            <div className="contact-row">
              <p className="text-white/70 text-sm font-medium">mobile</p>
              <p className="text-white text-lg">{contact.cell_phone}</p>
            </div>
            {(contact.work_phone || contact.home_phone || contact.email || contact.work_email || contact.work_url || contact.url || hasHomeAddress || hasWorkAddress || contact.birthday || contact.note) && <div className="contact-divider"></div>}
          </>}

        {contact.work_phone && <>
            <div className="contact-row">
              <p className="text-white/70 text-sm font-medium">work</p>
              <p className="text-white text-lg">{contact.work_phone}</p>
            </div>
            {(contact.home_phone || contact.pager_phone || contact.email || contact.work_email || contact.work_url || contact.url || hasHomeAddress || hasWorkAddress || contact.birthday || contact.note) && <div className="contact-divider"></div>}
          </>}

        {contact.home_phone && <>
            <div className="contact-row">
              <p className="text-white/70 text-sm font-medium">home</p>
              <p className="text-white text-lg">{contact.home_phone}</p>
            </div>
            {(contact.pager_phone || contact.email || contact.work_email || contact.work_url || contact.url || hasHomeAddress || hasWorkAddress || contact.birthday || contact.note) && <div className="contact-divider"></div>}
          </>}

        {contact.pager_phone && <>
            <div className="contact-row">
              <p className="text-white/70 text-sm font-medium">pager</p>
              <p className="text-white text-lg">{contact.pager_phone}</p>
            </div>
            {(contact.email || contact.work_email || contact.work_url || contact.url || hasHomeAddress || hasWorkAddress || contact.birthday || contact.note) && <div className="contact-divider"></div>}
          </>}

        {/* Emails */}
        {contact.email && <>
            <div className="contact-row">
              <p className="text-white/70 text-sm font-medium">home</p>
              <p className="text-white text-lg break-all">{contact.email}</p>
            </div>
            {(contact.work_email || contact.work_url || contact.url || hasHomeAddress || hasWorkAddress || contact.birthday || contact.note) && <div className="contact-divider"></div>}
          </>}

        {contact.work_email && <>
            <div className="contact-row">
              <p className="text-white/70 text-sm font-medium">work</p>
              <p className="text-white text-lg break-all">{contact.work_email}</p>
            </div>
            {(contact.work_url || contact.url || hasHomeAddress || hasWorkAddress || contact.birthday || contact.note) && <div className="contact-divider"></div>}
          </>}

        {/* Work URL */}
        {contact.work_url && <>
            <div className="contact-row">
              <p className="text-white/70 text-sm font-medium">work</p>
              <p className="text-blue-400 text-lg break-all">http://{contact.work_url}</p>
            </div>
            {(contact.url || hasHomeAddress || hasWorkAddress || contact.birthday || contact.note) && <div className="contact-divider"></div>}
          </>}

        {/* Personal URL */}
        {contact.url && <>
            <div className="contact-row">
              <p className="text-white/70 text-sm font-medium">website</p>
              <p className="text-blue-400 text-lg break-all">{contact.url}</p>
            </div>
            {(hasHomeAddress || hasWorkAddress || contact.birthday || contact.note) && <div className="contact-divider"></div>}
          </>}

        {/* Home Address */}
        {hasHomeAddress && <>
            <div className="contact-row flex justify-between items-start">
              <div className="flex-1">
                <p className="text-white/70 text-sm font-medium">home</p>
                <div className="text-white text-lg leading-relaxed">
                  {contact.home_address.street && <div>{contact.home_address.street}</div>}
                  <div>
                    {[contact.home_address.postal_code, contact.home_address.city].filter(Boolean).join(" ")}
                  </div>
                  {contact.home_address.country_region && <div>{contact.home_address.country_region}</div>}
                </div>
              </div>
              <div className="w-16 h-12 ml-4 relative rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800">
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 60 40" fill="none">
                      <path d="M10 20 L20 15 L35 25 L50 20" stroke="currentColor" strokeWidth="1" className="text-teal-300"/>
                      <path d="M15 10 L25 25 L40 15 L55 30" stroke="currentColor" strokeWidth="1" className="text-teal-300"/>
                      <path d="M5 30 L15 35 L30 25 L45 35" stroke="currentColor" strokeWidth="1" className="text-teal-300"/>
                    </svg>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>
            {(hasWorkAddress || contact.birthday || contact.note) && <div className="contact-divider"></div>}
          </>}

        {/* Work Address */}
        {hasWorkAddress && <>
            <div className="contact-row flex justify-between items-start">
              <div className="flex-1">
                <p className="text-white/70 text-sm font-medium">work</p>
                <div className="text-white text-lg leading-relaxed">
                  {contact.work_address.street && <div>{contact.work_address.street}</div>}
                  <div>
                    {[contact.work_address.postal_code, contact.work_address.city].filter(Boolean).join(" ")}
                  </div>
                  {contact.work_address.country_region && <div>{contact.work_address.country_region}</div>}
                </div>
              </div>
              <div className="w-16 h-12 ml-4 relative rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800">
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 60 40" fill="none">
                      <path d="M10 20 L20 15 L35 25 L50 20" stroke="currentColor" strokeWidth="1" className="text-teal-300"/>
                      <path d="M15 10 L25 25 L40 15 L55 30" stroke="currentColor" strokeWidth="1" className="text-teal-300"/>
                      <path d="M5 30 L15 35 L30 25 L45 35" stroke="currentColor" strokeWidth="1" className="text-teal-300"/>
                    </svg>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>
            {(contact.birthday || contact.note) && <div className="contact-divider"></div>}
          </>}

        {/* Birthday */}
        {contact.birthday && <>
            <div className="contact-row">
              <p className="text-white/70 text-sm font-medium">birthday</p>
              <p className="text-white text-lg">{new Date(contact.birthday).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</p>
            </div>
            {contact.note && <div className="contact-divider"></div>}
          </>}

        {/* Notes */}
        {contact.note && <div className="contact-row">
            <p className="text-white/70 text-sm font-medium mb-2">Notes</p>
            <p className="text-white text-lg leading-relaxed">{contact.note}</p>
          </div>}
      </div>

      {/* Bottom action buttons */}
      <div className="glass-unified-section mt-4">
        <div className="contact-row text-left">
          <p className="text-white text-lg">Send Message</p>
        </div>
        <div className="contact-divider"></div>
        <div className="contact-row text-left">
          <p className="text-white text-lg">Share Contact</p>
        </div>
        <div className="contact-divider"></div>
        <div className="contact-row text-left">
          <p className="text-white text-lg">Add to Favourites</p>
        </div>
      </div>
    </div>;
};