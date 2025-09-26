import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!"
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "hena.patel0002@temple.edu",
    link: "mailto:hena.patel0002@temple.edu"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+1 (267) 901-9346",
    link: "tel:+12679019346"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Philadelphia, PA",
    link: null
  }];
  const socialLinks = [{
    icon: Github,
    label: "GitHub",
    link: "https://github.com",
    color: "hover:text-gray-600"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    link: "https://linkedin.com",
    color: "hover:text-blue-600"
  }, {
    icon: Twitter,
    label: "Twitter",
    link: "https://twitter.com",
    color: "hover:text-blue-400"
  }];
  return <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having 
              a conversation about technology. Let's connect!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-2" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} required className="mt-2" />
                </div>
                
                <Button type="submit" className="w-full glow-effect">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => <div key={index} className="flex items-center">
                      <info.icon className="h-6 w-6 text-primary mr-4" />
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.link ? <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                            {info.value}
                          </a> : <p className="text-muted-foreground">{info.value}</p>}
                      </div>
                    </div>)}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-6">Follow Me</h2>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 transition-all duration-300 hover:scale-110 ${social.color}`} aria-label={social.label}>
                      <social.icon className="h-6 w-6" />
                    </a>)}
                </div>
              </Card>

              {/* Availability */}
              <Card className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-4">Availability</h2>
                <p className="text-muted-foreground mb-4">Currently seeking full-time opportunities starting Su. Available for internships and freelance projects.</p>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Available for hire</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;