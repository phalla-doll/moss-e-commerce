import Image from 'next/image';
import { ChevronDown, Filter, ArrowUpRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-satoshi text-moss-text bg-moss-bg">
      {/* Top Banner */}
      <div className="bg-[#4A3022] text-white text-[10px] tracking-[0.2em] uppercase text-center py-2 font-medium">
        *Fast & free shipping on orders over $50!*
      </div>

      {/* Header */}
      <header className="px-8 py-5 flex items-center justify-between border-b border-moss-border">
        <div className="text-3xl font-clash font-semibold tracking-wide">MOSS</div>
        <nav className="hidden lg:flex items-center space-x-10 text-[13px] font-medium tracking-widest uppercase">
          <a href="#" className="hover:opacity-70">Discover</a>
          <a href="#" className="hover:opacity-70">Apparel</a>
          <a href="#" className="hover:opacity-70">Bags</a>
          <a href="#" className="hover:opacity-70">Shoes</a>
          <a href="#" className="hover:opacity-70">Holiday Picks</a>
          <a href="#" className="hover:opacity-70">Others</a>
        </nav>
        <div className="flex items-center space-x-6 text-[13px] font-medium tracking-widest uppercase">
          <a href="#" className="hover:opacity-70">Login</a>
          <span className="text-moss-border h-4 border-l border-moss-border"></span>
          <a href="#" className="hover:opacity-70">Bag (03)</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-16 flex flex-col md:flex-row items-start md:items-center justify-between border-b border-moss-border">
        <div className="md:w-1/4 text-[13px] leading-relaxed opacity-80 mb-8 md:mb-0 pr-12">
          Explore our curated range of products to elevate every part of your life.
        </div>
        <div className="md:w-3/4">
          <h1 className="text-5xl md:text-[5.5rem] font-clash font-medium leading-[1.05] tracking-tight text-moss-text">
            ALL YOUR FAVORITES<br />IN ONE PLACE
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row flex-1">
        {/* Sidebar */}
        <aside className="w-full md:w-[280px] flex-shrink-0 border-r border-moss-border flex flex-col">
          <div className="px-8 py-6 border-b border-moss-border flex items-center justify-between">
            <span className="text-[13px] tracking-widest uppercase font-medium">Filters</span>
            <Filter className="w-4 h-4 opacity-50" />
          </div>
          
          <div className="flex flex-col">
            {['Category', 'Price Range', 'Color', 'Brands', 'Fast Shipping'].map((filter, i) => (
              <div key={filter} className="px-8 py-5 border-b border-moss-border flex items-center justify-between cursor-pointer hover:bg-black/5 transition-colors">
                <span className="text-[11px] tracking-widest uppercase font-medium">{filter}</span>
                <ChevronDown className="w-4 h-4 opacity-30" />
              </div>
            ))}
          </div>

          <div className="p-8 border-b border-moss-border">
            <button className="w-full bg-moss-orange text-white text-[11px] tracking-widest uppercase font-medium py-3.5 rounded-sm hover:opacity-90 transition-opacity">
              Clear Filters
            </button>
          </div>

          {/* Promo Cards */}
          <div className="p-8 flex flex-col gap-6">
            <PromoCard 
              title="MOUTH CONTROLLER" 
              image="https://picsum.photos/seed/mouth/400/400" 
            />
            <PromoCard 
              title="ONETWO REFRIGERATOR" 
              image="https://picsum.photos/seed/fridge/400/400" 
            />
            <PromoCard 
              title="SOLROS SPEAKER" 
              image="https://picsum.photos/seed/speaker/400/400" 
            />
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1 flex flex-col">
          {/* Sort Bar */}
          <div className="px-10 py-6 flex justify-end border-b border-moss-border">
            <button className="flex items-center space-x-2 text-[11px] tracking-widest uppercase font-medium hover:opacity-70">
              <span>Sort By</span>
              <ChevronDown className="w-4 h-4 opacity-50" />
            </button>
          </div>

          {/* Grid */}
          <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            <ProductCard 
              category="Kitchen Gear"
              title="MEAL MATES"
              price="£29.00"
              image="https://picsum.photos/seed/bento/600/600"
            />
            <ProductCard 
              category="Kitchen Gear"
              title="MOCHA MATE"
              price="£388.00"
              image="https://picsum.photos/seed/coffee/600/600"
            />
            <ProductCard 
              category="Self Care"
              title="BARBER TOOL"
              price="£199.00"
              image="https://picsum.photos/seed/shaver/600/600"
            />
            <ProductCard 
              category="Kitchen Gear"
              title="HOT CUP"
              price="£94.00"
              image="https://picsum.photos/seed/thermos/600/600"
            />
            <ProductCard 
              category="Kitchen Gear"
              title="PEUGEOT PARIS MILL"
              price="£26.99"
              image="https://picsum.photos/seed/grinder/600/600"
            />
            <ProductCard 
              category="Home Decor"
              title="MARCEL THE SHELL"
              price="£33.99"
              image="https://picsum.photos/seed/shell/600/600"
            />
            
            {/* Banner spanning full width */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-[#EFEBE4] flex flex-col md:flex-row items-center justify-between p-10 mt-4">
              <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className="relative w-64 h-64">
                  <Image src="https://picsum.photos/seed/scanner1/600/600" alt="Scanner" fill className="object-contain mix-blend-multiply" />
                </div>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-center text-center px-4">
                <h2 className="text-3xl font-clash font-medium mb-4 leading-tight">CAPTURE PRECISION,<br/>ANYTIME, ANYWHERE</h2>
                <p className="text-[13px] opacity-80 mb-8 max-w-[280px] leading-relaxed">Get fast, precise scans anywhere with our advanced Mobile Imaging Laser Scanner.</p>
                <button className="bg-[#3E2A21] text-white text-[11px] tracking-widest uppercase font-medium px-10 py-3.5 hover:bg-black transition-colors">
                  Explore
                </button>
              </div>
              <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-center">
                <div className="relative w-64 h-64">
                  <Image src="https://picsum.photos/seed/scanner2/600/600" alt="Scanner in use" fill className="object-contain mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ProductCard({ category, title, price, image }: { category: string, title: string, price: string, image: string }) {
  return (
    <div className="group cursor-pointer flex flex-col">
      <div className="bg-moss-card aspect-square mb-5 relative overflow-hidden flex items-center justify-center">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-contain p-10 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" 
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] tracking-widest uppercase font-medium opacity-60 mb-2">{category}</span>
        <div className="flex items-center justify-between">
          <span className="font-medium text-[15px] tracking-wide">{title}</span>
          <span className="font-medium text-[15px]">{price}</span>
        </div>
      </div>
    </div>
  );
}

function PromoCard({ title, image }: { title: string, image: string }) {
  return (
    <div className="relative aspect-square overflow-hidden group cursor-pointer bg-black">
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between text-white">
        <div>
          <div className="font-medium text-[15px] leading-tight mb-1.5 tracking-wide">
            {title.split(' ').map((w, i) => <div key={i}>{w}</div>)}
          </div>
          <div className="text-[10px] opacity-80">Pre order Available</div>
        </div>
        <ArrowUpRight className="w-4 h-4 opacity-80 mb-1" />
      </div>
    </div>
  );
}
