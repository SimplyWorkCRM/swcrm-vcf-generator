import { useState } from "react";
import { ContactData, downloadVCF } from "@/lib/vcfGenerator";
import { ContactForm } from "@/components/ContactForm";
import { IOSContactPreview } from "@/components/IOSContactPreview";
import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [contact, setContact] = useState<ContactData>({
    first_name: "Sead",
    last_name: "Rastoder",
    middle_name: "",
    name_prefix: "",
    name_suffix: "",
    nickname: "",
    email: "rastoder.sead@outlook.com",
    work_email: "support@simplyworkcrm.com",
    cell_phone: "+38461497050",
    work_phone: "",
    home_phone: "",
    pager_phone: "",
    organization: "SWCRM",
    title: "",
    role: "",
    home_address: {
      street: "Velesici 39",
      city: "Sarajevo",
      state_province: "",
      postal_code: "71000",
      country_region: "BIH",
      label: ""
    },
    work_address: {
      street: "",
      city: "",
      state_province: "",
      postal_code: "",
      country_region: "",
      label: ""
    },
    url: "",
    work_url: "app.simplyworkcrm.com",
    birthday: "",
    note: ""
  });

  const handleDownload = () => {
    try {
      downloadVCF(contact);
      toast({
        title: "Success!",
        description: "VCF file has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate VCF file. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center shadow-lg">
              <Smartphone className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              VCF Generator
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Create beautiful contact cards with iOS 16 design. Generate VCF files instantly 
            and see a live preview of how your contact will appear on mobile devices.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Form Section */}
          <div className="space-y-6">
            <ContactForm contact={contact} onContactChange={setContact} />
            
            {/* Download Button */}
            <div className="glass-card p-6">
              <Button 
                onClick={handleDownload}
                className="ios-button w-full text-base"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download VCF File
              </Button>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Compatible with iOS Contacts, Android, Outlook, and other contact apps
              </p>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <Smartphone className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">iOS Contact Preview</h2>
              </div>
              <div className="ios-preview-container">
                <IOSContactPreview contact={contact} />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Live preview of how the contact will appear on iOS devices
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;