// MIT License
// Copyright (c) 2026 Open2b
// See the LICENSE file for full text.

function setupKetch(onConsent) {
	const k = window.ketch
	const cb = (config) => onConsent(config.purposes)
	k('on', 'consent', cb)
	k('on', 'userConsentUpdated',  cb)
}

export default setupKetch;
