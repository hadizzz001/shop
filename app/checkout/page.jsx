"use client"



import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { fetchRate1 } from '@/utils'
import { LoadScript } from '@react-google-maps/api';
import AddressForm from '../../components/AddressForm';
// import Checkout from '../../components/Checkout';
// import WrappedCheckoutForm from '../../components/CardElement';
import { useCart } from '../context/CartContext';
import ElementsForm from "@/components/ElementsForm";


const page = () => {
  const [isBooleanValue2, setBooleanValue2] = useState(false);
  const [selectedDialCode, setSelectedDialCode] = useState('+61'); // Initial dial code
  const [selectedOption, setSelectedOption] = useState(7.5);
  const [allTemp, setTemp] = useState()
  const { cart, removeFromCart, quantities, subtotal, addToCart } = useCart();
  const [localQuantities, setLocalQuantities] = useState(quantities);
  const [errors, setErrors] = useState({});
  const [value, setValue] = useState('');
  const [phone, setPhone] = useState("");

  const [inputs, setInputs] = useState({
    email: "",
    fname: "",
    lname: "",
    phone: "",
    suburb: '',
    state: '',
    country: '',
    postcode: '',
    street: '',
    shipping: selectedOption
  });

  const handleAddressData = (data) => {
    setInputs(prevInputs => ({
      ...prevInputs,
      ...data
    }));
  }

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Ensure this is set in your .env.local file


  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setInputs(prevInputs => ({
      ...prevInputs,
      shipping: option
    }));
  };

  const RadioOption = ({ option, label }) => (
    <div
      onClick={() => handleOptionChange(option)}
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
          backgroundColor: selectedOption === option ? '#e0e0e0' : 'transparent',
        }}
      >
        {label}
      </div>
      {selectedOption === option && (
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: '#ea6a2b', marginLeft: '10px' }}
        />
      )}
    </div>
  );


  const handleClickzx = (e) => {
    const countryCode = e.currentTarget.getAttribute('onClick={handleClickzx} data-country-code');
    const dialCode = e.currentTarget.getAttribute('data-dial-code');
    setSelectedDialCode("+" + dialCode);
  };



  const handleClickP = () => {
    var pb = document.getElementById("iti-0__country-listbox");
    setBooleanValue2(!isBooleanValue2);
    if (pb) {
      if (isBooleanValue2) {
        pb.className += " iti__hide";
      }
      else {
        pb.classList.remove("iti__hide");
      }
    }
  };









  const a = async () => {
    const b = await fetchRate1(5)
    setTemp(b)
  }
  useEffect(() => {
    a()
  }, [])





  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleQuantityChange = (itemId, quantity) => {
    addToCart(
      cart.find((item) => item.id === itemId),
      undefined, // No additionalInfo update here
      quantity
    );

    // Update localQuantities immediately (local state)
    setLocalQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  };

  useEffect(() => {
    // Update quantities in the context when localQuantities change
    setLocalQuantities(quantities);
  }, [quantities]);



  const hasAdditionalInfo = (item) => {
    return item.additionalInfo && Object.keys(item.additionalInfo).length > 0;
  };


  useEffect(() => {
    const newErrors = {};
    cart.forEach((item) => {
      if (!hasAdditionalInfo(item)) {
        newErrors[item.id] = 'Info is missing';
      }
    });
    setErrors(newErrors);
  }, [cart]);






  const handleTextboxChange = (textboxName) => (e) => {

    setInputs((prevValues) => ({
      ...prevValues,
      [textboxName]: e.target.value,
    }));
  };


  useEffect(() => {
    console.log("inputs:");
    console.log(inputs);
  }, [inputs]);


  useEffect(() => {
    // Whenever selectedDialCode changes, update the phone number in inputs state
    setInputs(prevInputs => ({
      ...prevInputs,
      phone: selectedDialCode + phone
    }));
  }, [selectedDialCode, phone]);

  const handlePhoneChange = (e) => {
    let { value } = e.target;
    // Remove non-numeric characters
    value = value.replace(/\D/g, '');
    // Update the phone number state
    setPhone(value);
  };


 







  return (
    <>


      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t.input-text{\n\t\tborder-style: solid;\n    border-width: 1px 1px 1px 1px;\n    border-color: #DFDBD4 !important;\n    border-radius: 4px 4px 4px 4px;\n\t}\n\t"
        }}
      />

      <link
        rel="stylesheet"
        id="sublime-theme-style-css"
        href="css/style.css?ver=1.0.0"
        type="text/css"
        media="all"
      />

      <link
        rel="stylesheet"
        id="elementor-frontend-css"
        href="css/frontend-lite.min.css?ver=3.20.3"
        type="text/css"
        media="all"
      />

      <link
        rel="stylesheet"
        id="elementor-post-20120-css"
        href="css/post-20120.css?ver=1712762276"
        type="text/css"
        media="all"
      />

      <link
        rel="stylesheet"
        id="wfacp-elementor-style-css"
        href="css/wfacp_combined.min.css?ver=3.14.0"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wfacp-intl-css-css"
        href="css/intlTelInput.css?ver=3.14.0"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-style-css"
        href="css/wfacp-form.min.css?ver=3.14.0"
        type="text/css"
        media=""
      />

      {cart && cart.length > 0 ? (
        <div className="wfacp-template-container">
          <div
            data-elementor-type="wp-post"
            data-elementor-id={20120}
            className="elementor elementor-20120"
            data-elementor-post-type="wfacp_checkout"
          >

            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-b92d2c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="b92d2c"
              data-element_type="section"
              data-settings='{"background_background":"gradient"}'
              style={{ backgroundImage: " linear-gradient(90deg, #FFFFFF 50%, #e9e9e9 50%)" }}
            >
              <div className="elementor-container elementor-column-gap-default">
                <div
                  className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f1c046e"
                  data-id="f1c046e"
                  data-element_type="column"
                  data-settings='{"background_background":"classic"}'
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-451a47ba elementor-widget elementor-widget-wfacp_form"
                      data-id="451a47ba"
                      data-element_type="widget"
                      data-widget_type="wfacp_form.default"
                    >
                      <div className="elementor-widget-container">
                        <div id="wfacp-e-form">
                          <div id="wfacp-sec-wrapper">

                            <div className="wfacp-form wfacp-modern-label">
                              {" "}
                              <div className="wfacp_main_form woocommerce wfacp_single_step_form wfacp_three_step wfacp_global_checkout_wrap">
                                <div className="woocommerce-notices-wrapper" />
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "    body.wfacpef_page #wfacp-e-form .wfacp_main_form.woocommerce .wfacp-section.wfacp_order_coupon_box,\n    body.wfacpef_page #wfacp-e-form .wfacp_main_form.woocommerce .wfacp-section.wfacp_order_summary_box {\n    margin-bottom: 0;\n    }\n\thtml {\noverflow: auto !important;\n}\n.wfacp_firefox_android .pac-container .pac-item:first-child {\nmargin-top: 20px;\n}\nspan.wfacp_input_error_msg {\ncolor: red;\nfont-size: 13px;\n}\n\n.wfacp_custom_field_multiselect select {\nvisibility: hidden;}\n\n    .wfacp_page.single_step {\n    display: block;\n    }\n\n\t\n.wfacp_payment {\ndisplay: block;\n}\n\n.wfacp_payment.wfacp_hide_payment_part {\nvisibility: hidden;\nposition: fixed;\nz-index: -600;\nleft: -200%;\n}\n\n.wfacp_payment.wfacp_show_payment_part {\nvisibility: visible;\n}\n\n.wfacp_page.single_step .wfacp_payment {\ndisplay: block;\n}\n\n.wfacp_page.single_step .wfacp_next_page_button {\ndisplay: none;\n}\n\np#shipping_same_as_billing_field .optional {\ndisplay: none;\n}\n\np#billing_same_as_shipping_field .optional {\ndisplay: none;\n}\n\n.wfacp_shipping_fields.wfacp_shipping_field_hide {\ndisplay: none !important;\n}\n\n.wfacp_billing_fields.wfacp_billing_field_hide {\ndisplay: none !important;\n}\n\n\nspan.wfacp_required_field_message {\ndisplay: none;\n}\n\n.woocommerce-invalid-required-field span.wfacp_required_field_message {\ndisplay: inline;\n}\n\n.wfacp_country_field_hide {\ndisplay: none !important;\n}\n\n.wfacp_main_form .wfacp_shipping_table tr.shipping.wfacp_single_methods td.wfacp_shipping_package_name > p {\npadding: 0 0 10px;\n}\n\n.wfacp_main_form .wfacp_shipping_table tr.shipping.wfacp_single_methods td.wfacp_shipping_package_name {\npadding: 0 0 15px;\n}\nbody.wfacp_do_not_show_block .blockUI.blockOverlay{\n    display: none !important;\n}\n#wfacp_checkout_form.checkout.processing .blockUI.blockOverlay{\n    display: block !important;\n}\n#wfacp-e-form .wfacp_mb_mini_cart_sec_accordion_content {\nborder-top: none;\n}\n\n"
                                  }}
                                />
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "body #wfacp-e-form #payment ul.payment_methods li .card-brand-icons img{position: absolute;}.wfacp_smart_button_container #wc-stripe-payment-request-button-separator{display:none !important}.wfacp_smart_button_container #wc-stripe-payment-request-wrapper{margin-top:0 !important}"
                                  }}
                                />
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "body #wfacp-e-form #wfacp_checkout_form .ppcp-dcc-order-button{float: none;}.wfacp_main_wrapper.right #ppcp-hosted-fields .button {float: right;}.wfacp_main_wrapper.right #ppcp-hosted-fields:after,.wfacp_main_wrapper.right #ppcp-hosted-fields:before {display: block;content: '';}.wfacp_main_wrapper.right #ppcp-hosted-fields:after {clear: both;}"
                                  }}
                                />
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "body #wfacp-e-form .wfacp_woo_cart_abandonment_recovery:not(.wfacp-anim-wrap) label{bottom: auto;top: 18px;margin-top:0;}body #wfacp-e-form .wfacp_woo_cart_abandonment_recovery:not(.wfacp-anim-wrap) input.wfacp-form-control{padding-top: 10px;padding-bottom: 10px;}"
                                  }}
                                />
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '@keyframes shimmer{0%{background-position:-1000px 0}to{background-position:1000px 0}}.wfacp_anim_active .wfacp-qty-ball,.wfacp_anim_active .wfacp_anim tbody tr.cart_item>td .product-image .wfacp-pro-thumb .wfacp-qty-ball{display:none}.wfacp_anim_active .wfacp_anim.wfacp_pro_switch .product-image .wfacp-qty-ball{display:block}.wfacp_mb_mini_cart_sec_accordion_content .wfacp_quantity_selector,.wfacp_mini_cart_start_h .wfacp_quantity_selector{height:25px}.wfacp_anim_active .wfacp_mini_cart_start_h .wfacp_order_sum .product-image{border:none}.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr.cart-discount td span:after{display:none}.wfacp_anim_active #wfacp-e-form .wfacp_main_form .wfacp_shipping_table ul li .wfacp_shipping_price{width:auto!important}.wfacp_anim_active .wfacp_single_shipping .wfacp_shipping_price{display:inline-block}body.wfacp_anim_active .product-name span,body.wfacp_anim_active .wfacp_shipping_table ul#shipping_method label{display:inline-block!important}.wfacp_anim_active .shipping-method-description{display:inline-block}.wfacp_anim_active #payment .payment_method_stripe label[for=payment_method_stripe]{width:auto!important}.wfacp_anim_active #wfacp_checkout_form:not(.processing) .blockUI,.wfacp_anim_active .cart-discount th span svg,.wfacp_anim_active .wfacp_coupon_field_msg span:after,.wfacp_anim_active .wfacp_mini_cart_start_h .blockUI,.wfacp_anim_active .woocommerce-remove-coupon,.wfacp_collapsible_order_summary_wrap .blockUI,.wfacp_min_cart_widget .blockUI,.wfacp_mini_cart_start_h .blockUI,body #payment .blockUI{display:none!important}.wfacp_anim_active .wfacp_pro_switch .product-name .wfacp_product_switcher_item{display:inline-block!important}.wfacp_anim_active #shipping_method{background-image:none!important}#shipping_method li.wfacp_no_shipping span,.wfacp_anim_active #order_coupon_field .wfacp-coupon-page,.wfacp_anim_active #wfacp-e-form .wfacp_coupon_row,.wfacp_anim_active .amount,.wfacp_anim_active .first-payment-date,.wfacp_anim_active .includes_tax,.wfacp_anim_active .product-name strong.product-quantity,.wfacp_anim_active .shipping th:first-child span+small,.wfacp_anim_active .shipping-method-description,.wfacp_anim_active .shipping_total_fee span,.wfacp_anim_active .shipping_total_fee td:first-child span,.wfacp_anim_active .shipping_total_fee td:first-child span+small,.wfacp_anim_active .subscription-price span,.wfacp_anim_active .tax-total span,.wfacp_anim_active .tax_label,.wfacp_anim_active .wfacp-coupon-page .wfacp_coupon_field_box,.wfacp_anim_active .wfacp_best_value,.wfacp_anim_active .wfacp_coupon_msg .woocommerce-error,.wfacp_anim_active .wfacp_main_showcoupon,.wfacp_anim_active .wfacp_mb_mini_cart_sec_accordion_content .cart_item .wfacp_order_summary_item_name .wfacp_cart_title_sec,.wfacp_anim_active .wfacp_mini_cart_item_title,.wfacp_anim_active .wfacp_mini_cart_reviews tr td:first-child span,.wfacp_anim_active .wfacp_mini_cart_reviews tr th span,.wfacp_anim_active .wfacp_mini_cart_start_h .wfacp_coupon_row,.wfacp_anim_active .wfacp_no_add_here li label,.wfacp_anim_active .wfacp_no_add_here li span,.wfacp_anim_active .wfacp_order_subtotal td:first-child span,.wfacp_anim_active .wfacp_order_subtotal td>span,.wfacp_anim_active .wfacp_order_summary_container .shop_table tr th span,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item) td:first-child span,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item) td:last-child span.woocommerce-Price-amount.amount,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item) th:first-child span,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item).cart-discount td:last-child,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item).shipping_total_fee td:last-child span,.wfacp_anim_active .wfacp_order_summary_container ul li .wfacp_shipping_radio,.wfacp_anim_active .wfacp_order_total_wrap tr td span,.wfacp_anim_active .wfacp_pro_switch .product-name .wfacp_product_name_inner>span,.wfacp_anim_active .wfacp_pro_switch .product-name .wfacp_product_select_options a,.wfacp_anim_active .wfacp_pro_switch .product-name .wfacp_product_switcher_item,.wfacp_anim_active .wfacp_pro_switch .wfacp-pro-thumb,.wfacp_anim_active .wfacp_pro_switch .wfacp_pro_attr_single,.wfacp_anim_active .wfacp_pro_switch .wfacp_pro_attr_single span,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_choosen,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_price_container .wfacp_product_price_sec span,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_price_container del span,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_price_container ins span,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_row_quantity,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_subs_details span,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_switch,.wfacp_anim_active .wfacp_pro_switch .wfacp_quantity .wfacp_qty_wrap,.wfacp_anim_active .wfacp_pro_switch .wfacp_qv-button,.wfacp_anim_active .wfacp_pro_switch .wfacp_selected_attributes,.wfacp_anim_active .wfacp_pro_switch .wfacp_you_save_text,.wfacp_anim_active .wfacp_product_row .wfacp_delete_item,.wfacp_anim_active .wfacp_qv-button,.wfacp_anim_active .wfacp_shipping_table .wfacp_shipping_price,.wfacp_anim_active .wfacp_shipping_table .wfacp_shipping_price span,.wfacp_anim_active .wfacp_shipping_table li label,.wfacp_anim_active .wfacp_showcoupon,.wfacp_anim_active .wfacp_single_coupon_msg,.wfacp_anim_active .wfacp_single_shipping .wfacp_shipping_price,.wfacp_anim_active .wfacp_step_preview .single_preview_change a,.wfacp_anim_active .wfacp_step_preview .single_preview_inner span,.wfacp_anim_active .wfacp_whats_included .wfacp_product_switcher_description,.wfacp_anim_active .wfacp_whats_included>h3,.wfacp_anim_active .wfacp_you_save_text,.wfacp_anim_active table tr td:first-child span,.wfacp_anim_active tbody tr.cart_item .wfacp_delete_item_wrap a,.wfacp_anim_active tbody tr.cart_item td.product-total .woocommerce-Price-amount.amount,.wfacp_anim_active tbody tr.cart_item>td .product-image,.wfacp_anim_active tbody tr.cart_item>td .product-name span,.wfacp_anim_active tbody tr.cart_item>td .wfacp_product_subs_details span,.wfacp_anim_active tbody tr.cart_item>td .wfacp_quantity_selector{position:relative}#shipping_method li.wfacp_no_shipping label,#wfacp-e-form .wfacp_main_form .wfacp_shipping_options li.wfacp_no_shipping label{margin:0!important;display:inline-block!important}.wfacp_anim_active .amount:after,.wfacp_anim_active .first-payment-date:after,.wfacp_anim_active .includes_tax:after,.wfacp_anim_active .product-name strong.product-quantity:after,.wfacp_anim_active .shipping th:first-child span+small:after,.wfacp_anim_active .shipping-method-description:after,.wfacp_anim_active .shipping_total_fee span:after,.wfacp_anim_active .shipping_total_fee td:first-child span:after,.wfacp_anim_active .shipping_total_fee th:first-child span+small:after,.wfacp_anim_active .subscription-price span:after,.wfacp_anim_active .tax-total span:after,.wfacp_anim_active .tax_label:after,.wfacp_anim_active .wfacp_coupon_msg .woocommerce-error:after,.wfacp_anim_active .wfacp_mb_mini_cart_sec_accordion_content .cart_item .wfacp_order_summary_item_name .wfacp_cart_title_sec:after,.wfacp_anim_active .wfacp_mini_cart_item_title:after,.wfacp_anim_active .wfacp_mini_cart_reviews tr td:first-child span:after,.wfacp_anim_active .wfacp_mini_cart_reviews tr th span:after,.wfacp_anim_active .wfacp_no_add_here li label:after,.wfacp_anim_active .wfacp_no_add_here li span:after,.wfacp_anim_active .wfacp_order_subtotal td:first-child span:after,.wfacp_anim_active .wfacp_order_subtotal td>span:after,.wfacp_anim_active .wfacp_order_summary_container .shop_table tr th span:after,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item) td:first-child span:after,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item) td:last-child span.woocommerce-Price-amount.amount:after,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item) th:first-child span:after,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item).cart-discount td:last-child span:after,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item).shipping_total_fee td:last-child span:after,.wfacp_anim_active .wfacp_order_summary_container ul li .wfacp_shipping_radio:after,.wfacp_anim_active .wfacp_order_total_wrap tr td span:after,.wfacp_anim_active .wfacp_shipping_table .wfacp_shipping_price span:after,.wfacp_anim_active .wfacp_shipping_table li label:after,.wfacp_anim_active .wfacp_single_coupon_msg:after,.wfacp_anim_active .wfacp_single_shipping .wfacp_shipping_price:after,.wfacp_anim_active table tr td:first-child span:after,.wfacp_anim_active tbody tr.cart_item .wfacp_delete_item_wrap a:after,.wfacp_anim_active tbody tr.cart_item td.product-total .woocommerce-Price-amount.amount:after,.wfacp_anim_active tbody tr.cart_item>td .product-image:after,.wfacp_anim_active tbody tr.cart_item>td .product-name span:after,.wfacp_anim_active tbody tr.cart_item>td .wfacp_product_subs_details span:after,.wfacp_anim_active tbody tr.cart_item>td .wfacp_quantity_selector:after{animation:shimmer 2s linear infinite;background:linear-gradient(to right,#eff1f3 4%,#e2e2e2 25%,#eff1f3 36%);background-size:1000px 100%;content:" ";display:block;margin:0;position:absolute;right:0;top:0;bottom:0;left:0;z-index:10000}.wfacp_anim_active .wfacp_error:after,.wfacp_anim_active .wfacp_single_coupon_msg:after{left:-2px!important}.wfacp-row.wfacp_coupon_row{position:relative}.wfacp-row.wfacp_coupon_row .clear{clear:both}.wfacp_anim_active .wfacp_error,.wfacp_anim_active .wfacp_order_summary_container ul li .wfacp_shipping_radio,.wfacp_anim_active .wfacp_single_coupon_msg,.wfacp_anim_active span.subscription-details{display:inline-block}body #wfacp-e-form .wfacp-coupon-page .wfacp_coupon_remove_msg,body #wfacp-e-form .wfacp_coupon_field_msg{border-color:transparent!important;background:0 0}.wfacp_anim_active span.subscription-details{display:inline-block}.wfacp_anim_active tr.order-total strong+div{display:none}.wfacp_anim_active .wfacp_main_showcoupon,.wfacp_anim_active a.wfacp_showcoupon{display:inline-block}.wfacp_anim_active .wfacp_delete_item_wrap a,.wfacp_anim_active a.wfacp_remove_item_from_order_summary{border-color:transparent!important}.wfacp_anim_active tr.cart-discount td{font-size:0!important}.wfacp_anim_active #wfacp_checkout_form table.wfacp_shipping_table ul li .wfacp_shipping_radio{width:auto!important}.wfacp_anim_active #wfob_wrap .wfob_bump span:after{display:none}'
                                  }}
                                />
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "body{overflow-x: visible;}section {margin-bottom: 0;}.woocommerce-checkout h3 {border: none;line-height: 1.5;padding: 0;margin: 0 0 10px;}#customer_login h2::after, #payment .place-order button[type=submit], #reviews #comments>h2::after, #reviews:not(.electro-advanced-reviews) #comments>h2::after, .address header.title h3::after, .addresses header.title h3::after, .cart-collaterals h2:not(.woocommerce-loop-product__title)::after, .comment-reply-title::after, .comments-title::after, .contact-page-title::after, .cpf-type-range .tm-range-picker .noUi-origin .noUi-handle, .customer-login-form h2::after, .departments-menu .departments-menu-dropdown, .departments-menu .menu-item-has-children>.dropdown-menu, .ec-tabs>li.active a::after, .edit-account legend::after, .footer-widgets .widget-title:after, .header-v1 .navbar-search .input-group .btn, .header-v1 .navbar-search .input-group .form-control, .header-v1 .navbar-search .input-group .input-group-addon, .header-v3 .navbar-search .input-group .btn, .header-v3 .navbar-search .input-group .form-control, .header-v3 .navbar-search .input-group .input-group-addon, .navbar-primary .navbar-mini-cart .dropdown-menu-mini-cart, .pings-title::after, .products-2-1-2 .nav-link.active::after, .products-6-1 header ul.nav .active .nav-link, .products-carousel-tabs .nav-link.active::after, .sidebar .widget-title::after, .sidebar-blog .widget-title::after, .single-product .electro-tabs+section.products>h2::after, .single-product .electro-tabs~div.products>h2::after, .single-product .woocommerce-tabs+section.products>h2::after, .single-product .woocommerce-tabs~div.products>h2::after, .track-order h2::after, .wc-tabs>li.active a::after, .widget.widget_tag_cloud .tagcloud a:focus, .widget.widget_tag_cloud .tagcloud a:hover, .widget_electro_products_carousel_widget .section-products-carousel .owl-nav .owl-next:hover, .widget_electro_products_carousel_widget .section-products-carousel .owl-nav .owl-prev:hover, .widget_price_filter .ui-slider .ui-slider-handle:last-child, .woocommerce-account h2::after, .woocommerce-checkout h3::after, .woocommerce-edit-address form h3::after, .woocommerce-order-received h2::after, .wpb-accordion .vc_tta.vc_general .vc_tta-panel.vc_active .vc_tta-panel-heading .vc_tta-panel-title>a i, section header .h1::after, section header h1::after, section.section-onsale-product, section.section-onsale-product-carousel .onsale-product-carousel, section.section-product-cards-carousel header ul.nav .active .nav-link{\n\tdisplay:none;\n}body #wfacp-e-form .woocommerce-checkout #payment ul.payment_methods li {padding: 11px !important;}body #wfacp-e-form #shipping_method li label > span {position: relative;right: auto;left: auto;top: auto;}body #wfacp-e-form .wfacp_order_summary tr.shipping > td{display: table-cell;flex: auto;}body #wfacp-e-form .wfacp_order_summary tr.shipping > th {display: table-cell;flex: auto;}body #wfacp-e-form .woocommerce-checkout-review-order-table tbody > tr{display: table-row;width: 100%;justify-content: initial;}body #wfacp-e-form .woocommerce-checkout-review-order-table tfoot > tr{display: table-row;width: 100%;justify-content: initial;}body #wfacp-e-form .woocommerce-checkout-review-order-table thead > tr{display: table-row;width: 100%;justify-content: initial;}body #wfacp-e-form .wfacp_shipping_options .border:last-child table {margin-bottom: 0;}body #wfacp-e-form .wfacp_main_form .wfacp_shipping_table.wfacp_shipping_recurring tr.shipping:last-child td {padding-bottom: 0;margin-bottom: 0;}"
                                  }}
                                />
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "body .wfacp-section.wfacp_payment.wfacp_hide_payment_part {visibility: visible;position: relative;z-index: 0;left: 0}\nbody span#ppcp-credit-card-gateway-card-number {height: 40px !important;}\nbody span#ppcp-credit-card-gateway-card-expiry {height: 40px !important;}\nbody span#ppcp-credit-card-gateway-card-cvc {height: 40px !important;}"
                                  }}
                                />
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "body #wfacp-e-form  #payment li.wc_payment_method input.input-radio:checked::before{background-color:#fff;}body #wfacp-e-form  #payment.wc_payment_method input[type=radio]:checked:before{background-color:#fff;}body #wfacp-e-form  button[type=submit]:not(.white):not(.black){background-color:#fff;}body #wfacp-e-form  button[type=button]:not(.white):not(.black){background-color:#fff;}body #wfacp-e-form .wfacp-coupon-section .wfacp-coupon-page .wfacp-coupon-field-btn{background-color:#fff;}body #wfacp-e-form input[type=checkbox]:checked{background-color:#fff;}body #wfacp-e-form #payment input[type=checkbox]:checked{background-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce .woocommerce-input-wrapper .wfacp-form-control:checked{background-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce input[type=checkbox]:checked{background-color:#fff;}body #wfacp-e-form .wfacp_main_form .button.button#place_order{background-color:#fff;}body #wfacp-e-form .wfacp_main_form .button.wfacp_next_page_button{background-color:#fff;}body #wfacp-e-form .wfacp_main_form  .wfacp_payment #ppcp-hosted-fields .button{background-color:#fff;}body #wfacp-e-form .form-row:not(.woocommerce-invalid-required-field) .wfacp-form-control:not(.input-checkbox):focus{border-color:#fff ;}body #wfacp-e-form  p.form-row:not(.woocommerce-invalid-required-field) .wfacp-form-control:not(.input-checkbox):focus{box-shadow:0 0 0 1px #fff ;}body #wfacp-e-form .wfacp_main_form .form-row:not(.woocommerce-invalid-required-field) .woocommerce-input-wrapper .select2-container .select2-selection--single .select2-selection__rendered:focus{border-color:#fff ;}body #wfacp-e-form .wfacp_main_form.woocommerce .form-row:not(.woocommerce-invalid-required-field) .woocommerce-input-wrapper .select2-container .select2-selection--single .select2-selection__rendered:focus{box-shadow:0 0 0 1px #fff;}body #wfacp-e-form .wfacp_main_form .form-row:not(.woocommerce-invalid-required-field) .woocommerce-input-wrapper .select2-container .select2-selection--single:focus>span.select2-selection__rendered{box-shadow:0 0 0 1px #fff ;}body #wfacp-e-form .wfacp_main_form.woocommerce #payment li.wc_payment_method input.input-radio:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce #payment.wc_payment_method input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce #add_payment_method #payment ul.payment_methods li input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form #payment ul.payment_methods li input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce .woocommerce-cart #payment ul.payment_methods li input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce .woocommerce-checkout #payment ul.payment_methods li input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce #wfacp_checkout_form input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form .wfacp-form input[type=checkbox]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form #payment input[type=checkbox]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form .woocommerce-input-wrapper .wfacp-form-control:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form input[type=checkbox]:checked{border-width: 8px;}body #wfacp-e-form .wfacp_main_form.woocommerce .form-row:not(.woocommerce-invalid-required-field) .woocommerce-input-wrapper .select2-container .select2-selection--single:focus>span.select2-selection__rendered{border-color:#fff;}body #wfacp-e-form .wfacp_main_form #payment li.wc_payment_method input.input-radio:checked{border-width:5px;}body #wfacp-e-form .wfacp_main_form #payment.wc_payment_method input[type=radio]:checked{border-width:5px;}body #wfacp-e-form .wfacp_main_form input[type=radio]:checked{border-width:5px;}body #wfacp-e-form .wfacp_main_form #add_payment_method #payment ul.payment_methods li input[type=radio]:checked{border-width:5px;}body #wfacp-e-form .wfacp_main_form input[type=checkbox]:after{display: block;}body #wfacp-e-form .wfacp_main_form input[type=checkbox]:before{display: none;}body #wfacp-e-form #payment li.wc_payment_method input.input-radio:checked::before{display:none;}body #wfacp-e-form #payment.wc_payment_method input[type=radio]:checked:before{display:none;}body #wfacp-e-form input[type=radio]:checked:before{display:none;}body #wfacp-e-form .wfacp_main_form.woocommerce input[type=radio]:checked:before{display:none;}"
                                  }}
                                />
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "body #wfacp-sec-wrapper  p.form-row.wfacp_collapsible_enable.wfacp_hidden_class {display: none;}body #wfacp-sec-wrapper  p.form-row.wfacp_collapsible_field_wrap.wfacp_hidden_class {display: none;}"
                                  }}
                                />
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "body #wfacp-e-form #wfacp-sec-wrapper .wfacp-top label.wfacp-form-control-label {position: relative;left: 0;right: 0;bottom: 0;top: 0;margin-top: 0;line-height:1.5;background: transparent;display: block;margin-bottom: 4px;opacity:1;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce #wfacp_checkout_form p.wfacp-form-control-wrapper:not(.wfacp_checkbox_field):not(.checkbox):not(.wfacp_textarea_fields):not(.wfacp_collapsible_field_wrap) {min-height:78px;}body #wfacp-e-form .none{display: block ; }body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce input[type=email]{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce input[type=number]{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce input[type=password]{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce input[type=tel]{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce input[type=text]{padding: 12px 12px ;}body #wfacp-e-form .wfacp_collapsible_order_summary_wrap.wfacp-top input[type=text]{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce input[type=date]{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce .wfacp_allowed_countries strong{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce select,.wfacp-form.wfacp-top .wfacp_main_form.woocommerce textarea{padding: 12px 12px ; }body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce .select2-container .select2-selection--single .select2-selection__rendered{padding: 12px 12px ;}"
                                  }}
                                />
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '\n    .loader {\n        color: #fff;\n        position: fixed;\n        box-sizing: border-box;\n        left: -9999px;\n        top: -9999px;\n        width: 0;\n        height: 0;\n        overflow: hidden;\n        z-index: 999999;\n\n    }\n\n    .loader:after,\n    .loader:before {\n        box-sizing: border-box;\n\n    }\n\n    .loader.is-active {\n        background-color: rgba(0, 0, 0, 0.85);\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n    }\n\n    .loader.is-active:after,\n    .loader.is-active:before {\n        display: block;\n    }\n\n    .blockUI:before {\n\n        display: none;\n    }\n\n\n    @keyframes rotation {\n        0% {\n            transform: rotate(0);\n        }\n        to {\n            transform: rotate(359deg);\n        }\n    }\n\n\n    .loader[data-text]:before {\n        position: fixed;\n        left: 0;\n        top: 50%;\n        color: currentColor;\n\n        text-align: center;\n        width: 100%;\n        font-size: 14px;\n    }\n\n    .loader[data-text=""]:before {\n        content: "Loading";\n    }\n\n    .loader[data-text]:not([data-text=""]):before {\n        content: attr(data-text);\n    }\n\n\n    .loader-default[data-text]:before {\n        top: calc(50% - 63px);\n    }\n\n    .loader-default:after {\n        content: "";\n        position: fixed;\n        width: 48px;\n        height: 48px;\n        border: 8px solid #fff;\n        border-left-color: transparent;\n        border-radius: 50%;\n        top: calc(50% - 24px);\n        left: calc(50% - 24px);\n        animation: rotation 1s linear infinite;\n\n    }\n\n\n    .wfacp_firefox_android .pac-container .pac-item:first-child {\n        margin-top: 20px;\n    }\n\n    span.wfacp_input_error_msg {\n        color: red;\n        font-size: 13px;\n    }\n\n'
                                  }}
                                />
                                <div className="woocommerce-notices-wrapper" />
                                <div className="wt_coupon_wrapper">
                                  <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        ".wt_sc_single_coupon{ display:inline-block; width:300px; max-width:100%; height:auto; padding:5px; text-align:center; background:#2890a8; color:#ffffff; position:relative; }\n        .wt_sc_single_coupon .wt_sc_hidden{ display:none; }\n        .wt_sc_single_coupon.active-coupon{ cursor:pointer; }\n        .wt_sc_coupon_amount{ font-size:30px; margin-right:5px; line-height:22px; font-weight:500; }\n        .wt_sc_coupon_type{ font-size:20px;  font-weight:500; line-height:22px; }\n        .wt_sc_coupon_code{ float:left; width:100%; font-size:19px; line-height:22px; }\n        .wt_sc_coupon_code code{ background:none; font-size:15px; opacity:0.7; display:inline-block; line-height:22px; max-width:100%; word-wrap:break-word; }\n        .wt_sc_coupon_content{ padding:10px 0px; float:left; width:100%; }   \n        .wt_sc_coupon_desc_wrapper:hover .wt_sc_coupon_desc{ display:block}\n        .wt_sc_coupon_desc{position:absolute; top:-18px; background:#333; color:#fff; text-shadow:none; text-align:left; font-size:12px; width:200px; right:-220px; padding:10px 20px; z-index:100; border-radius:8px; display:none; }\n        .wt_sc_coupon_desc ul{margin:0!important;text-align:left;list-style-type:disc}\n        .wt_sc_coupon_desc ul li{padding:0;margin:0;width:100%;height:auto;min-height:auto;list-style-type:disc!important}\n        .wt_sc_coupon_desc_wrapper i.info{position:absolute; top:6px; right:10px; font-size:13px; font-weight:700; border-radius:100%; width:20px; height:20px; background:#fff; text-shadow:none; color:#2890a8; font-style:normal; cursor:pointer; line-height:20px; box-shadow:1px 1px 4px #333; }\n\n        .wt_sc_credit_history_url{font-size:13px;font-weight:700;border-radius:100%;width:20px;height:20px;text-shadow:none;font-style:normal;cursor:pointer;position:absolute;right:12px;bottom:10px;text-align:center;line-height:20px;text-decoration:none!important;background:#fff}\n        .wt_sc_credit_history_url span{font:bold 14px/1 dashicons}\n        a.wt_sc_credit_history_url span:before{ line-height:20px; color:#2890a8; }\n\n        @media only screen and (max-width: 700px)  {\n          .wt_sc_coupon_content{z-index: 5; }\n          .wt_sc_single_coupon .wt_sc_coupon_desc{ z-index: 100; right:auto; top:30px; left:0px; }\n        }"
                                    }}
                                  />
                                </div>{" "}
                                <form
                                  name="checkout"
                                  // method="post"
                                  className="checkout woocommerce-checkout"
                                  encType="multipart/form-data"
                                  id="wfacp_checkout_form"
                                >

                                  <div
                                    className="wfacp-left-panel wfacp_page elementor single_step wfacp_last_page"
                                    data-step="single_step"
                                  >
                                    <style
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          '\n\n    @media (min-width: 768px) {\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="1"] .wfacp_smart_button_container {\n            width: 100%;\n            float: none;\n        }\n\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="2"] .wfacp_smart_button_container {\n            width: 50%;\n        }\n\n\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="3"] .wfacp_smart_button_container {\n            width: 33.33%;\n\n        }\n\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="4"] .wfacp_smart_button_container {\n            width: 25%;\n\n        }\n\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="1"] #pay_with_amazon {\n            background-size: 20%;\n        }\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="2"] #pay_with_amazon {\n            background-size: 30%;\n        }\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="3"] #pay_with_amazon {\n            background-size: 45%;\n        }\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="4"] #pay_with_amazon {\n            background-size: 50%;\n        }\n\n        #wfacp_smart_buttons .wfacp_smart_button_wrap_st {\n            margin: 0 -10px !important;\n        }\n\n        #wfacp_smart_buttons.wfacp_smart_buttons .wc-amazon-checkout-message.wc-amazon-payments-advanced-populated {\n            display: block;\n        }\n\n        #wfacp_smart_buttons.wfacp_smart_buttons div#pay_with_amazon,\n        #wfacp_smart_buttons #wfacp_smart_button_stripe_gpay_apay div#wc-stripe-payment-request-wrapper,\n        #wfacp_smart_buttons #wfacp_smart_button_stripe_gpay_apay div#wc-stripe-payment-request-wrapper,\n        #wfacp_smart_buttons .wfacp_smart_button_wrap_st div#paypal_box_button > div {\n            width: 100%;\n        }\n\n        .wfacp_smart_button_wrap_st div#paypal_box_button > div {\n            max-width: 100%;\n        }\n\n        #wfacp_smart_buttons.wfacp_smart_buttons .wfacp_smart_button_container {\n            display: block;\n            margin: 0 !important;\n            padding: 0 10px;\n            float: left;\n        }\n\n        #wfacp_smart_buttons.wfacp_smart_buttons .wfacp_smart_button_container iframe {\n            max-height: 42px !important;\n            height: 100% !important;\n        }\n\n        #wfacp_smart_buttons.wfacp_smart_buttons .wfacp_smart_button_container:after,\n        #wfacp_smart_buttons.wfacp_smart_buttons .wfacp_smart_button_container:before {\n            content: \'\';\n            display: block;\n        }\n\n        #wfacp_smart_buttons.wfacp_smart_buttons .wfacp_smart_button_container:after {\n            clear: both;\n        }\n\n        #wfacp_smart_buttons .wfacp_smart_button_wrap_st div#paypal_box_button .paypal-buttons {\n            min-width: 1px;\n            height: 42px !important;\n            display: block !important;\n        }\n    }\n\n'
                                      }}
                                    />

                                    <div
                                      className="wfacp-section wfacp-hg-by-box step_0 form_section_single_step_0_elementor-hific "
                                      data-field-count={19}
                                    >
                                      <div className="wfacp_internal_form_wrap wfacp-comm-title ">
                                        <h2 className="wfacp_section_heading wfacp_section_title ">
                                          Shipping Information
                                        </h2>
                                      </div>
                                      <div className="wfacp-comm-form-detail clearfix">
                                        <div className="wfacp-row">
                                          <p
                                            className="form-row form-row-wide wfacp-form-control-wrapper wfacp-col-full  wfacp_field_required validate-required validate-email validate-email"
                                            id="billing_email_field"
                                            data-priority={110}
                                          >
                                            <label
                                              htmlFor="billing_email"
                                              className="wfacp-form-control-label"
                                            >
                                              Email&nbsp;
                                              <abbr
                                                className="required"
                                                title="required"
                                              >
                                                *
                                              </abbr>
                                            </label>
                                            <span className="woocommerce-input-wrapper">
                                              <input
                                                type="email"
                                                className="input-text wfacp-form-control"
                                                name="billing_email"
                                                id="billing_email"
                                                placeholder="Email *"
                                                defaultValue=""
                                                autoComplete="email username"
                                                value={inputs.email}
                                                onChange={handleTextboxChange('email')}
                                              />
                                            </span>{" "}
                                            <span
                                              className="wfacp_inline_error"
                                              data-key="billing_email_field"
                                            />
                                          </p>
                                          <p
                                            className="form-row form-row-first wfacp-form-control-wrapper wfacp-col-left-half  wfacp_field_required validate-required"
                                            id="billing_first_name_field"
                                            data-priority={10}
                                          >
                                            <label
                                              htmlFor="billing_first_name"
                                              className="wfacp-form-control-label"
                                            >
                                              First name&nbsp;
                                              <abbr
                                                className="required"
                                                title="required"
                                              >
                                                *
                                              </abbr>
                                            </label>
                                            <span className="woocommerce-input-wrapper">
                                              <input
                                                type="text"
                                                className="input-text wfacp-form-control"
                                                name="billing_first_name"
                                                id="billing_first_name"
                                                placeholder="First name *"
                                                defaultValue=""
                                                autoComplete="given-name"
                                                value={inputs.fname}
                                                onChange={handleTextboxChange('fname')}
                                              />
                                            </span>{" "}
                                            <span
                                              className="wfacp_inline_error"
                                              data-key="billing_first_name_field"
                                            />
                                          </p>
                                          <p
                                            className="form-row form-row-last wfacp-form-control-wrapper wfacp-col-left-half  wfacp_field_required validate-required"
                                            id="billing_last_name_field"
                                            data-priority={20}
                                          >
                                            <label
                                              htmlFor="billing_last_name"
                                              className="wfacp-form-control-label"
                                            >
                                              Last name&nbsp;
                                              <abbr
                                                className="required"
                                                title="required"
                                              >
                                                *
                                              </abbr>
                                            </label>
                                            <span className="woocommerce-input-wrapper">
                                              <input
                                                type="text"
                                                className="input-text wfacp-form-control"
                                                name="billing_last_name"
                                                id="billing_last_name"
                                                placeholder="Last name *"
                                                defaultValue=""
                                                autoComplete="family-name"
                                                value={inputs.lname}
                                                onChange={handleTextboxChange('lname')}
                                              />
                                            </span>{" "}
                                            <span
                                              className="wfacp_inline_error"
                                              data-key="billing_last_name_field"
                                            />
                                          </p>


                                          <LoadScript
                                            googleMapsApiKey={googleMapsApiKey}
                                            libraries={['places']}  // This is crucial for using Places API features
                                          >


                                            {/* <AutocompleteComponent /> */}
                                            <AddressForm onAddressData={handleAddressData} />


                                          </LoadScript>

                                          <div className="iti iti--allow-dropdown iti--separate-dial-code" style={{ width: "100%" }}>

                                            <div className="iti iti--allow-dropdown iti--separate-dial-code" style={{ width: "100%", paddingLeft: "110px !important", padding: "0px 12px 2px" }}>
                                              <div className="iti__flag-container" onClick={handleClickP}>
                                                <div
                                                  className="iti__selected-flag"
                                                  role="combobox"
                                                  aria-controls="iti-0__country-listbox"
                                                  aria-owns="iti-0__country-listbox"
                                                  aria-expanded="false"
                                                  tabIndex={0}
                                                  title="Australia: +61"
                                                  aria-activedescendant="iti-0__item-au"
                                                >
                                                  {/* <div className="iti__flag iti__au" /> */}
                                                  <div className="iti__selected-dial-code">
                                                    {selectedDialCode}
                                                  </div>
                                                  <div className="iti__arrow" />
                                                </div>
                                                <ul
                                                  className="iti__country-list iti__hide"
                                                  id="iti-0__country-listbox"
                                                  role="listbox"
                                                  aria-label="List of countries"

                                                >
                                                  <li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-af" role="option" data-dial-code={93} onClick={handleClickzx} data-country-code="af" aria-selected="false" >
 
                                                    <span className="iti__country-name">Afghanistan (‫افغانستان‬‎)</span>
                                                    <span className="iti__dial-code">+93</span>
                                                  </li>
                                                  <li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ax" role="option" data-dial-code={358} onClick={handleClickzx} data-country-code="ax" aria-selected="false" >
                                                     
                                                    <span className="iti__country-name">Åland Islands</span>
                                                    <span className="iti__dial-code">+358</span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-al"
                                                    role="option"
                                                    data-dial-code={355}
                                                    onClick={handleClickzx} data-country-code="al"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Albania (Shqipëri)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +355
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-dz"
                                                    role="option"
                                                    data-dial-code={213}
                                                    onClick={handleClickzx} data-country-code="dz"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Algeria (‫الجزائر‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +213
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-as"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="as"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      American Samoa
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ad"
                                                    role="option"
                                                    data-dial-code={376}
                                                    onClick={handleClickzx} data-country-code="ad"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Andorra
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +376
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ao"
                                                    role="option"
                                                    data-dial-code={244}
                                                    onClick={handleClickzx} data-country-code="ao"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Angola
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +244
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ai"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="ai"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Anguilla
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ag"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="ag"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Antigua and Barbuda
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ar"
                                                    role="option"
                                                    data-dial-code={54}
                                                    onClick={handleClickzx} data-country-code="ar"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Argentina
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +54
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-am"
                                                    role="option"
                                                    data-dial-code={374}
                                                    onClick={handleClickzx} data-country-code="am"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Armenia (Հայաստան)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +374
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-aw"
                                                    role="option"
                                                    data-dial-code={297}
                                                    onClick={handleClickzx} data-country-code="aw"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Aruba
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +297
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard iti__active"
                                                    tabIndex={-1}
                                                    id="iti-0__item-au"
                                                    role="option"
                                                    data-dial-code={61}
                                                    onClick={handleClickzx} data-country-code="au"
                                                    aria-selected="true"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Australia
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +61
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-at"
                                                    role="option"
                                                    data-dial-code={43}
                                                    onClick={handleClickzx} data-country-code="at"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Austria (Österreich)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +43
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-az"
                                                    role="option"
                                                    data-dial-code={994}
                                                    onClick={handleClickzx} data-country-code="az"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Azerbaijan (Azərbaycan)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +994
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bs"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="bs"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Bahamas
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bh"
                                                    role="option"
                                                    data-dial-code={973}
                                                    onClick={handleClickzx} data-country-code="bh"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Bahrain (‫البحرين‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +973
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bd"
                                                    role="option"
                                                    data-dial-code={880}
                                                    onClick={handleClickzx} data-country-code="bd"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Bangladesh (বাংলাদেশ)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +880
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bb"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="bb"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Barbados
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-by"
                                                    role="option"
                                                    data-dial-code={375}
                                                    onClick={handleClickzx} data-country-code="by"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Belarus (Беларусь)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +375
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-be"
                                                    role="option"
                                                    data-dial-code={32}
                                                    onClick={handleClickzx} data-country-code="be"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Belgium (België)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +32
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bz"
                                                    role="option"
                                                    data-dial-code={501}
                                                    onClick={handleClickzx} data-country-code="bz"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Belize
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +501
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bj"
                                                    role="option"
                                                    data-dial-code={229}
                                                    onClick={handleClickzx} data-country-code="bj"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Benin (Bénin)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +229
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bm"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="bm"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Bermuda
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bt"
                                                    role="option"
                                                    data-dial-code={975}
                                                    onClick={handleClickzx} data-country-code="bt"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Bhutan (འབྲུག)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +975
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bo"
                                                    role="option"
                                                    data-dial-code={591}
                                                    onClick={handleClickzx} data-country-code="bo"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Bolivia
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +591
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ba"
                                                    role="option"
                                                    data-dial-code={387}
                                                    onClick={handleClickzx} data-country-code="ba"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Bosnia and Herzegovina (Босна и
                                                      Херцеговина)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +387
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bw"
                                                    role="option"
                                                    data-dial-code={267}
                                                    onClick={handleClickzx} data-country-code="bw"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Botswana
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +267
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-br"
                                                    role="option"
                                                    data-dial-code={55}
                                                    onClick={handleClickzx} data-country-code="br"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Brazil (Brasil)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +55
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-io"
                                                    role="option"
                                                    data-dial-code={246}
                                                    onClick={handleClickzx} data-country-code="io"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      British Indian Ocean Territory
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +246
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-vg"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="vg"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      British Virgin Islands
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bn"
                                                    role="option"
                                                    data-dial-code={673}
                                                    onClick={handleClickzx} data-country-code="bn"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Brunei
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +673
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bg"
                                                    role="option"
                                                    data-dial-code={359}
                                                    onClick={handleClickzx} data-country-code="bg"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Bulgaria (България)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +359
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bf"
                                                    role="option"
                                                    data-dial-code={226}
                                                    onClick={handleClickzx} data-country-code="bf"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Burkina Faso
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +226
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bi"
                                                    role="option"
                                                    data-dial-code={257}
                                                    onClick={handleClickzx} data-country-code="bi"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Burundi (Uburundi)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +257
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-kh"
                                                    role="option"
                                                    data-dial-code={855}
                                                    onClick={handleClickzx} data-country-code="kh"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Cambodia (កម្ពុជា)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +855
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cm"
                                                    role="option"
                                                    data-dial-code={237}
                                                    onClick={handleClickzx} data-country-code="cm"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Cameroon (Cameroun)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +237
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ca"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="ca"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Canada
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cv"
                                                    role="option"
                                                    data-dial-code={238}
                                                    onClick={handleClickzx} data-country-code="cv"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Cape Verde (Kabu Verdi)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +238
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bq"
                                                    role="option"
                                                    data-dial-code={599}
                                                    onClick={handleClickzx} data-country-code="bq"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Caribbean Netherlands
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +599
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ky"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="ky"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Cayman Islands
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cf"
                                                    role="option"
                                                    data-dial-code={236}
                                                    onClick={handleClickzx} data-country-code="cf"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Central African Republic
                                                      (République centrafricaine)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +236
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-td"
                                                    role="option"
                                                    data-dial-code={235}
                                                    onClick={handleClickzx} data-country-code="td"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Chad (Tchad)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +235
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cl"
                                                    role="option"
                                                    data-dial-code={56}
                                                    onClick={handleClickzx} data-country-code="cl"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Chile
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +56
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cn"
                                                    role="option"
                                                    data-dial-code={86}
                                                    onClick={handleClickzx} data-country-code="cn"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      China (中国)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +86
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cx"
                                                    role="option"
                                                    data-dial-code={61}
                                                    onClick={handleClickzx} data-country-code="cx"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Christmas Island
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +61
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cc"
                                                    role="option"
                                                    data-dial-code={61}
                                                    onClick={handleClickzx} data-country-code="cc"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Cocos (Keeling) Islands
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +61
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-co"
                                                    role="option"
                                                    data-dial-code={57}
                                                    onClick={handleClickzx} data-country-code="co"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Colombia
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +57
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-km"
                                                    role="option"
                                                    data-dial-code={269}
                                                    onClick={handleClickzx} data-country-code="km"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Comoros (‫جزر القمر‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +269
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cd"
                                                    role="option"
                                                    data-dial-code={243}
                                                    onClick={handleClickzx} data-country-code="cd"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Congo (DRC) (Jamhuri ya
                                                      Kidemokrasia ya Kongo)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +243
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cg"
                                                    role="option"
                                                    data-dial-code={242}
                                                    onClick={handleClickzx} data-country-code="cg"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Congo (Republic)
                                                      (Congo-Brazzaville)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +242
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ck"
                                                    role="option"
                                                    data-dial-code={682}
                                                    onClick={handleClickzx} data-country-code="ck"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Cook Islands
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +682
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cr"
                                                    role="option"
                                                    data-dial-code={506}
                                                    onClick={handleClickzx} data-country-code="cr"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Costa Rica
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +506
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ci"
                                                    role="option"
                                                    data-dial-code={225}
                                                    onClick={handleClickzx} data-country-code="ci"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Côte d’Ivoire
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +225
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-hr"
                                                    role="option"
                                                    data-dial-code={385}
                                                    onClick={handleClickzx} data-country-code="hr"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Croatia (Hrvatska)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +385
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cu"
                                                    role="option"
                                                    data-dial-code={53}
                                                    onClick={handleClickzx} data-country-code="cu"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Cuba
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +53
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cw"
                                                    role="option"
                                                    data-dial-code={599}
                                                    onClick={handleClickzx} data-country-code="cw"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Curaçao
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +599
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cy"
                                                    role="option"
                                                    data-dial-code={357}
                                                    onClick={handleClickzx} data-country-code="cy"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Cyprus (Κύπρος)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +357
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-cz"
                                                    role="option"
                                                    data-dial-code={420}
                                                    onClick={handleClickzx} data-country-code="cz"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Czech Republic (Česká republika)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +420
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-dk"
                                                    role="option"
                                                    data-dial-code={45}
                                                    onClick={handleClickzx} data-country-code="dk"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Denmark (Danmark)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +45
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-dj"
                                                    role="option"
                                                    data-dial-code={253}
                                                    onClick={handleClickzx} data-country-code="dj"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Djibouti
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +253
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-dm"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="dm"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Dominica
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-do"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="do"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Dominican Republic (República
                                                      Dominicana)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ec"
                                                    role="option"
                                                    data-dial-code={593}
                                                    onClick={handleClickzx} data-country-code="ec"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Ecuador
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +593
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-eg"
                                                    role="option"
                                                    data-dial-code={20}
                                                    onClick={handleClickzx} data-country-code="eg"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Egypt (‫مصر‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +20
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sv"
                                                    role="option"
                                                    data-dial-code={503}
                                                    onClick={handleClickzx} data-country-code="sv"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      El Salvador
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +503
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gq"
                                                    role="option"
                                                    data-dial-code={240}
                                                    onClick={handleClickzx} data-country-code="gq"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Equatorial Guinea (Guinea
                                                      Ecuatorial)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +240
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-er"
                                                    role="option"
                                                    data-dial-code={291}
                                                    onClick={handleClickzx} data-country-code="er"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Eritrea
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +291
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ee"
                                                    role="option"
                                                    data-dial-code={372}
                                                    onClick={handleClickzx} data-country-code="ee"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Estonia (Eesti)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +372
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sz"
                                                    role="option"
                                                    data-dial-code={268}
                                                    onClick={handleClickzx} data-country-code="sz"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Eswatini
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +268
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-et"
                                                    role="option"
                                                    data-dial-code={251}
                                                    onClick={handleClickzx} data-country-code="et"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Ethiopia
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +251
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-fk"
                                                    role="option"
                                                    data-dial-code={500}
                                                    onClick={handleClickzx} data-country-code="fk"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Falkland Islands (Islas
                                                      Malvinas)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +500
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-fo"
                                                    role="option"
                                                    data-dial-code={298}
                                                    onClick={handleClickzx} data-country-code="fo"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Faroe Islands (Føroyar)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +298
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-fj"
                                                    role="option"
                                                    data-dial-code={679}
                                                    onClick={handleClickzx} data-country-code="fj"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Fiji
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +679
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-fi"
                                                    role="option"
                                                    data-dial-code={358}
                                                    onClick={handleClickzx} data-country-code="fi"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Finland (Suomi)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +358
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-fr"
                                                    role="option"
                                                    data-dial-code={33}
                                                    onClick={handleClickzx} data-country-code="fr"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      France
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +33
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gf"
                                                    role="option"
                                                    data-dial-code={594}
                                                    onClick={handleClickzx} data-country-code="gf"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      French Guiana (Guyane française)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +594
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-pf"
                                                    role="option"
                                                    data-dial-code={689}
                                                    onClick={handleClickzx} data-country-code="pf"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      French Polynesia (Polynésie
                                                      française)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +689
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ga"
                                                    role="option"
                                                    data-dial-code={241}
                                                    onClick={handleClickzx} data-country-code="ga"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Gabon
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +241
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gm"
                                                    role="option"
                                                    data-dial-code={220}
                                                    onClick={handleClickzx} data-country-code="gm"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Gambia
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +220
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ge"
                                                    role="option"
                                                    data-dial-code={995}
                                                    onClick={handleClickzx} data-country-code="ge"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Georgia (საქართველო)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +995
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-de"
                                                    role="option"
                                                    data-dial-code={49}
                                                    onClick={handleClickzx} data-country-code="de"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Germany (Deutschland)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +49
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gh"
                                                    role="option"
                                                    data-dial-code={233}
                                                    onClick={handleClickzx} data-country-code="gh"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Ghana (Gaana)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +233
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gi"
                                                    role="option"
                                                    data-dial-code={350}
                                                    onClick={handleClickzx} data-country-code="gi"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Gibraltar
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +350
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gr"
                                                    role="option"
                                                    data-dial-code={30}
                                                    onClick={handleClickzx} data-country-code="gr"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Greece (Ελλάδα)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +30
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gl"
                                                    role="option"
                                                    data-dial-code={299}
                                                    onClick={handleClickzx} data-country-code="gl"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Greenland (Kalaallit Nunaat)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +299
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gd"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="gd"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Grenada
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gp"
                                                    role="option"
                                                    data-dial-code={590}
                                                    onClick={handleClickzx} data-country-code="gp"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Guadeloupe
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +590
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gu"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="gu"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Guam
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gt"
                                                    role="option"
                                                    data-dial-code={502}
                                                    onClick={handleClickzx} data-country-code="gt"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Guatemala
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +502
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gg"
                                                    role="option"
                                                    data-dial-code={44}
                                                    onClick={handleClickzx} data-country-code="gg"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Guernsey
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +44
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gn"
                                                    role="option"
                                                    data-dial-code={224}
                                                    onClick={handleClickzx} data-country-code="gn"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Guinea (Guinée)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +224
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gw"
                                                    role="option"
                                                    data-dial-code={245}
                                                    onClick={handleClickzx} data-country-code="gw"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Guinea-Bissau (Guiné Bissau)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +245
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gy"
                                                    role="option"
                                                    data-dial-code={592}
                                                    onClick={handleClickzx} data-country-code="gy"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Guyana
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +592
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ht"
                                                    role="option"
                                                    data-dial-code={509}
                                                    onClick={handleClickzx} data-country-code="ht"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Haiti
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +509
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-hn"
                                                    role="option"
                                                    data-dial-code={504}
                                                    onClick={handleClickzx} data-country-code="hn"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Honduras
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +504
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-hk"
                                                    role="option"
                                                    data-dial-code={852}
                                                    onClick={handleClickzx} data-country-code="hk"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Hong Kong (香港)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +852
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-hu"
                                                    role="option"
                                                    data-dial-code={36}
                                                    onClick={handleClickzx} data-country-code="hu"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Hungary (Magyarország)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +36
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-is"
                                                    role="option"
                                                    data-dial-code={354}
                                                    onClick={handleClickzx} data-country-code="is"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Iceland (Ísland)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +354
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-in"
                                                    role="option"
                                                    data-dial-code={91}
                                                    onClick={handleClickzx} data-country-code="in"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      India (भारत)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +91
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-id"
                                                    role="option"
                                                    data-dial-code={62}
                                                    onClick={handleClickzx} data-country-code="id"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Indonesia
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +62
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ir"
                                                    role="option"
                                                    data-dial-code={98}
                                                    onClick={handleClickzx} data-country-code="ir"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Iran (‫ایران‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +98
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-iq"
                                                    role="option"
                                                    data-dial-code={964}
                                                    onClick={handleClickzx} data-country-code="iq"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Iraq (‫العراق‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +964
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ie"
                                                    role="option"
                                                    data-dial-code={353}
                                                    onClick={handleClickzx} data-country-code="ie"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Ireland
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +353
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-im"
                                                    role="option"
                                                    data-dial-code={44}
                                                    onClick={handleClickzx} data-country-code="im"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Isle of Man
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +44
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-il"
                                                    role="option"
                                                    data-dial-code={972}
                                                    onClick={handleClickzx} data-country-code="il"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Israel (‫ישראל‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +972
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-it"
                                                    role="option"
                                                    data-dial-code={39}
                                                    onClick={handleClickzx} data-country-code="it"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Italy (Italia)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +39
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-jm"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="jm"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Jamaica
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-jp"
                                                    role="option"
                                                    data-dial-code={81}
                                                    onClick={handleClickzx} data-country-code="jp"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Japan (日本)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +81
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-je"
                                                    role="option"
                                                    data-dial-code={44}
                                                    onClick={handleClickzx} data-country-code="je"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Jersey
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +44
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-jo"
                                                    role="option"
                                                    data-dial-code={962}
                                                    onClick={handleClickzx} data-country-code="jo"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Jordan (‫الأردن‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +962
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-kz"
                                                    role="option"
                                                    data-dial-code={7}
                                                    onClick={handleClickzx} data-country-code="kz"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Kazakhstan (Казахстан)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +7
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ke"
                                                    role="option"
                                                    data-dial-code={254}
                                                    onClick={handleClickzx} data-country-code="ke"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Kenya
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +254
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ki"
                                                    role="option"
                                                    data-dial-code={686}
                                                    onClick={handleClickzx} data-country-code="ki"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Kiribati
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +686
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-kw"
                                                    role="option"
                                                    data-dial-code={965}
                                                    onClick={handleClickzx} data-country-code="kw"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Kuwait (‫الكويت‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +965
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-kg"
                                                    role="option"
                                                    data-dial-code={996}
                                                    onClick={handleClickzx} data-country-code="kg"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Kyrgyzstan (Кыргызстан)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +996
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-la"
                                                    role="option"
                                                    data-dial-code={856}
                                                    onClick={handleClickzx} data-country-code="la"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Laos (ລາວ)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +856
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-lv"
                                                    role="option"
                                                    data-dial-code={371}
                                                    onClick={handleClickzx} data-country-code="lv"
                                                    aria-selected="false"
                                                  > 
                                                    <span className="iti__country-name">
                                                      Latvia (Latvija)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +371
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-lb"
                                                    role="option"
                                                    data-dial-code={961}
                                                    onClick={handleClickzx} data-country-code="lb"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Lebanon (‫لبنان‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +961
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ls"
                                                    role="option"
                                                    data-dial-code={266}
                                                    onClick={handleClickzx} data-country-code="ls"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Lesotho
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +266
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-lr"
                                                    role="option"
                                                    data-dial-code={231}
                                                    onClick={handleClickzx} data-country-code="lr"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Liberia
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +231
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ly"
                                                    role="option"
                                                    data-dial-code={218}
                                                    onClick={handleClickzx} data-country-code="ly"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Libya (‫ليبيا‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +218
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-li"
                                                    role="option"
                                                    data-dial-code={423}
                                                    onClick={handleClickzx} data-country-code="li"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Liechtenstein
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +423
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-lt"
                                                    role="option"
                                                    data-dial-code={370}
                                                    onClick={handleClickzx} data-country-code="lt"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Lithuania (Lietuva)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +370
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-lu"
                                                    role="option"
                                                    data-dial-code={352}
                                                    onClick={handleClickzx} data-country-code="lu"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Luxembourg
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +352
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mo"
                                                    role="option"
                                                    data-dial-code={853}
                                                    onClick={handleClickzx} data-country-code="mo"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Macau (澳門)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +853
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mg"
                                                    role="option"
                                                    data-dial-code={261}
                                                    onClick={handleClickzx} data-country-code="mg"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Madagascar (Madagasikara)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +261
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mw"
                                                    role="option"
                                                    data-dial-code={265}
                                                    onClick={handleClickzx} data-country-code="mw"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Malawi
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +265
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-my"
                                                    role="option"
                                                    data-dial-code={60}
                                                    onClick={handleClickzx} data-country-code="my"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Malaysia
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +60
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mv"
                                                    role="option"
                                                    data-dial-code={960}
                                                    onClick={handleClickzx} data-country-code="mv"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Maldives
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +960
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ml"
                                                    role="option"
                                                    data-dial-code={223}
                                                    onClick={handleClickzx} data-country-code="ml"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Mali
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +223
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mt"
                                                    role="option"
                                                    data-dial-code={356}
                                                    onClick={handleClickzx} data-country-code="mt"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Malta
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +356
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mh"
                                                    role="option"
                                                    data-dial-code={692}
                                                    onClick={handleClickzx} data-country-code="mh"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Marshall Islands
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +692
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mq"
                                                    role="option"
                                                    data-dial-code={596}
                                                    onClick={handleClickzx} data-country-code="mq"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Martinique
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +596
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mr"
                                                    role="option"
                                                    data-dial-code={222}
                                                    onClick={handleClickzx} data-country-code="mr"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Mauritania (‫موريتانيا‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +222
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mu"
                                                    role="option"
                                                    data-dial-code={230}
                                                    onClick={handleClickzx} data-country-code="mu"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Mauritius (Moris)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +230
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-yt"
                                                    role="option"
                                                    data-dial-code={262}
                                                    onClick={handleClickzx} data-country-code="yt"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Mayotte
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +262
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mx"
                                                    role="option"
                                                    data-dial-code={52}
                                                    onClick={handleClickzx} data-country-code="mx"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Mexico (México)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +52
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-fm"
                                                    role="option"
                                                    data-dial-code={691}
                                                    onClick={handleClickzx} data-country-code="fm"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Micronesia
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +691
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-md"
                                                    role="option"
                                                    data-dial-code={373}
                                                    onClick={handleClickzx} data-country-code="md"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Moldova (Republica Moldova)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +373
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mc"
                                                    role="option"
                                                    data-dial-code={377}
                                                    onClick={handleClickzx} data-country-code="mc"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Monaco
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +377
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mn"
                                                    role="option"
                                                    data-dial-code={976}
                                                    onClick={handleClickzx} data-country-code="mn"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Mongolia (Монгол)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +976
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-me"
                                                    role="option"
                                                    data-dial-code={382}
                                                    onClick={handleClickzx} data-country-code="me"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Montenegro (Crna Gora)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +382
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ms"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="ms"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Montserrat
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ma"
                                                    role="option"
                                                    data-dial-code={212}
                                                    onClick={handleClickzx} data-country-code="ma"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Morocco (‫المغرب‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +212
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mz"
                                                    role="option"
                                                    data-dial-code={258}
                                                    onClick={handleClickzx} data-country-code="mz"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Mozambique (Moçambique)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +258
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mm"
                                                    role="option"
                                                    data-dial-code={95}
                                                    onClick={handleClickzx} data-country-code="mm"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Myanmar (Burma) (မြန်မာ)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +95
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-na"
                                                    role="option"
                                                    data-dial-code={264}
                                                    onClick={handleClickzx} data-country-code="na"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Namibia (Namibië)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +264
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-nr"
                                                    role="option"
                                                    data-dial-code={674}
                                                    onClick={handleClickzx} data-country-code="nr"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Nauru
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +674
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-np"
                                                    role="option"
                                                    data-dial-code={977}
                                                    onClick={handleClickzx} data-country-code="np"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Nepal (नेपाल)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +977
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-nl"
                                                    role="option"
                                                    data-dial-code={31}
                                                    onClick={handleClickzx} data-country-code="nl"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Netherlands (Nederland)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +31
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-nc"
                                                    role="option"
                                                    data-dial-code={687}
                                                    onClick={handleClickzx} data-country-code="nc"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      New Caledonia
                                                      (Nouvelle-Calédonie)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +687
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-nz"
                                                    role="option"
                                                    data-dial-code={64}
                                                    onClick={handleClickzx} data-country-code="nz"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      New Zealand
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +64
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ni"
                                                    role="option"
                                                    data-dial-code={505}
                                                    onClick={handleClickzx} data-country-code="ni"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Nicaragua
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +505
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ne"
                                                    role="option"
                                                    data-dial-code={227}
                                                    onClick={handleClickzx} data-country-code="ne"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Niger (Nijar)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +227
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ng"
                                                    role="option"
                                                    data-dial-code={234}
                                                    onClick={handleClickzx} data-country-code="ng"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Nigeria
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +234
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-nu"
                                                    role="option"
                                                    data-dial-code={683}
                                                    onClick={handleClickzx} data-country-code="nu"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Niue
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +683
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-nf"
                                                    role="option"
                                                    data-dial-code={672}
                                                    onClick={handleClickzx} data-country-code="nf"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Norfolk Island
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +672
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-kp"
                                                    role="option"
                                                    data-dial-code={850}
                                                    onClick={handleClickzx} data-country-code="kp"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      North Korea (조선 민주주의 인민
                                                      공화국)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +850
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mk"
                                                    role="option"
                                                    data-dial-code={389}
                                                    onClick={handleClickzx} data-country-code="mk"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      North Macedonia (Македонија)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +389
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mp"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="mp"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Northern Mariana Islands
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-no"
                                                    role="option"
                                                    data-dial-code={47}
                                                    onClick={handleClickzx} data-country-code="no"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Norway (Norge)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +47
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-om"
                                                    role="option"
                                                    data-dial-code={968}
                                                    onClick={handleClickzx} data-country-code="om"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Oman (‫عُمان‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +968
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-pk"
                                                    role="option"
                                                    data-dial-code={92}
                                                    onClick={handleClickzx} data-country-code="pk"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Pakistan (‫پاکستان‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +92
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-pw"
                                                    role="option"
                                                    data-dial-code={680}
                                                    onClick={handleClickzx} data-country-code="pw"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Palau
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +680
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ps"
                                                    role="option"
                                                    data-dial-code={970}
                                                    onClick={handleClickzx} data-country-code="ps"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Palestine (‫فلسطين‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +970
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-pa"
                                                    role="option"
                                                    data-dial-code={507}
                                                    onClick={handleClickzx} data-country-code="pa"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Panama (Panamá)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +507
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-pg"
                                                    role="option"
                                                    data-dial-code={675}
                                                    onClick={handleClickzx} data-country-code="pg"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Papua New Guinea
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +675
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-py"
                                                    role="option"
                                                    data-dial-code={595}
                                                    onClick={handleClickzx} data-country-code="py"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Paraguay
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +595
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-pe"
                                                    role="option"
                                                    data-dial-code={51}
                                                    onClick={handleClickzx} data-country-code="pe"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Peru (Perú)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +51
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ph"
                                                    role="option"
                                                    data-dial-code={63}
                                                    onClick={handleClickzx} data-country-code="ph"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Philippines
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +63
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-pl"
                                                    role="option"
                                                    data-dial-code={48}
                                                    onClick={handleClickzx} data-country-code="pl"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Poland (Polska)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +48
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-pt"
                                                    role="option"
                                                    data-dial-code={351}
                                                    onClick={handleClickzx} data-country-code="pt"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Portugal
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +351
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-pr"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="pr"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Puerto Rico
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-qa"
                                                    role="option"
                                                    data-dial-code={974}
                                                    onClick={handleClickzx} data-country-code="qa"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Qatar (‫قطر‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +974
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-re"
                                                    role="option"
                                                    data-dial-code={262}
                                                    onClick={handleClickzx} data-country-code="re"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Réunion (La Réunion)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +262
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ro"
                                                    role="option"
                                                    data-dial-code={40}
                                                    onClick={handleClickzx} data-country-code="ro"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Romania (România)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +40
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ru"
                                                    role="option"
                                                    data-dial-code={7}
                                                    onClick={handleClickzx} data-country-code="ru"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Russia (Россия)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +7
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-rw"
                                                    role="option"
                                                    data-dial-code={250}
                                                    onClick={handleClickzx} data-country-code="rw"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Rwanda
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +250
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-bl"
                                                    role="option"
                                                    data-dial-code={590}
                                                    onClick={handleClickzx} data-country-code="bl"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Saint Barthélemy
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +590
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sh"
                                                    role="option"
                                                    data-dial-code={290}
                                                    onClick={handleClickzx} data-country-code="sh"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Saint Helena
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +290
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-kn"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="kn"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Saint Kitts and Nevis
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-lc"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="lc"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Saint Lucia
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-mf"
                                                    role="option"
                                                    data-dial-code={590}
                                                    onClick={handleClickzx} data-country-code="mf"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Saint Martin (Saint-Martin
                                                      (partie française))
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +590
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-pm"
                                                    role="option"
                                                    data-dial-code={508}
                                                    onClick={handleClickzx} data-country-code="pm"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Saint Pierre and Miquelon
                                                      (Saint-Pierre-et-Miquelon)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +508
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-vc"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="vc"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Saint Vincent and the Grenadines
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ws"
                                                    role="option"
                                                    data-dial-code={685}
                                                    onClick={handleClickzx} data-country-code="ws"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Samoa
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +685
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sm"
                                                    role="option"
                                                    data-dial-code={378}
                                                    onClick={handleClickzx} data-country-code="sm"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      San Marino
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +378
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-st"
                                                    role="option"
                                                    data-dial-code={239}
                                                    onClick={handleClickzx} data-country-code="st"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      São Tomé and Príncipe (São Tomé
                                                      e Príncipe)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +239
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sa"
                                                    role="option"
                                                    data-dial-code={966}
                                                    onClick={handleClickzx} data-country-code="sa"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Saudi Arabia (‫المملكة العربية
                                                      السعودية‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +966
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sn"
                                                    role="option"
                                                    data-dial-code={221}
                                                    onClick={handleClickzx} data-country-code="sn"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Senegal (Sénégal)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +221
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-rs"
                                                    role="option"
                                                    data-dial-code={381}
                                                    onClick={handleClickzx} data-country-code="rs"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Serbia (Србија)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +381
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sc"
                                                    role="option"
                                                    data-dial-code={248}
                                                    onClick={handleClickzx} data-country-code="sc"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Seychelles
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +248
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sl"
                                                    role="option"
                                                    data-dial-code={232}
                                                    onClick={handleClickzx} data-country-code="sl"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Sierra Leone
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +232
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sg"
                                                    role="option"
                                                    data-dial-code={65}
                                                    onClick={handleClickzx} data-country-code="sg"
                                                    aria-selected="false"
                                                  >
                                                  
                                                    <span className="iti__country-name">
                                                      Singapore
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +65
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sx"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="sx"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Sint Maarten
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sk"
                                                    role="option"
                                                    data-dial-code={421}
                                                    onClick={handleClickzx} data-country-code="sk"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Slovakia (Slovensko)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +421
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-si"
                                                    role="option"
                                                    data-dial-code={386}
                                                    onClick={handleClickzx} data-country-code="si"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Slovenia (Slovenija)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +386
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sb"
                                                    role="option"
                                                    data-dial-code={677}
                                                    onClick={handleClickzx} data-country-code="sb"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Solomon Islands
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +677
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-so"
                                                    role="option"
                                                    data-dial-code={252}
                                                    onClick={handleClickzx} data-country-code="so"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Somalia (Soomaaliya)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +252
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-za"
                                                    role="option"
                                                    data-dial-code={27}
                                                    onClick={handleClickzx} data-country-code="za"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      South Africa
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +27
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-kr"
                                                    role="option"
                                                    data-dial-code={82}
                                                    onClick={handleClickzx} data-country-code="kr"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      South Korea (대한민국)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +82
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ss"
                                                    role="option"
                                                    data-dial-code={211}
                                                    onClick={handleClickzx} data-country-code="ss"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      South Sudan (‫جنوب السودان‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +211
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-es"
                                                    role="option"
                                                    data-dial-code={34}
                                                    onClick={handleClickzx} data-country-code="es"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Spain (España)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +34
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-lk"
                                                    role="option"
                                                    data-dial-code={94}
                                                    onClick={handleClickzx} data-country-code="lk"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Sri Lanka (ශ්‍රී ලංකාව)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +94
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sd"
                                                    role="option"
                                                    data-dial-code={249}
                                                    onClick={handleClickzx} data-country-code="sd"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Sudan (‫السودان‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +249
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sr"
                                                    role="option"
                                                    data-dial-code={597}
                                                    onClick={handleClickzx} data-country-code="sr"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Suriname
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +597
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sj"
                                                    role="option"
                                                    data-dial-code={47}
                                                    onClick={handleClickzx} data-country-code="sj"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Svalbard and Jan Mayen
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +47
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-se"
                                                    role="option"
                                                    data-dial-code={46}
                                                    onClick={handleClickzx} data-country-code="se"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Sweden (Sverige)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +46
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ch"
                                                    role="option"
                                                    data-dial-code={41}
                                                    onClick={handleClickzx} data-country-code="ch"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Switzerland (Schweiz)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +41
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-sy"
                                                    role="option"
                                                    data-dial-code={963}
                                                    onClick={handleClickzx} data-country-code="sy"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Syria (‫سوريا‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +963
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-tw"
                                                    role="option"
                                                    data-dial-code={886}
                                                    onClick={handleClickzx} data-country-code="tw"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Taiwan (台灣)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +886
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-tj"
                                                    role="option"
                                                    data-dial-code={992}
                                                    onClick={handleClickzx} data-country-code="tj"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Tajikistan
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +992
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-tz"
                                                    role="option"
                                                    data-dial-code={255}
                                                    onClick={handleClickzx} data-country-code="tz"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Tanzania
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +255
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-th"
                                                    role="option"
                                                    data-dial-code={66}
                                                    onClick={handleClickzx} data-country-code="th"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Thailand (ไทย)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +66
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-tl"
                                                    role="option"
                                                    data-dial-code={670}
                                                    onClick={handleClickzx} data-country-code="tl"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Timor-Leste
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +670
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-tg"
                                                    role="option"
                                                    data-dial-code={228}
                                                    onClick={handleClickzx} data-country-code="tg"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Togo
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +228
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-tk"
                                                    role="option"
                                                    data-dial-code={690}
                                                    onClick={handleClickzx} data-country-code="tk"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Tokelau
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +690
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-to"
                                                    role="option"
                                                    data-dial-code={676}
                                                    onClick={handleClickzx} data-country-code="to"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Tonga
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +676
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-tt"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="tt"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Trinidad and Tobago
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-tn"
                                                    role="option"
                                                    data-dial-code={216}
                                                    onClick={handleClickzx} data-country-code="tn"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Tunisia (‫تونس‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +216
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-tr"
                                                    role="option"
                                                    data-dial-code={90}
                                                    onClick={handleClickzx} data-country-code="tr"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Turkey (Türkiye)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +90
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-tm"
                                                    role="option"
                                                    data-dial-code={993}
                                                    onClick={handleClickzx} data-country-code="tm"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Turkmenistan
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +993
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-tc"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="tc"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Turks and Caicos Islands
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-tv"
                                                    role="option"
                                                    data-dial-code={688}
                                                    onClick={handleClickzx} data-country-code="tv"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Tuvalu
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +688
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-vi"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="vi"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      U.S. Virgin Islands
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ug"
                                                    role="option"
                                                    data-dial-code={256}
                                                    onClick={handleClickzx} data-country-code="ug"
                                                    aria-selected="false"
                                                  >
                                                   
                                                    <span className="iti__country-name">
                                                      Uganda
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +256
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ua"
                                                    role="option"
                                                    data-dial-code={380}
                                                    onClick={handleClickzx} data-country-code="ua"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Ukraine (Україна)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +380
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ae"
                                                    role="option"
                                                    data-dial-code={971}
                                                    onClick={handleClickzx} data-country-code="ae"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      United Arab Emirates (‫الإمارات
                                                      العربية المتحدة‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +971
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-gb"
                                                    role="option"
                                                    data-dial-code={44}
                                                    onClick={handleClickzx} data-country-code="gb"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      United Kingdom
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +44
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-us"
                                                    role="option"
                                                    data-dial-code={1}
                                                    onClick={handleClickzx} data-country-code="us"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      United States
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +1
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-uy"
                                                    role="option"
                                                    data-dial-code={598}
                                                    onClick={handleClickzx} data-country-code="uy"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Uruguay
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +598
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-uz"
                                                    role="option"
                                                    data-dial-code={998}
                                                    onClick={handleClickzx} data-country-code="uz"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Uzbekistan (Oʻzbekiston)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +998
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-vu"
                                                    role="option"
                                                    data-dial-code={678}
                                                    onClick={handleClickzx} data-country-code="vu"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Vanuatu
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +678
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-va"
                                                    role="option"
                                                    data-dial-code={39}
                                                    onClick={handleClickzx} data-country-code="va"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Vatican City (Città del
                                                      Vaticano)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +39
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ve"
                                                    role="option"
                                                    data-dial-code={58}
                                                    onClick={handleClickzx} data-country-code="ve"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Venezuela
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +58
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-vn"
                                                    role="option"
                                                    data-dial-code={84}
                                                    onClick={handleClickzx} data-country-code="vn"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Vietnam (Việt Nam)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +84
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-wf"
                                                    role="option"
                                                    data-dial-code={681}
                                                    onClick={handleClickzx} data-country-code="wf"
                                                    aria-selected="false"
                                                  >
                                                    
                                                    <span className="iti__country-name">
                                                      Wallis and Futuna
                                                      (Wallis-et-Futuna)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +681
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-eh"
                                                    role="option"
                                                    data-dial-code={212}
                                                    onClick={handleClickzx} data-country-code="eh"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Western Sahara (‫الصحراء
                                                      الغربية‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +212
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-ye"
                                                    role="option"
                                                    data-dial-code={967}
                                                    onClick={handleClickzx} data-country-code="ye"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Yemen (‫اليمن‬‎)
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +967
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-zm"
                                                    role="option"
                                                    data-dial-code={260}
                                                    onClick={handleClickzx} data-country-code="zm"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Zambia
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +260
                                                    </span>
                                                  </li>
                                                  <li
                                                    className="iti__country iti__standard"
                                                    tabIndex={-1}
                                                    id="iti-0__item-zw"
                                                    role="option"
                                                    data-dial-code={263}
                                                    onClick={handleClickzx} data-country-code="zw"
                                                    aria-selected="false"
                                                  >
                                                     
                                                    <span className="iti__country-name">
                                                      Zimbabwe
                                                    </span>
                                                    <span className="iti__dial-code">
                                                      +263
                                                    </span>
                                                  </li>
                                                </ul>
                                              </div>
                                              <input
                                                type="tel"
                                                className="input-text wfacp-form-control"
                                                name="phone"
                                                id="billing_phone"
                                                placeholder="Phone"
                                                defaultValue=""
                                                autoComplete="tel"
                                                data-intl-tel-input-id={0}
                                                // value={phone.replace(selectedDialCode, '')} // Exclude selectedDialCode from the value
                                                value={phone}
                                                onChange={handlePhoneChange}
                                                style={{
                                                  padding: "0px 88px 2px"
                                                }}
                                              />
                                            </div>
                                          </div>{" "}
                                          <span
                                            className="wfacp_inline_error"
                                            data-key="billing_phone_field"
                                          />
                                          <p />{" "}
                                        </div>
                                      </div>
                                    </div>



                                    <div
                                      className="wfacp-section wfacp-hg-by-box step_1 form_section_single_step_1_elementor-hific  wfacp_shipping_method wfacp_shipping_method"
                                      data-field-count={1}
                                    >
                                      <div className="wfacp_internal_form_wrap wfacp-comm-title ">
                                        <h2 className="wfacp_section_heading wfacp_section_title ">
                                          Shipping Method
                                        </h2>
                                      </div>
                                    </div>


                                    <div>
                                      <RadioOption option={0} label="Free shipping (3-6 days)" />
                                      <RadioOption option={7.5} label="Express Post (1-2 days)" />


                                    </div>


                                    <div
                                      className="wfacp-section wfacp-hg-by-box step_2 form_section_single_step_2_elementor-hific "
                                      data-field-count={2}
                                    >
                                      <div className="wfacp_internal_form_wrap wfacp-comm-title ">
                                        <h2 className="wfacp_section_heading wfacp_section_title ">
                                          Order Summary
                                        </h2>
                                      </div>
                                      <div className="wfacp-comm-form-detail clearfix">
                                        <div className="wfacp-row">
                                          <div
                                            className="wfacp_woocommerce_form_coupon wfacp-form-control-wrapper "
                                            id="order_coupon_field"
                                          >

                                          </div>
                                          <div
                                            className="wfacp_order_summary wfacp_wrapper_start wfacp_order_sec  "
                                            id="order_summary_field"
                                            data-time={1712942806}
                                          >
                                            <label className="wfacp-order-summary-label">Order Summary</label>
                                            <div className="wfacp_anim wfacp_order_summary_container">
                                              <table className="shop_table woocommerce-checkout-review-order-table elementor-hific">
                                                <thead>
                                                  <tr>
                                                    <th className="product-name-area">
                                                      <div className="product-img"> </div>{" "}
                                                      <div className="product-name wfacp_summary_img_true">
                                                        Product{" "}
                                                      </div>
                                                    </th>
                                                    <th className="product-total">Total</th>
                                                  </tr>
                                                </thead>
                                                <tbody>

                                                  {cart?.map((obj, index) => (
                                                    <>
                                                      <tr
                                                        className="cart_item"
                                                        cart_key="aa4f9d456a8504a879ce2fe54e9a68bd"
                                                      >
                                                        <td className="product-name-area">
                                                          <div className="product-image">
                                                            <div className="wfacp-pro-thumb">
                                                              <div className="wfacp-qty-ball" style={{ top: "-5px" }}>
                                                                <div className="wfacp-qty-count">
                                                                  <span className="wfacp-pro-count">{localQuantities[obj.id]}</span>
                                                                </div>
                                                              </div>
                                                              <img src={obj.img[0]}
                                                                width={100}
                                                                height={100}
                                                              />{" "}
                                                            </div>
                                                          </div>
                                                          <div className="product-name  wfacp_summary_img_true ">
                                                            <span className="wfacp_order_summary_item_name">
                                                              {obj.title}
                                                            </span>
                                                          </div>
                                                        </td>
                                                        <td className="product-total">
                                                          <div className="wfacp_order_summary_item_total">
                                                            <span className="woocommerce-Price-amount amount">
                                                              <bdi>
                                                                <span className="woocommerce-Price-currencySymbol">
                                                                  $
                                                                </span>
                                                                {(obj.price * localQuantities[obj.id] || obj.price)}
                                                              </bdi>
                                                            </span>{" "}
                                                          </div>

                                                          <button className="Checkout_Cart_LineItems_LineItem_Remove" onClick={() => handleRemoveFromCart(obj.id)} style={{ position: "relative" }}>
                                                            <span className="Checkout_Cart_LineItems_LineItem_Remove_Cross">
                                                              <span />
                                                              <span />
                                                            </span>
                                                            <span className="Checkout_Cart_LineItems_LineItem_Remove_Spinner">
                                                              <span />
                                                            </span>
                                                          </button>
                                                        </td>
                                                      </tr>
                                                      <tr style={{ height: '1px', backgroundColor: '#DFDEE5', position: "absolute" }}>




                                                      </tr>
                                                    </>
                                                  ))
                                                  }
                                                </tbody>


                                                <tfoot>
                                                  <tr className="cart-subtotal">
                                                    <th>
                                                      <span>Subtotal</span>
                                                    </th>
                                                    <td>
                                                      <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                          <span className="woocommerce-Price-currencySymbol">
                                                            $
                                                          </span>
                                                          {subtotal}
                                                        </bdi>
                                                      </span>
                                                    </td>
                                                  </tr>
                                                  {selectedOption !== 0 && (
                                                    <tr className="shipping_total_fee">
                                                      <td colSpan={1}>
                                                        <span>Shipping</span>
                                                      </td>
                                                      <td
                                                        colSpan={1}
                                                        style={{ textAlign: "right" }}
                                                        data-title="Shipping"
                                                      >
                                                        <span>
                                                          <span className="woocommerce-Price-amount amount">
                                                            <bdi>
                                                              <span className="woocommerce-Price-currencySymbol">
                                                                $
                                                              </span>
                                                              7.50
                                                            </bdi>
                                                          </span>
                                                        </span>
                                                      </td>
                                                    </tr>
                                                  )}
                                                  <style
                                                    dangerouslySetInnerHTML={{
                                                      __html:
                                                        "\n    .pwgc-checkout-subtitle {\n        line-height: 1.4;\n        font-size: 80%;\n        font-weight: 300;\n    }\n"
                                                    }}
                                                  />
                                                  <tr className="order-total">
                                                    <th>
                                                      <span>Total</span>
                                                    </th>
                                                    <td>
                                                      <strong>
                                                        <span className="woocommerce-Price-amount amount">
                                                          <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">
                                                              $
                                                            </span>
                                                            {selectedOption !== 0 ? (subtotal + 7.50).toFixed(2) : subtotal.toFixed(2)}
                                                          </bdi>
                                                        </span>
                                                      </strong>{" "}
                                                    </td>
                                                  </tr>
                                                </tfoot>
                                              </table>

                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>



                                  </div>
                                </form>

                                {/* <Checkout personal={inputs} /> */}
                                <ElementsForm personal={inputs}/>


                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>


                    <section
                      className="elementor-section elementor-inner-section elementor-element elementor-element-1f152866 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="1f152866"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1ae8d88c"
                          data-id="1ae8d88c"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-51f925d7 elementor-align-center elementor-mobile-align-center elementor-tablet-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                              data-id="51f925d7"
                              data-element_type="widget"
                              data-widget_type="icon-list.default"
                            >
                              <div className="elementor-widget-container">
                                <link
                                  rel="stylesheet"
                                  href="https://yourcard.au/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css"
                                />{" "}
                                <ul className="elementor-icon-list-items">
                                  <li className="elementor-icon-list-item">
                                    <span className="elementor-icon-list-icon">
                                      <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{ color: '#ea6a2b', marginLeft: '10px' }}
                                      />
                                    </span>
                                    <span className="elementor-icon-list-text">
                                      256-Bit Bank Level Security
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div
                          className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-52241c0e"
                          data-id="52241c0e"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-2d078580 elementor-align-center elementor-mobile-align-center elementor-tablet-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                              data-id="2d078580"
                              data-element_type="widget"
                              data-widget_type="icon-list.default"
                            >
                              <div className="elementor-widget-container">
                                <ul className="elementor-icon-list-items">
                                  <li className="elementor-icon-list-item">
                                    <span className="elementor-icon-list-icon">
                                      <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{ color: '#ea6a2b', marginLeft: '10px' }}
                                      />
                                    </span>
                                    <span className="elementor-icon-list-text">
                                      100% Secure Payments
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <div
                      className="elementor-element elementor-element-5ffcd68 elementor-widget elementor-widget-spacer"
                      data-id="5ffcd68"
                      data-element_type="widget"
                      data-widget_type="spacer.default"
                    >
                      <div className="elementor-widget-container">
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "/*! elementor - v3.20.0 - 26-03-2024 */\n.elementor-column .elementor-spacer-inner{height:var(--spacer-size)}.e-con{--container-widget-width:100%}.e-con-inner>.elementor-widget-spacer,.e-con>.elementor-widget-spacer{width:var(--container-widget-width,var(--spacer-size));--align-self:var(--container-widget-align-self,initial);--flex-shrink:0}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container,.e-con>.elementor-widget-spacer>.elementor-widget-container{height:100%;width:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer{height:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner{height:var(--container-widget-height,var(--spacer-size))}.e-con-inner>.elementor-widget-spacer.elementor-widget-empty,.e-con>.elementor-widget-spacer.elementor-widget-empty{position:relative;min-height:22px;min-width:22px}.e-con-inner>.elementor-widget-spacer.elementor-widget-empty .elementor-widget-empty-icon,.e-con>.elementor-widget-spacer.elementor-widget-empty .elementor-widget-empty-icon{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;padding:0;width:22px;height:22px}"
                          }}
                        />{" "}
                        <div className="elementor-spacer">
                          <div className="elementor-spacer-inner" />
                        </div>
                      </div>
                    </div>
                    <section
                      className="elementor-section elementor-inner-section elementor-element elementor-element-7c2f183 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="7c2f183"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4242006c"
                          data-id="4242006c"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-29ec9a6c elementor-widget__width-auto elementor-widget elementor-widget-image"
                              data-id="29ec9a6c"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div className="elementor-widget-container">
                                <img
                                  decoding="async"
                                  src="https://d3ldyx3r2ad3ic.cloudfront.net/templates/template-assets/images/store-checkout-2/mcafe.png"
                                  title=""
                                  alt=""
                                  loading="lazy"
                                />{" "}
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-27701317 elementor-widget__width-auto elementor-widget elementor-widget-image"
                              data-id={27701317}
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div className="elementor-widget-container">
                                <img
                                  decoding="async"
                                  src="https://d3ldyx3r2ad3ic.cloudfront.net/templates/template-assets/images/store-checkout-2/norton.png"
                                  title=""
                                  alt=""
                                  loading="lazy"
                                />{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div
                      className="elementor-element elementor-element-8ca5397 elementor-widget elementor-widget-spacer"
                      data-id="8ca5397"
                      data-element_type="widget"
                      data-widget_type="spacer.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-spacer">
                          <div className="elementor-spacer-inner" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-462e12f4"
                  data-id="462e12f4"
                  data-element_type="column"
                  data-settings='{"background_background":"classic"}'
                >
                  <div className="elementor-widget-wrap elementor-element-populated" style={{ backgroundColor: "#e9e9e9" }}>
                    <section
                      className="elementor-section elementor-inner-section elementor-element elementor-element-5abb9fe elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="5abb9fe"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-fd1abaa"
                          data-id="fd1abaa"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-0e1fd4d elementor-widget elementor-widget-spacer"
                              data-id="0e1fd4d"
                              data-element_type="widget"
                              data-widget_type="spacer.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-spacer">
                                  <div className="elementor-spacer-inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div
                      className="elementor-element elementor-element-46b87940 elementor-widget elementor-widget-text-editor"
                      data-id="46b87940"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "/*! elementor - v3.20.0 - 26-03-2024 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}"
                          }}
                        />{" "}
                        Shop With Confidence{" "}
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-6671b079 elementor-widget elementor-widget-text-editor"
                      data-id="6671b079"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <p>Trusted by more than 5000+ users</p>{" "}
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-2d85f393 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-id="2d85f393"
                      data-element_type="widget"
                      data-widget_type="icon-list.default"
                    >
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <FontAwesomeIcon
                                icon={faCheckCircle}
                                style={{ color: '#ea6a2b', marginLeft: '10px' }}
                              />
                            </span>
                            <span className="elementor-icon-list-text">
                              Fully Customisable Profile
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <FontAwesomeIcon
                                icon={faCheckCircle}
                                style={{ color: '#ea6a2b', marginLeft: '10px' }}
                              />
                            </span>
                            <span className="elementor-icon-list-text">
                              Contact Card, Website, Social Media and More
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <FontAwesomeIcon
                                icon={faCheckCircle}
                                style={{ color: '#ea6a2b', marginLeft: '10px' }}
                              />
                            </span>
                            <span className="elementor-icon-list-text">
                              Secure Encrypted Data
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <FontAwesomeIcon
                                icon={faCheckCircle}
                                style={{ color: '#ea6a2b', marginLeft: '10px' }}
                              />
                            </span>
                            <span className="elementor-icon-list-text">
                              24/7 Customer Service
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-c0e01b3 elementor-widget elementor-widget-spacer"
                      data-id="c0e01b3"
                      data-element_type="widget"
                      data-widget_type="spacer.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-spacer">
                          <div className="elementor-spacer-inner" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-412bf62f elementor-widget elementor-widget-text-editor"
                      data-id="412bf62f"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <p>Happy Customers</p>{" "}
                      </div>
                    </div>








                    {allTemp && allTemp?.length > 0 ? (

                      allTemp.map((post) => (
                        <>
                          <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-77655209 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id={77655209}
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-59ece028"
                                data-id="59ece028"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-444daeda elementor-widget elementor-widget-testimonial"
                                    data-id="444daeda"
                                    data-element_type="widget"
                                    data-widget_type="testimonial.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <style
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            "/*! elementor - v3.20.0 - 26-03-2024 */\n.elementor-testimonial-wrapper{overflow:hidden;text-align:center}.elementor-testimonial-wrapper .elementor-testimonial-content{font-size:1.3em;margin-bottom:20px}.elementor-testimonial-wrapper .elementor-testimonial-name{line-height:1.5;display:block}.elementor-testimonial-wrapper .elementor-testimonial-job{font-size:.85em;display:block}.elementor-testimonial-wrapper .elementor-testimonial-meta{width:100%;line-height:1}.elementor-testimonial-wrapper .elementor-testimonial-meta-inner{display:inline-block}.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-details,.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-image{display:table-cell;vertical-align:middle}.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-image img{width:60px;height:60px;border-radius:50%;-o-object-fit:cover;object-fit:cover;max-width:none}.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-aside .elementor-testimonial-image{padding-right:15px}.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-aside .elementor-testimonial-details{text-align:left}.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-details,.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-image{display:block}.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-image{margin-bottom:20px}"
                                        }}
                                      />{" "}
                                      <div className="elementor-testimonial-wrapper">
                                        <div className="elementor-testimonial-meta">
                                          <div className="elementor-testimonial-meta-inner">
                                            <div className="elementor-testimonial-details">
                                              <div className="elementor-testimonial-name">
                                                {post.name}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7011aeb8"
                                data-id="7011aeb8"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-687cdb0f elementor--star-style-star_unicode elementor-star-rating--align-right elementor-star-rating-tablet--align-center elementor-widget elementor-widget-star-rating"
                                    data-id="687cdb0f"
                                    data-element_type="widget"
                                    data-widget_type="star-rating.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <style
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            '/*! elementor - v3.20.0 - 26-03-2024 */\n@charset "UTF-8";.elementor-star-rating{color:#ccd6df;font-family:eicons;display:inline-block}.elementor-star-rating i{display:inline-block;position:relative;font-style:normal;cursor:default}.elementor-star-rating i:before{content:"\\e934";display:block;font-size:inherit;font-family:inherit;position:absolute;overflow:hidden;color:#f0ad4e;top:0;left:0}.elementor-star-rating .elementor-star-empty:before{content:none}.elementor-star-rating .elementor-star-1:before{width:10%}.elementor-star-rating .elementor-star-2:before{width:20%}.elementor-star-rating .elementor-star-3:before{width:30%}.elementor-star-rating .elementor-star-4:before{width:40%}.elementor-star-rating .elementor-star-5:before{width:50%}.elementor-star-rating .elementor-star-6:before{width:60%}.elementor-star-rating .elementor-star-7:before{width:70%}.elementor-star-rating .elementor-star-8:before{width:80%}.elementor-star-rating .elementor-star-9:before{width:90%}.elementor-star-rating__wrapper{display:flex;align-items:center}.elementor-star-rating__title{margin-right:10px}.elementor-star-rating--align-right .elementor-star-rating__wrapper{text-align:right;justify-content:flex-end}.elementor-star-rating--align-left .elementor-star-rating__wrapper{text-align:left;justify-content:flex-start}.elementor-star-rating--align-center .elementor-star-rating__wrapper{text-align:center;justify-content:center}.elementor-star-rating--align-justify .elementor-star-rating__title{margin-right:auto}@media (max-width:1024px){.elementor-star-rating-tablet--align-right .elementor-star-rating__wrapper{text-align:right;justify-content:flex-end}.elementor-star-rating-tablet--align-left .elementor-star-rating__wrapper{text-align:left;justify-content:flex-start}.elementor-star-rating-tablet--align-center .elementor-star-rating__wrapper{text-align:center;justify-content:center}.elementor-star-rating-tablet--align-justify .elementor-star-rating__title{margin-right:auto}}@media (max-width:767px){.elementor-star-rating-mobile--align-right .elementor-star-rating__wrapper{text-align:right;justify-content:flex-end}.elementor-star-rating-mobile--align-left .elementor-star-rating__wrapper{text-align:left;justify-content:flex-start}.elementor-star-rating-mobile--align-center .elementor-star-rating__wrapper{text-align:center;justify-content:center}.elementor-star-rating-mobile--align-justify .elementor-star-rating__title{margin-right:auto}}.last-star{letter-spacing:0}.elementor--star-style-star_unicode .elementor-star-rating{font-family:Arial,Helvetica,sans-serif}.elementor--star-style-star_unicode .elementor-star-rating i:not(.elementor-star-empty):before{content:"★"}'
                                        }}
                                      />
                                      <div className="elementor-star-rating__wrapper">
                                        <div
                                          className="elementor-star-rating"
                                          title="5/5"
                                          itemType="http://schema.org/Rating"
                                          itemScope=""
                                          itemProp="reviewRating"
                                        >
                                          <i className="elementor-star-full">★</i>
                                          <i className="elementor-star-full">★</i>
                                          <i className="elementor-star-full">★</i>
                                          <i className="elementor-star-full">★</i>
                                          <i className="elementor-star-full">★</i>{" "}
                                          <span
                                            itemProp="ratingValue"
                                            className="elementor-screen-only"
                                          >
                                            5/5
                                          </span>
                                        </div>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div
                            className="elementor-element elementor-element-3fd62e90 elementor-widget-tablet__width-initial elementor-widget elementor-widget-text-editor"
                            data-id="3fd62e90"
                            data-element_type="widget"
                            data-widget_type="text-editor.default"
                          >
                            <div className="elementor-widget-container">
                              <p>
                                <span
                                  style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: 15,
                                    fontStyle: "normal",
                                    fontVariantLigatures: "normal",
                                    fontVariantCaps: "normal",
                                    fontWeight: 400
                                  }}
                                >
                                  {post.description}
                                </span>
                              </p>{" "}
                            </div>
                          </div>
                        </>
                      ))


                    ) : (
                      <div className='home___error-container'>
                        <h2 className='text-black text-xl dont-bold'>...</h2>

                      </div>
                    )

                    }




                    <div
                      className="elementor-element elementor-element-26beaee9 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                      data-id="26beaee9"
                      data-element_type="widget"
                      data-widget_type="divider.default"
                    >
                      <div className="elementor-widget-container">
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              '/*! elementor - v3.20.0 - 26-03-2024 */\n.elementor-widget-divider{--divider-border-style:none;--divider-border-width:1px;--divider-color:#0c0d0e;--divider-icon-size:20px;--divider-element-spacing:10px;--divider-pattern-height:24px;--divider-pattern-size:20px;--divider-pattern-url:none;--divider-pattern-repeat:repeat-x}.elementor-widget-divider .elementor-divider{display:flex}.elementor-widget-divider .elementor-divider__text{font-size:15px;line-height:1;max-width:95%}.elementor-widget-divider .elementor-divider__element{margin:0 var(--divider-element-spacing);flex-shrink:0}.elementor-widget-divider .elementor-icon{font-size:var(--divider-icon-size)}.elementor-widget-divider .elementor-divider-separator{display:flex;margin:0;direction:ltr}.elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{align-items:center}.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{display:block;content:"";border-block-end:0;flex-grow:1;border-block-start:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-left .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-left .elementor-divider__element{margin-left:0}.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-right .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-right .elementor-divider__element{margin-right:0}.elementor-widget-divider--element-align-start .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-start .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-start .elementor-divider__element{margin-inline-start:0}.elementor-widget-divider--element-align-end .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-end .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-end .elementor-divider__element{margin-inline-end:0}.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{border-block-start:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--separator-type-pattern{--divider-border-style:none}.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{width:100%;min-height:var(--divider-pattern-height);-webkit-mask-size:var(--divider-pattern-size) 100%;mask-size:var(--divider-pattern-size) 100%;-webkit-mask-repeat:var(--divider-pattern-repeat);mask-repeat:var(--divider-pattern-repeat);background-color:var(--divider-color);-webkit-mask-image:var(--divider-pattern-url);mask-image:var(--divider-pattern-url)}.elementor-widget-divider--no-spacing{--divider-pattern-size:auto}.elementor-widget-divider--bg-round{--divider-pattern-repeat:round}.rtl .elementor-widget-divider .elementor-divider__text{direction:rtl}.e-con-inner>.elementor-widget-divider,.e-con>.elementor-widget-divider{width:var(--container-widget-width,100%);--flex-grow:var(--container-widget-flex-grow)}'
                          }}
                        />{" "}
                        <div className="elementor-divider">
                          <span className="elementor-divider-separator"></span>
                        </div>
                      </div>
                    </div>

                    <section
                      className="elementor-section elementor-inner-section elementor-element elementor-element-d69b4d5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="d69b4d5"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-ac02d3e"
                          data-id="ac02d3e"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-70e47e6 elementor-widget elementor-widget-spacer"
                              data-id="70e47e6"
                              data-element_type="widget"
                              data-widget_type="spacer.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-spacer">
                                  <div className="elementor-spacer-inner" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-69635c4 elementor-align-center elementor-widget elementor-widget-button"
                              data-id="69635c4"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                  <a
                                    className="elementor-button elementor-button-link elementor-size-sm"
                                    href="/shop"
                                  >
                                    <span className="elementor-button-content-wrapper">
                                      <span className="elementor-button-text">
                                        Continue Shopping
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-aa53a25 elementor-widget elementor-widget-spacer"
                              data-id="aa53a25"
                              data-element_type="widget"
                              data-widget_type="spacer.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-spacer">
                                  <div className="elementor-spacer-inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>


      ) : (
        <div
          data-render-if="cart-is-initialised,cart-is-empty"
          className="Checkout_Empty"
          style={{ marginTop: "2em" }}
        >
          <div className="Checkout_Empty_IconWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 27">
              <circle cx={13} cy={24} r={2} />
              <circle cx={24} cy={24} r={2} />
              <path d="M1.5 2h3s1.5 0 2 2l4 13s.4 1 1 1h13s3.6-.3 4-4l1-5s0-1-2-1h-19" />
            </svg>
          </div>
          <p className="EmptyCartBlurb">You have no items in your shopping cart.</p>
          <a
            href="/shop"
            className="Common_Button"
            data-auto-id="true"
            id="protected/checkout/checkout-page-with-layout-conditionals-continueshoppingpath-2"
          >
            Continue shopping
          </a>
        </div>

      )}
<style
  dangerouslySetInnerHTML={{
    __html:
      '\n\n  select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"] {\n    font-family: initial;\n    font-size: initial;\n    line-height: initial;\n    font-weight: initial;\n    padding: initial;\n    border-radius: initial;\n    border-style: initial;\n    border-width: initial;\n    border-color: initial;\n    background-color: initial;\n    margin-bottom: initial;\n    text-shadow: initial;\n    box-shadow: initial;\n    box-sizing: initial;\n    transition: initial;\n    color: initial;\n}\n'
  }}
/>
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n\n.NewsletterSignupFooter_Component .klaviyo_submit_button {\n  line-height: inherit;\n}\n"
  }}
/>
<style
  dangerouslySetInnerHTML={{ __html: "\n\nbody {\n      color: initial;\n}\n" }}
/>

    </>

  )
}

export default page