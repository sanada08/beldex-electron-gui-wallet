<template>
  <q-page class="swap" style="min-height: unset">
    <div v-if="this.routes === 'mainPage'">
      <div class="flex row justify-between">
        <header class="text-h6 ft-bold">Exchange</header>

        <q-btn
          color="accent"
          class="history-btn"
          @click="routes = 'txnHistory'"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.6875 1.875C3.75713 1.875 3 2.63213 3 3.5625V12.375H2.4375C2.127 12.375 1.875 12.6266 1.875 12.9375V13.6875C1.875 15.0315 2.9685 16.125 4.3125 16.125H9.55298C9.3696 15.7732 9.22925 15.3956 9.1355 15H4.3125C3.58875 15 3 14.4113 3 13.6875V13.5H9.01904C9.04867 13.1104 9.12216 12.7335 9.23804 12.375H4.125V3.5625C4.125 3.25238 4.37738 3 4.6875 3H13.3125C13.6226 3 13.875 3.25238 13.875 3.5625V9C14.2627 9 14.6381 9.05 15 9.1355V3.5625C15 2.63213 14.2429 1.875 13.3125 1.875H4.6875ZM6.1875 4.875C6.03832 4.875 5.89524 4.93426 5.78975 5.03975C5.68426 5.14524 5.625 5.28832 5.625 5.4375C5.625 5.58668 5.68426 5.72976 5.78975 5.83525C5.89524 5.94074 6.03832 6 6.1875 6C6.33668 6 6.47976 5.94074 6.58525 5.83525C6.69074 5.72976 6.75 5.58668 6.75 5.4375C6.75 5.28832 6.69074 5.14524 6.58525 5.03975C6.47976 4.93426 6.33668 4.875 6.1875 4.875ZM8.0625 4.875C7.98796 4.87395 7.91396 4.88772 7.84479 4.91551C7.77562 4.94331 7.71266 4.98457 7.65958 5.03691C7.6065 5.08925 7.56435 5.15161 7.53557 5.22038C7.5068 5.28915 7.49199 5.36295 7.49199 5.4375C7.49199 5.51205 7.5068 5.58585 7.53557 5.65462C7.56435 5.72339 7.6065 5.78575 7.65958 5.83809C7.71266 5.89043 7.77562 5.93169 7.84479 5.95949C7.91396 5.98728 7.98796 6.00105 8.0625 6H11.8125C11.887 6.00105 11.961 5.98728 12.0302 5.95949C12.0994 5.93169 12.1623 5.89043 12.2154 5.83809C12.2685 5.78575 12.3107 5.72339 12.3394 5.65462C12.3682 5.58585 12.383 5.51205 12.383 5.4375C12.383 5.36295 12.3682 5.28915 12.3394 5.22038C12.3107 5.15161 12.2685 5.08925 12.2154 5.03691C12.1623 4.98457 12.0994 4.94331 12.0302 4.91551C11.961 4.88772 11.887 4.87395 11.8125 4.875H8.0625ZM6.1875 7.125C6.03832 7.125 5.89524 7.18426 5.78975 7.28975C5.68426 7.39524 5.625 7.53832 5.625 7.6875C5.625 7.83668 5.68426 7.97976 5.78975 8.08525C5.89524 8.19074 6.03832 8.25 6.1875 8.25C6.33668 8.25 6.47976 8.19074 6.58525 8.08525C6.69074 7.97976 6.75 7.83668 6.75 7.6875C6.75 7.53832 6.69074 7.39524 6.58525 7.28975C6.47976 7.18426 6.33668 7.125 6.1875 7.125ZM8.0625 7.125C7.98796 7.12395 7.91396 7.13772 7.84479 7.16551C7.77562 7.19331 7.71266 7.23457 7.65958 7.28691C7.6065 7.33925 7.56435 7.40161 7.53557 7.47038C7.5068 7.53915 7.49199 7.61295 7.49199 7.6875C7.49199 7.76205 7.5068 7.83585 7.53557 7.90462C7.56435 7.97339 7.6065 8.03575 7.65958 8.08809C7.71266 8.14043 7.77562 8.18169 7.84479 8.20949C7.91396 8.23728 7.98796 8.25105 8.0625 8.25H11.8125C11.887 8.25105 11.961 8.23728 12.0302 8.20949C12.0994 8.18169 12.1623 8.14043 12.2154 8.08809C12.2685 8.03575 12.3107 7.97339 12.3394 7.90462C12.3682 7.83585 12.383 7.76205 12.383 7.6875C12.383 7.61295 12.3682 7.53915 12.3394 7.47038C12.3107 7.40161 12.2685 7.33925 12.2154 7.28691C12.1623 7.23457 12.0994 7.19331 12.0302 7.16551C11.961 7.13772 11.887 7.12395 11.8125 7.125H8.0625ZM6.1875 9.375C6.03832 9.375 5.89524 9.43426 5.78975 9.53975C5.68426 9.64524 5.625 9.78832 5.625 9.9375C5.625 10.0867 5.68426 10.2298 5.78975 10.3352C5.89524 10.4407 6.03832 10.5 6.1875 10.5C6.33668 10.5 6.47976 10.4407 6.58525 10.3352C6.69074 10.2298 6.75 10.0867 6.75 9.9375C6.75 9.78832 6.69074 9.64524 6.58525 9.53975C6.47976 9.43426 6.33668 9.375 6.1875 9.375ZM8.0625 9.375C7.752 9.375 7.5 9.62663 7.5 9.9375C7.5 10.2484 7.752 10.5 8.0625 10.5H10.3623C10.8108 10.0331 11.3498 9.6539 11.9531 9.39478C11.9078 9.38315 11.8612 9.375 11.8125 9.375H8.0625ZM13.875 9.75C11.5969 9.75 9.75 11.5969 9.75 13.875C9.75 16.1531 11.5969 18 13.875 18C16.1531 18 18 16.1531 18 13.875C18 11.5969 16.1531 9.75 13.875 9.75ZM12.375 11.25H15.375C15.5824 11.25 15.75 11.418 15.75 11.625C15.75 11.832 15.5824 12 15.375 12V12.75C15.375 13.2 15.1714 13.5997 14.8564 13.875C15.1714 14.1503 15.375 14.55 15.375 15V15.75C15.5824 15.75 15.75 15.918 15.75 16.125C15.75 16.332 15.5824 16.5 15.375 16.5H15H12.75H12.375C12.1676 16.5 12 16.332 12 16.125C12 15.918 12.1676 15.75 12.375 15.75V15C12.375 14.55 12.5786 14.1503 12.8936 13.875C12.5786 13.5997 12.375 13.2 12.375 12.75V12C12.1676 12 12 11.832 12 11.625C12 11.418 12.1676 11.25 12.375 11.25ZM13.125 12V12.75H14.625V12H13.125ZM13.875 14.25C13.4614 14.25 13.125 14.5864 13.125 15V15.6042L13.7563 15.394C13.8332 15.3685 13.9168 15.3685 13.9937 15.394L14.625 15.6042V15C14.625 14.5864 14.2886 14.25 13.875 14.25Z"
              fill="white"
            />
          </svg>
          <span class="q-ml-xs"> History </span>
        </q-btn>
      </div>

      <section class="flex row justify-between">
        <article style="width: 49%">
          <OxenField
            class="q-mt-md ft-regular"
            label="You send"
            :error="$v.sendAmount.$error"
          >
            <q-input
              v-model="sendAmount"
              borderless
              dense
              type="number"
              min="0.1"
              max="100000"
              :placeholder="0"
              @keydown="keyHandler"
              @blur="$v.sendAmount.$touch"
            />
            <q-select
              v-model="sendAmounType"
              :options="currencyList"
              borderless
              dense
              emit-value
              map-options
              class="ft-semibold q-pl-sm dropdown-send-type"
              popup-content-class="exchage-option"
              dropdown-icon="expand_more"
              :menu-offset="[170, 10]"
              @input="sendAmountValidator($event)"
            >
              <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                  <q-item-section class="swapdropDown-option">
                    <q-img
                      class="q-mr-sm"
                      :src="scope.opt.icon"
                      style="
                        height: 20px;
                        max-width: 20px;
                        filter: grayscale(150);
                      "
                    />
                    <q-item-label class="ft-bold q-mr-xs"
                      >{{ scope.opt.name }}
                    </q-item-label>
                    <q-item-label class="currency-name ft-regular">
                      - {{ scope.opt.description }}</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </OxenField>
          <span class="q-mt-xs">Minimum amount is 762 BDX</span>
          <div class="flex justify-end">
            <q-btn
              color="accent"
              class="swap-btn q-mt-sm"
              @click="swapCurrencyType"
            >
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="icons8-sorting_arrows_horizontal 1"
                  clip-path="url(#clip0_81_8938)"
                >
                  <path
                    id="Vector"
                    d="M2.53125 4.24068C2.53125 4.58443 2.73948 4.89183 3.05679 5.02404C3.3774 5.15294 3.74098 5.07692 3.98227 4.82903L5.92247 2.88882L5.92248 15.2308L7.61478 15.2308L7.61478 2.88882L9.55499 4.82903C9.76653 5.05048 10.0838 5.13972 10.378 5.0604C10.6755 4.98437 10.9069 4.753 10.9829 4.45553C11.0622 4.16136 10.973 3.84405 10.7515 3.63251L7.36689 0.247896C7.03636 -0.0826323 6.5009 -0.0826322 6.17037 0.247896L2.78576 3.63251C2.62049 3.79117 2.53125 4.00931 2.53125 4.24068ZM5.92248 22L7.61478 22L7.61478 20.3077L5.92248 20.3077L5.92248 22ZM5.92248 18.6154L7.61478 18.6154L7.61478 16.9231L5.92248 16.9231L5.92248 18.6154ZM10.9895 17.7858C10.9961 18.0072 11.0886 18.2154 11.2473 18.3675L14.6319 21.7521C14.9624 22.0826 15.4979 22.0826 15.8284 21.7521L19.213 18.3675C19.4345 18.1559 19.5237 17.8386 19.4444 17.5445C19.3684 17.247 19.137 17.0156 18.8395 16.9396C18.5454 16.8603 18.2281 16.9495 18.0165 17.171L16.0763 19.1112L16.0763 6.76923L14.384 6.76923L14.384 19.1112L12.4438 17.171C12.1992 16.9198 11.829 16.8471 11.5084 16.9826C11.1845 17.1181 10.9796 17.4354 10.9895 17.7858ZM14.384 5.07692L16.0763 5.07692L16.0763 3.38461L14.384 3.38461L14.384 5.07692ZM14.384 1.69231L16.0763 1.69231L16.0763 -5.92074e-07L14.384 -5.18101e-07L14.384 1.69231Z"
                    fill="#A9A9CD"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_81_8938">
                    <rect
                      width="22"
                      height="22"
                      fill="white"
                      transform="translate(0 22) rotate(-90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </q-btn>
          </div>

          <OxenField class="ft-regular" label="You get">
            <q-input
              v-model="exchange_amount.amountTo"
              :dark="theme == 'dark'"
              borderless
              dense
              :placeholder="0"
              disable
            />
            <q-select
              v-model="receiveAmountType"
              :options="currencyList"
              borderless
              dense
              emit-value
              map-options
              :menu-offset="[170, 10]"
              :options-html="receiveAmountType"
              class="ft-semibold q-pl-sm dropdown-send-type"
              popup-content-class="exchage-option"
              dropdown-icon="expand_more"
              @change="val => getAmountValidator(val)"
            >
              <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                  <q-item-section class="swapdropDown-option">
                    <q-img
                      class="q-mr-sm"
                      :src="scope.opt.icon"
                      style="
                        height: 20px;
                        max-width: 20px;
                        filter: grayscale(150);
                      "
                    />
                    <q-item-label class="ft-bold q-mr-xs"
                      >{{ scope.opt.name }}
                    </q-item-label>
                    <q-item-label class="currency-name ft-regular">
                      - {{ scope.opt.description }}</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </OxenField>
        </article>
        <article style="width: 48%">
          <div class="ft-semibold" style="margin-top: 14px; margin-bottom: 9px">
            Transaction details
          </div>
          <table style="width: 100%" class="txn-fee-details">
            <tr>
              <td>You send</td>
              <td>{{ this.sendAmount > 0 ? this.sendAmount : 0 }} BTC</td>
            </tr>
            <tr v-if="this.exechangeRate === 'float'">
              <td>Exchange rate</td>
              <td>
                1
                {{
                  exchange_amount.from ? exchange_amount.from.toUpperCase() : ""
                }}
                ~ {{ exchange_amount.rate }}
                {{ exchange_amount.to ? exchange_amount.to.toUpperCase() : "" }}
              </td>
            </tr>
            <tr v-else>
              <td>Fixed rate</td>
              <td>
                <span>1 BTC ~ 15.97904761 ETH</span><br />
                <span class="fixed-rate-hint"
                  >The fixed rate is updated every 30 Seconds</span
                >
              </td>
            </tr>
            <tr v-if="this.exechangeRate == 'float'">
              <td>Service fee 0.25%</td>
              <td>
                {{ exchange_amount.fee }}
                {{ exchange_amount.to ? exchange_amount.to.toUpperCase() : "" }}
              </td>
            </tr>

            <tr v-else>
              <td>Fees</td>
              <td style="font-size: 12px">All fees inclueded in the rate</td>
            </tr>
            <tr v-if="this.exechangeRate == 'float'">
              <td>Network fee</td>
              <td>
                {{ exchange_amount.networkFee }}
                {{ exchange_amount.to ? exchange_amount.to.toUpperCase() : "" }}
              </td>
            </tr>
            <tr>
              <td>You Get</td>
              <td>
                ~ {{ exchange_amount.amountTo }}
                {{ exchange_amount.to ? exchange_amount.to.toUpperCase() : "" }}
              </td>
            </tr>
          </table>
        </article>
      </section>

      <!-- <article>
      <q-expansion-item
        dense
        dense-toggleexpand-icon-toggle
        expand-separator
        class="fee-expand q-mt-md"
        dropdown-icon="expand_more"
        label="All fees included"
      >
        <q-card class="drp-content">
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </article> -->

      <section class="exerate-wrapper q-mt-md">
        <article class="flex row info-wrapper q-my-md">
          <div style="width: 4%; padding-top: 5px" class="flex justify-center">
            <q-icon name="o_info" size="14px" />
          </div>
          <div style="width: 95%">
            Please do not forget to paste the XRP destination tag provided by
            your wallet. If the tag is required by your wallet yet is missing in
            your recipient data, your Ripples will not be delivered.
          </div>
        </article>

        <article
          :class="
            `flex row exerate-inner-wrapper q-py-md ${
              this.exechangeRate === 'float' ? 'active' : ''
            }`
          "
          @click="this.getExchangeRate"
        >
          <div class="col-1 flex justify-center items-center">
            <span class="flex justify-center items-center icon" style="">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icons8-padlock 1">
                  <path
                    id="Vector"
                    d="M12 1C14.8722 1 17.2811 3.04615 17.877 5.78711L15.9219 6.21289C15.5177 4.35385 13.9278 3 12 3C9.72381 3 8 4.72381 8 7V8H18C19.1 8 20 8.9 20 10V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V10C4 8.9 4.9 8 6 8V7C6 3.67619 8.67619 1 12 1ZM12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13Z"
                    fill="#A9A9CD"
                  />
                </g>
              </svg>
            </span>
          </div>
          <div class="col-10 flex items-center justify-between">
            <span class="ft-semibold content">Floating Exchange Rate</span
            ><br />
            <span> ~ {{ exchange_amount.rate }} </span>
            <!-- <span class="ft-regular" style="color: #afafbe; font-size: 12px"
            >Your amount could chage depending on the market conditions</span
          > -->
          </div>
        </article>

        <article
          :class="
            `flex row exerate-inner-wrapper q-py-md q-mt-sm ${
              this.exechangeRate === 'fixed' ? 'active' : ''
            }`
          "
          @click="exechangeRate = 'fixed'"
        >
          <div class="col-1 flex justify-center items-center">
            <span class="flex justify-center items-center icon" style="">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icons8-lock 3">
                  <path
                    id="Vector"
                    d="M12 1C8.67619 1 6 3.67619 6 7V8C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8V7C18 3.67619 15.3238 1 12 1ZM12 3C14.2762 3 16 4.72381 16 7V8H8V7C8 4.72381 9.72381 3 12 3ZM12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13Z"
                    fill="#A9A9CD"
                  />
                </g>
              </svg>
            </span>
          </div>
          <div class="col-10 flex items-center justify-between">
            <span class="ft-semibold content">Fixed Exchange Rate</span><br />
            <span>~ 502.48397062</span>
            <!-- <span class="ft-regular" style="color: #afafbe; font-size: 12px"
            >Your amount will remain the same irrespective of the changes on the
            market</span
          > -->
          </div>
        </article>
      </section>

      <div class="flex row info-wrapper q-mt-md">
        <div style="width: 4%; padding-top: 5px" class="flex justify-center">
          <q-icon name="o_info" size="14px" />
        </div>
        <div v-if="this.exechangeRate === 'float'" style="width: 95%">
          The floating rate can change at any point due to market conditions, so
          you might receive more or less crypto than expected.
        </div>
        <div v-else style="width: 95%">
          With the fixed rate, you will receive the exact amount of crypto you
          see on this screen.
        </div>
      </div>

      <header class="ft-bold q-mt-md">Wallet Address</header>

      <OxenField
        class="q-mt-md ft-regular"
        label="Recipient Address"
        :error="recipientAddress.error"
      >
        <q-input
          v-model="recipientAddress.val"
          :dark="theme == 'dark'"
          borderless
          dense
          :placeholder="'Enter your ETH recipient address'"
          @blur="
            () =>
              !recipientAddress.val
                ? (recipientAddress.error = true)
                : (recipientAddress.error = false)
          "
        />
      </OxenField>

      <!-- <article class="flex row q-mt-sm">
        <div
          class="support-protocal-box ft-semibold flex justify-center items-center q-mr-xs"
        >
          FIO
        </div>
        <div
          class="support-protocal-box ft-semibold flex justify-center items-center q-mr-xs"
        >
          UD
        </div>
        <div class="ft-Light" style="color: #ebebeb">
          FIO protocol and Unstoppable Domains are supported
        </div>
      </article> -->

      <!-- Refund wallet Address for BTC -->

      <article v-if="this.exechangeRate === 'fixed'">
        <OxenField class="q-mt-md ft-regular" label="Refund wallet Address">
          <q-input
            v-model.trim="refundAddress"
            :dark="theme == 'dark'"
            borderless
            dense
            :placeholder="'Enter your BTC refund address'"
          />
        </OxenField>

        <!-- <article class="flex row q-mt-sm">
          <div
            class="support-protocal-box ft-semibold flex justify-center items-center q-mr-xs"
          >
            FIO
          </div>
          <div
            class="support-protocal-box ft-semibold flex justify-center items-center q-mr-xs"
          >
            UD
          </div>
          <div class="ft-Light" style="color: #ebebeb">
            FIO protocol and Unstoppable Domains are supported
          </div>
        </article> -->
      </article>

      <div
        v-if="this.exechangeRate === 'float'"
        class="destination-tag-wrapper q-mt-md"
      >
        <span class="ft-Light hint"
          >Please specify the Destination Tag for your XRP receiving address if
          your wallet provides it. Your transaction will not go through if you
          omit it. If your wallet doesn’t require a Destination Tag, remove the
          tick.</span
        ><br />
        <q-checkbox
          v-model="destinationTag"
          color="secondary"
          true-value="yes"
          false-value="no"
          size="xs"
        ></q-checkbox>
        <span>My wallet requires Destination Tag</span>
      </div>

      <q-input
        v-if="destinationTag === 'yes'"
        v-model="destinationTagValue"
        class="box-input"
        placeholder="Enter Destination Tag"
        borderless
        dense
      />
      <div class="terms-condition q-mt-md">
        <q-checkbox
          v-model="agree"
          color="secondary"
          true-value="yes"
          false-value="no"
          size="sm"
        ></q-checkbox>
        <span
          >I agree with <a href="">Terms of Use</a>,
          <a href="">Privacy Policy</a> and <a href="">AML/KYC</a></span
        >
      </div>

      <div class="flex justify-center q-my-lg">
        <q-btn label="Next" color="primary" @click="this.next" />
      </div>
    </div>
    <SwapConfirmPayment
      v-if="this.routes === 'makePayment'"
      :exchange-data="this.exchange_amount"
      :recipient-address="this.recipientAddress.val"
      @goback="navigation('mainPage', 1)"
      @submit="navigation('settlement', 3)"
    />
    <SwapTxnHistory
      v-if="this.routes === 'txnHistory'"
      @goback="navigation('mainPage', 1)"
    />
    <SwapTxnSettlement
      v-if="this.routes === 'settlement'"
      @goback="navigation('makePayment', 2)"
    />
  </q-page>
