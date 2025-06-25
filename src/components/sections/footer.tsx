const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t  backdrop-blur">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 Pokus Team. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="/privacy-policy" className="text-sm text-muted-foreground hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-sm text-muted-foreground hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer; 