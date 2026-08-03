import { useState, useEffect, useMemo } from "react";

/**
 * Week 32 -- 3-9 August 2026. Generated from the 2026-weekly-plan workbook, tab "32".
 *
 * The scheduling day is anchored at 06:00 and runs to 06:00 the next morning, so
 * `start` / `end` are minutes from 06:00 (0 = 6:00 AM, 1440 = 6:00 AM next day).
 * Sleep therefore spans 1140-1440 rather than wrapping past midnight, and anything
 * before 6:00 AM belongs to the PREVIOUS calendar day's schedule.
 */

export const WEEK_32 = {
  "Monday": [
    {
      start: 0,
      end: 60,
      timeRange: "6:00 AM - 7:00 AM",
      title: "Tech Hub",
      category: "location"
    },
    {
      start: 60,
      end: 600,
      timeRange: "7:00 AM - 4:00 PM",
      title: "Lowe's",
      category: "work"
    },
    {
      start: 600,
      end: 660,
      timeRange: "4:00 PM - 5:00 PM",
      title: "Drive",
      category: "travel"
    },
    {
      start: 660,
      end: 720,
      timeRange: "5:00 PM - 6:00 PM",
      title: "Yaman's Taekwondo",
      category: "family"
    },
    {
      start: 720,
      end: 780,
      timeRange: "6:00 PM - 7:00 PM",
      title: "Yaman",
      category: "family"
    },
    {
      start: 780,
      end: 840,
      timeRange: "7:00 PM - 8:00 PM",
      title: "MMOG/SCM",
      category: "community"
    },
    {
      start: 840,
      end: 900,
      timeRange: "8:00 PM - 9:00 PM",
      title: "Mosaic Relief",
      category: "community"
    },
    {
      start: 900,
      end: 1020,
      timeRange: "9:00 PM - 11:00 PM",
      title: "Mosaic Executives",
      category: "community"
    },
    {
      start: 1020,
      end: 1080,
      timeRange: "11:00 PM - 12:00 AM",
      title: "Read",
      category: "learning"
    },
    {
      start: 1080,
      end: 1140,
      timeRange: "12:00 AM - 1:00 AM",
      title: "Reflection",
      category: "personal"
    },
    {
      start: 1140,
      end: 1440,
      timeRange: "1:00 AM - 6:00 AM",
      title: "Sleep",
      category: "sleep"
    }
  ],
  "Tuesday": [
    {
      start: 0,
      end: 60,
      timeRange: "6:00 AM - 7:00 AM",
      title: "Home Office",
      category: "location"
    },
    {
      start: 60,
      end: 360,
      timeRange: "7:00 AM - 12:00 PM",
      title: "Lowe's",
      category: "work"
    },
    {
      start: 360,
      end: 420,
      timeRange: "12:00 PM - 1:00 PM",
      title: "OAT",
      category: "oat"
    },
    {
      start: 420,
      end: 660,
      timeRange: "1:00 PM - 5:00 PM",
      title: "Lowe's",
      category: "work"
    },
    {
      start: 660,
      end: 720,
      timeRange: "5:00 PM - 6:00 PM",
      title: "Yaman's Taekwondo",
      category: "family"
    },
    {
      start: 720,
      end: 960,
      timeRange: "6:00 PM - 10:00 PM",
      title: "Book Club",
      category: "learning"
    },
    {
      start: 960,
      end: 1080,
      timeRange: "10:00 PM - 12:00 AM",
      title: "Watch",
      category: "personal"
    },
    {
      start: 1080,
      end: 1140,
      timeRange: "12:00 AM - 1:00 AM",
      title: "Reflection",
      category: "personal"
    },
    {
      start: 1140,
      end: 1440,
      timeRange: "1:00 AM - 6:00 AM",
      title: "Sleep",
      category: "sleep"
    }
  ],
  "Wednesday": [
    {
      start: 0,
      end: 60,
      timeRange: "6:00 AM - 7:00 AM",
      title: "Home Office",
      category: "location"
    },
    {
      start: 60,
      end: 660,
      timeRange: "7:00 AM - 5:00 PM",
      title: "Lowe's",
      category: "work"
    },
    {
      start: 660,
      end: 780,
      timeRange: "5:00 PM - 7:00 PM",
      title: "AI Working Session",
      category: "ventures"
    },
    {
      start: 780,
      end: 840,
      timeRange: "7:00 PM - 8:00 PM",
      title: "Course",
      category: "learning"
    },
    {
      start: 840,
      end: 960,
      timeRange: "8:00 PM - 10:00 PM",
      title: "Open",
      category: "open"
    },
    {
      start: 960,
      end: 1020,
      timeRange: "10:00 PM - 11:00 PM",
      title: "Read",
      category: "learning"
    },
    {
      start: 1020,
      end: 1080,
      timeRange: "11:00 PM - 12:00 AM",
      title: "Watch",
      category: "personal"
    },
    {
      start: 1080,
      end: 1140,
      timeRange: "12:00 AM - 1:00 AM",
      title: "Reflection",
      category: "personal"
    },
    {
      start: 1140,
      end: 1440,
      timeRange: "1:00 AM - 6:00 AM",
      title: "Sleep",
      category: "sleep"
    }
  ],
  "Thursday": [
    {
      start: 0,
      end: 60,
      timeRange: "6:00 AM - 7:00 AM",
      title: "Tech Hub",
      category: "location"
    },
    {
      start: 60,
      end: 600,
      timeRange: "7:00 AM - 4:00 PM",
      title: "Lowe's",
      category: "work"
    },
    {
      start: 600,
      end: 660,
      timeRange: "4:00 PM - 5:00 PM",
      title: "Drive",
      category: "travel"
    },
    {
      start: 660,
      end: 780,
      timeRange: "5:00 PM - 7:00 PM",
      title: "OAT Sales",
      category: "oat"
    },
    {
      start: 780,
      end: 840,
      timeRange: "7:00 PM - 8:00 PM",
      title: "Course",
      category: "learning"
    },
    {
      start: 840,
      end: 900,
      timeRange: "8:00 PM - 9:00 PM",
      title: "Iron5 / Reading",
      category: "learning"
    },
    {
      start: 900,
      end: 960,
      timeRange: "9:00 PM - 10:00 PM",
      title: "Theraphy",
      category: "personal"
    },
    {
      start: 960,
      end: 1080,
      timeRange: "10:00 PM - 12:00 AM",
      title: "Mentorship",
      category: "mentorship"
    },
    {
      start: 1080,
      end: 1140,
      timeRange: "12:00 AM - 1:00 AM",
      title: "Reflection",
      category: "personal"
    },
    {
      start: 1140,
      end: 1440,
      timeRange: "1:00 AM - 6:00 AM",
      title: "Sleep",
      category: "sleep"
    }
  ],
  "Friday": [
    {
      start: 0,
      end: 60,
      timeRange: "6:00 AM - 7:00 AM",
      title: "Mooresvile",
      category: "location"
    },
    {
      start: 60,
      end: 420,
      timeRange: "7:00 AM - 1:00 PM",
      title: "Lowe's",
      category: "work"
    },
    {
      start: 420,
      end: 480,
      timeRange: "1:00 PM - 2:00 PM",
      title: "Jumah",
      category: "faith"
    },
    {
      start: 480,
      end: 660,
      timeRange: "2:00 PM - 5:00 PM",
      title: "Lowe's",
      category: "work"
    },
    {
      start: 660,
      end: 720,
      timeRange: "5:00 PM - 6:00 PM",
      title: "Dinner",
      category: "family"
    },
    {
      start: 720,
      end: 840,
      timeRange: "6:00 PM - 8:00 PM",
      title: "Yaman",
      category: "family"
    },
    {
      start: 840,
      end: 1080,
      timeRange: "8:00 PM - 12:00 AM",
      title: "Barakah Bros",
      category: "faith"
    },
    {
      start: 1080,
      end: 1140,
      timeRange: "12:00 AM - 1:00 AM",
      title: "Reflection",
      category: "personal"
    },
    {
      start: 1140,
      end: 1440,
      timeRange: "1:00 AM - 6:00 AM",
      title: "Sleep",
      category: "sleep"
    }
  ],
  "Saturday": [
    {
      start: 0,
      end: 60,
      timeRange: "6:00 AM - 7:00 AM",
      title: "Wake up",
      category: "location"
    },
    {
      start: 60,
      end: 180,
      timeRange: "7:00 AM - 9:00 AM",
      title: "Open",
      category: "open"
    },
    {
      start: 180,
      end: 420,
      timeRange: "9:00 AM - 1:00 PM",
      title: "Furniture installation",
      category: "personal"
    },
    {
      start: 420,
      end: 660,
      timeRange: "1:00 PM - 5:00 PM",
      title: "Open",
      category: "open"
    },
    {
      start: 660,
      end: 720,
      timeRange: "5:00 PM - 6:00 PM",
      title: "Duru",
      category: "family"
    },
    {
      start: 720,
      end: 840,
      timeRange: "6:00 PM - 8:00 PM",
      title: "Family",
      category: "family"
    },
    {
      start: 840,
      end: 900,
      timeRange: "8:00 PM - 9:00 PM",
      title: "Open",
      category: "open"
    },
    {
      start: 900,
      end: 960,
      timeRange: "9:00 PM - 10:00 PM",
      title: "Worship",
      category: "faith"
    },
    {
      start: 960,
      end: 1080,
      timeRange: "10:00 PM - 12:00 AM",
      title: "Watch",
      category: "personal"
    },
    {
      start: 1080,
      end: 1140,
      timeRange: "12:00 AM - 1:00 AM",
      title: "Reflection",
      category: "personal"
    },
    {
      start: 1140,
      end: 1440,
      timeRange: "1:00 AM - 6:00 AM",
      title: "Sleep",
      category: "sleep"
    }
  ],
  "Sunday": [
    {
      start: 0,
      end: 60,
      timeRange: "6:00 AM - 7:00 AM",
      title: "Wake up",
      category: "location"
    },
    {
      start: 60,
      end: 240,
      timeRange: "7:00 AM - 10:00 AM",
      title: "Open",
      category: "open"
    },
    {
      start: 240,
      end: 300,
      timeRange: "10:00 AM - 11:00 AM",
      title: "Walk",
      category: "personal"
    },
    {
      start: 300,
      end: 360,
      timeRange: "11:00 AM - 12:00 PM",
      title: "Read",
      category: "learning"
    },
    {
      start: 360,
      end: 480,
      timeRange: "12:00 PM - 2:00 PM",
      title: "Mentorship HW",
      category: "mentorship"
    },
    {
      start: 480,
      end: 540,
      timeRange: "2:00 PM - 3:00 PM",
      title: "Connect",
      category: "learning"
    },
    {
      start: 540,
      end: 660,
      timeRange: "3:00 PM - 5:00 PM",
      title: "Write Articles",
      category: "learning"
    },
    {
      start: 660,
      end: 840,
      timeRange: "5:00 PM - 8:00 PM",
      title: "Family Dinner",
      category: "family"
    },
    {
      start: 840,
      end: 900,
      timeRange: "8:00 PM - 9:00 PM",
      title: "Family Meeting",
      category: "family"
    },
    {
      start: 900,
      end: 1020,
      timeRange: "9:00 PM - 11:00 PM",
      title: "Weekly Ops",
      category: "personal"
    },
    {
      start: 1020,
      end: 1080,
      timeRange: "11:00 PM - 12:00 AM",
      title: "Worship",
      category: "faith"
    },
    {
      start: 1080,
      end: 1140,
      timeRange: "12:00 AM - 1:00 AM",
      title: "Reflection",
      category: "personal"
    },
    {
      start: 1140,
      end: 1440,
      timeRange: "1:00 AM - 6:00 AM",
      title: "Sleep",
      category: "sleep"
    }
  ]
};

