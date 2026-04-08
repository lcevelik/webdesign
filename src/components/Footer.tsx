export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/40 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-4">Lumina</h3>
            <p className="text-sm text-muted-foreground">
              Designing the future of productivity, one pixel at a time.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Download</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            Copyright © 2026 Lumina Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:underline">United States</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
