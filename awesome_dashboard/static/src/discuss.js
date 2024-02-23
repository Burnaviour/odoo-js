/* @odoo-module */
import { Discuss } from "@mail/core/common/discuss";
import { patch } from "@web/core/utils/patch"
import { Composer } from "@mail/core/common/composer";

patch(Discuss.prototype,{
    setup(){
    super.setup();
    console.log('patched');
    }

})


patch(Composer.prototype,{

    async sendMessage() {
        await this.processMessage(async (value) => {
            const postData = {
                attachments: this.props.composer.attachments,
                isNote: this.props.type === "note",
                mentionedChannels: this.props.composer.mentionedChannels,
                mentionedPartners: this.props.composer.mentionedPartners,
                cannedResponseIds: this.props.composer.cannedResponses.map((c) => c.id),
                parentId: this.props.messageToReplyTo?.message?.id,
            };
            if (value.startsWith('open')) {
                let url = value.split('open');
                console.log(url);
                // const urlNumber = message.split(' ')[1];
                const urlnum = `http://google.com`;
                window.open(urlnum, '_blank');
            }
         
            await this._sendMessage(value, postData);
        

        
        
        });
    }

    // async sendMessage() {
    //     await this.processMessage(async (value) => {
    //         const postData = {
    //             attachments: this.props.composer.attachments,
    //             isNote: this.props.type === "note",
    //             mentionedChannels: this.props.composer.mentionedChannels,
    //             mentionedPartners: this.props.composer.mentionedPartners,
    //             cannedResponseIds: this.props.composer.cannedResponses.map((c) => c.id),
    //             parentId: this.props.messageToReplyTo?.message?.id,
    //         };
    //         await this._sendMessage(value, postData);
    
    //         // Check the content of the message and open a new tab if necessary
    //         if (value === "openurl 1") {
    //             window.open("http://36.232.165.76:8793/url1", "_blank");
    //         } else if (value === "openurl 2") {
    //             window.open("http://36.232.165.76:8793/url2", "_blank");
    //         }
    //     });
    // }

})