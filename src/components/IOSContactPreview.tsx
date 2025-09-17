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
    <div className="ios-contact-preview max-w-sm mx-auto">
      {/* Header with large profile photo */}
      <div className="text-center mb-8 pt-8">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
          <User className="w-16 h-16 text-white" />
        </div>
        
        {/* Organization - small text above name */}
        {contact.organization && (
          <p className="text-gray-400 text-sm font-medium mb-2 tracking-wide">
            {contact.organization}
          </p>
        )}
        
        {/* Large contact name */}
        <h1 className="text-white text-3xl font-bold mb-1 tracking-tight">
          {fullName || "Contact Name"}
        </h1>
        
        {contact.nickname && (
          <p className="text-gray-400 text-base">"{contact.nickname}"</p>
        )}
      </div>

      {/* Action buttons row */}
      <div className="flex justify-center gap-4 mb-8">
        <div className="w-16 h-16 bg-gray-700/60 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Mail className="w-7 h-7 text-white" />
        </div>
        <div className="w-16 h-16 bg-gray-700/60 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Phone className="w-7 h-7 text-white" />
        </div>
        <div className="w-16 h-16 bg-gray-700/60 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Globe className="w-7 h-7 text-white" />
        </div>
        <div className="w-16 h-16 bg-gray-700/60 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Building2 className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Contact details in separate rounded sections */}
      <div className="space-y-1">
        {/* Phone Numbers */}
        {contact.cell_phone && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border-b border-gray-700/30">
            <p className="text-gray-400 text-sm font-medium">mobile</p>
            <p className="text-white text-lg">{contact.cell_phone}</p>
          </div>
        )}

        {contact.work_phone && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border-b border-gray-700/30">
            <p className="text-gray-400 text-sm font-medium">work</p>
            <p className="text-white text-lg">{contact.work_phone}</p>
          </div>
        )}

        {contact.home_phone && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border-b border-gray-700/30">
            <p className="text-gray-400 text-sm font-medium">home</p>
            <p className="text-white text-lg">{contact.home_phone}</p>
          </div>
        )}

        {/* Emails */}
        {contact.email && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border-b border-gray-700/30">
            <p className="text-gray-400 text-sm font-medium">home</p>
            <p className="text-white text-lg break-all">{contact.email}</p>
          </div>
        )}

        {contact.work_email && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border-b border-gray-700/30">
            <p className="text-gray-400 text-sm font-medium">work</p>
            <p className="text-white text-lg break-all">{contact.work_email}</p>
          </div>
        )}

        {/* Work URL */}
        {contact.work_url && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border-b border-gray-700/30">
            <p className="text-gray-400 text-sm font-medium">work</p>
            <p className="text-blue-400 text-lg break-all">http://{contact.work_url}</p>
          </div>
        )}

        {/* Personal URL */}
        {contact.url && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border-b border-gray-700/30">
            <p className="text-gray-400 text-sm font-medium">website</p>
            <p className="text-blue-400 text-lg break-all">{contact.url}</p>
          </div>
        )}

        {/* Home Address */}
        {hasHomeAddress && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border-b border-gray-700/30 flex justify-between items-start">
            <div className="flex-1">
              <p className="text-gray-400 text-sm font-medium">home</p>
              <div className="text-white text-lg leading-relaxed">
                {contact.home_address.street && <div>{contact.home_address.street}</div>}
                <div>
                  {[
                    contact.home_address.postal_code,
                    contact.home_address.city
                  ].filter(Boolean).join(" ")}
                </div>
                {contact.home_address.country_region && <div>{contact.home_address.country_region}</div>}
              </div>
            </div>
            <div className="w-12 h-12 bg-gray-600/50 rounded-lg ml-4 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-red-400" />
            </div>
          </div>
        )}

        {/* Work Address */}
        {hasWorkAddress && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border-b border-gray-700/30 flex justify-between items-start">
            <div className="flex-1">
              <p className="text-gray-400 text-sm font-medium">work</p>
              <div className="text-white text-lg leading-relaxed">
                {contact.work_address.street && <div>{contact.work_address.street}</div>}
                <div>
                  {[
                    contact.work_address.postal_code,
                    contact.work_address.city
                  ].filter(Boolean).join(" ")}
                </div>
                {contact.work_address.country_region && <div>{contact.work_address.country_region}</div>}
              </div>
            </div>
            <div className="w-12 h-12 bg-gray-600/50 rounded-lg ml-4 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-red-400" />
            </div>
          </div>
        )}

        {/* Birthday */}
        {contact.birthday && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border-b border-gray-700/30">
            <p className="text-gray-400 text-sm font-medium">birthday</p>
            <p className="text-white text-lg">{new Date(contact.birthday).toLocaleDateString('en-US', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}</p>
          </div>
        )}

        {/* Notes */}
        {contact.note && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-gray-400 text-sm font-medium mb-2">Notes</p>
            <p className="text-white text-lg leading-relaxed">{contact.note}</p>
          </div>
        )}
      </div>

      {/* Bottom action buttons */}
      <div className="mt-8 space-y-1">
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 text-center">
          <p className="text-white text-lg font-medium">Send Message</p>
        </div>
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 text-center">
          <p className="text-white text-lg font-medium">Share Contact</p>
        </div>
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 text-center">
          <p className="text-white text-lg font-medium">Add to Favourites</p>
        </div>
      </div>
    </div>
  );
};