import React, { useEffect, useRef, useState } from "react";

const poems = [
  {
    title: "The Forest Ran With Me",
    excerpt: `Chased deep into the forest,
I ran—wild—
for my life.

At the edge of a crumbling cliff
I stopped, breath burning,
storm howling so loud
it felt like it lived inside me.`,
    content: `Chased deep into the forest,
I ran—wild—
for my life.

At the edge of a crumbling cliff
I stopped, breath burning,
storm howling so loud
it felt like it lived inside me.
The roar of falling water—
unreal,
like a dream I couldn’t wake from.

Then—
I snapped back.
I was already falling.
The storm had hypnotized my heart.
The waterfall
had stolen the last spark of my joy.

And I knew this place.
This cliff—
the same one where I cast down
my dark secrets,
tossed away
the things I had done in the night,
so the daylight
would never find them.

“I will not go down with my secrets,”
I swore.

I reached—
caught a rope, thin as a whisper—
and in the blink of an eye
I was back on the edge.
Behind me,
the cliff gave way,
collapsing into the depths
where I had nearly joined it.

I turned—
and faced the thing
I had been running from.`,
    date_added: "2025-08-19 21:30",
    category: ["Adventure", "Reflection", "Hope"]
  },
  {
    title: "The Cliff Waited Still",
    excerpt: `I woke from a dream
and found myself
at the edge
of a crumbling cliff.

The storm leaned close,
whispering
a slow, aching melody
in my ear.`,
    content: `I woke from a dream
and found myself
at the edge
of a crumbling cliff.

The storm leaned close,
whispering
a slow, aching melody
in my ear.

Still—
I stood.
Wanting more.
Craving the sound.

Then the fountain’s
wild, rushing song
stole the moment away.

I searched my memory.
My buried secret
rose up
and sang its own tune.
And I remembered—
every step,
every shadow
that led me here.

I staggered.
I fell.

The same storm
that once soothed my soul
now pushed me over the edge.

I told myself,
“I would rather end it here
than return
and face
the thing
I have been running from
all this way.”

And the wind
carried my words
into the depths—
as if the storm itself
had agreed.`,
    date_added: "2025-08-19 21:30",
    category: ["Reflection", "Regret"]
  },
  {
    title: "At Last",
    excerpt: `Once bitten, twice shy, they say—
I’ve been bitten twice,
and now I’m trapped.

You asked to be fed—
I offered my fingernail.
Before I could feel the loss,
you had devoured me—
down to the soul.`,
    content: `Once bitten, twice shy, they say—
s
I’ve been bitten twice,
and now I’m trapped.

You asked to be fed—
I offered my fingernail.
Before I could feel the loss,
you had devoured me—
down to the soul.

Crammed into a molehole,
I hungered—
you fed me sand.
I gasped—
you wrung me dry.
I reached for freedom,
but only air
whistled past.

Clutched at the neck—
my breath clipped.
A torn piece of bread—
that’s what I was fed.

Free me, already.
Have you not had your fill?
The gentle noose—
I was held.
A smiling death
I fell for.

Oh, Freedom—
my ticket to heaven—
where are you?
Were you bribed?
Or did my voice
break before it reached you?

Do your thing.
Turn into a dam.
Widen this narrow hole
into a flood.
Sweep me out.

Disdained, I’ll watch
my lost freedom
wave back at me.

And gallant, I will stand—
on my two left legs—
shouting:
Yes—freedom at last`,
    date_added: "2025-08-19 21:30",
    category: ["Freedom", "Regret", "Hope"]
  },
  {
    title: "Preach of Ruin",
    excerpt: `Now I have done it.
No turning back,
no looking forward.
I am trapped
in this deadly loop.

The death I narrowly escaped,
again and again,
is finally here
to take me away.`,
    content: `Now I have done it.
No turning back,
no looking forward.
I am trapped
in this deadly loop.

The death I narrowly escaped,
again and again,
is finally here
to take me away.

Shattered promises
return as ghosts,
hunting down
my fading presence.

The evil I thought I fled
clung like a moth to my cloth
and crawled with me
into this one.

Once possessed,
the stench of the deed is forgotten—
only the thrill remains.
But once it is done,
the thrill departs,
and the eternal crack arrives.

My ruin preaches:
“Do not fall
into the same cycle of sin
that devours me now.

Chain your hunger.
Silence your want.
Lay your body down in rest.

Then maybe
you will leap with joy—
not collapse
with broken joints.”

My knees are scorched
by the house I burned.
My heart, in ache,
abandons its owner,
broken into pieces
countless times.

Now I am an empty shell:
all lost,
nothing gained.

The broken ones wait for me
at the edge of the abyss.

I will come soon
to cast away all your regrets,
and myself from you,
and smother that rancid lust.

Then maybe,
I will fall in peace.`,
    date_added: "2025-08-19 21:30",
    category: ["Regret", "Reflection"]
  },
  {
    title: "Endless Eve",
    excerpt: `I am fading,
with this mollifying evening,
preparing to hand over control
to the night.

And now I see
a more secure world ahead of me.
The wind whispers home,
the sky sprouts rest,`,
    content: `I am fading,
with this mollifying evening,
preparing to hand over control
to the night.

And now I see
a more secure world ahead of me.
The wind whispers home,
the sky sprouts rest,

the earth hums in tones of reassurance.
It opens beneath my feet
and draws me inward.

I have run far and wide;
all I ever found was stillness —

until this evening came
and showed me resplendent movement,
a movement etched in my mind
like words carved in stone.

I will slide in with the night
and sprout again from the ground,
to live a life
worthy of an endless eve.`,
    date_added: "2025-08-19 21:30",
    category: ["Serenity", "Reflection", "Hope"]
  },
  {
    title: "Run Faster",
    excerpt: `She crawls slowly,
but surely.
She suffers, she shivers.
Her shell — her companion —
the only home she’s ever had.

They strive and struggle
just to taste a drop of rain.`,
    content: `She crawls slowly,
but surely.
She suffers, she shivers.
Her shell — her companion —
the only home she’s ever had.

They strive and struggle
just to taste a drop of rain.
They race endlessly,
they cry furiously —
yet no one hears.

But I hear them,
since life is serene to me.
I’ve never felt the warmth
of a partner
as she always has.

I am faster, quicker —
yet the faster I run,
the farther my goal slips away.

She is smaller, weaker,
slimy and fragile.
I am larger, harder,
still and stronger.

And yet I crave her life.
I long to tread
slow and steady.
But all feels too fast.

She, perhaps, would choose
the speedy and the swift,
yet is bound to her slowness.

We live in two different worlds,
where time moves differently.
She retracts her head to sleep in her shell,
and I spread my legs to rest on my bed.

Let us trade lives —
to live for one another,
to find balance
in what we both lack.

Take your time,
and crawl as long as you wish.
I will stand here, waiting
for my turn to live a life
slower than my wildest imagination.

Maybe then I will finally catch
all that had slipped
through my fingertips.`,
    date_added: "2025-08-19 21:30",
    category: ["Perspective", "Longing", "Hope"]
  },
  {
    title: "Drafts for the Wind",
    excerpt: `My treasure drowns, and I stand still.
I feel a surge of pain
wailing up deep in me,
and yet — I burst into laughter.

The gift I had been saving for — bought,
I stood nearby,
looking unalive.`,
    content: `My treasure drowns, and I stand still.
I feel a surge of pain
wailing up deep in me,
and yet — I burst into laughter.

The gift I had been saving for — bought,
I stood nearby,
looking unalive.

How good it must have been
to get this for myself,
I lamented.

The footwear I walk with snapped.
I checked — and scoffed.
“WHAT A WASTE.”

Why can’t it be mine?
I scramed into a dark alley,
and fainted for seven days.

Be mine — for once.
How hard I have saved,
prepared, yearned,
and longed for you.

Sit by my side;
be a stronghold
I can call a home.

I watch angels walk by me.
The simplest greeting — “Hi” —
hung in my mouth, refusing to come out.

They swayed far from me;
the light disappeared —
I was drenched in darkness.

Come back here,
and live with me,
even if for a while.

Let me feel your divine hand,
stroke me, even if just once.

Hear me out for once, and maybe —
you will find meaning in my longings.

Let me dwell with you for a while.
Let me wine and dine with you,
and taste what divine wine is like.

But I was never heard.

All I can do
is draft it out for the wind,
to carry my cries
to the brightest sun,
so they can be seen by all —
and maybe — I will be heard,
maybe — I will be sought.

Am I timid, or reserved?
That is the question —
the remark that has been pushing
through each loss.

And maybe — just maybe —
one day,
my cries will ride the wind,
and bloom like seeds
in places unknown.`,
    date_added: "2025-08-19 21:30",
    category: ["Longing", "Reflection", "Hope"]
  },
  {
    title: "Pack Me Up",
    excerpt: `I entered the lion's den,
taunted it with my meat —
expecting to get out alive.

Moments later,
my flesh lay shredded on the ground.`,
    content: `I entered the lion's den,
taunted it with my meat —
expecting to get out alive.

Moments later,
my flesh lay shredded on the ground.

I swam into the deepest ocean,
hoping to go scot-free;
but minutes later,
my stomach swelled — and burst.

I flew into the skies,
thousands of feet above,
dreaming of a free fall.
Instead,
my bones became a feast
for wolves and dogs.

I am done.
There is nothing left in me.
I have been sucked dry,
now competing with brooms.

How hard I have fallen —
from the very top
to the darkest pit of hell.

Yet,
I felt an invisible presence,
sprinkling glitters of hope
sprinkling glitters of hope
into my crushed soul.

Shivers tried to solidify
my liquefied heart.
I have no hope left —
but if I slip away,
I will crawl, slow and steady,
like a tortoise,
toward my ruins of my goals.`,
    date_added: "2025-08-19 21:30",
    category: ["Perseverance", "Regret", "Hope"]
  }
];

