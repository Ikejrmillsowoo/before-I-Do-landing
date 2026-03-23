const FooterSection = () => (
  <footer className="py-12 px-6 border-t border-border/40">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-serif text-lg">Before I Do</p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
