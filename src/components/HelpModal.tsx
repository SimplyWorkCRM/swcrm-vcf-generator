import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HelpCircle, Download, Edit, Smartphone, User, Mail, Phone, Building, Tag, FileText } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface HelpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HelpModal({ open, onOpenChange }: HelpModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-black/90 backdrop-blur-3xl border border-white/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <HelpCircle className="w-5 h-5" />
            How to Use Contact Card Generator
          </DialogTitle>
          <DialogDescription className="text-white/70">
            Create professional VCF contact files for CRM automation and manual use
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[500px] pr-4 custom-scrollbar">
          <div className="space-y-6">
            {/* Getting Started */}
            <section>
              <h3 className="font-semibold text-lg mb-3 text-white">Getting Started</h3>
              <p className="text-sm text-white/60 mb-2">
                This tool helps you create a professional contact card (VCF file) for your business. The generated VCard can be used in CRM automations or downloaded for manual attachment in emails, messages, and other communications.
              </p>
              <p className="text-sm text-white/80 font-medium">
                Note: Only one contact card per subaccount is allowed.
              </p>
            </section>

            {/* Step by Step Guide */}
            <section>
              <h3 className="font-semibold text-lg mb-3 text-white">Step-by-Step Guide</h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm flex items-center justify-center">1</span>
                  <div>
                    <p className="font-medium text-sm text-white">Enter Contact Information</p>
                    <p className="text-sm text-white/60">Fill in the contact form with your business or personal details. All fields are optional except the name.</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm flex items-center justify-center">2</span>
                  <div>
                    <p className="font-medium text-sm text-white">Preview in Real-Time</p>
                    <p className="text-sm text-white/60">Watch the iOS contact preview on the right update as you type. This shows exactly how the contact will appear on an iPhone.</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm flex items-center justify-center">3</span>
                  <div>
                    <p className="font-medium text-sm text-white">Save or Download</p>
                    <p className="text-sm text-white/60">Click "Save Contact" to save your VCard for CRM use, or "Download VCF" to get the file for manual use.</p>
                  </div>
                </li>
              </ol>
            </section>

            {/* CRM Automation */}
            <section>
              <h3 className="font-semibold text-lg mb-3 text-white">CRM Automation</h3>
              <div className="glass-card p-4 rounded-xl space-y-2">
                <div className="flex items-start gap-2">
                  <Tag className="w-4 h-4 mt-0.5 text-white/80" />
                  <div>
                    <p className="font-medium text-sm text-white">How to Use in CRM</p>
                    <p className="text-xs text-white/60">
                      When your VCard is saved, it can be automatically sent in CRM workflows. Simply add the tag <span className="font-mono bg-white/10 px-1 rounded text-white/80">"send vcard"</span> to any contact, and the system will automatically send them your VCard.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Manual Use */}
            <section>
              <h3 className="font-semibold text-lg mb-3 text-white">Manual Use</h3>
              <div className="glass-card p-4 rounded-xl space-y-2">
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 text-white/80" />
                  <div>
                    <p className="font-medium text-sm text-white">Download and Attach</p>
                    <p className="text-xs text-white/60">
                      Download the VCF file to manually attach it to emails, messages, or any other communication channel. Recipients can open the file to add your contact information directly to their phone or computer contacts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Available Fields */}
            <section>
              <h3 className="font-semibold text-lg mb-3 text-white">Available Fields</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <User className="w-4 h-4 mt-0.5 text-white/60" />
                  <div>
                    <p className="font-medium text-sm text-white">Personal Information</p>
                    <p className="text-xs text-white/50">Name (with prefix/suffix), nickname, birthday</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-white/60" />
                  <div>
                    <p className="font-medium text-sm text-white">Phone Numbers</p>
                    <p className="text-xs text-white/50">Cell, work, home, and pager numbers</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 text-white/60" />
                  <div>
                    <p className="font-medium text-sm text-white">Email Addresses</p>
                    <p className="text-xs text-white/50">Personal and work email addresses</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Building className="w-4 h-4 mt-0.5 text-white/60" />
                  <div>
                    <p className="font-medium text-sm text-white">Organization & Addresses</p>
                    <p className="text-xs text-white/50">Company, job title, home and work addresses</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h3 className="font-semibold text-lg mb-3 text-white">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Smartphone className="w-4 h-4 mt-0.5 text-white/80" />
                  <div>
                    <p className="font-medium text-sm text-white">iOS-Style Preview</p>
                    <p className="text-xs text-white/50">See exactly how your contact will look on an iPhone</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Edit className="w-4 h-4 mt-0.5 text-white/80" />
                  <div>
                    <p className="font-medium text-sm text-white">Edit Mode</p>
                    <p className="text-xs text-white/50">Toggle between view and edit modes to update your contact information</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Download className="w-4 h-4 mt-0.5 text-white/80" />
                  <div>
                    <p className="font-medium text-sm text-white">Universal Compatibility</p>
                    <p className="text-xs text-white/50">VCF files work with all major contact apps on iOS, Android, and desktop</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* Tips */}
            <section>
              <h3 className="font-semibold text-lg mb-3 text-white">Tips</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Only the first and last name are required - all other fields are optional</li>
                <li>• The preview updates in real-time as you type</li>
                <li>• Remember: only one contact card per subaccount is allowed</li>
                <li>• Downloaded VCF files can be shared via email or messaging apps</li>
                <li>• On mobile devices, recipients can tap the VCF file to add it directly to their contacts</li>
                <li>• For CRM automation, just add the "send vcard" tag to trigger automatic sending</li>
              </ul>
            </section>
          </div>
        </ScrollArea>

        <div className="flex justify-end pt-4">
          <Button
            onClick={() => onOpenChange(false)}
            className="text-base h-12 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-xl transition-all duration-200 rounded-xl px-6"
          >
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}