</template>

<script>
import { required, decimal } from "vuelidate/lib/validators";
// import { greater_than_zero } from "src/validators/common";
import OxenField from "components/oxen_field";
import SwapConfirmPayment from "./swapConfirmPayment.vue";
import SwapTxnHistory from "./swapTxnHistory.vue";
import SwapTxnSettlement from "./swapTxnSettlement.vue";
import { mapState } from "vuex";

export default {
  components: {
    OxenField,
    SwapConfirmPayment,
    SwapTxnHistory,
    SwapTxnSettlement
  },
  computed: mapState({
    //  testcurrencyList: (state) => state.gateway.currencyList,
    currencyList: state => {
      let data = state.gateway.currencyList;
      let pushedData = [];
      Object.keys(data).length > 0 &&
        data.map(item => {
          let obj = {
            label: `${item.name}<span class='currency-name ft-regular'> -${item.fullName}<span>`,
            value: item.ticker,
            name: item.name,
            description: item.fullName,
            icon: item.image
          };
          pushedData.push(obj);
        });
      return pushedData;
    },
    imgpath: state => state.gateway.currencyList[0].image,
    exchange_amount: state =>
      state.gateway.exchangeAmount.status
        ? state.gateway.exchangeAmount.result[0]
        : []
  }),

  validations: {
    sendAmount: {
      required,
      decimal
    },
    getAmount: {
      required
    }
  },
  data() {
    return {
      sendAmount: 0.1,
      getAmount: "",
      agree: "no",
      destinationTag: "no",
      destinationTagValue: "",
      refundAddress: "",
      routes: "mainPage",
      exechangeRate: "float",
      recipientAddress: { error: false, val: "" },
      sendAmounType: "btc",
      receiveAmountType: "bdx",
      blockChainDetails: { senderChain: "", receiverchain: "" },
      // sendAmounType: {
      //   label:
      //     "<span>BTC<span class='currency-name ft-regular'> -Bitcoin<span><span>",
      //   value: "btc"
      // },
      // receiveAmountType: {
      //   label: "BDX<span class='currency-name ft-regular'> -Beldex<span>",
      //   value: "btc"
      // },

      sendAmounTypeOption: ""
    };
  },
  mounted() {
    this.$gateway.send("swap", "currency_list", {});
  },
  methods: {
    navigation(page, step) {
      // console.log("mainPagemainPagemainPage");
      this.$gateway.send("wallet", "set_stepperPosition", {
        data: step
      });
      this.routes = page;
    },
    keyHandler(evt) {
      if (
        evt.key === "-" ||
        evt.key === "+" ||
        evt.key === "e" ||
        evt.key === "E"
      ) {
        evt.preventDefault();
      }
    },
    sendAmountValidator(event) {
      console.log("event ::", event);
      if (this.sendAmounType === "bdx" && this.receiveAmountType === "bdx") {
        this.receiveAmountType = "eth";
      } else if (this.sendAmounType !== "bdx") {
        this.receiveAmountType = "bdx";
      }

      //  this.getExchangeRate()
    },
    getAmountValidator() {
      if (this.sendAmounType === "bdx" && this.receiveAmountType === "bdx") {
        this.sendAmounType = "eth";
      } else if (this.receiveAmountType !== "bdx") {
        this.sendAmounType = "bdx";
      }
      // this.getExchangeRate()
    },
    swapCurrencyType() {
      // let swapVal;
      // swapVal=this.sendAmounType;
      // this.sendAmounType= this.receiveAmountType;
      // this.receiveAmountType=swapVal

      [this.sendAmounType, this.receiveAmountType] = [
        this.receiveAmountType,
        this.sendAmounType
      ];
      // this.getExchangeRate()

      // console.log("this.currencyList ::", this.exchange_amount);
    },
    getExchangeRate() {
      // console.log('this.sendAmounType.value',this.sendAmounType,'this.receiveAmountType.value',this.receiveAmountType.value)
      // let data = {
      //   from:this.sendAmounType,
      //   to: this.receiveAmountType,
      //   amountFrom: this.sendAmount
      // };
      let data = {
        from: "btc",
        to: "eth",
        amountFrom: "0.1"
      };

      this.exechangeRate = "float";
      console.log("getExchangeRate", data);
      this.$gateway.send("swap", "exchange_amount", data);

      // let test =this.testcurrencyList.filter((item)=>item.contractAddress==='0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7')
      // console.log('test ::',test)
    },
    next() {
      let refundAdderss =
        this.exechangeRate === "fixed" ? this.refundAddress : true;
      if (
        this.sendAmount > 0 &&
        this.agree === "yes" &&
        this.recipientAddress.val &&
        refundAdderss
      ) {
        this.routes = "makePayment";
        this.$gateway.send("wallet", "set_stepperPosition", {
          data: 2
        });
      } else {
        this.$q.notify({
          type: "negative",
          timeout: 1000,
          message: "please fill the inputs"
        });
      }
    }
  }
};
</script>

<style lang="scss"></style>