const DAY_ORDER = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

const CATEGORY = {
  work:       { label: "Lowe's",     color: "#1F4E79" },
  ventures:   { label: "Ventures",   color: "#7A3E9D" },
  oat:        { label: "OAT",        color: "#0F6E63" },
  community:  { label: "Community",  color: "#B4761B" },
  family:     { label: "Family",     color: "#A33325" },
  faith:      { label: "Faith",      color: "#2F6B4F" },
  learning:   { label: "Learning",   color: "#356E8E" },
  mentorship: { label: "Mentorship", color: "#8A6D1F" },
  personal:   { label: "Personal",   color: "#5B6B66" },
  travel:     { label: "Travel",     color: "#8A8F8C" },
  location:   { label: "Location",   color: "#9AA5A1" },
  sleep:      { label: "Sleep",      color: "#3A4A55" },
  open:       { label: "Open",       color: "#C3CCC8" },
};

/** Minutes elapsed since the 06:00 anchor (0-1439). */
export function anchorMinutes(date) {
  return (date.getHours() * 60 + date.getMinutes() - 360 + 1440) % 1440;
}

/**
 * Which day's schedule applies right now. Before 6:00 AM you are still inside
 * the previous day's block, so Tuesday 02:00 resolves to Monday's Sleep entry.
 */
