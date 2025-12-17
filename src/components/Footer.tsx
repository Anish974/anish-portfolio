export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Anish Patankar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
