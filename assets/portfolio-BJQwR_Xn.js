import {j as e} from "./main-D57RlNuQ.js";
import {D as s} from "./download-RirUhU5N.js";
import {c as r} from "./createLucideIcon-kNKGgXpC.js";
const a = [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]
  , n = r("external-link", a);
const i = [["path", {
    d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
    key: "1oefj6"
}], ["path", {
    d: "M14 2v5a1 1 0 0 0 1 1h5",
    key: "wfsgrz"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]
  , o = r("file-text", i)
  , t = "/portfolio.pdf";
function x() {
    return e.jsx("div", {
        className: "min-h-screen bg-stone-50",
        children: e.jsxs("div", {
            className: "max-w-5xl mx-auto px-6 py-16",
            children: [e.jsxs("div", {
                className: "mb-10",
                children: [e.jsx("p", {
                    className: "text-stone-400 uppercase tracking-widest text-xs mb-3",
                    children: "Portfolio"
                }), e.jsx("h1", {
                    className: "text-4xl font-light text-stone-900 mb-4",
                    children: "Alexandra Morgan — Architecture Portfolio"
                }), e.jsx("p", {
                    className: "text-stone-500 max-w-xl leading-relaxed",
                    children: "A curated selection of built work and competition entries spanning civic buildings, residential design, and mixed-use urban infill projects."
                })]
            }), e.jsxs("div", {
                className: "flex flex-wrap gap-4 mb-10",
                children: [e.jsxs("a", {
                    href: t,
                    download: "Alexandra_Morgan_Architecture_Portfolio.pdf",
                    className: "inline-flex items-center gap-2 bg-stone-900 text-white text-sm px-5 py-3 rounded font-medium hover:bg-stone-700 transition-colors",
                    children: [e.jsx(s, {
                        size: 16
                    }), "Download PDF"]
                }), e.jsxs("a", {
                    href: t,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 border border-stone-300 text-stone-700 text-sm px-5 py-3 rounded font-medium hover:bg-white transition-colors",
                    children: [e.jsx(n, {
                        size: 16
                    }), "Open in new tab"]
                })]
            }), e.jsxs("div", {
                className: "bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm",
                children: [e.jsxs("div", {
                    className: "bg-stone-100 border-b border-stone-200 px-5 py-3 flex items-center gap-3",
                    children: [e.jsx(o, {
                        size: 16,
                        className: "text-stone-500"
                    }), e.jsx("span", {
                        className: "text-sm text-stone-600 font-medium",
                        children: "Alexandra_Morgan_Architecture_Portfolio.pdf"
                    })]
                }), e.jsx("div", {
                    className: "relative w-full",
                    style: {
                        height: "80vh",
                        minHeight: "600px"
                    },
                    children: e.jsx("object", {
                        data: t,
                        type: "application/pdf",
                        className: "w-full h-full",
                        "aria-label": "Architecture Portfolio PDF",
                        children: e.jsxs("div", {
                            className: "flex flex-col items-center justify-center h-full gap-6 p-12 text-center",
                            children: [e.jsx(o, {
                                size: 48,
                                className: "text-stone-300"
                            }), e.jsxs("div", {
                                children: [e.jsx("p", {
                                    className: "text-stone-600 font-medium mb-2",
                                    children: "PDF preview not available in your browser"
                                }), e.jsx("p", {
                                    className: "text-stone-400 text-sm mb-6",
                                    children: "Please download or open the portfolio to view it."
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-wrap gap-3 justify-center",
                                children: [e.jsxs("a", {
                                    href: t,
                                    download: "Alexandra_Morgan_Architecture_Portfolio.pdf",
                                    className: "inline-flex items-center gap-2 bg-stone-900 text-white text-sm px-5 py-2.5 rounded hover:bg-stone-700 transition-colors",
                                    children: [e.jsx(s, {
                                        size: 15
                                    }), "Download PDF"]
                                }), e.jsxs("a", {
                                    href: t,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center gap-2 border border-stone-300 text-stone-700 text-sm px-5 py-2.5 rounded hover:bg-stone-50 transition-colors",
                                    children: [e.jsx(n, {
                                        size: 15
                                    }), "Open in new tab"]
                                })]
                            })]
                        })
                    })
                })]
            }), e.jsx("p", {
                className: "mt-6 text-xs text-stone-400 text-center",
                children: "Portfolio updated March 2025 · 28 pages · PDF format"
            })]
        })
    })
}
export {x as component};
