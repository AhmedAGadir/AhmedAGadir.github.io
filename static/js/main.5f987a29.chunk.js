(this["webpackJsonparabic-progress-bar"] =
	this["webpackJsonparabic-progress-bar"] || []).push([
	[0],
	{
		83: function (e, t, a) {},
		84: function (e, t, a) {},
		89: function (e) {
			e.exports = JSON.parse(
				'[{"book":1,"chapters":23},{"book":2,"chapters":31},{"book":3,"chapters":34}]'
			);
		},
		93: function (e, t, a) {
			"use strict";
			a.r(t);
			var n = a(2),
				r = a(0),
				c = a(10),
				o = a.n(c),
				i = (a(83), a(84), a(68)),
				s = a(16),
				l = a(131),
				u = a(138),
				j = a(140),
				b = a(132),
				h = a(137),
				m = a(139),
				d = a(50),
				p = a(130),
				f = a(128),
				g = Object(f.a)(function (e) {
					return {
						circularProgress: {
							transform: "scale(1)",
							animation: function (e) {
								return e.animate ? "pulse 1s forwards" : null;
							},
						},
					};
				});
			var O = function (e) {
					var t = Object(r.useState)(!1),
						a = Object(s.a)(t, 2),
						c = a[0],
						o = a[1];
					Object(r.useEffect)(
						function () {
							o(!0),
								setTimeout(function () {
									o(!1);
								}, 1e3);
						},
						[e.value]
					);
					var i = g({ animate: c });
					return Object(n.jsxs)(u.a, {
						position: "relative",
						display: "inline-flex",
						children: [
							Object(n.jsx)(
								p.a,
								Object(d.a)(
									{
										size: 300,
										thickness: 2.4,
										variant: "determinate",
										color: e.value < 100 ? "primary" : "secondary",
									},
									e
								)
							),
							Object(n.jsx)(u.a, {
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
								position: "absolute",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								children: Object(n.jsxs)(l.a, {
									className: i.circularProgress,
									variant: "h5",
									component: "div",
									color: e.value < 100 ? "primary" : "secondary",
									children: [
										"".concat(Math.round(e.value), "%"),
										Object(n.jsx)(l.a, {
											variant: "inherit",
											color: "textPrimary",
											children: " COMPLETED",
										}),
									],
								}),
							}),
						],
					});
				},
				x = Object(f.a)(function (e) {
					return {
						formControl: { margin: e.spacing(1), minWidth: 180 },
						button: {
							margin: e.spacing(1),
							width: 150,
							fontWeight: "bold",
							display: "inline",
						},
					};
				});
			var v = function () {
					var e = a(89),
						t = [1, 2, 3],
						c = Object(r.useState)(t[0]),
						o = Object(s.a)(c, 2),
						d = o[0],
						p = o[1];
					Object(r.useEffect)(function () {
						var e = localStorage.getItem("madinah-book");
						p(e ? parseInt(e) : t[0]);
					}, []);
					var f = Object(r.useState)(""),
						g = Object(s.a)(f, 2),
						v = g[0],
						y = g[1],
						k = Object(r.useState)(0),
						S = Object(s.a)(k, 2),
						w = S[0],
						I = S[1],
						C = Object(r.useState)(0),
						B = Object(s.a)(C, 2),
						A = B[0],
						N = B[1];
					Object(r.useEffect)(
						function () {
							var e = JSON.parse(
								localStorage.getItem("MB".concat(d, "-progress"))
							);
							e ? ((e = parseInt(e)), y(e)) : y(0),
								z(),
								localStorage.setItem("madinah-book", d);
						},
						[d]
					),
						Object(r.useEffect)(
							function () {
								"" !== v && E();
							},
							[v]
						);
					var z = function () {
						var t = e.find(function (e) {
							return e.book === d;
						}).chapters;
						I(t);
					};
					Object(r.useEffect)(
						function () {
							E();
						},
						[w]
					);
					var E = function () {
							var e;
							(e = v ? Math.floor((100 * v) / w) : 0),
								N(e),
								localStorage.setItem(
									"MB".concat(d, "-progress"),
									JSON.stringify(v)
								);
						},
						P = x();
					return Object(n.jsxs)(n.Fragment, {
						children: [
							Object(n.jsx)(u.a, {
								children: t.map(function (e) {
									return Object(n.jsxs)(
										m.a,
										{
											variant: d === e ? "contained" : "outlined",
											className: P.button,
											onClick: function () {
												return p(e);
											},
											children: ["Book ", e],
										},
										e
									);
								}),
							}),
							Object(n.jsxs)(u.a, {
								margin: 2,
								children: [
									Object(n.jsx)(l.a, {
										variant: "h4",
										component: "h4",
										children:
											"\u062f\u0631\u0648\u0633 \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629",
									}),
									Object(n.jsxs)(l.a, {
										variant: "h2",
										component: "h2",
										gutterBottom: !0,
										children: [
											"Madinah Book ",
											Object(n.jsx)(l.a, {
												variant: "inherit",
												color: A < 100 ? "primary" : "secondary",
												children: d,
											}),
										],
									}),
								],
							}),
							Object(n.jsx)(u.a, {
								marginBottom: 4,
								children: Object(n.jsx)(O, { value: A }),
							}),
							Object(n.jsx)(u.a, {
								children: Object(n.jsxs)(b.a, {
									variant: "outlined",
									className: P.formControl,
									children: [
										Object(n.jsx)(j.a, { children: "Chapter" }),
										Object(n.jsx)(h.a, {
											native: !0,
											value: v,
											onChange: function (e) {
												return y(parseInt(e.target.value));
											},
											label: "Chapter",
											children: [
												Object(n.jsx)("option", { value: "" }, ""),
											].concat(
												Object(i.a)(
													Array.from({ length: w }, function (e, t) {
														return t + 1;
													}).map(function (e) {
														return Object(n.jsx)(
															"option",
															{ value: e, children: e },
															e
														);
													})
												)
											),
										}),
									],
								}),
							}),
						],
					});
				},
				y = a(133),
				k = Object(f.a)(function (e) {
					return {
						button: {
							margin: e.spacing(1),
							width: 150,
							fontWeight: "bold",
							display: "inline",
						},
					};
				});
			var S = function (e) {
					var t = k();
					return Object(n.jsx)(n.Fragment, {
						children: Object(n.jsxs)(y.a, {
							maxWidth: "md",
							children: [
								Object(n.jsx)(l.a, {
									variant: "h4",
									component: "h4",
									children:
										"\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645 \u0648\u0631\u062d\u0645\u0629 \u0627\u0644\u0644\u0647 \u0648\u0628\u0631\u0643\u0627\u062a\u0647",
								}),
								Object(n.jsxs)(l.a, {
									variant: "h2",
									component: "h2",
									gutterBottom: !0,
									children: [
										"Track your progress with the ",
										Object(n.jsx)(l.a, {
											variant: "inherit",
											color: "primary",
											children: "Madinah Books",
										}),
										"!",
									],
								}),
								Object(n.jsxs)(y.a, {
									maxWidth: "sm",
									children: [
										Object(n.jsx)(l.a, {
											component: "p",
											paragraph: !0,
											children:
												"A simple web app to help students of the arabic language stay motivated\ud83d\ude4f\ud83c\udffe.",
										}),
										Object(n.jsxs)(l.a, {
											component: "p",
											paragraph: !0,
											children: [
												"A big thanks to Dr. V Abdur Rahim for authoring these amazing books and Ustadh Asif Meherali for his gift in teaching them.",
												Object(n.jsx)("br", {}),
											],
										}),
										Object(n.jsxs)(l.a, {
											component: "p",
											paragraph: !0,
											children: [
												"Some useful links:",
												Object(n.jsx)("br", {}),
												Object(n.jsx)("a", {
													href: "https://www.amazon.co.uk/Arabic-Course-English-Speaking-Students-complete/dp/B004NIIV9C/ref=sr_1_9?dchild=1&keywords=madinah+books&qid=1610816209&sr=8-9",
													target: "_blank",
													rel: "noreferrer",
													children: "Amazon link to buy the books",
												}),
												Object(n.jsx)("br", {}),
												"LQToronto Playlist ",
												Object(n.jsx)("a", {
													href: "https://www.youtube.com/c/LearnarabicInfo/playlists",
													target: "_blank",
													rel: "noreferrer",
													children: "YouTube",
												}),
												" / ",
												Object(n.jsx)("a", {
													href: "http://www.lqtoronto.com/videodlmac.html",
													target: "_blank",
													rel: "noreferrer",
													children: "lqtoronto.com",
												}),
												Object(n.jsx)("br", {}),
												Object(n.jsx)("a", {
													href: "http://www.lqtoronto.com/forums/",
													target: "_blank",
													rel: "noreferrer",
													children: "LQToronto Forum",
												}),
											],
										}),
										Object(n.jsx)(m.a, {
											variant: "contained",
											className: t.button,
											onClick: function () {
												return setTimeout(e.nextPage, 500);
											},
											children: "Next",
										}),
									],
								}),
							],
						}),
					});
				},
				w = a(57),
				I = Object(f.a)(function (e) {
					return {
						carouselPage: {
							textAlign: "center",
							minHeight: "100vh",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							fontSize: "calc(10px + 2vmin)",
						},
					};
				});
			var C = function (e) {
					var t = Object(r.useState)(null),
						a = Object(s.a)(t, 2),
						c = a[0],
						o = a[1];
					Object(r.useEffect)(function () {
						var e = localStorage.getItem("madinah-carousel-page");
						o(e ? parseInt(e) : 0);
					}, []);
					var i = I();
					return null === c
						? Object(n.jsx)(n.Fragment, {})
						: Object(n.jsx)(n.Fragment, {
								children: Object(n.jsx)(w.a, {
									activeIndex: c,
									onSelect: function (e, t) {
										o(e), localStorage.setItem("madinah-carousel-page", e);
									},
									wrap: !1,
									interval: null,
									children: e.pages.map(function (e, t) {
										return Object(n.jsx)(
											w.a.Item,
											{
												children: Object(n.jsx)(u.a, {
													className: i.carouselPage,
													children: Object(n.jsx)(e, {
														nextPage: function () {
															return o(c + 1);
														},
													}),
												}),
											},
											t
										);
									}),
								}),
						  });
				},
				B = Object(f.a)(function (e) {
					return {
						fixedBottomRight: {
							position: "fixed",
							bottom: 0,
							right: 0,
							width: 40,
							margin: 20,
							transition: "all 0.2s ease",
							zIndex: 999,
							cursor: "pointer",
						},
					};
				}),
				A = function () {
					var e = B();
					return Object(n.jsx)("a", {
						href: "https://github.com/AhmedAGadir/arabic-progress-bar",
						target: "_blank",
						children: Object(n.jsx)("img", {
							className: e.fixedBottomRight,
							src: "https://res.cloudinary.com/ahmedagadir/image/upload/v1530726623/product-landing-page/github-sign.svg",
							alt: "GitHub repository",
							title: "GitHub repository",
						}),
					});
				},
				N = a(65),
				z = a.n(N),
				E = a(66),
				P = a.n(E),
				F = a(134),
				M = a(136),
				T = a(55),
				L = a.n(T),
				_ = a(64),
				J = a.n(_),
				W = a(56),
				q = a.n(W),
				D = a(67),
				G = a(135),
				H = Object(f.a)(function (e) {
					return {
						fixedBottomLeft: {
							position: "fixed",
							bottom: 0,
							left: 0,
							width: 40,
							margin: 20,
							transition: "all 0.2s ease",
							zIndex: 999,
							cursor: "pointer",
						},
					};
				}),
				R = {
					h2: {
						fontSize: "3.75rem",
						"@media (max-width:600px)": { fontSize: "3rem" },
					},
				},
				Q = {
					dark: {
						palette: {
							type: "dark",
							primary: { main: J.a[500] },
							secondary: { main: L.a[500] },
							background: { default: "#282c34" },
						},
						typography: R,
					},
					light: {
						palette: {
							type: "light",
							primary: { main: q.a.A400 },
							secondary: { main: L.a.A400 },
							background: {},
							text: { primary: q.a[900] },
						},
						typography: R,
					},
				},
				V = function (e) {
					return function (t) {
						var a = Object(F.a)("(prefers-color-scheme: light)"),
							c = Object(D.a)(Q.dark),
							o = Object(D.a)(Q.light),
							i = Object(r.useState)(c),
							l = Object(s.a)(i, 2),
							j = l[0],
							b = l[1];
						Object(r.useEffect)(function () {
							var e = localStorage.getItem("madinah-web-theme");
							b(e ? ("light" === e ? o : c) : a ? o : c);
						}, []);
						var h = H();
						return Object(n.jsxs)(G.a, {
							theme: j,
							children: [
								Object(n.jsx)(M.a, {}),
								Object(n.jsx)(e, Object(d.a)({ theme: j }, t)),
								Object(n.jsx)(u.a, {
									className: h.fixedBottomLeft,
									onClick: function () {
										var e = "dark" === j.palette.type ? o : c;
										b(e),
											localStorage.setItem("madinah-web-theme", e.palette.type);
									},
									children:
										"dark" === j.palette.type
											? Object(n.jsx)(z.a, { fontSize: "large" })
											: Object(n.jsx)(P.a, { fontSize: "large" }),
								}),
							],
						});
					};
				},
				Y =
					(a(92),
					V(function () {
						return Object(n.jsxs)(n.Fragment, {
							children: [
								Object(n.jsx)(C, { pages: [S, v] }),
								Object(n.jsx)(A, {}),
							],
						});
					})),
				K = function (e) {
					e &&
						e instanceof Function &&
						a
							.e(3)
							.then(a.bind(null, 142))
							.then(function (t) {
								var a = t.getCLS,
									n = t.getFID,
									r = t.getFCP,
									c = t.getLCP,
									o = t.getTTFB;
								a(e), n(e), r(e), c(e), o(e);
							});
				};
			o.a.render(Object(n.jsx)(Y, {}), document.getElementById("root")), K();
		},
	},
	[[93, 1, 2]],
]);
//# sourceMappingURL=main.5f987a29.chunk.js.map
