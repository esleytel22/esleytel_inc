import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { formatTimeLeft } from "../../../../utils/quotaProvider";

export default function QuotaTimer({ quota }) {
  const [timeLeft, setTimeLeft] = useState(quota.timeLeft);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 1000 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="flex flex-col items-center py-10 text-center" role="status">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-light-cream/40 bg-light-cream/10 text-light-cream">
        <Clock size={28} />
      </span>
      <h3 className="mt-6 font-hahmlet text-2xl font-semibold text-white">Submission limit reached</h3>
      <p className="mt-3 max-w-xs text-sm text-white/65">
        You&rsquo;ve used all <span className="font-semibold text-white">{quota.max}</span> submissions for now.
        Need us sooner? Email{" "}
        <a className="text-light-cream underline" href="mailto:helpdesk@esleytel.space">
          helpdesk@esleytel.space
        </a>
        .
      </p>
      <p className="mt-5 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80">
        Next available in <span className="font-semibold text-light-cream">{formatTimeLeft(timeLeft)}</span>
      </p>
    </div>
  );
}
