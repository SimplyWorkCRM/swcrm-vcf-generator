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
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            How to Use Contact Card Generator
          </DialogTitle>
          <DialogDescription>
            Create professional VCF contact files for CRM automation and manual use
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">
            {/* Getting Started */}
            <section>
              <h3 className="font-semibold text-lg mb-3">Getting Started</h3>
              <p className="text-sm text-muted-foreground mb-2">
                This tool helps you create a professional contact card (VCF file) for your business. The generated VCard can be used in CRM automations or downloaded for manual attachment in emails, messages, and other communications.
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                Note: Only one contact card per subaccount is allowed.
              </p>
            </section>

            {/* Step by Step Guide */}
            <section>
              <h3 className="font-semibold text-lg mb-3">Step-by-Step Guide</h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center">1</span>
                  <div>
                    <p className="font-medium text-sm">Enter Contact Information</p>
                    <p className="text-sm text-muted-foreground">Fill in the contact form with your business or personal details. All fields are optional except the name.</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center">2</span>
                  <div>
                    <p className="font-medium text-sm">Preview in Real-Time</p>
                    <p className="text-sm text-muted-foreground">Watch the iOS contact preview on the right update as you type. This shows exactly how the contact will appear on an iPhone.</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center">3</span>
                  <div>
                    <p className="font-medium text-sm">Save or Download</p>
                    <p className="text-sm text-muted-foreground">Click "Save Contact" to save your VCard for CRM use, or "Download VCF" to get the file for manual use.</p>
                  </div>
                </li>
              </ol>
            </section>

            {/* CRM Automation */}
            <section>
              <h3 className="font-semibold text-lg mb-3">CRM Automation</h3>
              <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                <div className="flex items-start gap-2">
                  <Tag className="w-4 h-4 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">How to Use in CRM</p>
                    <p className="text-xs text-muted-foreground">
                      When your VCard is saved, it can be automatically sent in CRM workflows. Simply add the tag <span className="font-mono bg-primary/10 px-1 rounded">"send vcard"</span> to any contact, and the system will automatically send them your VCard.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Manual Use */}
            <section>
              <h3 className="font-semibold text-lg mb-3">Manual Use</h3>
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-sm">Download and Attach</p>
                    <p className="text-xs text-muted-foreground">
                      Download the VCF file to manually attach it to emails, messages, or any other communication channel. Recipients can open the file to add your contact information directly to their phone or computer contacts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Available Fields */}
            <section>
              <h3 className="font-semibold text-lg mb-3">Available Fields</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <User className="w-4 h-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-sm">Personal Information</p>
                    <p className="text-xs text-muted-foreground">Name (with prefix/suffix), nickname, birthday</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-sm">Phone Numbers</p>
                    <p className="text-xs text-muted-foreground">Cell, work, home, and pager numbers</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-sm">Email Addresses</p>
                    <p className="text-xs text-muted-foreground">Personal and work email addresses</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Building className="w-4 h-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-sm">Organization & Addresses</p>
                    <p className="text-xs text-muted-foreground">Company, job title, home and work addresses</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h3 className="font-semibold text-lg mb-3">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Smartphone className="w-4 h-4 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">iOS-Style Preview</p>
                    <p className="text-xs text-muted-foreground">See exactly how your contact will look on an iPhone</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Edit className="w-4 h-4 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Edit Mode</p>
                    <p className="text-xs text-muted-foreground">Toggle between view and edit modes to update your contact information</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Download className="w-4 h-4 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Universal Compatibility</p>
                    <p className="text-xs text-muted-foreground">VCF files work with all major contact apps on iOS, Android, and desktop</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* Tips */}
            <section>
              <h3 className="font-semibold text-lg mb-3">Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
          <Button onClick={() => onOpenChange(false)}>
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}