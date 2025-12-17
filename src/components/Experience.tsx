import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const experiences = [
	{
		title: "Co-Founder",
		company: "BERAM Pvt. Ltd.",
		location: "Nagpur",
		period: "June 2025 – Present",
		link: "https://beramdrones.com",
		works: [
			{
				title: "UTMS‑MVP : Unmanned Traffic Management System",
				description: [
					"Built an interactive React dashboard to monitor and control drone state, missions, and safety workflows in real time.",
					"Implemented live telemetry streaming over WebSockets for continuous updates of position, attitude, battery, and mission status.",
					"Developed Python backend scripts (Flask + pymavlink) to handle MAVLink communication, mission execution, and failsafe logic with the Pixhawk flight controller.",
				],
				tech: ["React", "Node.js", "Python", "Flask", "WebSocket" ,"MAVLink"],
				image: "/assets/utms-dashboard.png",
			},
			{
				title: "Indigenous Server : A Self-Hosted Infrastructure",
				description: [
					"Architected and deployed an indigenous on-prem server from repurposed old PC for secure, cost-effective hosting.",
					"Set up Ubuntu, Nginx, and Cloudflare Tunnel to reliably host the BERAM website with secure remote access.",
					"Implemented self-hosted infrastructure eliminating vendor dependency and reducing operational costs.",
				],
				tech: ["Ubuntu", "Nginx", "Cloudflare Tunnel", "Linux", "Web Hosting"],
				image: "/assets/Indegenous-server.jpg",
			},
		],
	},
];

const positions: never[] = [];

export function Experience() {
	return (
		<section id="experience" className="section-padding bg-secondary/30">
			<div className="container mx-auto px-4">
				<div className="text-center mb-8 sm:mb-10">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
						Work{" "}
						<span className="gradient-text">Experience</span>
					</h2>
				</div>

				{/* Work Experience */}
				<div className="mb-8 sm:mb-12">
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-center">
						Professional Experience
					</h3>
					<div className="max-w-6xl mx-auto">
						{experiences.map((exp, index) => (
							<Card key={index} className="card-hover border-border mb-4 sm:mb-6">
								<CardHeader className="pb-2 sm:pb-3">
									<div className="flex flex-col gap-3 sm:gap-4">
										<div>
											<CardTitle className="text-lg sm:text-xl md:text-2xl">{exp.company}</CardTitle>
											<CardDescription className="text-xs sm:text-sm md:text-base font-medium text-primary">
												{exp.title}
											</CardDescription>
										</div>
                    
                    {exp.link && (
										<div className="flex flex-col items-start sm:items-center gap-1 text-xs sm:text-sm">
											<span className="text-muted-foreground">beramdrones.com</span>
											<a
												href={exp.link}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1 text-primary hover:underline"
											>
												Visit Website{" "}
												<ExternalLink className="h-3 w-3" />
											</a>
										</div>
									)}

										<div className="flex flex-col gap-2 text-xs sm:text-sm text-muted-foreground">
											<span className="flex items-center gap-1">
												<MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
												{exp.location}
											</span>
											<span className="flex items-center gap-1">
												<Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
												{exp.period}
											</span>
										</div>
                  </div>
								</CardHeader>
								<CardContent className="px-4 sm:px-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
										{exp.works?.map((work, workIndex) => (
											<Card key={workIndex} className="h-full border-border bg-secondary/40 shadow-sm">
												<CardContent className="p-3 sm:p-4 space-y-2 sm:space-y-3">
													<h4 className="text-sm sm:text-base md:text-lg font-semibold">{work.title}</h4>
													{work.image && (
														<figure className="border border-border rounded-lg overflow-hidden">
															<img
																src={work.image}
																alt={work.title}
																loading="lazy"
																className="w-full h-32 sm:h-40 md:h-48 object-cover"
															/>
														</figure>
													)}
													<div className="flex flex-wrap gap-1 sm:gap-2">
														{work.tech.map((tech, i) => (
															<Badge key={i} variant="secondary" className="text-xs sm:text-sm py-0.5 sm:py-1">
																{tech}
															</Badge>
														))}
													</div>
													<ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
														{work.description.map((item, i) => (
															<li key={i} className="leading-tight sm:leading-normal">{item}</li>
														))}
													</ul>
												</CardContent>
											</Card>
										))}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
