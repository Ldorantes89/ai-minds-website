/**
 * Master EN/ES dictionary. Flat keyspace with dot-namespaced keys.
 * Copy is intentionally terse — scannable, not paragraphs.
 */

export type Locale = "en" | "es";

export const LOCALES: Locale[] = ["en", "es"];
export const DEFAULT_LOCALE: Locale = "en";

export const dictionary = {
  en: {
    // Site
    "site.tagline": "Your team, multiplied",
    "site.ctaLabel": "Book a free audit",

    // Navbar
    "nav.agents": "Agents",
    "nav.howItWorks": "How it works",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.book": "Book audit",

    // Hero
    "hero.pill": "AI coworkers for SMBs",
    "hero.h1.a": "Your team,",
    "hero.h1.b": "multiplied.",
    "hero.sub": "5 focused AI employees that handle the busywork — your humans stay.",
    "hero.cta.primary": "Book a free audit",
    "hero.cta.secondary": "Meet the team",
    "hero.trust1": "Replies in seconds",
    "hero.trust2": "Works 24/7",
    "hero.trust3": "Starts at $499",
    "hero.builtOn": "Anthropic · OpenAI · ElevenLabs · Twilio",
    "hero.chatLabel": "Sophie, live",
    "hero.chatLabelMobile": "Sophie, live",

    // Chat demo
    "chat.online": "Online · replies in seconds",
    "chat.live": "Live",
    "chat.input": "Try me at your free audit",
    "chat.msg1": "Hi, any availability Friday at 2pm?",
    "chat.msg2":
      "Yes — 2:00pm and 3:30pm are open. Want a text or email confirmation?",
    "chat.msg3": "Text. What's the cost?",
    "chat.msg4":
      "$89 for the first consult (45 min). Booked Friday 2:00pm — text on the way 📲",

    // HumanFirst
    "human.pill": "Our philosophy",
    "human.title.a": "We don't",
    "human.title.strike": "replace",
    "human.title.b": "your team.",
    "human.title.c": "We",
    "human.title.gradient": "multiply",
    "human.title.d": "it.",
    "human.desc": "Same people. 10× the output.",
    "human.col1.title": "Your team",
    "human.col1.body": "Stays.",
    "human.col2.title": "5 AI coworkers",
    "human.col2.body": "Handle the busywork. 24/7.",
    "human.col3.title": "Superpowers",
    "human.col3.body": "Same people, 10× output.",
    "human.pledge.label": "Promise:",
    "human.pledge.1": "Humans approve the important stuff",
    "human.pledge.2": "Your team grows, not shrinks",
    "human.pledge.3": "Your data stays yours",

    // AgentsCatalog
    "agents.eyebrow": "The team",
    "agents.title.a": "5 specialists.",
    "agents.title.b": "One job each.",
    "agents.desc": "Hire the ones that move your numbers.",
    "agents.cta.full": "See full team",
    "agents.aria.meet": "Meet {name}, your {role} AI employee",
    "agents.meetCta": "Meet {name}",
    "agents.whatYouGet": "What you get",
    "agents.noMatchNote":
      "Don't see your use case? Most of our work is custom.",

    // Agents — full descriptions: what they do, how, and the outcome
    "agent.ava.role": "Customer Support",
    "agent.ava.oneLiner":
      "Answers every DM, web chat & WhatsApp in 60 seconds — including 9pm on a Sunday.",
    "agent.ava.b1":
      "Instant replies on Instagram DM, WhatsApp, web chat & Facebook Messenger — 24/7",
    "agent.ava.b2":
      "Knows your hours, services, prices & policies without you lifting a finger",
    "agent.ava.b3":
      "Escalates only when a human is truly needed — refunds, complaints, decisions",
    "agent.ava.detail":
      "It's 9pm Sunday. Someone DMs your Instagram: 'Are you open tomorrow?' If you don't reply in 5 minutes, 80% of those customers book somewhere else. Ava reads every channel — DM, WhatsApp, web chat, Messenger — and responds in 60 seconds in your brand voice. She handles hours, prices, services, and policies cold, manages basic requests up to limits you set, and only pings you when a real human is genuinely needed.",
    "agent.ava.o1":
      "200+ customer messages handled per month — zero effort from you",
    "agent.ava.o2":
      "Under 60-second first reply, 24/7 — including weekends and holidays",
    "agent.ava.o3":
      "~78% of conversations fully resolved without you ever being pinged",

    "agent.leo.role": "Sales & Lead Follow-Up",
    "agent.leo.oneLiner":
      "Texts every new lead within 60 seconds — then follows up for 14 days until they book.",
    "agent.leo.b1":
      "Texts + emails every lead within 60 seconds of a form fill or missed call",
    "agent.leo.b2":
      "Qualifies budget, timeline & fit, then books the meeting into your calendar",
    "agent.leo.b3":
      "Re-engages ghosters at 1, 3, 7 & 14 days — most competitors stop after 1 try",
    "agent.leo.detail":
      "A lead fills out your contact form at 9:47pm Friday. You see it Monday morning — they've already booked your competitor. Leo replies in under a minute by text and email, qualifies them with a few smart questions (budget, timeline, fit), and drops a meeting straight into your Calendly, HubSpot or Google Calendar. He chases the ghosters for two full weeks so no opportunity quietly slips away.",
    "agent.leo.o1":
      "Under 60-second speed-to-lead, any hour of the day or night",
    "agent.leo.o2":
      "3× more booked meetings from the leads you're already getting",
    "agent.leo.o3":
      "Zero leads abandoned — every inquiry gets at least 4 follow-up touches",

    "agent.bella.role": "Front Desk & Scheduling",
    "agent.bella.oneLiner":
      "Picks up every call in a natural voice — books in real-time and cuts no-shows in half.",
    "agent.bella.b1":
      "100% of calls answered, 24/7 — English or Spanish, warm natural voice",
    "agent.bella.b2":
      "Books, reschedules & cancels in Google Calendar, Square, Acuity, Booksy & Cal.com",
    "agent.bella.b3":
      "Texts a confirmation instantly + reminder 24 hrs before to cut no-shows in half",
    "agent.bella.detail":
      "It's Saturday. You're in the middle of a service — hands tied, literally. Your phone rings 6 times. Bella picks up every call in a natural voice, books appointments in real time, texts each caller a confirmation, and routes anything urgent (an emergency, a panicked caller) directly to your cell. Each missed call costs you $150–$300. Bella doesn't miss any.",
    "agent.bella.o1":
      "100% of calls answered, 24/7 — zero missed revenue",
    "agent.bella.o2":
      "$150–$300 recovered per call that would have gone to voicemail",
    "agent.bella.o3":
      "No-show rate cut in half with automatic confirmation + reminder texts",

    "agent.maya.role": "Marketing & Content",
    "agent.maya.oneLiner":
      "Posts to Instagram, TikTok & Google Business every day — in your voice, without your time.",
    "agent.maya.b1":
      "Writes & schedules daily posts for Instagram, TikTok, Facebook & Google Business Profile",
    "agent.maya.b2":
      "Drafts your weekly email newsletter, seasonal promos & re-engagement campaigns",
    "agent.maya.b3":
      "Turns 1 client photo into 5 platform-ready posts — Reels, carousels, Stories, GBP",
    "agent.maya.detail":
      "It's Thursday. Your last Instagram post was 17 days ago. The algorithm already killed your reach, and your competitor posted today. Maya studies your past content for voice and tone, writes captions that sound like you, schedules across every platform, drafts your weekly newsletter, and turns one client photo into a full week of content. You just approve — or skip approval entirely once you trust her.",
    "agent.maya.o1":
      "28+ on-brand posts per month across 4 platforms — without your daily input",
    "agent.maya.o2":
      "1 email newsletter per week, drafted and ready for one-click approval",
    "agent.maya.o3":
      "8+ hours per week of marketing work permanently off your plate",

    "agent.penny.role": "Cash Flow & Finance",
    "agent.penny.oneLiner":
      "Watches your cash daily — texts you 7 days before a shortfall, before it becomes a crisis.",
    "agent.penny.b1":
      "Connects live to QuickBooks, Xero & Stripe for a real-time view of your accounts",
    "agent.penny.b2":
      "Rolling 4-week forecast so payroll and rent never blindside you",
    "agent.penny.b3":
      "Categorizes every transaction and flags anything unusual, duplicate, or overdue",
    "agent.penny.detail":
      "It's the 25th. Rent is due Friday. You've got $4,200 in checking and $11K in receivables you're not sure will land on time. Penny reads your accounts every morning, builds a rolling 4-week forecast, and texts you 7 days before a cash crunch — with the reason and a clear next step. Payroll stops being a surprise.",
    "agent.penny.o1":
      "7-day SMS warning before any low-balance event — no more surprises",
    "agent.penny.o2":
      "100% of transactions categorized automatically every week",
    "agent.penny.o3":
      "Weekly 'state of the business' cash summary, straight to your phone",

    "agent.vera.role": "Invoicing & Collections",
    "agent.vera.oneLiner":
      "Invoices the moment a job closes — then chases politely until you're paid.",
    "agent.vera.b1":
      "Invoice auto-generated the moment a job or appointment is marked complete",
    "agent.vera.b2":
      "Polite escalating reminders at 7, 14 & 30 days — persistent but never embarrassing",
    "agent.vera.b3":
      "Offers payment plans and collects by ACH or card the moment the client agrees",
    "agent.vera.detail":
      "You finished a $3,200 job on Tuesday. The invoice is still in your head. Vera sends it the moment you mark the job done, follows up at 7, 14, and 30 days with messages that get progressively firmer, offers a payment plan if they push back, and collects automatically when they agree. You stop sitting on $18K in overdue receivables — and you stop making the awkward 'hey, did you get my invoice?' call.",
    "agent.vera.o1":
      "Average payment time cut from 30+ days to under 14 days",
    "agent.vera.o2":
      "$8K–$12K/year recovered from slow payers who just needed one more nudge",
    "agent.vera.o3":
      "Zero awkward chase-the-money conversations — ever",

    "agent.ruby.role": "Reviews & Reputation",
    "agent.ruby.oneLiner":
      "Texts every customer 2 hours after service — captures 5-star reviews, catches complaints privately.",
    "agent.ruby.b1":
      "Personalized text to every customer, 2 hours after their visit or appointment",
    "agent.ruby.b2":
      "Happy → Google or Yelp link. Unhappy → private form to your inbox first.",
    "agent.ruby.b3":
      "Drafts on-brand replies to every review — positive or negative — ready to post in one click",
    "agent.ruby.detail":
      "Your last 5 customers were thrilled — and not one left a review. Meanwhile, one difficult customer posted a 1-star that now sits at the top of your Google page. Ruby texts every customer 2 hours after their visit with a personalized message. Happy customers get a 1-tap link straight to Google or Yelp. Unhappy ones go to a private form that hits your inbox first — before they can post publicly. You turn every happy customer into a review, and you stop every bad review before it goes live.",
    "agent.ruby.o1":
      "6× more Google & Yelp reviews per month within 60 days",
    "agent.ruby.o2":
      "Average star rating up +0.3 to +0.5 within 90 days",
    "agent.ruby.o3":
      "Most unhappy customers caught and resolved privately before they can post",

    "agent.max.role": "Paperwork & Documents",
    "agent.max.oneLiner":
      "Reads every vendor invoice, form & receipt — enters the data so you never have to.",
    "agent.max.b1":
      "Reads emailed vendor invoices and posts to QuickBooks or Xero with full line items",
    "agent.max.b2":
      "Extracts data from insurance forms, contracts, purchase orders, W-9s & service records",
    "agent.max.b3":
      "Builds expense reports from phone photos of receipts — tagged, categorized, filed",
    "agent.max.detail":
      "You process 80 vendor invoices through QuickBooks every month. At 4 minutes each, that's over 5 hours of data entry — a full workday, gone. Max reads every PDF that hits your inbox, pulls the vendor name, date, line items, amounts, and PO numbers, posts them to your accounting system, and flags anything that looks off — duplicates, wrong totals, missing fields. Your bookkeeper reviews instead of typing.",
    "agent.max.o1":
      "80+ documents processed per month — zero manual data entry",
    "agent.max.o2":
      "5+ hours per week saved on paperwork and data entry",
    "agent.max.o3":
      "Duplicate invoices and data errors caught before they reach your books",

    // CaseStudy
    "case.eyebrow": "Real results",
    "case.title.a": "One AI employee.",
    "case.title.b": "~10 hours back every week.",
    "case.desc":
      "Casa Doper unlocked bilingual coverage 24/7. No new hires. The team finally spends time where it counts.",
    "case.brand": "Casa Doper",
    "case.location": "Boutique hotel · San Miguel de Allende, MX",
    "case.quote":
      "\"We were losing customers because we couldn't reply fast enough. Elena answers instantly — in English or Spanish — and now we're winning the bookings we used to lose.\"",
    "case.poweredBy": "Powered by Elena",
    "case.poweredByRole": "Front Desk AI employee",
    "case.rating": "4.9 / 5",
    "case.live": "Live · 90+ days",
    "case.stat1.value": "~700",
    "case.stat1.label": "Messages handled",
    "case.stat1.sub": "in 90 days",
    "case.stat2.value": "~10 hrs",
    "case.stat2.label": "Saved",
    "case.stat2.sub": "per week",
    "case.stat3.value": "12+",
    "case.stat3.label": "Bookings recovered",
    "case.stat3.sub": "90 days",
    "case.stat4.value": "4.9 ★",
    "case.stat4.label": "Guest rating",
    "case.stat4.sub": "AI-handled stays",
    "case.founder.quote":
      "\"Built in 7 days. The team kept their jobs — and got their time back for the work that grows the business.\"",
    "case.founder.name": "Luis Dorantes",
    "case.founder.title": "Founder · Dallas, TX",
    "case.founder.cred1": "Bronze Stevie 2025",
    "case.founder.cred2": "Ex-IBM · 20K+ dev community",

    // Pricing
    "pricing.eyebrow": "Pricing",
    "pricing.title.a": "One price.",
    "pricing.title.b": "Results in 30 days.",
    "pricing.desc": "Pick your first AI employee. We build it, train it, go live in days.",
    "pricing.popular": "Most popular",
    "pricing.fullDesc":
      "Start with 1 AI employee. See results in 30 days. Then choose your team — or cancel.",
    "pricing.fine":
      "All prices in US dollars. LLM + telephony billed at cost. Cancel anytime.",
    "pricing.guarantee.badge": "30-day money-back guarantee",
    "pricing.guarantee.title": "Not happy in 30 days? Full refund.",
    "pricing.guarantee.body":
      "Try your first AI employee for 30 days. If it isn't saving you time and money — or you just don't love it — we refund every dollar. No questions, no hoops, no awkward calls.",
    "pricing.fineBookCta": "Book a free audit →",
    "pricing.cta": "See full plan",
    "pricing.setupPrefix": "+ ",
    "pricing.headerTitle.a": "One price.",
    "pricing.headerTitle.b": "30 days to decide.",
    "pricing.headerDesc":
      "Start with 1 AI employee. See results in 30 days. Then choose your team — or cancel.",

    // Pilot offer
    "pricing.pilot.badge": "30-Day Pilot",
    "pricing.pilot.name": "Start with 1 AI employee",
    "pricing.pilot.headline": "See results before you commit.",
    "pricing.pilot.price": "$499",
    "pricing.pilot.note": "one-time to start",
    "pricing.pilot.f1": "1 AI employee, fully built & trained on your business",
    "pricing.pilot.f2": "Live in 3–5 business days",
    "pricing.pilot.f3": "English & Spanish, 24/7",
    "pricing.pilot.f4": "You approve before anything goes live",
    "pricing.pilot.f5": "30-day money-back guarantee",
    "pricing.pilot.after": "After 30 days — $199/mo or cancel. Your call.",
    "pricing.pilot.cta": "Book a free audit",
    "pricing.pilot.auditNote": "The audit is free. We show you which AI employee saves you the most — no commitment.",
    "pricing.pilot.expand": "Already know you want more?",
    "pricing.pilot.expandCta": "See ongoing plans →",
    "pricing.expand.title": "After the pilot — choose your ongoing plan",
    "pricing.expand.note": "The $499 pilot setup applies as credit toward any ongoing plan.",
    "pricing.solo.name": "Solo",
    "pricing.solo.headline": "Start with your biggest time-killer.",
    "pricing.solo.blurb": "1 AI employee. Less than a phone bill.",
    "pricing.solo.setup": "$499 setup",
    "pricing.solo.monthly": "$199",
    "pricing.solo.note": "USD /mo · 1 agent",
    "pricing.solo.f1": "1 AI employee of your choice",
    "pricing.solo.f2": "1 channel (chat, voice, or social)",
    "pricing.solo.f3": "Trained on your business",
    "pricing.solo.f4": "1 tool integration",
    "pricing.solo.f5": "Monthly report",
    "pricing.solo.f6": "Email support",
    "pricing.squad.name": "Squad",
    "pricing.squad.headline": "Pick any 3.",
    "pricing.squad.blurb": "Cover your biggest pain points. Save 17%.",
    "pricing.squad.setup": "$999 setup",
    "pricing.squad.monthly": "$499",
    "pricing.squad.note": "USD /mo · 3 agents",
    "pricing.squad.f1": "Any 3 AI employees",
    "pricing.squad.f2": "Multi-channel (voice, chat, SMS)",
    "pricing.squad.f3": "CRM + calendar integration",
    "pricing.squad.f4": "Monthly strategy call",
    "pricing.squad.f5": "Bi-weekly tuning",
    "pricing.squad.f6": "Priority support",
    "pricing.full.name": "Full Team",
    "pricing.full.headline": "All 5, working together.",
    "pricing.full.blurb": "20% cheaper per agent than Solo.",
    "pricing.full.setup": "$1,499 setup",
    "pricing.full.monthly": "$799",
    "pricing.full.note": "USD /mo · all 5 · $160 ea",
    "pricing.full.f1": "All 5 AI employees",
    "pricing.full.f2": "Unlimited channels & integrations",
    "pricing.full.f3": "Custom workflows",
    "pricing.full.f4": "Dedicated account manager",
    "pricing.full.f5": "Weekly optimization",
    "pricing.full.f6": "99.9% uptime SLA",

    // CostComparison
    "cost.eyebrow": "The math",
    "cost.title.a": "One new hire's cost.",
    "cost.title.b": "An entire AI team.",
    "cost.desc": "The AI never calls in sick.",
    "cost.human.label": "Hire another human",
    "cost.human.sub": "For the busywork they hate",
    "cost.human.price": "$5,400+",
    "cost.human.period": "/ month",
    "cost.ai.label": "Hire AI Minds",
    "cost.ai.sub": "Free up your humans",
    "cost.ai.price": "from $399",
    "cost.ai.period": "/ month",
    "cost.row1.label": "Monthly cost",
    "cost.row1.human": "$4,200",
    "cost.row1.ai": "$399",
    "cost.row2.label": "Benefits + payroll tax",
    "cost.row2.human": "+$1,200",
    "cost.row2.ai": "$0",
    "cost.row3.label": "Hours available",
    "cost.row3.human": "40 / week",
    "cost.row3.ai": "24 / 7 / 365",
    "cost.row4.label": "Sick days, turnover",
    "cost.row4.human": "Often",
    "cost.row4.ai": "Never",
    "cost.row5.label": "Time to start",
    "cost.row5.human": "2–6 weeks",
    "cost.row5.ai": "Days",
    "cost.row6.label": "Languages",
    "cost.row6.human": "1",
    "cost.row6.ai": "30+",
    "cost.note": "Humans for what matters. AI for the rest.",

    // Industries
    "industries.eyebrow": "For your business",
    "industries.title.a": "Built for",
    "industries.title.b": "businesses like yours.",
    "industries.desc": "Pick the team that fits.",
    "industries.notListed.text": "Don't see your industry?",
    "industries.notListed.cta": "We probably still fit",
    "industries.dental.name": "Dental & Medical",
    "industries.dental.blurb":
      "Elena books patients · Stella gets reviews · Leo follows up on leads.",
    "industries.medspa.name": "Med Spas & Salons",
    "industries.medspa.blurb":
      "Sophie replies to DMs · Chloe posts daily · Elena fills the chair.",
    "industries.law.name": "Law Firms",
    "industries.law.blurb":
      "Leo qualifies leads · Sophie handles inquiries · Elena books consultations.",
    "industries.hvac.name": "HVAC & Trades",
    "industries.hvac.blurb":
      "Elena catches after-hours calls · Leo books jobs · Stella earns 5-stars.",
    "industries.barber.name": "Barbershops & Boutiques",
    "industries.barber.blurb":
      "Elena fills your calendar · Chloe posts nightly · Sophie chats walk-ins.",
    "industries.realestate.name": "Real Estate & Hospitality",
    "industries.realestate.blurb":
      "Sophie handles 24/7 guests · Leo follows up · Elena books showings.",

    // HowItWorks
    "how.eyebrow": "How it works",
    "how.title": "Audit to live team, in days.",
    "how.desc": "You approve every step. We do the work.",
    "how.headerTitle": "From audit to live team, in days.",
    "how.headerDesc": "You decide. We build. You get a working AI team in under 2 weeks.",
    "how.getsLabel": "What you get",
    "how.s1.label": "Step 01",
    "how.s1.title": "Free audit",
    "how.s1.dur": "Day 1 · 30 minutes · No cost",
    "how.s1.body":
      "We sit with you, map your daily workflows, and find where AI saves the most time and money.",
    "how.s1.gets.1": "1-page ROI report — which AI employees pay off fastest in your business",
    "how.s1.gets.2": "Hours + dollars you'll save per month, with concrete numbers",
    "how.s1.gets.3":
      "Clear next steps — even if you don't hire us",
    "how.s2.label": "Step 02",
    "how.s2.title": "We build & train your AI team",
    "how.s2.dur": "Days 2–5",
    "how.s2.body":
      "We build each AI employee on your business — your voice, hours, policies, prices, and existing tools.",
    "how.s2.gets.1":
      "Each AI employee wired into your phone, chat, calendar & CRM",
    "how.s2.gets.2":
      "Live demo of every agent in a test environment so you can see them in action",
    "how.s2.gets.3":
      "Approval gate — nothing goes live until you sign off",
    "how.s3.label": "Step 03",
    "how.s3.title": "Go live",
    "how.s3.dur": "Day 5–10",
    "how.s3.body":
      "We connect every channel and flip the switch. Your AI team starts working — 24/7, from day one.",
    "how.s3.gets.1":
      "Phone, web chat, WhatsApp, Instagram DM & email all answered automatically",
    "how.s3.gets.2":
      "Real-time dashboard showing every conversation, booking, and handoff",
    "how.s3.gets.3":
      "First week of close monitoring — we watch every interaction and tune on the fly",
    "how.s4.label": "Step 04",
    "how.s4.title": "We manage & improve monthly",
    "how.s4.dur": "Every month, ongoing",
    "how.s4.body":
      "We review transcripts, retrain on real conversations, and report on what's working.",
    "how.s4.gets.1":
      "Monthly performance report — calls handled, hours saved, dollars recovered",
    "how.s4.gets.2":
      "Strategy call to plan the next month and add new capabilities",
    "how.s4.gets.3":
      "An AI team that gets smarter and more valuable every single month",
    "how.principles.eyebrow": "What makes it work",
    "how.principles.title": "Effortless for you.",
    "how.principles.desc": "The burden never lands on you.",
    "how.p1.title": "Days, not months",
    "how.p1.body": "First AI employee live in a week.",
    "how.p2.title": "You approve everything",
    "how.p2.body":
      "Nothing goes live until you sign off. You stay in control.",
    "how.p3.title": "Keeps getting better",
    "how.p3.body":
      "Monthly tuning. Your AI team improves while you sleep.",

    // Problem
    "problem.eyebrow": "The problem",
    "problem.title": "Your team is drowning in busywork.",
    "problem.desc": "Not enough hours. Not enough hands.",
    "problem.p1.title": "Missed calls",
    "problem.p1.body": "Every one is a customer calling your competitor next.",
    "problem.p2.title": "Slow lead replies",
    "problem.p2.body": "Leads go cold in minutes. First to reply wins.",
    "problem.p3.title": "Unpaid invoices",
    "problem.p3.body": "Cash you earned, sitting uncollected.",
    "problem.p4.title": "Paperwork pile",
    "problem.p4.body": "Invoices, forms, receipts eat your week.",
    "problem.p5.title": "No time to market",
    "problem.p5.body": "Posts, emails, reviews — always last.",

    // WhyAiMinds
    "why.eyebrow": "Why AI Minds",
    "why.title": "The difference is the management.",
    "why.desc": "We own the outcome.",
    "why.r1.title": "Done-for-you",
    "why.r1.body":
      "We build, host, monitor, improve. You never touch a dashboard.",
    "why.r2.title": "Outcome-focused",
    "why.r2.body":
      "We measure hours and dollars saved. If it's not moving numbers, we change it.",
    "why.r3.title": "Built by an operator",
    "why.r3.body":
      "5 years at IBM — closed $9.95M in new-logo enterprise SaaS, then built IBM's 20,850-developer community.",
    "why.r4.title": "You own the results",
    "why.r4.body":
      "Your data, your customers, your brand. All of it stays yours.",
    "why.founder.quote.a":
      "I watched the Fortune 500 race ahead with AI while small businesses drowned in busywork. AI Minds closes that gap. Not by replacing your team.",
    "why.founder.quote.b": "By multiplying it.",
    "why.founder.name": "Luis Dorantes",
    "why.founder.title": "Founder · Dallas, TX",
    "why.founder.cred1": "Bronze Stevie 2025",
    "why.founder.cred2": "Ex-IBM · 20K+ dev community",
    "why.founder.cred3": "5 yrs at IBM · $9.95M pipeline",
    "why.founder.cred4": "EN · ES · FR",

    // TrustStrip
    "trust.label": "Built on the AI that powers Fortune 500s",
    "trust.pledge1": "Your data stays yours",
    "trust.pledge2": "Human approves the important calls",
    "trust.pledge3": "Live in days",

    // FAQ
    "faq.eyebrow": "Questions",
    "faq.title": "Common questions.",
    "faq.desc": "Real questions. Honest answers.",
    "faq.q1": "Will customers know it's AI?",
    "faq.a1":
      "We disclose it the way you want — usually as 'virtual assistants'. If your industry requires explicit AI labels, we do that by default.",
    "faq.q2": "What if the AI makes a mistake?",
    "faq.a2":
      "Every employee has guardrails. Risky stuff (refunds, legal, big bookings) escalates to a human. You approve before it ships.",
    "faq.q3": "Does it work with my tools (QuickBooks, HubSpot, Calendly)?",
    "faq.a3":
      "Yes. We wire into what you already use. Custom integrations included in the Pro plan.",
    "faq.q4": "Are you replacing my employees?",
    "faq.a4":
      "No. The whole point is to free your team from busywork. Every client has grown their human team, not shrunk it.",
    "faq.q5": "How fast can it go live?",
    "faq.a5":
      "5–10 business days for most. Solo (1 agent) goes live in a week.",
    "faq.q6": "What about my data — how do you handle it and what about security risk?",
    "faq.a6":
      "Your data stays in your account, encrypted at rest and in transit. We don't sell it, share it, or train shared AI models on it. Conversations, customer records, and integrations live in US-based infrastructure with SOC 2-aligned controls; HIPAA-compatible setups are available on the Full Team plan. Third-party providers (Anthropic, OpenAI, ElevenLabs, Twilio) only see what's needed to do the job and operate under their own zero-retention enterprise agreements. You can export everything anytime, and we delete it on request. See our Privacy & Security page for the full breakdown.",
    "faq.q7": "Can I try it before committing?",
    "faq.a7":
      "Yes — the free audit shows you a real demo with hard numbers. No commitment.",
    "faq.q8": "Can I cancel?",
    "faq.a8":
      "Any month. No contract. Your data and configs export on the way out.",

    // CTA Banner
    "cta.title": "Free 30-min audit.",
    "cta.sub": "We show you where AI saves time and money. No pitch.",
    "cta.button": "Book a free audit",
    "cta.emailBtn": "Email us",

    // Footer
    "footer.tagline": "Your team, multiplied.",
    "footer.about": "About",
    "footer.contact": "Contact",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.getStarted": "Get started",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy & Security",
    "footer.copyright": "© {year} AI Minds. All rights reserved.",

    // About page
    "about.eyebrow": "About",
    "about.title.a": "An AI team for",
    "about.title.b": "every small business.",
    "about.desc":
      "Enterprise-grade AI in the hands of the businesses that need it most.",
    "about.founder.name": "Luis Dorantes",
    "about.founder.title": "Founder · AI Minds",
    "about.founder.location": "Dallas, TX",
    "about.founder.b1": "Ex-IBM enterprise sales",
    "about.founder.b2": "Ex-IBM TechXchange",
    "about.founder.b3": "Bronze Stevie 2025",
    "about.founder.b4": "EN · ES · FR",
    "about.story1.lead": "Founded by",
    "about.story1.body":
      ", Dallas, TX. 5 years at IBM — closed $9.95M in new-logo enterprise SaaS, then ran their 20,850-developer community.",
    "about.story2":
      "Fortune 500s are racing ahead with AI. The dentist, the med spa, the family restaurant — drowning in busywork.",
    "about.story3":
      "AI Minds closes that gap. We build, host, and improve the AI employees. You get the outcome, not a part-time engineering job. And every client we have has grown their human team, not shrunk it.",
    "about.mission":
      "\"An AI team that works alongside your humans — multiplying what they do.\"",
    "about.missionAttr": "— The mission",
    "about.cred.c1.title": "5 years at IBM",
    "about.cred.c1.body":
      "Mid-market AE on the IBM Sustainability portfolio (Envizi, TRIRIGA, Supply Chain). $9.95M new-logo pipeline. $24.7M in influenced enterprise opp value. 127% perpetual quota.",
    "about.cred.c2.title": "Built a 20K+ dev community",
    "about.cred.c2.body":
      "IBM TechXchange Data & AI Community Manager (2024–2025). 20,850+ members. TechXchange Conference team 2 yrs. Program Manager, IBM Data Champions.",
    "about.cred.c3.title": "Bronze Stevie 2025",
    "about.cred.c3.body":
      "Recognized for excellence in developer community engagement.",
    "about.cred.c4.title": "Trilingual",
    "about.cred.c4.body":
      "Native English & Spanish. Conversational French.",
    "about.cta.title": "Multiply your team.",
    "about.cta.sub":
      "Free 30-min audit with the founder. No pitch.",

    // /agents page
    "agentsPage.eyebrow": "The team",
    "agentsPage.title.a": "Your",
    "agentsPage.title.b": "AI team",
    "agentsPage.title.c": ", by name.",
    "agentsPage.desc": "Hire the ones that move your numbers.",
    "agentsPage.cta.title": "Not sure who to hire first?",
    "agentsPage.cta.sub":
      "That's what the audit is for. We find the one that pays for itself fastest.",

    // /contact page
    "contact.eyebrow": "Contact",
    "contact.title.a": "Let's talk about",
    "contact.title.b": "your business.",
    "contact.desc": "Free 30-min audit. Or write us first.",
    "contact.book.title": "Book a free audit",
    "contact.book.body":
      "30 minutes. No pitch. Clear plan whether you work with us or not.",
    "contact.email.title": "Email us",
    "contact.fast.title": "Fast response",
    "contact.fast.body": "We reply within one business day.",
    "contactForm.name": "Name",
    "contactForm.namePh": "Jane Smith",
    "contactForm.business": "Business",
    "contactForm.businessPh": "Smith & Co.",
    "contactForm.email": "Email",
    "contactForm.emailPh": "jane@business.com",
    "contactForm.message": "What would you like to automate?",
    "contactForm.messagePh":
      "Tell us where you're losing the most time…",
    "contactForm.send": "Send",
    "contactForm.sending": "Sending…",
    "contactForm.fast": "We reply within one business day.",
    "contactForm.success.title": "Sent",
    "contactForm.success.default": "Thanks! We'll be in touch.",
    "contactForm.success.again": "Send another",
    "contactForm.error.default": "Something went wrong. Try again.",
    "contactForm.error.network": "Network error. Email us directly.",

    // 404
    "404.title": "Off-script.",
    "404.desc": "Page not found — but your AI team is still on duty.",
    "404.home": "Home",
    "404.team": "Meet the team",

    // Terms
    "terms.eyebrow": "Legal",
    "terms.title": "Terms & Conditions",
    "terms.desc":
      "The agreement between you and AI Minds when you use our services. Plain language. No surprises.",
    "terms.updated": "Last updated: May 28, 2026",
    "terms.s1.title": "What we do",
    "terms.s1.body":
      "AI Minds builds, hosts, and manages AI employees that operate on your behalf — answering customers, qualifying leads, booking appointments, chasing invoices, and similar tasks. We're a managed service, not self-serve software. Each engagement begins with a free 30-minute audit and a signed Service Agreement that defines scope, channels, and integrations.",
    "terms.s2.title": "Payment & billing",
    "terms.s2.body":
      "All plans are billed monthly in advance, in USD. Setup fees are one-time, due before build starts. LLM and telephony usage (Anthropic, OpenAI, ElevenLabs, Twilio) is billed at provider cost on the same invoice. No long-term contract. Cancel anytime — your billing stops at the end of the current monthly period. We do not issue partial-month refunds.",
    "terms.s3.title": "Acceptable use",
    "terms.s3.body":
      "You agree not to use AI Minds to send spam, harass anyone, impersonate real individuals, run illegal operations, or generate content that violates third-party platform rules (Meta, Google, TikTok, Apple, etc.). You're responsible for ensuring your AI employees comply with the laws of every jurisdiction your business operates in — including AI disclosure rules where required.",
    "terms.s4.title": "Ownership",
    "terms.s4.body":
      "You own your data, your customer records, your brand voice, your transcripts, and everything your AI employees produce on your behalf. AI Minds owns the underlying platform, configurations, prompts, and tooling we build to deliver the service. If you cancel, we export your data and configurations to you and delete what we hold within 30 days.",
    "terms.s5.title": "Service uptime & support",
    "terms.s5.body":
      "We target 99.5% uptime on Solo and Squad plans; 99.9% uptime on Full Team (with a written SLA). Email support on Solo. Priority email + Slack on Squad. Dedicated account manager + Slack channel on Full Team. We aren't liable for downtime caused by third-party providers (telecom carriers, LLM APIs, platform outages).",
    "terms.s6.title": "Limitation of liability",
    "terms.s6.body":
      "Our total liability for any claim arising from your use of AI Minds is capped at the fees you paid us in the 3 months preceding the claim. We are not liable for indirect, incidental, or consequential damages — including lost profits, lost data, or business interruption. You agree to indemnify AI Minds against claims arising from your misuse of the service or your AI employees' interactions with your customers.",
    "terms.s7.title": "Changes & termination",
    "terms.s7.body":
      "We may update these terms with 30 days' notice via email. Continued use after the effective date means you accept the new terms. We reserve the right to suspend or terminate accounts that violate acceptable use, fail to pay, or pose risk to the platform or other clients. You may terminate at any time — see Section 2.",
    "terms.s8.title": "Governing law",
    "terms.s8.body":
      "These terms are governed by the laws of the State of Texas, USA. Any dispute will be resolved in the state or federal courts located in Dallas County, Texas. If any provision is held unenforceable, the remaining provisions stay in effect.",
    "terms.contact":
      "Questions about these terms? Email luis@ai-minds.ai — we'll answer in plain English.",

    // Privacy & Security
    "privacy.eyebrow": "Privacy & Security",
    "privacy.title": "How we handle your data.",
    "privacy.desc":
      "Plain English. What we collect, where it lives, who can see it, and how we protect it.",
    "privacy.updated": "Last updated: May 28, 2026",
    "privacy.s1.title": "What data we collect",
    "privacy.s1.body":
      "Only what's required to do the job: your business info (hours, prices, services), customer-facing content (FAQs, brand voice), tool credentials (API keys for the integrations you choose), and conversation logs from the AI employees you hire. We don't collect your customers' personal data beyond what flows through your chosen channels (phone, chat, SMS, social DMs) and we don't track or profile end users.",
    "privacy.s2.title": "Where it lives & how it's protected",
    "privacy.s2.body":
      "All customer data is encrypted in transit (TLS 1.2+) and at rest (AES-256), hosted on US-based infrastructure. Credentials and API keys are stored in a dedicated secrets manager — never in source code, logs, or backups. We follow SOC 2-aligned controls (access reviews, MFA, least-privilege, audit logging). HIPAA-compatible configurations (signed BAA, isolated environments, additional access controls) are available on the Full Team plan for healthcare and dental clients.",
    "privacy.s3.title": "Third-party providers — and what they see",
    "privacy.s3.body":
      "Your AI employees route through these providers under their enterprise zero-retention agreements: Anthropic (Claude) and OpenAI (GPT-4) for language understanding — they see only the conversation snippet needed to generate a reply and don't retain it for training. ElevenLabs for voice synthesis — sees only the text to be spoken. Twilio for phone and SMS — sees the message routing metadata. We use no other third parties to handle your data without your written consent.",
    "privacy.s4.title": "Ownership & training",
    "privacy.s4.body":
      "You own your data. AI Minds does not train shared AI models on your conversations, transcripts, customer records, or any content you provide. We don't sell your data, and we don't allow our providers to use it for their model training. We may use anonymized aggregate metrics (e.g. 'average resolution time across SMB clients') to improve our service — never anything identifiable.",
    "privacy.s5.title": "Export, deletion & your rights",
    "privacy.s5.body":
      "You can request a full data export anytime — we deliver it within 7 business days in standard formats (JSON, CSV). On cancellation, we export your data and delete what we hold within 30 days unless you ask us to retain it longer. You also have the right to correct, delete, or restrict processing of any personal data — email luis@ai-minds.ai and we'll act within 30 days. We honor CCPA, GDPR, and Texas data-rights requests.",
    "privacy.s6.title": "Risks we want you to know about",
    "privacy.s6.body":
      "No system is perfectly secure. The realistic risks: (1) a customer of yours might phish your AI employee — we mitigate this with guardrails and human-escalation rules, but you should still review escalations. (2) Third-party provider outages can interrupt service — we route around them where possible and notify you on incidents lasting more than 15 minutes. (3) If an AI employee makes a mistake on a high-stakes interaction (medical, legal, large refund), you're responsible for the outcome unless we negligently failed to follow your approved configuration. We carry $2M in cyber & E&O insurance for catastrophic events.",
    "privacy.contact.title": "Questions, requests, or a privacy concern?",
    "privacy.contact.body":
      "Email luis@ai-minds.ai with the subject 'Privacy' and we'll respond within 2 business days. For incident disclosure or formal data requests, we acknowledge in writing within 24 hours.",

    // Locale
    "locale.en": "EN",
    "locale.es": "ES",
    "locale.aria": "Switch language",
  },

  es: {
    "site.tagline": "Tu equipo, multiplicado",
    "site.ctaLabel": "Agenda una auditoría gratis",

    "nav.agents": "Agentes",
    "nav.howItWorks": "Cómo funciona",
    "nav.pricing": "Precios",
    "nav.about": "Nosotros",
    "nav.book": "Auditoría",

    "hero.pill": "Compañeros de IA para SMBs",
    "hero.h1.a": "Tu equipo,",
    "hero.h1.b": "multiplicado.",
    "hero.sub":
      "5 empleados de IA especializados hacen el trabajo repetitivo. Tu gente, libre para lo que importa.",
    "hero.cta.primary": "Agenda una auditoría gratis",
    "hero.cta.secondary": "Conoce al equipo",
    "hero.trust1": "Responde en segundos",
    "hero.trust2": "Trabaja 24/7",
    "hero.trust3": "Desde $499",
    "hero.builtOn": "Anthropic · OpenAI · ElevenLabs · Twilio",
    "hero.chatLabel": "Sophie, en vivo",
    "hero.chatLabelMobile": "Sophie, en vivo",

    "chat.online": "En línea · responde en segundos",
    "chat.live": "En vivo",
    "chat.input": "Pruébame en tu auditoría gratis",
    "chat.msg1": "Hola, ¿tienen disponibilidad el viernes a las 2pm?",
    "chat.msg2":
      "Sí — 2:00pm y 3:30pm están abiertos. ¿Confirmación por mensaje o correo?",
    "chat.msg3": "Mensaje. ¿Cuánto cuesta?",
    "chat.msg4":
      "$89 la primera consulta (45 min). Te reservé el viernes 2:00pm — mensaje en camino 📲",

    "human.pill": "Nuestra filosofía",
    "human.title.a": "No",
    "human.title.strike": "reemplazamos",
    "human.title.b": "a tu equipo.",
    "human.title.c": "Lo",
    "human.title.gradient": "multiplicamos",
    "human.title.d": ".",
    "human.desc": "La misma gente. 10× más producción.",
    "human.col1.title": "Tu equipo",
    "human.col1.body": "Se queda.",
    "human.col2.title": "5 compañeros de IA",
    "human.col2.body": "Hacen el trabajo repetitivo. 24/7.",
    "human.col3.title": "Superpoderes",
    "human.col3.body": "La misma gente, 10× más producción.",
    "human.pledge.label": "Promesa:",
    "human.pledge.1": "Los humanos aprueban lo importante",
    "human.pledge.2": "Tu equipo crece, no se reduce",
    "human.pledge.3": "Tus datos son tuyos",

    "agents.eyebrow": "El equipo",
    "agents.title.a": "5 especialistas.",
    "agents.title.b": "Un trabajo cada uno.",
    "agents.desc": "Empieza por los que más impacto tienen en tu negocio.",
    "agents.cta.full": "Ver equipo completo",
    "agents.aria.meet": "Conoce a {name}, tu empleado de IA de {role}",
    "agents.meetCta": "Conoce a {name}",
    "agents.whatYouGet": "Lo que obtienes",
    "agents.noMatchNote":
      "¿No ves tu caso? La mayoría de nuestro trabajo es a la medida.",

    "agent.ava.role": "Atención al cliente",
    "agent.ava.oneLiner":
      "Responde cada mensaje de cliente en 60 segundos — chat, DM, WhatsApp, Messenger.",
    "agent.ava.b1":
      "Responde al instante en Instagram DM, chat web, WhatsApp y Facebook Messenger",
    "agent.ava.b2":
      "Sabe tus horarios, precios, servicios, políticas de devolución y FAQs al detalle",
    "agent.ava.b3":
      "Escala solo cuando un cliente realmente necesita un humano (reembolsos, quejas, casos especiales)",
    "agent.ava.detail":
      "Son las 9pm del domingo. Alguien te manda DM en Instagram preguntando '¿están abiertos mañana?' Si no respondes en 5 minutos, el 80% reserva con otro. Ava lee cada canal — chat, DM, WhatsApp, Messenger — y responde en 60 segundos en la voz de tu marca. Atiende lo común (horarios, precios, servicios, políticas), maneja solicitudes de devolución hasta un límite que tú defines y solo te avisa cuando el cliente necesita un humano.",
    "agent.ava.o1":
      "200+ mensajes de clientes manejados al mes",
    "agent.ava.o2":
      "Menos de 60 segundos de respuesta promedio, 24/7",
    "agent.ava.o3":
      "~78% de las conversaciones resueltas sin molestarte",

    "agent.leo.role": "Ventas y seguimiento de leads",
    "agent.leo.oneLiner":
      "Responde a cada lead nuevo en menos de un minuto — y los sigue hasta que respondan o tú le digas que pare.",
    "agent.leo.b1":
      "Manda mensaje y correo a los leads en menos de 60 segundos de llenar el formulario",
    "agent.leo.b2":
      "Califica presupuesto, tiempo y fit, y agenda la reunión directo en tu calendario",
    "agent.leo.b3":
      "Reengancha leads fríos a 1, 3, 7 y 14 días con seguimientos en la voz de tu marca",
    "agent.leo.detail":
      "Un lead llena tu formulario a las 9:47pm del viernes. Lo ves el lunes en la mañana — ya reservó con tu competencia. Leo responde en menos de un minuto por mensaje y correo, lo califica con unas preguntas inteligentes (presupuesto, tiempo, fit), y agenda una reunión directo en tu Calendly, HubSpot o Google Calendar. Persigue a los que desaparecen por dos semanas para que ninguna oportunidad se pierda.",
    "agent.leo.o1":
      "Menos de 60 segundos de respuesta, de día o de noche",
    "agent.leo.o2":
      "3× más reuniones agendadas con el mismo tráfico",
    "agent.leo.o3":
      "Cero leads olvidados — cada consulta recibe mínimo 4 contactos",

    "agent.bella.role": "Recepción y agenda",
    "agent.bella.oneLiner":
      "Contesta cada llamada en voz natural — agenda, reprograma y recuerda — directo en tu calendario.",
    "agent.bella.b1":
      "Contesta el 100% de las llamadas — en inglés o español — en voz natural y cálida",
    "agent.bella.b2":
      "Agenda, reprograma y cancela en Google Calendar, Square, Acuity, Cal.com y Booksy",
    "agent.bella.b3":
      "Manda mensajes de confirmación y recordatorio de 24 horas para eliminar ausencias",
    "agent.bella.detail":
      "Es sábado y estás con un cliente. Bella contesta las 7 llamadas que ibas a perder en voz natural, las agenda directo en tu calendario, manda mensaje de confirmación y te pasa al celular lo urgente (un paciente en pánico, una tubería rota). Los clientes sienten que hablaron con una recepcionista real. Dejas de perder $200+ por cada llamada perdida.",
    "agent.bella.o1":
      "Cobertura del 100% de llamadas, 24/7 — inglés y español",
    "agent.bella.o2":
      "4+ reservas extra al día que se habrían ido con otro",
    "agent.bella.o3":
      "La mitad de las ausencias eliminadas con recordatorios automáticos",

    "agent.maya.role": "Marketing y contenido",
    "agent.maya.oneLiner":
      "Mantiene tu Instagram, TikTok y Google Business publicando en automático — en tu voz.",
    "agent.maya.b1":
      "Escribe y programa posts en Instagram, TikTok, Facebook y Google Business Profile",
    "agent.maya.b2":
      "Redacta tu newsletter semanal, promociones y campañas de re-engagement",
    "agent.maya.b3":
      "Convierte una foto de cliente en 5 posts nativos (Reels, carruseles, stories)",
    "agent.maya.detail":
      "Es jueves. Tu última publicación en Instagram fue hace 17 días. El algoritmo mató tu alcance y tu competencia publicó hoy. Maya estudia tu contenido pasado para encontrar tu voz, escribe captions que suenan a ti, programa en cada plataforma, redacta tu newsletter semanal y convierte una sola foto de cliente en toda una semana de contenido. Tú solo apruebas.",
    "agent.maya.o1":
      "28+ publicaciones al mes en 4 plataformas en tu voz de marca",
    "agent.maya.o2":
      "1 newsletter cada semana, redactado y listo para tu aprobación",
    "agent.maya.o3":
      "8+ horas semanales de marketing repetitivo, eliminadas",

    "agent.penny.role": "Flujo de caja y finanzas",
    "agent.penny.oneLiner":
      "Te dice exactamente cuándo se va a apretar el flujo — y por qué — antes de que pase.",
    "agent.penny.b1":
      "Conecta con QuickBooks, Xero y Stripe para vista en vivo de tus cuentas",
    "agent.penny.b2":
      "Arma un pronóstico de 4 semanas para que nómina y renta nunca te sorprendan",
    "agent.penny.b3":
      "Categoriza cada transacción y marca cargos inusuales o duplicados",
    "agent.penny.detail":
      "Es día 25. La renta vence en 5 días. Tienes $4,200 en cuenta y $12k por cobrar que tal vez lleguen a tiempo. Penny vigila tus cuentas diariamente, arma un pronóstico de 4 semanas, te manda mensaje 7 días antes de un saldo bajo y explica por qué — para que la nómina nunca te sorprenda.",
    "agent.penny.o1":
      "Cero saldos bajos sorpresivos — aviso por SMS 7 días antes",
    "agent.penny.o2":
      "100% de las transacciones categorizadas automáticamente",
    "agent.penny.o3":
      "Resumen semanal 'estado del negocio' directo a tu celular",

    "agent.vera.role": "Facturación y cobranza",
    "agent.vera.oneLiner":
      "Manda cada factura a tiempo — y persigue con cortesía las que no pagan.",
    "agent.vera.b1":
      "Genera facturas automáticamente apenas se cierra un trabajo o cita",
    "agent.vera.b2":
      "Escala recordatorios a los 7, 14 y 30 días de vencidos, luego ofrece planes de pago",
    "agent.vera.b3":
      "Cobra por ACH o tarjeta apenas el cliente acepta y concilia en QuickBooks",
    "agent.vera.detail":
      "Tienes $18,400 en facturas vencidas. Odias hacer la llamada de '¿oye, te llegó mi factura?' — y cada semana que pasa, menos probable que te paguen. Vera genera la factura en cuanto termina el trabajo, manda recordatorios que escalan con el tiempo, ofrece planes a plazos y cobra por ACH apenas el cliente acepta.",
    "agent.vera.o1":
      "35% más rápido en cobrar en promedio — en 14 días en vez de 30+",
    "agent.vera.o2":
      "$10K+/año recuperados de facturas 'olvidadas'",
    "agent.vera.o3":
      "Cero llamadas incómodas de cobranza",

    "agent.ruby.role": "Reseñas y reputación",
    "agent.ruby.oneLiner":
      "Pide reseña de 5 estrellas a cada cliente feliz — y atrapa en privado a los molestos antes de que publiquen.",
    "agent.ruby.b1":
      "Manda mensaje personalizado a cada cliente 2 horas después del servicio",
    "agent.ruby.b2":
      "Felices → Google o Yelp; molestos → directo a tu bandeja primero",
    "agent.ruby.b3":
      "Redacta respuestas en la voz de tu marca a cada reseña — positiva o negativa",
    "agent.ruby.detail":
      "Tus últimos 5 clientes quedaron encantados — y ni uno dejó reseña. Mientras, un señor amargado que casi no compró nada dejó 1 estrella. Ruby manda mensaje a cada cliente 2 horas después de su visita. Los felices reciben un link de 1-toque a Google o Yelp. Los molestos van a un formulario privado que llega a tu correo — antes de que publiquen.",
    "agent.ruby.o1":
      "6× más reseñas públicas al mes",
    "agent.ruby.o2":
      "Calificación promedio +0.4 estrellas en 90 días",
    "agent.ruby.o3":
      "La mayoría de clientes molestos atrapados y resueltos en privado primero",

    "agent.max.role": "Papeleo y documentos",
    "agent.max.oneLiner":
      "Lee facturas de proveedores, recibos y formularios — archiva todo en segundos.",
    "agent.max.b1":
      "Lee facturas de proveedores por correo y las captura en QuickBooks o Xero con partidas",
    "agent.max.b2":
      "Extrae datos de formularios de seguros, contratos, órdenes de compra y W-9",
    "agent.max.b3":
      "Arma reportes de gastos a partir de fotos de recibos y los etiqueta por categoría",
    "agent.max.detail":
      "Un proveedor te manda una factura en PDF. Tardas 4 minutos en capturarla en QuickBooks. Lo haces 80 veces al mes — es un día de trabajo, perdido. Max lee cada documento que llega a tu correo o galería, saca montos, fechas, proveedores y números de PO, los carga a tu sistema contable y marca cualquier cosa que se vea rara (duplicados, totales mal, campos faltantes).",
    "agent.max.o1":
      "80+ documentos procesados al mes",
    "agent.max.o2":
      "5+ horas semanales ahorradas en captura",
    "agent.max.o3":
      "Errores atrapados y marcados antes de llegar a tus libros",

    "case.eyebrow": "Resultados reales",
    "case.title.a": "Un empleado de IA.",
    "case.title.b": "~10 horas recuperadas cada semana.",
    "case.desc":
      "Casa Doper logró cobertura bilingüe 24/7. Sin contratar a nadie. Y su equipo por fin dedica su tiempo a lo que cuenta.",
    "case.brand": "Casa Doper",
    "case.location": "Hotel boutique · San Miguel de Allende, MX",
    "case.quote":
      "\"Estábamos perdiendo clientes porque no contestábamos a tiempo. Elena responde al instante — en español o inglés — y ahora ganamos las reservas que antes se nos iban.\"",
    "case.poweredBy": "Impulsado por Elena",
    "case.poweredByRole": "Empleada de IA de Recepción",
    "case.rating": "4.9 / 5",
    "case.live": "En vivo · 90+ días",
    "case.stat1.value": "~700",
    "case.stat1.label": "Mensajes atendidos",
    "case.stat1.sub": "en 90 días",
    "case.stat2.value": "~10 hrs",
    "case.stat2.label": "Ahorradas",
    "case.stat2.sub": "por semana",
    "case.stat3.value": "12+",
    "case.stat3.label": "Reservas recuperadas",
    "case.stat3.sub": "90 días",
    "case.stat4.value": "4.9 ★",
    "case.stat4.label": "Calificación",
    "case.stat4.sub": "estancias por IA",
    "case.founder.quote":
      "\"Construido en 7 días. El equipo conservó su empleo — y recuperó su tiempo para el trabajo que hace crecer el negocio.\"",
    "case.founder.name": "Luis Dorantes",
    "case.founder.title": "Fundador · Dallas, TX",
    "case.founder.cred1": "Stevie Bronce 2025",
    "case.founder.cred2": "Ex-IBM · 20K+ comunidad dev",

    "pricing.eyebrow": "Precios",
    "pricing.title.a": "Un solo precio.",
    "pricing.title.b": "Resultados en 30 días.",
    "pricing.desc": "Elige tu primer empleado de IA. Lo construimos, lo entrenamos, sale en vivo en días.",
    "pricing.popular": "Más popular",
    "pricing.fullDesc":
      "Empieza con 1 empleado de IA. Ve resultados en 30 días. Luego elige tu equipo — o cancela.",
    "pricing.fine":
      "Todos los precios en dólares estadounidenses (USD). LLM + telefonía facturado al costo. Cancela cuando quieras.",
    "pricing.guarantee.badge": "Garantía de 30 días",
    "pricing.guarantee.title": "¿No te convence en 30 días? Reembolso total.",
    "pricing.guarantee.body":
      "Prueba tu primer empleado de IA por 30 días. Si no te ahorra tiempo y dinero — o simplemente no te encanta — te devolvemos cada dólar. Sin preguntas, sin trámites, sin llamadas incómodas.",
    "pricing.fineBookCta": "Agenda una auditoría gratis →",
    "pricing.cta": "Ver plan completo",
    "pricing.setupPrefix": "+ ",
    "pricing.headerTitle.a": "Un solo precio.",
    "pricing.headerTitle.b": "30 días para decidir.",
    "pricing.headerDesc":
      "Empieza con 1 empleado de IA. Ve resultados en 30 días. Luego elige tu equipo — o cancela.",

    // Pilot offer
    "pricing.pilot.badge": "Piloto de 30 Días",
    "pricing.pilot.name": "Empieza con 1 empleado de IA",
    "pricing.pilot.headline": "Ve resultados antes de comprometerte.",
    "pricing.pilot.price": "$499",
    "pricing.pilot.note": "pago único para empezar",
    "pricing.pilot.f1": "1 empleado de IA, construido y entrenado con tu negocio",
    "pricing.pilot.f2": "En vivo en 3–5 días hábiles",
    "pricing.pilot.f3": "Español e inglés, 24/7",
    "pricing.pilot.f4": "Tú apruebas antes de que salga en vivo",
    "pricing.pilot.f5": "Garantía de reembolso de 30 días",
    "pricing.pilot.after": "Después de 30 días — $199/mes o cancela. Tú decides.",
    "pricing.pilot.cta": "Agenda una auditoría gratis",
    "pricing.pilot.auditNote": "La auditoría es gratis. Te mostramos qué empleado de IA te ahorra más — sin compromiso.",
    "pricing.pilot.expand": "¿Ya sabes que quieres más?",
    "pricing.pilot.expandCta": "Ver planes completos →",
    "pricing.expand.title": "Después del piloto — elige tu plan continuo",
    "pricing.expand.note": "El costo del piloto ($499) aplica como crédito hacia cualquier plan continuo.",
    "pricing.solo.name": "Solo",
    "pricing.solo.headline": "Empieza por tu mayor pérdida de tiempo.",
    "pricing.solo.blurb": "1 empleado de IA. Cuesta menos que tu teléfono.",
    "pricing.solo.setup": "$499 configuración",
    "pricing.solo.monthly": "$199",
    "pricing.solo.note": "USD /mes · 1 agente",
    "pricing.solo.f1": "1 empleado de IA a tu elección",
    "pricing.solo.f2": "1 canal (chat, voz o redes)",
    "pricing.solo.f3": "Entrenado con tu negocio",
    "pricing.solo.f4": "1 integración",
    "pricing.solo.f5": "Reporte mensual",
    "pricing.solo.f6": "Soporte por correo",
    "pricing.squad.name": "Squad",
    "pricing.squad.headline": "Elige 3.",
    "pricing.squad.blurb":
      "Cubre tus puntos de dolor. Ahorra 17%.",
    "pricing.squad.setup": "$999 configuración",
    "pricing.squad.monthly": "$499",
    "pricing.squad.note": "USD /mes · 3 agentes",
    "pricing.squad.f1": "Los 3 empleados de IA que elijas",
    "pricing.squad.f2": "Multi-canal (voz, chat, SMS)",
    "pricing.squad.f3": "Integración CRM + calendario",
    "pricing.squad.f4": "Llamada mensual de estrategia",
    "pricing.squad.f5": "Optimización quincenal",
    "pricing.squad.f6": "Soporte prioritario",
    "pricing.full.name": "Equipo Completo",
    "pricing.full.headline": "Los 5, trabajando juntos.",
    "pricing.full.blurb": "20% más barato por agente que Solo.",
    "pricing.full.setup": "$1,499 configuración",
    "pricing.full.monthly": "$799",
    "pricing.full.note": "USD /mes · los 5 · $160 c/u",
    "pricing.full.f1": "Los 5 empleados de IA",
    "pricing.full.f2": "Canales e integraciones ilimitados",
    "pricing.full.f3": "Workflows personalizados",
    "pricing.full.f4": "Gerente de cuenta dedicado",
    "pricing.full.f5": "Optimización semanal",
    "pricing.full.f6": "SLA 99.9%",

    "cost.eyebrow": "Las cuentas",
    "cost.title.a": "El costo de una contratación.",
    "cost.title.b": "Un equipo de IA entero.",
    "cost.desc": "La IA nunca se enferma.",
    "cost.human.label": "Contratar otro humano",
    "cost.human.sub": "Para el trabajo aburrido",
    "cost.human.price": "$5,400+",
    "cost.human.period": "/ mes",
    "cost.ai.label": "Contratar AI Minds",
    "cost.ai.sub": "Libera a tus humanos",
    "cost.ai.price": "desde $399",
    "cost.ai.period": "/ mes",
    "cost.row1.label": "Costo mensual",
    "cost.row1.human": "$4,200",
    "cost.row1.ai": "$399",
    "cost.row2.label": "Prestaciones",
    "cost.row2.human": "+$1,200",
    "cost.row2.ai": "$0",
    "cost.row3.label": "Horas disponibles",
    "cost.row3.human": "40 / semana",
    "cost.row3.ai": "24 / 7 / 365",
    "cost.row4.label": "Enfermedad, rotación",
    "cost.row4.human": "Seguido",
    "cost.row4.ai": "Nunca",
    "cost.row5.label": "Tiempo para empezar",
    "cost.row5.human": "2–6 semanas",
    "cost.row5.ai": "Días",
    "cost.row6.label": "Idiomas",
    "cost.row6.human": "1",
    "cost.row6.ai": "30+",
    "cost.note": "Humanos para lo importante. IA para lo demás.",

    "industries.eyebrow": "Para tu negocio",
    "industries.title.a": "Diseñado para",
    "industries.title.b": "negocios como el tuyo.",
    "industries.desc": "Elige el equipo que más te acomoda.",
    "industries.notListed.text": "¿No ves tu industria?",
    "industries.notListed.cta": "Probablemente igual encajamos",
    "industries.dental.name": "Dental y médico",
    "industries.dental.blurb":
      "Elena agenda pacientes · Stella pide reseñas · Leo da seguimiento a leads.",
    "industries.medspa.name": "Med spas y salones",
    "industries.medspa.blurb":
      "Sophie responde DMs · Chloe publica diario · Elena llena tu silla.",
    "industries.law.name": "Despachos legales",
    "industries.law.blurb":
      "Leo califica leads · Sophie atiende consultas · Elena agenda citas.",
    "industries.hvac.name": "HVAC y oficios",
    "industries.hvac.blurb":
      "Elena contesta fuera de horario · Leo agenda · Stella consigue 5★.",
    "industries.barber.name": "Barberías y boutiques",
    "industries.barber.blurb":
      "Elena llena tu agenda · Chloe publica cada noche · Sophie chatea.",
    "industries.realestate.name": "Bienes raíces y hospitalidad",
    "industries.realestate.blurb":
      "Sophie atiende huéspedes 24/7 · Leo sigue leads · Elena agenda visitas.",

    "how.eyebrow": "Cómo funciona",
    "how.title": "De auditoría a equipo en vivo, en días.",
    "how.desc": "Tú apruebas. Nosotros construimos.",
    "how.headerTitle": "De auditoría a equipo en vivo, en días.",
    "how.headerDesc":
      "Tú decides. Nosotros construimos. Tienes un equipo de IA funcionando en menos de 2 semanas.",
    "how.getsLabel": "Lo que recibes",
    "how.s1.label": "Paso 01",
    "how.s1.title": "Auditoría gratis",
    "how.s1.dur": "Día 1 · 30 minutos · Sin costo",
    "how.s1.body":
      "Nos sentamos contigo, mapeamos tus flujos diarios y encontramos dónde la IA te ahorra más tiempo y dinero.",
    "how.s1.gets.1":
      "Reporte de ROI de 1 página — qué empleados de IA se pagan más rápido en tu negocio",
    "how.s1.gets.2":
      "Horas y dólares que ahorrarás cada mes, con números concretos",
    "how.s1.gets.3":
      "Próximos pasos claros — aunque no nos contrates",
    "how.s2.label": "Paso 02",
    "how.s2.title": "Construimos y entrenamos a tu equipo",
    "how.s2.dur": "Días 2–5",
    "how.s2.body":
      "Construimos cada empleado de IA con tu negocio — tu voz, horarios, políticas, precios y herramientas actuales.",
    "how.s2.gets.1":
      "Cada empleado de IA conectado a tu teléfono, chat, calendario y CRM",
    "how.s2.gets.2":
      "Demo en vivo de cada agente en ambiente de prueba para verlo en acción",
    "how.s2.gets.3":
      "Puerta de aprobación — nada sale en vivo hasta tu OK",
    "how.s3.label": "Paso 03",
    "how.s3.title": "Sale en vivo",
    "how.s3.dur": "Día 5–10",
    "how.s3.body":
      "Conectamos cada canal y prendemos el switch. Tu equipo de IA empieza a trabajar — 24/7, desde el primer día.",
    "how.s3.gets.1":
      "Teléfono, chat web, WhatsApp, Instagram DM y correo contestados automáticamente",
    "how.s3.gets.2":
      "Dashboard en tiempo real con cada conversación, reserva y traspaso",
    "how.s3.gets.3":
      "Primera semana de monitoreo cercano — vemos cada interacción y ajustamos al vuelo",
    "how.s4.label": "Paso 04",
    "how.s4.title": "Gestionamos y mejoramos mes a mes",
    "how.s4.dur": "Cada mes, en curso",
    "how.s4.body":
      "Revisamos transcripciones, re-entrenamos con conversaciones reales y reportamos qué está funcionando.",
    "how.s4.gets.1":
      "Reporte mensual — llamadas atendidas, horas ahorradas, dólares recuperados",
    "how.s4.gets.2":
      "Llamada de estrategia para planear el siguiente mes y agregar capacidades",
    "how.s4.gets.3":
      "Un equipo de IA que se vuelve más inteligente y valioso cada mes",
    "how.principles.eyebrow": "Lo que hace que funcione",
    "how.principles.title": "Sin esfuerzo para ti.",
    "how.principles.desc": "La carga nunca cae en ti.",
    "how.p1.title": "Días, no meses",
    "how.p1.body": "Tu primer empleado en vivo en una semana.",
    "how.p2.title": "Tú apruebas todo",
    "how.p2.body":
      "Nada sale en vivo sin tu OK. Tú mantienes el control.",
    "how.p3.title": "Cada vez mejor",
    "how.p3.body":
      "Ajustes mensuales. Mejora mientras duermes.",

    "problem.eyebrow": "El problema",
    "problem.title": "Tu equipo se ahoga en trabajo repetitivo.",
    "problem.desc": "No hay suficientes horas. Ni manos.",
    "problem.p1.title": "Llamadas perdidas",
    "problem.p1.body":
      "Cada una es un cliente llamando a tu competencia.",
    "problem.p2.title": "Respuestas lentas",
    "problem.p2.body":
      "Los leads se enfrían en minutos. Quien responda primero gana.",
    "problem.p3.title": "Facturas sin pagar",
    "problem.p3.body":
      "Dinero que ganaste, sin cobrar.",
    "problem.p4.title": "Montaña de papeleo",
    "problem.p4.body":
      "Facturas, formularios, recibos se comen tu semana.",
    "problem.p5.title": "Sin tiempo para marketing",
    "problem.p5.body":
      "Posts, correos, reseñas — siempre al final.",

    "why.eyebrow": "Por qué AI Minds",
    "why.title": "La diferencia es la gestión.",
    "why.desc": "Nos hacemos cargo del resultado.",
    "why.r1.title": "Hecho-para-ti",
    "why.r1.body":
      "Construimos, alojamos, monitoreamos, mejoramos. Nunca tocas un dashboard.",
    "why.r2.title": "Enfocados en resultados",
    "why.r2.body":
      "Medimos horas y dólares ahorrados. Si no mueve números, lo cambiamos.",
    "why.r3.title": "Construido por un operador",
    "why.r3.body":
      "5 años en IBM — cerró $9.95M en nuevo pipeline SaaS empresarial, luego construyó la comunidad de 20,850 developers de IBM.",
    "why.r4.title": "Los resultados son tuyos",
    "why.r4.body":
      "Tus datos, tus clientes, tu marca. Todo es tuyo.",
    "why.founder.quote.a":
      "Vi a las Fortune 500 correr con IA mientras los negocios independientes se ahogaban. AI Minds cierra esa brecha. No reemplazando.",
    "why.founder.quote.b": "Multiplicando.",
    "why.founder.name": "Luis Dorantes",
    "why.founder.title": "Fundador · Dallas, TX",
    "why.founder.cred1": "Stevie Bronce 2025",
    "why.founder.cred2": "Ex-IBM · 20K+ comunidad dev",
    "why.founder.cred3": "5 años en IBM · $9.95M pipeline",
    "why.founder.cred4": "EN · ES · FR",

    "trust.label":
      "Construido sobre la IA que usan las Fortune 500",
    "trust.pledge1": "Tus datos son tuyos",
    "trust.pledge2": "Un humano aprueba lo importante",
    "trust.pledge3": "En vivo en días",

    "faq.eyebrow": "Preguntas",
    "faq.title": "Preguntas frecuentes.",
    "faq.desc": "Preguntas reales. Respuestas honestas.",
    "faq.q1": "¿Mis clientes sabrán que es IA?",
    "faq.a1":
      "Lo declaramos como tú quieras — usualmente como 'asistentes virtuales'. Si tu industria lo requiere, etiquetamos como IA por defecto.",
    "faq.q2": "¿Y si la IA se equivoca?",
    "faq.a2":
      "Cada empleado tiene límites. Lo riesgoso (reembolsos, legal, reservas grandes) escala a un humano. Tú apruebas antes de que salga.",
    "faq.q3": "¿Funciona con QuickBooks, HubSpot, Calendly?",
    "faq.a3":
      "Sí. Conectamos con lo que ya usas. Integraciones a medida incluidas en Pro.",
    "faq.q4": "¿Están reemplazando a mis empleados?",
    "faq.a4":
      "No. El punto es liberarlos del trabajo repetitivo. Cada cliente ha hecho crecer su equipo humano.",
    "faq.q5": "¿Qué tan rápido sale en vivo?",
    "faq.a5":
      "5–10 días hábiles. Solo (1 agente) sale en una semana.",
    "faq.q6": "¿Cómo manejan mis datos y qué hay del riesgo de seguridad?",
    "faq.a6":
      "Tus datos viven en tu cuenta, encriptados en reposo y en tránsito. No los vendemos, no los compartimos, ni entrenamos modelos de IA compartidos con ellos. Conversaciones, registros de clientes e integraciones se alojan en infraestructura de EE.UU. con controles alineados a SOC 2; configuraciones compatibles con HIPAA disponibles en el plan Equipo Completo. Los proveedores externos (Anthropic, OpenAI, ElevenLabs, Twilio) solo ven lo necesario para hacer su trabajo, bajo sus propios acuerdos empresariales sin retención. Puedes exportar todo cuando quieras y lo borramos a petición. Ver detalle completo en nuestra página de Privacidad y Seguridad.",
    "faq.q7": "¿Puedo probarlo antes?",
    "faq.a7":
      "Sí — la auditoría gratis incluye demo en vivo con números reales. Sin compromiso.",
    "faq.q8": "¿Puedo cancelar?",
    "faq.a8":
      "Cualquier mes. Sin contrato. Tus datos y configs se exportan al salir.",

    "cta.title": "Auditoría gratis de 30 min.",
    "cta.sub":
      "Te mostramos dónde la IA ahorra tiempo y dinero. Sin pitch.",
    "cta.button": "Agenda una auditoría gratis",
    "cta.emailBtn": "Escríbenos",

    "footer.tagline": "Tu equipo, multiplicado.",
    "footer.about": "Nosotros",
    "footer.contact": "Contacto",
    "footer.product": "Producto",
    "footer.company": "Empresa",
    "footer.getStarted": "Empezar",
    "footer.terms": "Términos",
    "footer.privacy": "Privacidad y Seguridad",
    "footer.copyright":
      "© {year} AI Minds. Todos los derechos reservados.",

    "about.eyebrow": "Nosotros",
    "about.title.a": "Un equipo de IA para",
    "about.title.b": "negocios como el tuyo.",
    "about.desc":
      "IA de nivel empresarial en manos de los negocios que más la necesitan.",
    "about.founder.name": "Luis Dorantes",
    "about.founder.title": "Fundador · AI Minds",
    "about.founder.location": "Dallas, TX",
    "about.founder.b1": "Ex ventas empresariales IBM",
    "about.founder.b2": "Ex Comunidad IBM TechXchange",
    "about.founder.b3": "Stevie Bronce 2025",
    "about.founder.b4": "EN · ES · FR",
    "about.story1.lead": "Fundada por",
    "about.story1.body":
      ", Dallas, TX. 5 años en IBM — cerró $9.95M en nuevo pipeline SaaS empresarial, luego gestionó la comunidad de 20,850 developers.",
    "about.story2":
      "Las Fortune 500 corren con IA. El dentista, el med spa, el restaurante familiar — se ahogan en trabajo repetitivo.",
    "about.story3":
      "AI Minds cierra esa brecha. Construimos, alojamos y mejoramos a los empleados de IA. Tú obtienes el resultado. Y cada cliente ha hecho crecer su equipo humano.",
    "about.mission":
      "\"Un equipo de IA que trabaja junto a tus humanos — multiplicando lo que hacen.\"",
    "about.missionAttr": "— La misión",
    "about.cred.c1.title": "5 años en IBM",
    "about.cred.c1.body":
      "AE mid-market en el portafolio IBM Sustainability (Envizi, TRIRIGA, Supply Chain). $9.95M en pipeline nuevo. $24.7M en valor de oportunidad empresarial influenciado. 127% de cuota perpetua.",
    "about.cred.c2.title": "Construyó comunidad de 20K+ devs",
    "about.cred.c2.body":
      "Community Manager de Data y AI de IBM TechXchange (2024–2025). 20,850+ miembros. Equipo de la Conferencia TechXchange 2 años. Program Manager, IBM Data Champions.",
    "about.cred.c3.title": "Stevie Bronce 2025",
    "about.cred.c3.body":
      "Reconocimiento por excelencia en engagement de comunidad developer.",
    "about.cred.c4.title": "Trilingüe",
    "about.cred.c4.body":
      "Inglés y español nativos. Francés conversacional.",
    "about.cta.title": "Multipliquemos tu equipo.",
    "about.cta.sub":
      "Auditoría gratis de 30 min con el fundador. Sin pitch.",

    "agentsPage.eyebrow": "El equipo",
    "agentsPage.title.a": "Tu",
    "agentsPage.title.b": "equipo de IA",
    "agentsPage.title.c": ", por nombre.",
    "agentsPage.desc":
      "Empieza por los que más impacto tienen en tu negocio.",
    "agentsPage.cta.title": "¿No sabes a quién contratar primero?",
    "agentsPage.cta.sub":
      "Para eso es la auditoría. Encontramos al que se paga solo más rápido.",

    "contact.eyebrow": "Contacto",
    "contact.title.a": "Hablemos de",
    "contact.title.b": "tu negocio.",
    "contact.desc":
      "Auditoría gratis de 30 min. O escríbenos primero.",
    "contact.book.title": "Agenda una auditoría",
    "contact.book.body":
      "30 minutos. Sin pitch. Plan claro, trabajes con nosotros o no.",
    "contact.email.title": "Escríbenos",
    "contact.fast.title": "Respuesta rápida",
    "contact.fast.body": "Respondemos en un día hábil.",
    "contactForm.name": "Nombre",
    "contactForm.namePh": "Juana Pérez",
    "contactForm.business": "Negocio",
    "contactForm.businessPh": "Pérez y Cía.",
    "contactForm.email": "Correo",
    "contactForm.emailPh": "juana@negocio.com",
    "contactForm.message": "¿Qué te gustaría automatizar?",
    "contactForm.messagePh":
      "Cuéntanos dónde pierdes más tiempo…",
    "contactForm.send": "Enviar",
    "contactForm.sending": "Enviando…",
    "contactForm.fast": "Respondemos en un día hábil.",
    "contactForm.success.title": "Enviado",
    "contactForm.success.default": "¡Gracias! Nos pondremos en contacto.",
    "contactForm.success.again": "Enviar otro",
    "contactForm.error.default":
      "Algo salió mal. Intenta de nuevo.",
    "contactForm.error.network":
      "Error de red. Escríbenos directo.",

    "404.title": "Fuera de guión.",
    "404.desc":
      "Página no encontrada — pero tu equipo de IA sigue listo.",
    "404.home": "Inicio",
    "404.team": "Conoce al equipo",

    "terms.eyebrow": "Legal",
    "terms.title": "Términos y Condiciones",
    "terms.desc":
      "El acuerdo entre tú y AI Minds cuando usas nuestros servicios. En lenguaje claro. Sin sorpresas.",
    "terms.updated": "Última actualización: 28 de mayo, 2026",
    "terms.s1.title": "Qué hacemos",
    "terms.s1.body":
      "AI Minds construye, aloja y gestiona empleados de IA que operan en tu nombre — respondiendo a clientes, calificando leads, agendando citas, cobrando facturas y tareas similares. Somos un servicio gestionado, no software de autoservicio. Cada relación comienza con una auditoría gratis de 30 minutos y un Acuerdo de Servicio firmado que define alcance, canales e integraciones.",
    "terms.s2.title": "Pagos y facturación",
    "terms.s2.body":
      "Todos los planes se facturan mensualmente por adelantado, en USD. Las cuotas de configuración son únicas y se cobran antes de empezar a construir. El uso de LLM y telefonía (Anthropic, OpenAI, ElevenLabs, Twilio) se factura al costo del proveedor en la misma factura. Sin contrato a largo plazo. Cancela cuando quieras — la facturación se detiene al cierre del periodo mensual en curso. No emitimos reembolsos por meses parciales.",
    "terms.s3.title": "Uso aceptable",
    "terms.s3.body":
      "Aceptas no usar AI Minds para mandar spam, acosar a nadie, suplantar identidades reales, operar actividades ilegales o generar contenido que viole las reglas de plataformas externas (Meta, Google, TikTok, Apple, etc.). Eres responsable de que tus empleados de IA cumplan con las leyes de cada jurisdicción donde opera tu negocio — incluyendo reglas de declaración de IA donde se requieran.",
    "terms.s4.title": "Propiedad",
    "terms.s4.body":
      "Tú eres dueño de tus datos, tus registros de clientes, tu voz de marca, tus transcripciones y todo lo que tus empleados de IA producen en tu nombre. AI Minds es dueño de la plataforma subyacente, configuraciones, prompts y herramientas que construimos para entregar el servicio. Si cancelas, exportamos tus datos y configuraciones, y eliminamos lo que tengamos dentro de 30 días.",
    "terms.s5.title": "Disponibilidad y soporte",
    "terms.s5.body":
      "Apuntamos a 99.5% de uptime en planes Solo y Squad; 99.9% en Equipo Completo (con SLA por escrito). Soporte por correo en Solo. Correo prioritario + Slack en Squad. Gerente de cuenta dedicado + canal de Slack en Equipo Completo. No nos hacemos responsables de tiempo de inactividad causado por proveedores externos (operadores telefónicos, APIs de LLM, caídas de plataformas).",
    "terms.s6.title": "Limitación de responsabilidad",
    "terms.s6.body":
      "Nuestra responsabilidad total por cualquier reclamo derivado de tu uso de AI Minds está limitada al monto que nos pagaste en los 3 meses anteriores al reclamo. No somos responsables de daños indirectos, incidentales o consecuentes — incluyendo pérdida de ganancias, pérdida de datos o interrupción del negocio. Aceptas indemnizar a AI Minds contra reclamos derivados de tu mal uso del servicio o de las interacciones de tus empleados de IA con tus clientes.",
    "terms.s7.title": "Cambios y terminación",
    "terms.s7.body":
      "Podemos actualizar estos términos con 30 días de aviso por correo. El uso continuado después de la fecha efectiva significa que aceptas los nuevos términos. Nos reservamos el derecho de suspender o terminar cuentas que violen el uso aceptable, no paguen o representen un riesgo para la plataforma o para otros clientes. Puedes terminar en cualquier momento — ver Sección 2.",
    "terms.s8.title": "Ley aplicable",
    "terms.s8.body":
      "Estos términos se rigen por las leyes del Estado de Texas, EE.UU. Cualquier disputa se resolverá en las cortes estatales o federales ubicadas en el Condado de Dallas, Texas. Si alguna disposición es inválida, las demás permanecen vigentes.",
    "terms.contact":
      "¿Preguntas sobre estos términos? Escríbenos a luis@ai-minds.ai — respondemos en lenguaje claro.",

    "privacy.eyebrow": "Privacidad y Seguridad",
    "privacy.title": "Cómo manejamos tus datos.",
    "privacy.desc":
      "Lenguaje claro. Qué recolectamos, dónde vive, quién puede verlo y cómo lo protegemos.",
    "privacy.updated": "Última actualización: 28 de mayo, 2026",
    "privacy.s1.title": "Qué datos recolectamos",
    "privacy.s1.body":
      "Solo lo necesario para hacer el trabajo: tu información de negocio (horarios, precios, servicios), contenido para clientes (FAQs, voz de marca), credenciales de herramientas (API keys de las integraciones que elijas) y logs de conversación de los empleados de IA que contrates. No recolectamos datos personales de tus clientes más allá de lo que fluye por tus canales (teléfono, chat, SMS, DMs de redes) y no rastreamos ni hacemos perfiles de usuarios finales.",
    "privacy.s2.title": "Dónde vive y cómo se protege",
    "privacy.s2.body":
      "Todos los datos de clientes están encriptados en tránsito (TLS 1.2+) y en reposo (AES-256), alojados en infraestructura de EE.UU. Credenciales y API keys se guardan en un administrador de secretos dedicado — nunca en código fuente, logs o respaldos. Seguimos controles alineados a SOC 2 (revisiones de acceso, MFA, mínimo privilegio, auditoría). Configuraciones compatibles con HIPAA (BAA firmado, ambientes aislados, controles adicionales) están disponibles en el plan Equipo Completo para clientes de salud y dental.",
    "privacy.s3.title": "Proveedores externos — y qué ven",
    "privacy.s3.body":
      "Tus empleados de IA se conectan con estos proveedores bajo sus acuerdos empresariales de cero retención: Anthropic (Claude) y OpenAI (GPT-4) para comprensión de lenguaje — solo ven el fragmento de conversación necesario para generar una respuesta y no lo retienen para entrenamiento. ElevenLabs para síntesis de voz — solo ve el texto a hablar. Twilio para teléfono y SMS — solo ve los metadatos de enrutamiento. No usamos ningún otro tercero para manejar tus datos sin tu consentimiento por escrito.",
    "privacy.s4.title": "Propiedad y entrenamiento",
    "privacy.s4.body":
      "Tú eres dueño de tus datos. AI Minds no entrena modelos de IA compartidos con tus conversaciones, transcripciones, registros de clientes o cualquier contenido que nos proporciones. No vendemos tus datos y no permitimos que nuestros proveedores los usen para entrenar sus modelos. Podemos usar métricas anónimas agregadas (ej. 'tiempo promedio de resolución entre clientes SMB') para mejorar nuestro servicio — nunca nada identificable.",
    "privacy.s5.title": "Exportación, borrado y tus derechos",
    "privacy.s5.body":
      "Puedes pedir exportación completa de datos cuando quieras — la entregamos en 7 días hábiles en formatos estándar (JSON, CSV). Al cancelar, exportamos tus datos y eliminamos lo que tengamos dentro de 30 días, a menos que pidas retenerlo más tiempo. También tienes el derecho de corregir, borrar o restringir el procesamiento de cualquier dato personal — escríbenos a luis@ai-minds.ai y actuamos dentro de 30 días. Cumplimos con solicitudes bajo CCPA, GDPR y derechos de datos de Texas.",
    "privacy.s6.title": "Riesgos que queremos que conozcas",
    "privacy.s6.body":
      "Ningún sistema es perfectamente seguro. Los riesgos reales: (1) un cliente tuyo podría intentar engañar a tu empleado de IA con phishing — lo mitigamos con barreras y reglas de escalamiento a humanos, pero aun así revisa los escalamientos. (2) Caídas de proveedores externos pueden interrumpir el servicio — buscamos alternativas cuando es posible y te notificamos en incidentes que duren más de 15 minutos. (3) Si un empleado de IA comete un error en una interacción de alto riesgo (médica, legal, reembolso grande), tú eres responsable del resultado a menos que hayamos fallado por negligencia en seguir tu configuración aprobada. Contamos con $2M en seguro cibernético y E&O para eventos catastróficos.",
    "privacy.contact.title": "¿Preguntas, solicitudes o preocupación de privacidad?",
    "privacy.contact.body":
      "Escríbenos a luis@ai-minds.ai con el asunto 'Privacidad' y respondemos en 2 días hábiles. Para divulgación de incidentes o solicitudes formales de datos, confirmamos por escrito en 24 horas.",

    "locale.en": "EN",
    "locale.es": "ES",
    "locale.aria": "Cambiar idioma",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type DictKey = keyof (typeof dictionary)["en"];

/** Interpolate {var} placeholders in a translation string. */
export function interpolate(
  template: string,
  vars?: Record<string, string | number>
): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) =>
    String(vars[k] ?? `{${k}}`)
  );
}