export function activeDayName(date) {
  const jsDay = date.getDay();                       // 0 = Sunday
  const shifted = date.getHours() < 6 ? (jsDay + 6) % 7 : jsDay;
  return DAY_ORDER[(shifted + 6) % 7];               // re-index so Monday = 0
}

export function findCurrent(date, week = WEEK_32) {
  const day = activeDayName(date);
  const mins = anchorMinutes(date);
  const items = week[day] || [];
  const index = items.findIndex((i) => mins >= i.start && mins < i.end);
  if (index === -1) return null;
  const current = items[index];
  return {
    day,
    current,
    next: items[index + 1] || null,
    minutesElapsed: mins - current.start,
    minutesRemaining: current.end - mins,
    progress: (mins - current.start) / (current.end - current.start),
  };
}

function fmtRemaining(m) {
  const h = Math.floor(m / 60), r = m % 60;
  if (h && r) return `${h}h ${r}m left`;
  if (h) return `${h}h left`;
  return `${r}m left`;
}

export default function IdealTimeSchedule({ week = WEEK_32, now }) {
  const [clock, setClock] = useState(() => now || new Date());

  useEffect(() => {
    if (now) return;                                  // frozen for tests/storybook
    const id = setInterval(() => setClock(new Date()), 30000);
    return () => clearInterval(id);
  }, [now]);

  const state = useMemo(() => findCurrent(clock, week), [clock, week]);
  const [selected, setSelected] = useState(null);
  const activeDay = state?.day ?? "Monday";
  const shownDay = selected ?? activeDay;
  const items = week[shownDay] || [];
  const mins = anchorMinutes(clock);

  return (
    <div className="its">
      <style>{`
        .its{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;color:#0F1714}
        .its-head{display:flex;justify-content:space-between;align-items:baseline;
          gap:12px;flex-wrap:wrap;margin-bottom:14px}
        .its-h{font-size:17px;font-weight:650;margin:0;letter-spacing:-.01em}
        .its-wk{font-size:12px;color:#66756F;font-variant-numeric:tabular-nums}
        .its-now{border:1px solid #DCE3E0;border-left:4px solid var(--accent);
          border-radius:8px;padding:14px 16px;margin-bottom:16px;background:#fff}
        .its-eyebrow{font-size:10.5px;letter-spacing:.13em;text-transform:uppercase;
          color:#66756F;margin-bottom:6px}
        .its-title{font-size:21px;font-weight:650;line-height:1.15;margin:0 0 4px}
        .its-meta{font-size:13px;color:#66756F;display:flex;gap:10px;flex-wrap:wrap}
        .its-bar{height:4px;background:#EFF2F1;border-radius:2px;margin-top:11px;overflow:hidden}
        .its-fill{height:100%;background:var(--accent);border-radius:2px;
          transition:width .6s ease}
        .its-next{font-size:12.5px;color:#66756F;margin-top:9px}
        .its-next b{color:#0F1714;font-weight:600}
        .its-tabs{display:flex;gap:4px;overflow-x:auto;margin-bottom:10px;
          padding-bottom:3px;-webkit-overflow-scrolling:touch}
        .its-tab{flex:0 0 auto;border:1px solid #DCE3E0;background:#fff;cursor:pointer;
          border-radius:6px;padding:5px 11px;font-size:12.5px;color:#66756F;font:inherit;
          font-size:12.5px}
        .its-tab[data-on="1"]{background:#0F1714;color:#fff;border-color:#0F1714}
        .its-tab[data-today="1"]:after{content:"·";margin-left:5px;font-weight:700}
        .its-list{list-style:none;margin:0;padding:0}
        .its-row{display:grid;grid-template-columns:6px 118px 1fr auto;gap:11px;
          align-items:center;padding:9px 0;border-bottom:1px solid #EFF2F1}
        .its-row:last-child{border-bottom:0}
        .its-dot{width:6px;height:26px;border-radius:3px;background:var(--c)}
        .its-time{font-size:11.5px;color:#66756F;font-variant-numeric:tabular-nums;
          white-space:nowrap}
        .its-name{font-size:14px;font-weight:500}
        .its-cat{font-size:10.5px;color:#66756F;border:1px solid #DCE3E0;
          border-radius:4px;padding:1px 7px;white-space:nowrap}
        .its-row[data-live="1"] .its-name{font-weight:700}
        .its-row[data-live="1"]{background:#F7F9F8}
        .its-row[data-past="1"]{opacity:.45}
        @media (max-width:520px){
          .its-row{grid-template-columns:6px 1fr auto;row-gap:2px}
          .its-time{grid-column:2;order:3;grid-row:2}
          .its-cat{grid-row:1}
        }
      `}</style>

      <div className="its-head">
        <h3 className="its-h">Ideal Time Schedule</h3>
        <span className="its-wk">Week 32 · 3–9 Aug 2026</span>
      </div>

      {state && (
        <div className="its-now" style={{ "--accent": CATEGORY[state.current.category].color }}>
          <div className="its-eyebrow">Suggested current activity</div>
          <p className="its-title">{state.current.title}</p>
          <div className="its-meta">
            <span>{state.current.timeRange}</span>
            <span>·</span>
            <span>{fmtRemaining(state.minutesRemaining)}</span>
          </div>
          <div className="its-bar">
            <div className="its-fill" style={{ width: `${Math.round(state.progress * 100)}%` }} />
          </div>
          {state.next && (
            <div className="its-next">Next: <b>{state.next.title}</b> at {state.next.timeRange.split(" - ")[0]}</div>
          )}
        </div>
      )}

      <div className="its-tabs">
        {DAY_ORDER.map((d) => (
          <button
            key={d}
            className="its-tab"
            data-on={d === shownDay ? "1" : "0"}
            data-today={d === activeDay ? "1" : "0"}
            onClick={() => setSelected(d)}
          >
            {d.slice(0, 3)}
          </button>
        ))}
      </div>

      <ul className="its-list">
        {items.map((it, i) => {
          const live = shownDay === activeDay && mins >= it.start && mins < it.end;
          const past = shownDay === activeDay && mins >= it.end;
          return (
            <li
              key={i}
              className="its-row"
              data-live={live ? "1" : "0"}
              data-past={past ? "1" : "0"}
              style={{ "--c": CATEGORY[it.category].color }}
            >
              <span className="its-dot" />
              <span className="its-time">{it.timeRange}</span>
              <span className="its-name">{it.title}</span>
              <span className="its-cat">{CATEGORY[it.category].label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
