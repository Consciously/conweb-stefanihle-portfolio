import React, { useState } from 'react';
import { Col, Row, Tab, Table, Tabs } from 'react-bootstrap';
import formatMoney from '../utils/FormatMoney';
import SEO from '../components/SEO';

export default function ServicePage() {
	const [key, setKey] = useState('oneShot');
	return (
		<>
			<SEO title={`Page about my services I provide`} />
			<main className='container py-5'>
				<Row>
					<Col>
						<Tabs
							id='controlled-tab-example'
							activeKey={key}
							onSelect={k => setKey(k)}
						>
							<Tab eventKey='onShot' title='OnShot-Plan'>
								<p>
									These plans are suitable if you want a static website. It
									contains creating, testing and deploying your website execpt
									Minimal-Plan. For Minimal-Plan you can order if you want
								</p>
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Features</th>
											<th>Minimal-Plan</th>
											<th>Standard-Plan</th>
											<th>Premium-Plan</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Perfect for:</td>
											<td>
												Small websites (eg. a landing page or business card
												website
											</td>
											<td>Middle sized websites like a portfolio website</td>
											<td>Bigger websites</td>
										</tr>
										<tr>
											<td>Amount of pages</td>
											<td>Up to 4 static pages</td>
											<td>Up to 8 static pages</td>
											<td>Up to 12 static pages</td>
										</tr>
										<tr>
											<td>Website</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>
										<tr>
											<td>Testing</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>
										<tr>
											<td>Source code</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>
										<tr>
											<td>Briefing</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>
										<tr>
											<td>Deployment</td>
											<td>
												<small>{formatMoney(5000)} optional</small>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>
										<tr>
											<td>Optimizations</td>
											<td>
												<small>{formatMoney(7500)} optional</small>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>
										<tr>
											<td>Additional tasks</td>
											<td>
												<small>{formatMoney(10000)} optional</small>
											</td>
											<td>
												<small>{formatMoney(10000)} optional</small>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>
										<tr>
											<td>Cost per Website</td>
											<td>{formatMoney(25000)}</td>
											<td>{formatMoney(50000)}</td>
											<td>{formatMoney(100000)}</td>
										</tr>
									</tbody>
								</Table>
							</Tab>
							<Tab eventKey='permanently' title='Permanently-Plan'>
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Features</th>
											<th>Minimal-Plan</th>
											<th>Standard-Plan</th>
											<th>Premium-Plan</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Perfect for:</td>
											<td>
												Small dynamic websites (eg. a small blog or farm shop
												website)
											</td>
											<td>Middle sized websites</td>
											<td>Bigger websites</td>
										</tr>
										<tr>
											<td>Amount of pages</td>
											<td>Up to 4 static pages and dynamic pages as needed</td>
											<td>Up to 8 static pages and dynamic pages as needed</td>
											<td>Up to 12 static pages and dynamic pages as needed</td>
										</tr>
										<tr>
											<td>Website</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>

										<tr>
											<td>CMS integration</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>
										<tr>
											<td>Testing</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>
										<tr>
											<td>Source code</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>
										<tr>
											<td>Briefing</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>
										<tr>
											<td>Deployment</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
											<td>
												<span role='img' aria-label='check'>
													✅
												</span>
											</td>
										</tr>

										<tr>
											<td colSpan='5'>Subscription Features</td>
										</tr>
										<tr>
											<td>CMS service</td>
											<td>minimal</td>
											<td>standard</td>
											<td>premium</td>
										</tr>
										<tr>
											<td>Testing serice</td>
											<td>minimal</td>
											<td>standard</td>
											<td>premium</td>
										</tr>
										<tr>
											<td>Optimization service</td>
											<td>minimal</td>
											<td>standard</td>
											<td>premium</td>
										</tr>
										<tr>
											<td>Security service</td>
											<td>minimal</td>
											<td>standard</td>
											<td>premium</td>
										</tr>
										<tr>
											<td>Support service</td>
											<td>minimal</td>
											<td>standard</td>
											<td>premium</td>
										</tr>
										<tr>
											<td>Cost per Website</td>
											<td>{formatMoney(25000)}</td>
											<td>{formatMoney(50000)}</td>
											<td>{formatMoney(100000)}</td>
										</tr>
										<tr>
											<td>Cost per Month</td>
											<td>{formatMoney(7500)}</td>
											<td>{formatMoney(22500)}</td>
											<td>{formatMoney(45000)}</td>
										</tr>
									</tbody>
								</Table>
							</Tab>
						</Tabs>
					</Col>
				</Row>
			</main>
		</>
	);
}
