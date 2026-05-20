"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { CheckCircle, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="circleGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Scanner", id: "features" },
        { name: "Pricing", id: "pricing" },
        { name: "Support", id: "contact" },
      ]}
      brandName="TradeAI"
      button={{
        text: "Sign In",        href: "#"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "plain" }}
      title="Most Powerful AI Trading Analysis"
      description="Upload your MT4/MT5 charts and get precise entry, TakeProfit, and StopLoss results in 10 seconds. Join the revolution in automated market scanning."
      tag="Powered by Advanced AI"
      buttons={[
        { text: "Start Scanning", href: "#" },
        { text: "Download APK", href: "#" },
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/computer-dark-room-with-graphs-screen_169016-57208.jpg", imageAlt: "AI Trading Dashboard" },
        { imageSrc: "http://img.b2bpic.net/free-photo/ai-powered-device-concept_23-2151924166.jpg", imageAlt: "Multi-Chart Analysis" }
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Used by 10,000+ traders"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      features={[
        {
          title: "Single Chart Scanning",          description: "Quick analysis for individual trading setups with real-time indicators.",          imageSrc: "http://img.b2bpic.net/free-photo/young-man-looking-into-crypto-currency-stock-market_482257-2365.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/street-statistics-debt-loss-globe_1150-1721.jpg",          buttonText: "Try Now"},
        {
          title: "Multi-Chart Scan",          description: "Scan up to 6 charts simultaneously to identify market correlations.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-tracks-financial-data-computer_482257-120344.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/digital-led-scoreboard-display_187299-47308.jpg",          buttonText: "View Pro"},
        {
          title: "Smart Money Logic",          description: "Full analysis integrating AI reasoning and Smart Money concepts.",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-neon-light-waves-wonder-wheel_23-2148328127.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/laptop-showing-isolated-chroma-key-help-strategy-planning_482257-126434.jpg",          buttonText: "Learn AI"},
      ]}
      title="Smart Scanning Engine"
      description="Our AI-powered engine processes your charts using proven technical indicators and Smart Money concepts."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "AI Scanner", price: "Free", variant: "Basic", imageSrc: "http://img.b2bpic.net/free-photo/hands-holding-up-blue-letters-forming-abbreviation-ai_53876-165239.jpg" },
        { id: "p2", name: "Pro Scanner", price: "Free", variant: "Advanced", imageSrc: "http://img.b2bpic.net/free-photo/close-up-stethoscope-cardiogram-chart_23-2147941823.jpg" },
        { id: "p3", name: "Multi-Chart Engine", price: "Free", variant: "Elite", imageSrc: "http://img.b2bpic.net/free-photo/candlestick-graph-investment-financial-analysis-report-sign-symbol-icon-3d-rendering_56104-1918.jpg" }
      ]}
      title="Platform Tools"
      description="High-quality analytical tools for professional trading."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        { id: "m1", value: "94%", title: "Accuracy Rate", description: "AI-calculated historical precision", icon: CheckCircle },
        { id: "m2", value: "10s", title: "Scan Speed", description: "Rapid analysis results", icon: Zap },
        { id: "m3", value: "20/d", title: "Daily Limit", description: "Scans per account level", icon: Shield },
      ]}
      title="Market Impact"
      description="Proven results for institutional and retail traders worldwide."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic", tag: "Free Plan", price: "$0", period: "/mo", description: "Get started for free", button: { text: "Get Started" }, featuresTitle: "Included Features", features: ["Single Chart Scanner", "20 Scans Daily", "Basic Indicators"]
        },
        {
          id: "pro", tag: "Free Plan", price: "$0", period: "/mo", description: "Unlock pro features", button: { text: "Get Pro" }, featuresTitle: "Included Features:", features: ["6 Multi-Chart Scanner", "Smart Money AI", "Full History Feed"]
        },
        {
          id: "elite", tag: "Free Plan", price: "$0", period: "/mo", description: "Ultimate experience", button: { text: "Get Elite" }, featuresTitle: "Included Features:", features: ["Unlimited Fundamentals", "Priority Support", "Expert Logic"]
        },
      ]}
      title="Pick Your Edge"
      description="Select the level of analysis required for your trading strategy."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Sarah J.", role: "Forex Trader", company: "GrowthCorp", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/confident-middle-aged-businesswoman_74855-1573.jpg" },
        { id: "2", name: "Michael C.", role: "Market Analyst", company: "InnovateLab", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cheerful-business-leader-showing-statistics_1262-2964.jpg" },
        { id: "3", name: "Emily R.", role: "Quant Researcher", company: "StrategyXYZ", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/closeup-handsome-young-office-worker-glasses-suit-smiling-camera-looking-happy-white_1258-173667.jpg" }
      ]}
      kpiItems={[
        { value: "5000+", label: "Active Users" },
        { value: "4.9/5", label: "Satisfaction" },
        { value: "100k+", label: "Charts Scanned" },
      ]}
      title="Traders Love Us"
      description="Thousands of satisfied traders rely on our AI to scale their results."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Which platforms are supported?", content: "Our AI scanner is optimized for MT4 and MT5 platform data exports." },
        { id: "f2", title: "How fast is the analysis?", content: "Most chart scans are completed and returned with full signals in under 10 seconds." },
        { id: "f3", title: "Can I use the scanner on mobile?", content: "Yes, we provide an official APK download for direct installation on mobile devices." },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Need Help? Get Support."
      description="Have questions about integration or our AI logic? Reach out to our 24/7 priority support team."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Your Email", required: true },
      ]}
      textarea={{ name: "message", placeholder: "Describe your query..." }}
      imageSrc="http://img.b2bpic.net/free-photo/office-worker-using-finance-graphs_23-2150408705.jpg"
      mediaPosition="right"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="TradeAI"
      columns={[
        {
          title: "Platform",          items: [{ label: "Scanner", href: "#" }, { label: "Pricing", href: "#" }, { label: "Mobile APK", href: "#" }],
        },
        {
          title: "Support",          items: [{ label: "Help Center", href: "#" }, { label: "Contact Us", href: "#" }, { label: "Terms of Use", href: "#" }],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}