export default function Poems() {
  const sectionRefs = useRef([]);
  const [expanded, setExpanded] = useState(Array(poems.length).fill(false));

  useEffect(() => {
    const observers = sectionRefs.current.map((section) => {
      if (!section) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-6");
            } else {
              entry.target.classList.add("opacity-0", "translate-y-6");
              entry.target.classList.remove("opacity-100", "translate-y-0");
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(section);
      return observer;
    });

    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  const toggleExpand = (idx) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[idx] = !newExpanded[idx];
      return newExpanded;
    });
  };

  return (
    <div className="bg-[#012d36] min-h-screen text-[#F0EDCC] px-6 py-12">
      <h1 className="text-5xl font-bold text-center mb-12">Poems</h1>
      <div className="max-w-6xl mx-auto flex flex-row gap-8">
        <aside className="w-64 sticky top-12 self-start hidden sm:block">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-disc pl-5 space-y-2">
            {poems.map((poem, idx) => (
              <li key={idx}>
                <a href={`#poem-${idx}`} className="hover:underline hover:text-[#E4E1B5] transition">
                  {poem.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 flex flex-col gap-16">
          {poems.map((poem, idx) => (
            <section
              key={idx}
              id={`poem-${idx}`}
              ref={(el) => (sectionRefs.current[idx] = el)}
              className="bg-[#023a45] p-6 rounded-lg shadow-lg opacity-0 translate-y-6 transition-all duration-700 ease-out"
            >
              <h2 className="text-3xl font-semibold mb-4 text-[#F0EDCC]">{poem.title}</h2>
              <pre className="whitespace-pre-wrap text-base leading-relaxed mb-4 text-white">
                {expanded[idx] ? poem.content : poem.excerpt}
              </pre>
              <p className="text-sm mb-4 text-[#F0EDCC]">
                Category: {Array.isArray(poem.category) ? poem.category.join(", ") : poem.category} | Added: {poem.date_added}
              </p>
              <button
                onClick={() => toggleExpand(idx)}
                className="bg-[#F0EDCC] text-[#012d36] hover:scale-105 hover:bg-[#E4E1B5] px-4 py-2 rounded hover:bg-opacity-90 transition"
              >
                {expanded[idx] ? "Read Less" : "Read More"}
              </button>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
