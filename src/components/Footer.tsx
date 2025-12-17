export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Anish Patankar. All rights reserved.
          </p>
          {/* <p className="text-sm text-muted-foreground">
            Built with <span className="gradient-text font-medium">Python • Web • ML</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
