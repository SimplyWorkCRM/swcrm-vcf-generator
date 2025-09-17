import { useState } from "react";
import { ContactData, downloadVCF } from "@/lib/vcfGenerator";
import { ContactForm } from "@/components/ContactForm";
import { IOSContactPreview } from "@/components/IOSContactPreview";
import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Index = () => {
  const {
    toast
  } = useToast();
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
        description: "VCF file has been downloaded successfully."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate VCF file. Please try again.",
        variant: "destructive"
      });
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-background via-background/98 to-secondary/10">
      {/* Header */}
      <header className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="glass-card inline-block p-6 mb-6">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                <Smartphone className="w-7 h-7 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent tracking-tight">
                VCF Generator
              </h1>
            </div>
            <p className="text-muted-foreground/70 text-lg font-medium">
              Create iOS-style contact cards instantly
            </p>
          </div>
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
              <Button onClick={handleDownload} className="ios-button w-full text-base h-12" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download VCF
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="glass-card p-6">
              
              <div className="ios-preview-container">
                <IOSContactPreview contact={contact} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default Index;