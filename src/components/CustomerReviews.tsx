import React from 'react';
import { REVIEWS_DATA } from '../data/faqs';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-xs font-mono font-medium text-blue-400 uppercase tracking-wider mb-2">
          ULASAN PELANGGAN NYATA
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Dipercaya Lebih Dari 10.000+ Pelanggan
        </h2>
        <p className="text-zinc-400 text-sm mt-3">
          Pengalaman langsung dari pemilik gadget yang telah membuktikan kualitas pengerjaan dan kejujuran teknisi kami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS_DATA.map((rev) => (
          <div
            key={rev.id}
            className="p-7 bg-zinc-950 border border-zinc-800 rounded-3xl flex flex-col justify-between card-glow relative"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-zinc-500 font-mono">{rev.date}</span>
              </div>

              <Quote className="w-6 h-6 text-zinc-700 mb-2" />

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                "{rev.comment}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-white">{rev.customerName}</h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{rev.device}</p>
                </div>
                {rev.verified && (
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Terverifikasi</span>
                  </span>
                )}
              </div>
              <div className="text-[10px] text-blue-400 mt-2 font-mono">
                Pengerjaan: {rev.repairType}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
