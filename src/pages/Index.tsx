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
  return <div className="min-h-screen" style={{
    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #404040 50%, #1f1f1f 75%, #0a0a0a 100%)"
  }}>
      {/* Compact Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl backdrop-blur-xl border border-white/20 flex items-center justify-center"
               style={{ background: "rgba(255, 255, 255, 0.1)" }}>
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">
            Contact Card Generator
          </h1>
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
              <Button onClick={handleDownload} className="w-full text-base h-12 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-xl transition-all duration-200 rounded-xl" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download VCF
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-4 h-fit">
            <IOSContactPreview contact={contact} />
          </div>
        </div>
      </main>
    </div>;
};
export default Index;