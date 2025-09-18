import { useState, useEffect } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import { ContactData, downloadVCF } from "@/lib/vcfGenerator";
import { vCardApi, VCardApiError } from "@/lib/vCardApi";
import { ContactForm } from "@/components/ContactForm";
import { IOSContactPreview } from "@/components/IOSContactPreview";
import { HelpModal } from "@/components/HelpModal";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Edit, Save, Loader2, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Unauthorized from "./Unauthorized";
const Index = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const locationId = searchParams.get("location_id");
  const [helpOpen, setHelpOpen] = useState(false);

  const [contact, setContact] = useState<ContactData>({
    location_id: locationId || "",
    first_name: "",
    last_name: "",
    middle_name: "",
    name_prefix: "",
    name_suffix: "",
    nickname: "",
    email: "",
    work_email: "",
    cell_phone: "",
    work_phone: "",
    home_phone: "",
    pager_phone: "",
    organization: "",
    title: "",
    role: "",
    home_address: {
      street: "",
      city: "",
      state_province: "",
      postal_code: "",
      country_region: "",
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
    work_url: "",
    birthday: "",
    note: ""
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSaving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isNewUser, setIsNewUser] = useState(false);

  // Check if location_id is provided
  if (!locationId) {
    return <Unauthorized />;
  }

  useEffect(() => {
    const fetchVCardData = async () => {
      try {
        setIsLoading(true);
        const response = await vCardApi.getVCard(locationId);
        
        if (response.vcf_json) {
          setContact({
            ...response.vcf_json,
            location_id: locationId
          });
        }
        setError(null);
      } catch (error) {
        if (error instanceof VCardApiError) {
          if (error.error.code === 'ERROR_CODE_ACCESS_DENIED') {
            setError('unauthorized');
            return;
          }
          if (error.error.code === 'ERROR_CODE_NOT_FOUND') {
            // New user with no existing VCard - enable edit mode immediately
            setIsNewUser(true);
            setIsEditMode(true);
            setError(null);
            return;
          }
        }
        toast({
          title: "Error",
          description: "Failed to load VCard data. Please try again.",
          variant: "destructive"
        });
        setError('loading_failed');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVCardData();
  }, [locationId, toast]);

  // Show unauthorized page if access denied
  if (error === 'unauthorized') {
    return <Unauthorized />;
  }
  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      await vCardApi.saveVCard(contact);
      setIsEditMode(false);
      setIsNewUser(false); // User is no longer new after first save
      toast({
        title: "Success!",
        description: "VCard has been saved successfully."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save VCard. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

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
  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #404040 50%, #1f1f1f 75%, #0a0a0a 100%)"
      }}>
        <div className="text-center p-8">
          <div className="glass-card p-8 max-w-md mx-auto">
            <Loader2 className="w-8 h-8 animate-spin text-white mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Loading VCard</h2>
            <p className="text-white/80">Please wait while we fetch your contact information...</p>
          </div>
        </div>
      </div>
    );
  }

  return <div className="h-screen flex flex-col overflow-hidden" style={{
    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #404040 50%, #1f1f1f 75%, #0a0a0a 100%)"
  }}>
      {/* Compact Header */}
      <header className="px-12 py-8 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl backdrop-blur-xl border border-white/20 flex items-center justify-center"
               style={{ background: "rgba(255, 255, 255, 0.1)" }}>
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">
            Contact Card Generator
          </h1>
        </div>
      </header>

      {/* Main Content - Full height with horizontal layout */}
      <main className="flex-1 flex overflow-hidden px-12 pb-12">
        <div className="flex flex-col lg:flex-row gap-8 w-full h-full">
          {/* Form Section - Takes up available space */}
          <div className="flex-1 flex flex-col space-y-4 min-w-0 lg:h-full h-1/2">
            {/* Action Buttons - Top */}
            <div className="glass-card p-4 flex-shrink-0">
              {!isEditMode ? (
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    onClick={handleEdit}
                    className="text-base h-12 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-xl transition-all duration-200 rounded-xl"
                    size="lg"
                  >
                    <Edit className="w-5 h-5 mr-2" />
                    Edit Contact
                  </Button>
                  <Button
                    onClick={handleDownload}
                    className="text-base h-12 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-xl transition-all duration-200 rounded-xl"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download VCF
                  </Button>
                  <Button
                    onClick={() => setHelpOpen(true)}
                    className="text-base h-12 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-xl transition-all duration-200 rounded-xl"
                    size="lg"
                  >
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Help
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="text-base h-12 bg-green-600/20 hover:bg-green-600/30 text-green-100 border border-green-500/30 backdrop-blur-xl transition-all duration-200 rounded-xl"
                    size="lg"
                  >
                    {isSaving ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-5 h-5 mr-2" />
                    )}
                    {isSaving ? "Saving..." : "Save VCF"}
                  </Button>
                  <Button
                    onClick={handleDownload}
                    className="text-base h-12 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-xl transition-all duration-200 rounded-xl"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download VCF
                  </Button>
                  <Button
                    onClick={() => setHelpOpen(true)}
                    className="text-base h-12 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-xl transition-all duration-200 rounded-xl"
                    size="lg"
                  >
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Help
                  </Button>
                </div>
              )}
            </div>

            {/* Contact Form - Scrollable if needed */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-4">
              <ContactForm
                contact={contact}
                onContactChange={setContact}
                isReadOnly={!isEditMode}
              />
            </div>
          </div>

          {/* Preview Section - Fixed width, scrollable */}
          <div className="lg:w-[500px] w-full flex-shrink-0 lg:h-full h-1/2 overflow-y-auto overflow-x-hidden custom-scrollbar pr-2">
            <IOSContactPreview contact={contact} />
          </div>
        </div>
      </main>

      {/* Help Modal */}
      <HelpModal open={helpOpen} onOpenChange={setHelpOpen} />
    </div>;
};
export default Index;