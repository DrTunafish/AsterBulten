import { useState } from 'react'
import SEO from '@/components/SEO'
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react'

/**
 * İletişim sayfası - iletişim formu
 */
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Form endpoint'i - Formspree, Netlify Forms, veya özel serverless function
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '#'

      if (endpoint === '#') {
        // Demo mod - gerçek submit yok
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        // Gerçek submit
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setSubmitStatus('success')
          setFormData({ name: '', email: '', subject: '', message: '' })
        } else {
          setSubmitStatus('error')
        }
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="İletişim"
        description="Astronomi Dergisi ile iletişime geçin - Sorularınız, önerileriniz için bize ulaşın"
        url="/contact"
      />

      <div className="section-spacing">
        <div className="container-custom">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-gradient">Bize Ulaşın</span>
            </h1>
            <p className="text-xl text-cosmos-muted max-w-3xl mx-auto leading-relaxed">
              Sorularınız, önerileriniz veya iş birliği teklifleriniz için bizimle iletişime
              geçmekten çekinmeyin. Size yardımcı olmaktan mutluluk duyarız.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* İletişim Bilgileri */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cosmos-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cosmos-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">E-posta</h3>
                    <a
                      href="mailto:info@astronomi-dergisi.com"
                      className="text-cosmos-muted hover:text-cosmos-accent transition-colors text-sm"
                    >
                      info@astronomi-dergisi.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cosmos-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cosmos-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                    <a
                      href="tel:+902121234567"
                      className="text-cosmos-muted hover:text-cosmos-accent transition-colors text-sm"
                    >
                      +90 (212) 123 45 67
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cosmos-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cosmos-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adres</h3>
                    <p className="text-cosmos-muted text-sm">
                      Astronomi Mahallesi
                      <br />
                      Teleskop Sokak No: 42
                      <br />
                      34000 İstanbul, Türkiye
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 bg-cosmos-accent/5 border-cosmos-accent/20">
                <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
                <div className="space-y-1 text-sm text-cosmos-muted">
                  <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p>Cumartesi: 10:00 - 16:00</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </div>
            </div>

            {/* İletişim Formu */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">Mesaj Gönderin</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cosmos-blue border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cosmos-accent focus:border-transparent transition-all"
                        placeholder="Ahmet Yıldız"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-posta Adresiniz *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cosmos-blue border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cosmos-accent focus:border-transparent transition-all"
                        placeholder="ahmet@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Konu *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cosmos-blue border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cosmos-accent focus:border-transparent transition-all"
                      placeholder="Dergi hakkında sorum var"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cosmos-blue border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cosmos-accent focus:border-transparent transition-all resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg">
                      ✓ Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız!
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg">
                      ✗ Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya doğrudan e-posta
                      gönderin.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Gönderiliyor...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Mesajı Gönder</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage

