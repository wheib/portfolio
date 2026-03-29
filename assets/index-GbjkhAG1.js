import {j as e, L as s} from "./main-D57RlNuQ.js";
import {a as o} from "./allProjects-DqjrcWTC.js";
import {B as l} from "./badge-CNkBurqj.js";
import {D as n} from "./download-RirUhU5N.js";
import {c} from "./createLucideIcon-kNKGgXpC.js";
const x = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , i = c("arrow-right", x);
function j() {
    const r = o.slice(0, 3);
    return e.jsxs("div", {
        className: "min-h-screen",
        children: [e.jsx("section", {
            className: "bg-stone-900 text-white",
            children: e.jsxs("div", {
                className: "max-w-6xl mx-auto px-6 py-28 md:py-40",
                children: [e.jsx("p", {
                    className: "text-stone-400 uppercase tracking-widest text-xs mb-6",
                    children: "Licensed Architect · New York, NY"
                }), e.jsxs("h1", {
                    className: "text-5xl md:text-7xl font-light leading-tight mb-8 max-w-3xl",
                    children: ["Designing spaces that", e.jsx("span", {
                        className: "italic text-stone-300",
                        children: " endure"
                    }), "."]
                }), e.jsx("p", {
                    className: "text-stone-300 text-lg md:text-xl max-w-xl leading-relaxed mb-12",
                    children: "Alexandra Morgan is a licensed architect specializing in civic, residential, and mixed-use buildings — with a commitment to sustainable design and community-centered process."
                }), e.jsxs("div", {
                    className: "flex flex-wrap gap-4",
                    children: [e.jsxs(s, {
                        to: "/portfolio",
                        className: "inline-flex items-center gap-2 bg-white text-stone-900 px-6 py-3 rounded font-medium hover:bg-stone-100 transition-colors",
                        children: [e.jsx(n, {
                            size: 16
                        }), "View Portfolio PDF"]
                    }), e.jsxs(s, {
                        to: "/projects",
                        className: "inline-flex items-center gap-2 border border-stone-600 text-white px-6 py-3 rounded font-medium hover:border-stone-400 transition-colors",
                        children: ["Browse Projects", e.jsx(i, {
                            size: 16
                        })]
                    })]
                })]
            })
        }), e.jsxs("section", {
            className: "max-w-6xl mx-auto px-6 py-20",
            children: [e.jsxs("div", {
                className: "flex items-end justify-between mb-10",
                children: [e.jsxs("div", {
                    children: [e.jsx("p", {
                        className: "text-stone-400 uppercase tracking-widest text-xs mb-2",
                        children: "Selected Work"
                    }), e.jsx("h2", {
                        className: "text-3xl font-light text-stone-900",
                        children: "Featured Projects"
                    })]
                }), e.jsxs(s, {
                    to: "/projects",
                    className: "hidden md:inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors",
                    children: ["All projects ", e.jsx(i, {
                        size: 14
                    })]
                })]
            }), e.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: r.map(t => e.jsxs("div", {
                    className: "group bg-white border border-stone-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow",
                    children: [e.jsx("div", {
                        className: "bg-stone-100 aspect-video flex items-center justify-center",
                        children: e.jsx("span", {
                            className: "text-stone-400 text-xs uppercase tracking-widest",
                            children: t.tags[0]
                        })
                    }), e.jsxs("div", {
                        className: "p-5",
                        children: [e.jsx("h3", {
                            className: "font-medium text-stone-900 mb-2 group-hover:text-stone-600 transition-colors",
                            children: t.title
                        }), e.jsx("p", {
                            className: "text-stone-500 text-sm leading-relaxed mb-4",
                            children: t.description
                        }), e.jsx("div", {
                            className: "flex flex-wrap gap-1.5",
                            children: t.tags.slice(0, 3).map(a => e.jsx(l, {
                                variant: "secondary",
                                className: "text-xs bg-stone-100 text-stone-600 border-0",
                                children: a
                            }, a))
                        })]
                    })]
                }, t._meta.path))
            }), e.jsx("div", {
                className: "mt-6 md:hidden",
                children: e.jsxs(s, {
                    to: "/projects",
                    className: "inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors",
                    children: ["View all projects ", e.jsx(i, {
                        size: 14
                    })]
                })
            })]
        }), e.jsx("section", {
            className: "border-t border-stone-200 bg-white",
            children: e.jsxs("div", {
                className: "max-w-6xl mx-auto px-6 py-16 md:flex items-center gap-16",
                children: [e.jsx("img", {
                    src: "/headshot-on-white.jpg",
                    alt: "Alexandra Morgan",
                    className: "w-36 h-44 rounded-xl object-cover shrink-0 mb-8 md:mb-0"
                }), e.jsxs("div", {
                    children: [e.jsx("p", {
                        className: "text-stone-400 uppercase tracking-widest text-xs mb-3",
                        children: "About"
                    }), e.jsx("h2", {
                        className: "text-2xl font-light text-stone-900 mb-4",
                        children: "Alexandra Morgan, AIA"
                    }), e.jsx("p", {
                        className: "text-stone-600 leading-relaxed max-w-2xl mb-6",
                        children: "With over a decade of practice across civic, residential, and mixed-use typologies, Alexandra brings a rigorous design sensibility and a collaborative spirit to every project. She holds an M.Arch from Columbia GSAPP and is a licensed architect in New York and Illinois."
                    }), e.jsxs("div", {
                        className: "flex flex-wrap gap-3",
                        children: [e.jsx(s, {
                            to: "/resume",
                            className: "inline-flex items-center gap-2 text-sm border border-stone-300 text-stone-700 px-4 py-2 rounded hover:bg-stone-50 transition-colors",
                            children: "Full Profile"
                        }), e.jsxs(s, {
                            to: "/portfolio",
                            className: "inline-flex items-center gap-2 text-sm bg-stone-900 text-white px-4 py-2 rounded hover:bg-stone-700 transition-colors",
                            children: [e.jsx(n, {
                                size: 14
                            }), "Download Portfolio"]
                        })]
                    })]
                })]
            })
        }), e.jsx("footer", {
            className: "border-t border-stone-200 bg-stone-50",
            children: e.jsxs("div", {
                className: "max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-stone-400",
                children: [e.jsxs("span", {
                    children: ["© ", new Date().getFullYear(), " Alexandra Morgan, AIA"]
                }), e.jsx(s, {
                    to: "/contact",
                    className: "hover:text-stone-700 transition-colors",
                    children: "Get in touch"
                })]
            })
        })]
    })
}
export {j as component};
